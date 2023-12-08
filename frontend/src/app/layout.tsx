import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";
import { Providers } from "./providers";
import { Header } from "./header";
import { Footer } from "./footer";

const MonaSans: NextFont = localFont({ src: "./MonaSans-Regular.woff2" });

export const metadata: Metadata = {
  title: "Health Advice Group",
  description: "Your health, our priority",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={MonaSans.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
