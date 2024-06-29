import { Inter, Darker_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const dg = Darker_Grotesque({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dg.className}>{children}</body>
    </html>
  );
}
