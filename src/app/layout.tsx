import type { Metadata } from "next";
import "./globals.css";

 
const metadata: Metadata = {
  title: "Lumis",
  description: "Clinica de Estética",
};


import { Dancing_Script, Montserrat } from 'next/font/google';
 
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >

      <body className={`${dancingScript.variable} ${montserrat.variable} font-body`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
