import Shell from "./Shell";
import { POSTS } from "../../lib/posts";

export const metadata = {
  title: "Blog | Payal Traders",
  description: "Guides on industrial gloves, safety standards and sourcing from India.",
};

export default function BlogIndex() {
  return (
    <Shell>
      <h1>Glove guides</h1>
      <p>Practical advice on choosing and buying industrial gloves.</p>
      <ul className="posts">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <a href={`/blog/${p.slug}/`}>
              <h2>{p.title}</h2>
              <p className="meta">{p.date}</p>
              <p>{p.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
