export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  gpa?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021—Present",
    institution: "Politeknik Negeri Malang",
    degree: "Diploma in Informatics Engineering",
    gpa: "3.8 / 4.0",
  },
  {
    year: "2018—2021",
    institution: "SMA Negeri 11 Kabupaten Tangerang",
    degree: "High School",
    gpa: "90 / 100",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
