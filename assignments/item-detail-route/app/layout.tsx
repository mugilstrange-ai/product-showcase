import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Postmark | Stories for the curious",
  description: "Explore individual blog posts with a typed Next.js dynamic route.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
