import Shell from "../Shell";
import Sidebar from "../Sidebar";
import { POSTS } from "../../../lib/posts";
import { readTime, fmt } from "../../../lib/blog";

export const dynamicParams = false;
export function generateStaticParams() { return POSTS.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  return { title: `${p.title} | Payal Traders`, description: p.description, openGraph: { title: p.title, description: p.description, images: [p.image] } };
}

export default function Post({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  return (
    <Shell>
      <div className="layout">
        <article className="post">
          <a className="back" href="/blog/">← All guides</a>
          <span className="cat">{p.category}</span>
          <h1>{p.title}</h1>
          <p className="meta">{fmt(p.date)} · {readTime(p)} min read</p>
          <img className="hero-img" src={p.image} alt={p.title} />
          {p.credit && <p className="credit">{p.credit}</p>}
          {p.body.map((b, i) => typeof b === "string" ? <p key={i}>{b}</p> : <h2 key={i}>{b.h}</h2>)}
        </article>
        <Sidebar currentSlug={p.slug} />
      </div>
    </Shell>
  );
}
