import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Which Harry is your Harry?",
    template: "%s · Your Harry",
  },
  description:
    "A quick this-or-that battle to find your favorite Harry Styles era — and the exact look that wins.",
  applicationName: "Your Harry",
};

export const viewport: Viewport = {
  themeColor: "#f7f1e7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f7f1e7] text-[#1f1712]">
        {children}
      </body>
    </html>
  );
}
