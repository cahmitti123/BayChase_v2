import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Navbar_v2 } from "@/components/Navbar_v2";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BayChaser - Your Gide Into Adventure!",
  description: "BayChaser - Let Us Gide You!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        {/* Tags de SEO */}
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta
          name="keywords"
          content="BayChaser, Adventure, Surf, Map, Secret Places"
        />
        <meta name="author" content="Ahmitti CHOUAIB" />

        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" type="image/png" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={montserrat.className}>
        {/* <Navbar /> */}
        <Navbar_v2 />
        <main className="relative overflow-hidden">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
