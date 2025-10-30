export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Halur Muhammad Abiyyu",
  title: "Undergraduate Student",
  institution: "Politeknik Negeri Malang",
  // Note that links work in the description
  description:
    "I'm a full-stack developer specializing in building robust and scalable web applications, working across both front-end and back-end technologies to create efficient, user-focused solutions.",
  email: "halurabiyyu@gmail.com",
  imageUrl:
    "/pp.svg",
  githubUsername: "halurabiyyu",
  linkedinUsername: "halur-muhammad-abiyyu",
  cvUrl: "https://drive.google.com/file/d/1s3JaxtLL5tF4D0ShpguL0O35Gz3u1aME/view?usp=sharing",
  institutionUrl: "https://www.polinema.ac.id",
};
