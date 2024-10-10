import type { Metadata } from "next";
import "./globals.css";

import mixpanel from "mixpanel-browser";
import { Luxurious_Script, Open_Sans, Pompiere } from "next/font/google";
export const metadata: Metadata = {
  title: "Lumis",
  description: "Estética",
};
const pompiere = Pompiere({
  subsets: ["latin"],
  variable: "--font-pompiere",
  weight: "400",
});

const luxurious = Luxurious_Script({
  subsets: ["latin"],
  variable: "--font-luxurious-script",
  weight: "400",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: "400",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  mixpanel.init("c438ed2f6456d62361cb08a5eb1042db", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });
  mixpanel.identify("HAHAHAH");
  mixpanel.track("Page View OI");

  return (
    <html lang="en">
      <body
        className={`${luxurious.variable} ${pompiere.variable} ${openSans.variable} font-body`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
