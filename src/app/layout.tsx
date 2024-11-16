import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "deep",
  description: "deep's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="cursor-circle">{children}</body>
    </html>
  );
}
