import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conor L",
  description: "Created using NextJS, TypeScript, and Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <div className="max-w-screen-xl mx-auto p-5">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            <Navbar />
            {children}
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}