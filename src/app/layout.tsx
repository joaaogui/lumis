import type { Metadata } from "next";
import "./globals.css";

import mixpanel from "mixpanel-browser";
import { Open_Sans, Sacramento } from "next/font/google";
export const metadata: Metadata = {
  title: "lumis",
  description: "Clinica de estética",
};
const montserrat = Open_Sans({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const dancingScript = Sacramento({
  subsets: ["latin"],
  variable: "--font-dancing-script",
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
        className={`${dancingScript.variable} ${montserrat.variable} font-body`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
