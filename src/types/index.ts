export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  about: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  contribution?: string;
  skills: string[];
  category: string;
  description: string;
  slug: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
