import localFont from "next/font/local";

import Providers from "@/components/providers";
import { constructMetadata } from "@/lib/construct-metadata";
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

export const metadata = constructMetadata();

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
            
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
