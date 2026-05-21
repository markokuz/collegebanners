import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Posterized — Campus poster popups",
  description:
    "University popup resellers. Mixed poster styles from brands and artists we love — rarely our own designs.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Posterized — Campus poster popups",
    description:
      "University popup resellers. Mixed poster styles from brands and artists we love — rarely our own designs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
