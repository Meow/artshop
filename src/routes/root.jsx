import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <navigation>
        <h1>Nighty's Art Shop</h1>
        <div className="subnav">
          <a href="/artists">Our Artists</a>
          <a href="/catalogue">Stuff We Sell</a>
          <a href="/gallery">Gallery</a>
        </div>
      </navigation>
      <main>
        <Outlet />
      </main>
    </>
  );
}
