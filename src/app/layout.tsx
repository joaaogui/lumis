import type { Metadata } from "next";
import "./globals.css";

 
const metadata: Metadata = {
  title: "Lumis",
  description: "Clinica de Estética",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
