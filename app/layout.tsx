import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Organic Reach Rewards",
  description:
    "Organic Reach Rewards is an innovative micro SaaS that transforms customers into authentic advocates for brands and establishments. The platform encourages users to share their experiences on social media in exchange for exclusive rewards, helping businesses grow organically and authentically.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} dark:bg-[#121212] dark:text-[#E5E5E5] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}