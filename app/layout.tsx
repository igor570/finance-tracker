import type { Metadata } from "next";
import { Inter } from "next/font/google";
import useServerDarkMode from "@/hooks/useServerDarkMode";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Finance App",
    default: "Finance App",
  },
  description: "Finance tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useServerDarkMode();

  return (
    <html lang="en" className={theme}>
      <body className={`${inter.className} min-h-screen flex flex-col px-8`}>
        {children}
      </body>
    </html>
  );
}
