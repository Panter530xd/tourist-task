import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./components/nav-bar";
import FooterComponent from "./components/footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tourist",
  description: "Generated by boban.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
