import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import type { Request, Response } from 'express';
import type { ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--production');

// express reads NODE_ENV directly, so keep it in sync when started with --production
if (isProduction) process.env.NODE_ENV = 'production';

type RenderFn = (req: Request, res: Response) => Promise<string>;

async function createServer() {
  const app = express();

  let vite: ViteDevServer | undefined;

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve('dist/client')));
  }

  app.use('/{*splat}', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;
      let render: RenderFn;

      if (!isProduction) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite!.transformIndexHtml(url, template);
        render = await vite!.ssrLoadModule('/src/entry-server.tsx').then(m => m.render as RenderFn);
      } else {
        template = fs.readFileSync(path.resolve('dist/client/index.html'), 'utf8');
        const serverEntry = await import(path.resolve('dist/server/entry-server.js'));
        render = serverEntry.render;
      }

      const appHtml = await render(req, res);
      const html = template.replace(`<!--ssr-outlet-->`, () => appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProduction) {
        vite!.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(5173);
}

createServer();
