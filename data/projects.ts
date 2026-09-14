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
    role: "Chief Technology Officer",
    techStack: ["Flutter", "Firebase", "Google Maps"],
    features: [
      "Real-time food surplus listing",
      "Location-based matching algorithm",
      "Donation tracking and analytics",
      "Multi-language support",
      "Push notification system"
    ],
    githubUrl: "https://github.com/sdrzfn/peduli-pangan",
    liveDemoUrl: "https://pedulipangan.web.app"
  },
  {
    title: "Flexica",
    slug: "flexica",
    description: "Flexica is an inclusive web application designed to act as an interactive map and directory for disability-friendly public facilities.",
    longDescription: "Flexica is an inclusive web application designed to act as an interactive map and directory for disability-friendly public facilities. The platform helps users find accessible locations, rate facilities, and contribute new data to build a comprehensive accessibility database.",
    image: "/images/project-flexica.png",
    tags: ["Product", "Next.js", "WebGIS"],
    role: "Back-End Developer",
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
    liveDemoUrl: "https://islab.web.id"
  },
  {
    title: "Adventure Works BI Website",
    slug: "adventure-works-bi",
    description: "This Web App is a deployed interactive data analytics application designed to simulate real-world enterprise operations.",
    longDescription: "An interactive business intelligence dashboard that simulates real-world enterprise operations for Adventure Works. The application provides comprehensive data visualization, sales analytics, and operational insights through an intuitive and interactive interface.",
    image: "/images/project-adventure-works.png",
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
    image: "/images/project-iot.png",
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
    githubUrl: "https://github.com/sdrzfn/water-level-iot",
    liveDemoUrl: ""
  },
  {
    title: "Teman Jawara",
    slug: "teman-jawara",
    description: "Mentoring web-based application based on PHP and JavaScript to coaching a college student in joining competition. Helping the project as full-stack developer.",
    longDescription: "Developing a web-based mentoring application using PHP and JavaScript requires a robust full-stack architecture designed to streamline the coaching process for college students entering competitive events. As a full-stack developer, your role involves bridging backend logic with responsive frontend interfaces to create a seamless user experience. Below are expanded, professional paragraphs tailored to describe this project and your contributions for a resume, portfolio, or project proposal.",
    image: "/images/project-teman-jawara.png",
    tags: ["Project", "Laravel", "Website"],
    role: "Lead Developer",
    techStack: ["PHP", "Laravel", "MySQL", "TailwindCSS"],
    features: [
      "Sign-in and Register new user",
      "Learning Module Integration",
      "Real Competition Timeline",
      "Payment tie-in programme",
      "Mobile-responsive website"
    ],
    githubUrl: "https://github.com/sdrzfn/teman-jawara",
    liveDemoUrl: ""
  },
  {
    title: "PPID Kabupaten Bondowoso",
    slug: "ppid-bondowoso",
    description: "Fully functional and mobile-responsive website as gateway of information and administration for one of the sectors which is PPID in Bondowoso City, East Java.",
    longDescription: "Developing a web-based mentoring application using PHP and JavaScript requires a robust full-stack architecture designed to streamline the coaching process for college students entering competitive events. As a full-stack developer, your role involves bridging backend logic with responsive frontend interfaces to create a seamless user experience. Below are expanded, professional paragraphs tailored to describe this project and your contributions for a resume, portfolio, or project proposal.",
    image: "/images/project-ppid.png",
    tags: ["Project", "Laravel", "Website"],
    role: "Lead Developer",
    techStack: ["PHP", "Laravel", "MySQL", "TailwindCSS"],
    features: [
      "Sign-in and Register new user",
      "Learning Module Integration",
      "Real Competition Timeline",
      "Payment tie-in programme",
      "Mobile-responsive website"
    ],
    githubUrl: "https://github.com/sdrzfn/ppid-kabupaten-bondowoso",
    liveDemoUrl: "ppid-bondowoso.dianahertati.com"
  },
  {
    title: "Route Rush",
    slug: "route-rush",
    description: "Route optimization application based on android platform. Using machine learning model of CNN to create prediction and optimize route, Route Rush designed to tackle logistic problem.",
    longDescription: "Route Rush is an innovative, Android-based route optimization application designed to solve complex logistics and fleet management challenges. By integrating Convolutional Neural Networks (CNN), the platform transforms traditional routing by predicting traffic patterns and optimizing delivery paths in real time.",
    image: "/images/project-route-rush.png",
    tags: ["Project", "Kotlin + Machine Learning (Tensorflow)", "Mobile Apps"],
    role: "Machine Learning Engineer",
    techStack: ["Kotlin", "Firebase", "TensorFlow", "Python", "Docker"],
    features: [
      "Sign-in and Register new user",
      "Routing live projection destination",
      "Real-time estimated route direction",
      "Route reccomender",
      "Android compatible"
    ],
    githubUrl: "https://github.com/sdrzfn/route-rush",
    liveDemoUrl: ""
  },
  {
    title: "Cosmic Odyssey",
    slug: "cosmic-odyssey",
    description: "An interactive, high-performance web platform designed to explore the wonders of our solar system. This project serves as a resource for space enthusiasts to explore astronomical data and expand their knowledge.",
    longDescription: "The project involves the creation of a high-performance web application engineered to visualize, analyze, and explore the vast complexities of our solar system. Designed as an immersive educational ecosystem, the platform synthesizes raw astronomical data, including planetary metrics, orbital trajectories, and atmospheric compositions—into an accessible, visually stunning digital experience. By prioritizing rendering speed and interactive data structures, the platform enables users to seamlessly navigate through multi-layered space simulations, making it an invaluable resource for student research, academic teaching, and general space exploration.",
    image: "/images/project-space-odyssey.png",
    tags: ["Project", "React.js", "Website"],
    role: "Full-Stack Developer",
    techStack: ["React.js", "Vite", "GSAP", "Three.js"],
    features: [
      "No user login or registration needed",
      "3D Interactive Map",
      "Comprehensive Learning",
      "Life accurate data and simulation",
      "Mobile-responsive website"
    ],
    githubUrl: "https://github.com/sdrzfn/cosmic-odyssey",
    liveDemoUrl: "https://spaceyodyssey.vercel.app"
  },
];