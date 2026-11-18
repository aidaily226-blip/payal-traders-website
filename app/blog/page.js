import BlogList from "./BlogList";
export const metadata = {
  title: "Blog | Payal Traders",
  description: "Guides on industrial gloves, safety standards and sourcing from India.",
  alternates: { canonical: "/blog/" },
};
export default function BlogIndex() { return <BlogList page={1} />; }
