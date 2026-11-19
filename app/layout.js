import "./globals.css";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { SITE } from "../lib/config";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--f-display" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600"], variable: "--f-body" });

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: "Payal Traders | Industrial Gloves Supplier from Delhi, India",
  description: "Leather, denim, canvas and knitted industrial gloves, plus welding gloves, supplied to buyers worldwide from Delhi, India. Request a quote or free sample.",
  openGraph: { title: "Payal Traders | Industrial Gloves Supplier", description: "Industrial gloves exported from Delhi, India.", type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.gaId}');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
