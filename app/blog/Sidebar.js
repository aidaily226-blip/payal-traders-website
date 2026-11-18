import { SITE } from "../../lib/config";
import { sorted, fmt } from "../../lib/blog";

export default function Sidebar({ currentSlug }) {
  const others = sorted.filter((p) => p.slug !== currentSlug).slice(0, 4);
  const wa = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent("Hello Payal Traders, I would like a quote for industrial gloves.")}`;
  return (
    <aside className="side">
      <section className="box">
        <h3>Latest articles</h3>
        <ul className="mini">
          {others.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}/`}>
                <img src={p.image} alt="" loading="lazy" />
                <span><strong>{p.title}</strong><small>{fmt(p.date)}</small></span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="box dark">
        <h3>Need industrial gloves?</h3>
        <p>Tell us the type, quantity and country. We reply with a price and shipping time.</p>
        <a className="btn" href={wa}>Quote on WhatsApp</a>
      </section>
      <section className="box">
        <h3>About Payal Traders</h3>
        <p>Industrial glove supplier from Delhi, India. Leather, denim, canvas and welding gloves for buyers worldwide.</p>
        <a href="/#products" className="more">See our gloves →</a>
      </section>
    </aside>
  );
}
