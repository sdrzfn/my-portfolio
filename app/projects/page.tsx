import type { Metadata } from "next";
import ProjectsShowcase from "@/components/ProjectShowcase";

const siteUrl = "https://sadrakhzp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Projects — Web, IoT, WebGIS & Business Intelligence | Sadrakh Zefanya Putra",
  description:
    "Kumpulan project Sadrakh Zefanya Putra: web development (Next.js, Laravel), aplikasi mobile, IoT, WebGIS, Business Intelligence, dan Machine Learning.",
  keywords: [
    "Project Sadrakh Zefanya Putra",
    "Portfolio Web Developer",
    "Project Sistem Informasi UPNVJT",
    "Next.js project",
    "Laravel project Indonesia",
  ],
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/projects`,
    title: "Projects — Sadrakh Zefanya Putra",
    description:
      "Kumpulan project web development, IoT, dan Business Intelligence oleh Sadrakh Zefanya Putra.",
    images: ["/opengraph-image.png"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <ProjectsShowcase />
    </main>
  );
}