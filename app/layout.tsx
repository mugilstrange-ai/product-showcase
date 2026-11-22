import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbit Supply | Typed Product Showcase",
  description: "A tiny curated store built from reusable, typed React components.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
