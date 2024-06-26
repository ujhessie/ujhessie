import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Contexts from "@/contexts/Contexts";
import Footer from "@/components/ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ujhessie | Portfolio",
  description: "Portfolio do Jesse Rodrigues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <Contexts>
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </Contexts>
    </html>
  );
}
