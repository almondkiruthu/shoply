import type { Metadata } from "next";
import localFont from "next/font/local";

import Providers from "@/components/providers";
import SiteHeader from "@/components/site-header";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const fontRegularSans = localFont({
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: "--font-sans",
});

const fontBoldSans = localFont({
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: "--font-BoldSans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Shoply Ecommerce app",
  description: "Created by Almond",
};
interface RootLayoutProps {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
}
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans_regular antialiased",
          fontRegularSans.variable,
          fontBoldSans.variable,
          fontHeading.variable,
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            {/* TODO:Create SiteBlobs */}
            <main className="flex-1">{children}</main>
            {/* TODO: Create SiteFooter  */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
