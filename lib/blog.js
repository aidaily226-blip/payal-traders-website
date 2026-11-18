import { POSTS } from "./posts";
export const PER_PAGE = 2; // posts per page. Raise to 6 once you have more articles.
export const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
export const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE));
export const readTime = (p) => Math.max(1, Math.round(p.body.map((b) => (typeof b === "string" ? b : b.h)).join(" ").split(/\s+/).length / 200));
export const fmt = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
