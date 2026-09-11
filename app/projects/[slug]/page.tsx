import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projects = [
    {
      title: "Peduli Pangan",
      slug: "peduli-pangan",
      description: "A digital platform concept connecting surplus food with people who need it.",
      longDescription: "Peduli Pangan is a digital platform designed to reduce food waste by connecting surplus food providers with people and communities in need.",
      image: "/images/project-peduli-pangan.png",
      tags: ["Product", "Flutter", "Mobile Apps"],
      role: "Chief Executive Officer",
      techStack: ["Flutter", "Firebase", "Google Maps"],
      features: [],
      githubUrl: "https://github.com/sdrzfn/peduli-pangan",
      liveDemoUrl: "https://peduli-pangan.vercel.app"
    },
    {
      title: "Flexica",
      slug: "flexica",
      description: "Flexica is an inclusive web application designed to act as an interactive map and directory for disability-friendly public facilities.",
      longDescription: "Flexica is an inclusive web application designed to act as an interactive map and directory for disability-friendly public facilities.",
      image: "/images/project-flexica.png",
      tags: ["Product", "Next.js", "WebGIS"],
      role: "Full-Stack Developer",
      techStack: ["Next.js", "TypeScript", "Mapbox", "PostgreSQL"],
      features: [],
      githubUrl: "https://github.com/sdrzfn/flexica",
      liveDemoUrl: "https://flexica.vercel.app"
    },
    {
      title: "Information System Lab Website",
      slug: "information-system-lab",
      description: "A Website that function as gateway to information system college student at UPN Veteran Jawa Timur.",
      longDescription: "A comprehensive website serving as the digital gateway for Information Systems students at UPN Veteran Jawa Timur.",
      image: "/images/project-is-lab.png",
      tags: ["Project", "Laravel", "Website"],
      role: "Lead Developer",
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      features: [],
      githubUrl: "https://github.com/sdrzfn/is-lab-website",
      liveDemoUrl: "https://is-lab.vercel.app"
    },
    {
      title: "Adventure Works BI Website",
      slug: "adventure-works-bi",
      description: "This Web App is a deployed interactive data analytics application designed to simulate real-world enterprise operations.",
      longDescription: "An interactive business intelligence dashboard that simulates real-world enterprise operations for Adventure Works.",
      image: "/images/project-portfolio.svg",
      tags: ["Project", "Full-Stack", "Business Intelligence"],
      role: "Full-Stack Developer",
      techStack: ["React", "Node.js", "D3.js", "SQL Server"],
      features: [],
      githubUrl: "https://github.com/sdrzfn/adventure-works-bi",
      liveDemoUrl: "https://adventure-works-bi.vercel.app"
    },
    {
      title: "Flood Monitoring IoT",
      slug: "flood-monitoring-iot",
      description: "IoT monitoring concept combining sensors, maps and a web dashboard for urban water conditions.",
      longDescription: "An IoT-based flood monitoring system that combines sensor networks, real-time mapping, and a web dashboard to monitor urban water conditions.",
      image: "/images/project-iot.svg",
      tags: ["IoT", "Next.js", "WebGIS"],
      role: "IoT Developer",
      techStack: ["Next.js", "MQTT", "InfluxDB", "Mapbox", "Arduino"],
      features: [],
      githubUrl: "https://github.com/sdrzfn/flood-monitoring-iot",
      liveDemoUrl: "https://flood-monitor.vercel.app"
    },
  ];

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found — Sadrakh Z.P.",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} — Sadrakh Z.P.`,
    description: project.longDescription,
  };
}

export default function ProjectPage({ params }: Props) {
  return <ProjectDetail slug={params.slug} />;
}