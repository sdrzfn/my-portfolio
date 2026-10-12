import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

const siteUrl = "https://sadrakhzp.vercel.app";

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-render
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "Project yang kamu cari tidak ditemukan.",
      robots: { index: false, follow: true },
    };
  }

  const url = `${siteUrl}/projects/${project.slug}`;
  const pageTitle = `${project.title} — ${project.role} Project by Sadrakh Zefanya Putra`;

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description: project.description,
    keywords: [
      project.title,
      ...project.tags,
      ...project.techStack,
      "Sadrakh Zefanya Putra",
      "Portfolio Project",
    ],
    authors: [{ name: "Sadrakh Zefanya Putra", url: siteUrl }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.description,
      siteName: "Sadrakh Z.P. Portfolio",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} — project by Sadrakh Zefanya Putra`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetail slug={slug} />;
}