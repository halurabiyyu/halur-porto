export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "January 2025 - Present",
    title: "Junior Web Developer Intern",
    company: "PT. Arkatama Multi Solusindo",
    description:
      "Developed and maintained a full-featured reporting and management system with region-based analytics, role-based access control, responsive UI design, and robust data handling to ensure efficient, consistent, and user-friendly operations.",
    companyUrl: "https://arkatama.id",
  }
];
