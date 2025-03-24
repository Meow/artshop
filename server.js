import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  let vite;

  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: 'ssr' },
      appType: 'custom',
    });

    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve('dist/client')));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProduction) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = await vite.ssrLoadModule('/src/entry-server.jsx').then(m => m.render);
      } else {
        template = fs.readFileSync(path.resolve('dist/client/index.html'), 'utf8');
        let serverEntry = await import(path.resolve('dist/server/entry-server.js'));
        render = serverEntry.render;
      }

      console.log(render);

      const appHtml = await render(req, res);
      const html = template.replace(`<!--ssr-outlet-->`, () => appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProduction) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(5173);
}

createServer();
