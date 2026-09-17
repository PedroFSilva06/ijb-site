import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Instituto Jovem Brasileiro",
  description:
    "Democratizando o acesso à educação, à diplomacia e às oportunidades para jovens.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={cn("h-full antialiased", "font-sans", inter.variable)}>
      <body className={`${poppins.variable} h-full`}>
        {children}
      </body>
    </html>
  );
}