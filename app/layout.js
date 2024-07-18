import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Deep from "@/public/nocurveblue.png";

export const metadata = {
  title: "Deep Goyal - Front-end Developer",
  description:
    "Explore the portfolio of Deep Goyal, a front-end developer with a passion for creating impactful and lasting user experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="3x7ZX2rD0p4_fj3YwPRnbIoSm0MDsZzFuoIwfRkVj_Q"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href={Deep.src} rel="icon" sizes="128x32" />
        <link href={Deep.src} rel="apple-touch-icon" sizes="128x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Deep Goyal" />
        <meta
          name="keywords"
          content="Deep Goyal, Deep, full stack developer, UI/UX, portfolio, web development"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={Deep.src} />
        <meta property="og:url" content="https://www.deepgoyal.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={Deep.src} />

        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://www.deepgoyal.com" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
