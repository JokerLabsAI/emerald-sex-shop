import type { Metadata, Viewport } from "next";
import { Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-montserrat" });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-great-vibes" });

export const metadata: Metadata = {
  title: "Esmerad Sex Shop — Placer, bienestar y libertad",
  description: "Juguetes, lencería y bienestar íntimo. Envíos discretos, compra segura y tu privacidad primero.",
};

export const viewport: Viewport = { themeColor: "#0B0B0F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
