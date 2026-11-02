export interface Project {
  id: number;
  name: string;
  fullName: string;
  year: string;
  desc: string;
  tags: string[];
  url?: string;
  img?: string;
}

export type ProjectFilter = 'all' | string;

