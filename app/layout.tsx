import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicionando pesos normal e bold
});

export const metadata: Metadata = {
  title: "OrganicReach",
  description: "OrganicReach",
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
      <body className={`${libreBaskerville.className} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}