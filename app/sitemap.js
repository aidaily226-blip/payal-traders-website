import { SITE } from "../lib/config";
import { POSTS } from "../lib/posts";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    { url: `${SITE.domain}/` },
    { url: `${SITE.domain}/about/` },
    { url: `${SITE.domain}/contact/` },
    { url: `${SITE.domain}/blog/` },
    ...POSTS.map((p) => ({ url: `${SITE.domain}/blog/${p.slug}/`, lastModified: p.date })),
    { url: `${SITE.domain}/privacy-policy/` },
  ];
}
