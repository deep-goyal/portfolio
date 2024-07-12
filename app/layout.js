import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Deep from "@/public/nocurveblue.png";

export const metadata = {
  title: "Deep Goyal",
  description: "Deep's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href={Deep.src} rel="icon" sizes="128x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
