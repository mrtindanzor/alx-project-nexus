import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BaseProvider } from "@/shared/BaseProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-muted text-primary antialiased`}
      >
        <BaseProvider>{children}</BaseProvider>
      </body>
    </html>
  );
}
