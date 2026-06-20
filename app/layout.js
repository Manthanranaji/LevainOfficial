import { Cormorant_Garamond, Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"]
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300"]
});

export const metadata = {
  title: "Levain",
  description: "A premium bakery.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libre.variable} ${cormorant.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <div className="grain"/>
        {children}
      </body>

    </html>
  );
}
