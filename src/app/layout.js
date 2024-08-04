import { Inter, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

const dg = Darker_Grotesque({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/067fc88846.js" crossorigin="anonymous"></script>
      </head>
      <body className={dg.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
