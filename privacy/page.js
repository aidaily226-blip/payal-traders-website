import Shell from "../blog/Shell";
import { SITE } from "../../lib/config";

export const metadata = {
  title: "Privacy Policy | Payal Traders",
  description: "How Payal Traders handles your information when you visit our website or contact us.",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <Shell>
      <div className="post" style={{ maxWidth: 760 }}>
        <h1>Privacy Policy</h1>
        <p className="meta">Last updated: 18 November 2026</p>

        <p>This policy explains how {SITE.name} ("we", "us"), based in {SITE.city}, handles information when you visit {SITE.domain} or contact us.</p>

        <h2>Information we collect</h2>
        <p>Our website does not have accounts, forms or a shop, and we do not ask you to enter personal details on it. We receive personal information only when you choose to contact us by WhatsApp, phone or email. That may include your name, phone number, email address, company name and the details of your enquiry.</p>

        <h2>How we use it</h2>
        <p>We use what you send us only to reply to your enquiry, prepare quotes, arrange samples and orders, and keep records of our business dealings. We do not sell your information.</p>

        <h2>Cookies and analytics</h2>
        <p>We do not currently use advertising cookies or analytics tools on this website. If we add them later, we will update this page.</p>

        <h2>Hosting and third parties</h2>
        <p>The website is hosted by Cloudflare, which may process technical data such as IP addresses and request logs to deliver and secure the site. When you tap a WhatsApp, call or email button, your request is handled by that service under its own privacy policy. Some pages may show images hosted by third parties such as Unsplash.</p>

        <h2>Sharing your information</h2>
        <p>We share your details only where needed to fulfil your order, for example with shipping and customs providers, or where the law requires it.</p>

        <h2>Keeping and deleting your information</h2>
        <p>We keep enquiry and order records for as long as we need them for business and legal reasons. You can ask us to correct or delete the information we hold about you by writing to us.</p>

        <h2>Contact us</h2>
        <p>{SITE.name}, {SITE.city}<br />Phone and WhatsApp: {SITE.phone}<br />Email: {SITE.email}</p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>
      </div>
    </Shell>
  );
}
