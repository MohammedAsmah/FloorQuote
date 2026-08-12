import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.floorquoteconnect.com"),
  title: {
    default: "FloorQuote - Garage Floor Coating Cost Estimator",
    template: "%s | FloorQuote",
  },
  description:
    "Get instant, accurate garage floor coating estimates using Calgary market pricing.",
  openGraph: {
    siteName: "FloorQuote",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
