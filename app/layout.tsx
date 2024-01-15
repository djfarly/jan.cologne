import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

// const openSans = Open_Sans({
//   subsets: ["latin"],
//   variable: "--font-open-sans",
// });

const agrandir = localFont({
  src: "../fonts/PPAgrandir-Variable.woff2",
  display: "swap",
  variable: "--font-agrandir",
});

export const metadata: Metadata = {
  title: "Hej, I'm Jan",
  description: "fullstack web developer, coach, musician and entrepreneur",
  icons:
    "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(agrandir.variable)}>{children}</body>
    </html>
  );
}
