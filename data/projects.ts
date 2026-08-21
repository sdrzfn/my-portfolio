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
    image: "/images/project-peduli-pangan.png",
    tags: ["Product", "Flutter", "Mobile Apps"],
  },
  {
    title: "FlyHigh Sinergi Indonesia's Website",
    description: "A company focuses on providing integrated digital solutions and accelerating the modern technology ecosystem in Indonesia..",
    image: "/images/project-flyhigh.png",
    tags: ["Startup", "Product", "Website"],
  },
  {
    title: "Flexica",
    description: "Flexica is an inclusive web application designed to act as an interactive map and directory for disability-friendly public facilities.",
    image: "/images/project-flexica.png",
    tags: ["Product", "Next.js", "WebGIS"],
  },
  {
    title: "Adventure Works BI Website",
    description: "This Web App is a deployed interactive data analytics application designed to simulate real-world enterprise operations.",
    image: "/images/project-portfolio.svg",
    tags: ["Project", "Full-Stack", "Business Intelligence"],
  },
  {
    title: "Information System Lab Website",
    description: "A Website that function as gateway to information system college student at UPN Veteran Jawa Timur.",
    image: "/images/project-is-lab.png",
    tags: ["Project", "Laravel", "Website"],
  },
  {
    title: "Flood Monitoring IoT",
    description: "IoT monitoring concept combining sensors, maps and a web dashboard for urban water conditions.",
    image: "/images/project-iot.svg",
    tags: ["IoT", "Next.js", "WebGIS"],
  },
];
