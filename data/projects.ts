export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Peduli Pangan",
    description: "A digital platform concept connecting surplus food with people who need it.",
    image: "/images/project-food.svg",
    tags: ["Product", "React", "UI/UX"],
  },
  {
    title: "BETULIN",
    description: "After-sales service ecosystem for electric two-wheelers with a partner-first approach.",
    image: "/images/project-betulin.svg",
    tags: ["Startup", "Product", "Research"],
  },
  {
    title: "Flood Monitoring IoT",
    description: "IoT monitoring concept combining sensors, maps and a web dashboard for urban water conditions.",
    image: "/images/project-iot.svg",
    tags: ["IoT", "Next.js", "WebGIS"],
  },
  {
    title: "Portfolio Scrapbook",
    description: "This portfolio itself: a handmade visual system translated into a responsive website.",
    image: "/images/project-portfolio.svg",
    tags: ["Creative", "Frontend", "GSAP"],
  },
];
