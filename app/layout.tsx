import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/components/ui/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba Frontend Dev",
  description:
    "Sitio Web para la evaluación de habilidades de desarrollo frontend con React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
