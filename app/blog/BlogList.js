import Shell from "./Shell";
import Sidebar from "./Sidebar";
import { sorted, PER_PAGE, totalPages, readTime, fmt } from "../../lib/blog";

const href = (n) => (n === 1 ? "/blog/" : `/blog/page/${n}/`);

export default function BlogList({ page }) {
  const items = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return (
    <Shell>
      <div className="blog-head">
        <h1>Glove guides</h1>
        <p>Practical advice on choosing and buying industrial gloves.</p>
      </div>
      <div className="layout">
        <div>
          {items.map((p) => (
            <article key={p.slug} className="card">
              <a href={`/blog/${p.slug}/`} className="card-img"><img src={p.image} alt={p.title} loading="lazy" /></a>
              <div className="card-body">
                <span className="cat">{p.category}</span>
                <h2><a href={`/blog/${p.slug}/`}>{p.title}</a></h2>
                <p className="meta">{fmt(p.date)} · {readTime(p)} min read</p>
                <p>{p.description}</p>
                <a className="more" href={`/blog/${p.slug}/`}>Read article →</a>
              </div>
            </article>
          ))}
          {totalPages > 1 && (
            <nav className="pager" aria-label="Pagination">
              {page > 1 && <a href={href(page - 1)}>← Previous</a>}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <a key={n} href={href(n)} className={n === page ? "on" : ""} aria-current={n === page ? "page" : undefined}>{n}</a>
              ))}
              {page < totalPages && <a href={href(page + 1)}>Next →</a>}
            </nav>
          )}
        </div>
        <Sidebar />
      </div>
    </Shell>
  );
}
