export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Warehouse Management System",
    description:
      "A web application for managing warehouse operations, including inventory tracking, order management, and reporting.",
    technologies: ["Laravel", "Bootstrap", "PWA", "MySQL"],
    projectUrl: "https://warehouse-management.my.id",
    imageUrl:
      "/wm-project.png",
    codeUrl: "https://github.com/halurabiyyu/warehouse-management",
  },
  {
    title: "DownCare App",
    description:
      "A mobile application equipped with facial detection features for early Down syndrome screening.",
    technologies: ["Express JS", "Machine Learning", "Firebase", "Flutter"],
    imageUrl:
      "/dc-project.png",
    projectUrl: "https://drive.google.com/file/d/1QZQetwaB7igDe9_5Lie3_BWj8zdMIHiW/view?usp=sharing",
    codeUrl: "https://github.com/down-care-apps",
  },
  {
    title: "SIM RT RW",
    description:
      "A web-based management application for neighborhood (RT/RW) administration, featuring resident and inventory management, along with a decision support system for social aid distribution.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    imageUrl:
      "/rt-project.png",
    codeUrl: "https://github.com/delafarahita/SIRW03",
  },
];
