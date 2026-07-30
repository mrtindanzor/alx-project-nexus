import { Chakra_Petch } from "next/font/google";
import { BaseProvider } from "@/BaseProvider";
import { AppFooter } from "@/shared/layouts/components/Footer";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-muted text-neutral ${chakraPetch.variable}`}>
        <BaseProvider>{children}</BaseProvider>
        <AppFooter />
      </body>
    </html>
  );
}
