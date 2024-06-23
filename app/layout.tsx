import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "./context";
import Clarity from "./metrics/MicrosoftClarity";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gavin Wyant Resume Website",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          {children}
          
        </AppWrapper>
        <Clarity/>
      </body>
    </html>
  );
}
