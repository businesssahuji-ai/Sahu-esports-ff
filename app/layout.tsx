import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahu Esports",
  description: "Free Fire esports tournaments by Sahu Esports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
