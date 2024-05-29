import CanvasBackground from "@/components/CanvasBackground";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Toolbar from "@/components/Toolbar";

export const metadata = {
  title: "Deep Goyal",
  description: "Deep's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <CanvasBackground />
        {children}
      </body>
    </html>
  );
}
