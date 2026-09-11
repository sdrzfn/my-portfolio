export type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  role: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl: string;
};

export const projects: Project[] = [
  {
    title: "Peduli Pangan",
    slug: "peduli-pangan",
    description: "A digital platform concept connecting surplus food with people who need it.",
    longDescription: "Peduli Pangan is a digital platform designed to reduce food waste by connecting surplus food providers with people and communities in need. The platform features real-time food listing, location-based matching, and donation tracking to ensure efficient food redistribution.",
    image: "/images/project-peduli-pangan.png",
    tags: ["Product", "Flutter", "Mobile Apps"],
    role: "Chief Executive Officer",
    techStack: ["Flutter", "Firebase", "Google Maps"],
    features: [
      "Real-time food surplus listing",
      "Location-based matching algorithm",
      "Donation tracking and analytics",
      "Multi-language support",
      "Push notification system"
    ],
    githubUrl: "https://github.com/sdrzfn/peduli-pangan",
    liveDemoUrl: "https://peduli-pangan.vercel.app"
  },
  {
    title: "Flexica",
    slug: "flexica",
    description: "Flexica is an inclusive web application designed to act as an interactive map and directory for disability-friendly public facilities.",
    longDescription: "Flexica is an inclusive web application designed to act as an interactive map and directory for disability-friendly public facilities. The platform helps users find accessible locations, rate facilities, and contribute new data to build a comprehensive accessibility database.",
    image: "/images/project-flexica.png",
    tags: ["Product", "Next.js", "WebGIS"],
    role: "Full-Stack Developer",
    techStack: ["Next.js", "TypeScript", "Mapbox", "PostgreSQL"],
    features: [
      "Interactive WebGIS map integration",
      "Accessibility rating system",
      "User-generated content contributions",
      "Advanced filtering and search",
      "Responsive design for all devices"
    ],
    githubUrl: "https://github.com/sdrzfn/flexica",
    liveDemoUrl: "https://flexica.vercel.app"
  },
  {
    title: "Information System Lab Website",
    slug: "information-system-lab",
    description: "A Website that function as gateway to information system college student at UPN Veteran Jawa Timur.",
    longDescription: "A comprehensive website serving as the digital gateway for Information Systems students at UPN Veteran Jawa Timur. The platform provides academic resources, event management, student portfolios, and department news in one centralized hub.",
    image: "/images/project-is-lab.png",
    tags: ["Project", "Laravel", "Website"],
    role: "Lead Developer",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Student authentication system",
      "Event management and registration",
      "Academic resource repository",
      "News and announcement system",
      "Admin dashboard with analytics"
    ],
    githubUrl: "https://github.com/sdrzfn/is-lab-website",
    liveDemoUrl: "https://is-lab.vercel.app"
  },
  {
    title: "Adventure Works BI Website",
    slug: "adventure-works-bi",
    description: "This Web App is a deployed interactive data analytics application designed to simulate real-world enterprise operations.",
    longDescription: "An interactive business intelligence dashboard that simulates real-world enterprise operations for Adventure Works. The application provides comprehensive data visualization, sales analytics, and operational insights through an intuitive and interactive interface.",
    image: "/images/project-portfolio.svg",
    tags: ["Project", "Full-Stack", "Business Intelligence"],
    role: "Full-Stack Developer",
    techStack: ["React", "Node.js", "D3.js", "SQL Server"],
    features: [
      "Interactive data visualization charts",
      "Real-time sales analytics dashboard",
      "Customer segmentation analysis",
      "Inventory management tracking",
      "Export reports in multiple formats"
    ],
    githubUrl: "https://github.com/sdrzfn/adventure-works-bi",
    liveDemoUrl: "https://adventure-works-bi.vercel.app"
  },
  {
    title: "Flood Monitoring IoT",
    slug: "flood-monitoring-iot",
    description: "IoT monitoring concept combining sensors, maps and a web dashboard for urban water conditions.",
    longDescription: "An IoT-based flood monitoring system that combines sensor networks, real-time mapping, and a web dashboard to monitor urban water conditions. The system provides early warning alerts and historical data analysis for flood prevention and management.",
    image: "/images/project-iot.svg",
    tags: ["IoT", "Next.js", "WebGIS"],
    role: "IoT Developer",
    techStack: ["Next.js", "MQTT", "InfluxDB", "Mapbox", "Arduino"],
    features: [
      "Real-time water level monitoring",
      "WebGIS integration for mapping",
      "Automated alert notification system",
      "Historical data analytics",
      "Mobile-responsive dashboard"
    ],
    githubUrl: "https://github.com/sdrzfn/flood-monitoring-iot",
    liveDemoUrl: "https://flood-monitor.vercel.app"
  },
];