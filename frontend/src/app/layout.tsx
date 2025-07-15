import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '../styles/globals.css';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zenda | Plataforma de Gestão para Prestadores",
  description: "Organize seus atendimentos, clientes e agenda com facilidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
