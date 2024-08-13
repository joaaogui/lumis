import type { Metadata } from "next";
import "./globals.css";

import mixpanel from "mixpanel-browser";
import { Dancing_Script, Montserrat } from "next/font/google";
export const metadata: Metadata = {
  title: "Lumis",
  description: "Clinica de Estética",
};
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("oi");
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
        className={`${dancingScript.variable} ${montserrat.variable} font-body`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
