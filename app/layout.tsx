import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ScrollReset } from "@/components/ScrollReset";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Keploy Go Tutorial — Zero-to-Test with Gin & MongoDB",
  description:
    "A hands-on beginner tutorial: run a Go URL shortener, record API tests with Keploy, and replay them without a live database. Built with Next.js + MDX.",
  keywords: [
    "keploy",
    "go",
    "gin",
    "mongodb",
    "api testing",
    "record replay testing",
    "tutorial",
    "devrel",
  ],
  openGraph: {
    title: "Keploy Go Tutorial — Zero-to-Test with Gin & MongoDB",
    description:
      "Learn how to use Keploy to auto-generate integration tests for a Go + Gin + MongoDB service. No assertions required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <ScrollReset />
        <Header />
        {children}
      </body>
    </html>
  );
}
