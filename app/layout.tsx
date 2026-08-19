import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadrakh Z.P. — Programmer, Creative Thinker & More",
  description:
    "Portfolio of Sadrakh Zefanya Putra — a Computer Science fresh graduate blending development, design and creative problem solving.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
