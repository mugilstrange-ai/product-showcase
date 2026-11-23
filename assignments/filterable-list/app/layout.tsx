import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Mint & Mango — Live Menu Finder", description:"A fast, friendly, searchable menu with React state, filtering and stable list keys."};
export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
