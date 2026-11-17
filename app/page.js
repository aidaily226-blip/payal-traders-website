import { SITE } from "../lib/config";
import { PRODUCTS } from "../lib/products";

const wa = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent("Hello Payal Traders, I would like a quote for industrial gloves.")}`;

export default function Home() {
  return (
    <>
      <header className="bar">
        <a href="#top" className="logo">Payal Traders</a>
        <nav>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <h1>Industrial gloves, shipped from Delhi to your warehouse.</h1>
            <p>Leather, denim, canvas and knitted work gloves, plus welding gloves. Small company, direct pricing, one person who answers your messages.</p>
            <div className="actions">
              <a className="btn solid" href={wa}>Get a quote on WhatsApp</a>
              <a className="btn line" href="#products">See the range</a>
            </div>
          </div>
          <div className="hero-pics" aria-hidden="true">
            <img src="/images/glove-4.jpg" alt="" />
            <img src="/images/glove-2.jpg" alt="" />
            <img src="/images/glove-8.jpg" alt="" />
          </div>
        </section>

        <section id="products" className="wrap">
          <h2>Our gloves</h2>
          <p className="lead">Eight styles we supply today. Custom sizes, cuff lengths and private labelling on request.</p>
          <div className="grid">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="item">
                <img src={`/images/glove-${p.id}.jpg`} alt={p.name} loading="lazy" />
                <div className="item-body">
                  {p.badge && <span className="tag">{p.badge}</span>}
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <p className="use">Used for: {p.use}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="band">
          <div className="wrap two">
            <div>
              <h2>About Payal Traders</h2>
              <p>We supply industrial gloves from Delhi, India to buyers at home and abroad. We are a small team, so you deal directly with the owner, Piyush Goel, from first quote to shipment.</p>
            </div>
            <ul className="facts">
              <li>Flexible order sizes, from trial orders to bulk</li>
              <li>Free samples for serious buyers</li>
              <li>Export documentation handled by us</li>
              <li>Replies on WhatsApp the same day</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="wrap">
          <h2>Request a quote</h2>
          <p className="lead">Tell us the glove type, quantity and destination country. We reply with a price and shipping time.</p>
          <div className="contact">
            <a className="btn solid" href={wa}>WhatsApp {SITE.phone}</a>
            <a className="btn line" href={`tel:+${SITE.phoneRaw}`}>Call {SITE.phone}</a>
            <a className="btn line" href={`mailto:${SITE.email}?subject=Glove%20enquiry`}>Email {SITE.email}</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {SITE.name}, {SITE.city}</span>
        <span>{SITE.phone} · {SITE.email}</span>
      </footer>
    </>
  );
}
