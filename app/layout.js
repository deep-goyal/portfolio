import "./globals.css";

export const metadata = {
  title: "Deep Goyal",
  description: "Deep's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
