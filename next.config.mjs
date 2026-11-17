/** Static export: build output goes to the "out" folder, ready for Cloudflare Pages */
const nextConfig = { output: "export", images: { unoptimized: true }, trailingSlash: true };
export default nextConfig;
