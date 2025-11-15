import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Quarkl Cloud",
  description: "Pagina Personal de Luis Cortes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/qclogo.png" />
      </head>
      <body>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
