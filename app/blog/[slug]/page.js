import Shell from "../Shell";
import { SITE } from "../../../lib/config";
import { POSTS } from "../../../lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  return { title: `${p.title} | Payal Traders`, description: p.description };
}

export default function Post({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  const wa = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent("Hello Payal Traders, I read your blog and would like a quote for gloves.")}`;
  return (
    <Shell>
      <a className="back" href="/blog/">← All guides</a>
      <article>
        <h1>{p.title}</h1>
        <p className="meta">{p.date}</p>
        {p.body.map((b, i) =>
          typeof b === "string" ? <p key={i}>{b}</p> : <h2 key={i}>{b.h}</h2>
        )}
      </article>
      <div className="cta">
        <h2>Need industrial gloves?</h2>
        <p>Tell us the type, quantity and destination. We reply with a price and shipping time.</p>
        <a className="btn" href={wa}>Get a quote on WhatsApp</a>
      </div>
    </Shell>
  );
}
