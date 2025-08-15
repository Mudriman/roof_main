export type ProjectCategory = 'all'|'pvc-membrane' | 'roof-repair' | 'flat-roof';

export type ProjectStage = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  completed: boolean;
};

export type ProjectSpecification = {
  roofType: string;
  base: string;
  insulation: string;
  separatorLayer: string;
  waterproofing: string;
  insulationThickness: string;
  duration: string;
  warranty: string;
};

export type ProjectImage = {
  stepNumber: number;
  src: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  category: ProjectCategory;
  location: string;
  year: number;
  area: number;
  status: 'completed' | 'in-progress' | 'planned';
  mainImage: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
  stages?: ProjectStage[];
  specifications: ProjectSpecification;
  similarProjects?: string[]; // массив ID похожих проектов
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  imageUrl: string;
  link: string;
};

export type Testimonial = {
  id: string;
  text: string;
  author: string;
  position: string;
  avatar?: string;
}