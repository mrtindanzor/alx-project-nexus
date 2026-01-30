import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { BaseProvider } from "@/BaseProvider";
import { AppFooter } from "@/shared/layouts/components/server/Footer";

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
