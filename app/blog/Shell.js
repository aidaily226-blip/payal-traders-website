import { SITE } from "../../lib/config";
import "./blog.css";

export default function Shell({ children }) {
  return (
    <>
      <header className="bar">
        <a href="/" className="logo">Payal Traders</a>
        <nav>
          <a href="/#products">Products</a>
          <a href="/#about">About</a>
          <a href="/blog/">Blog</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>
      <main className="post-wrap">{children}</main>
      <footer>
        <span>© {new Date().getFullYear()} {SITE.name}, {SITE.city}</span>
        <span>{SITE.phone} · {SITE.email}</span>
      </footer>
    </>
  );
}
