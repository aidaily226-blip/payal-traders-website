import BlogList from "../../BlogList";
import { totalPages } from "../../../../lib/blog";

export const dynamicParams = false;
export function generateStaticParams() {
  return Array.from({ length: totalPages }, (_, i) => ({ page: String(i + 1) }));
}
export function generateMetadata({ params }) {
  return { title: `Blog, page ${params.page} | Payal Traders`, alternates: { canonical: params.page === "1" ? "/blog/" : `/blog/page/${params.page}/` } };
}
export default function BlogPage({ params }) { return <BlogList page={Number(params.page)} />; }
