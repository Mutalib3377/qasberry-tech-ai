
export enum Industry {
  OilGas = 'oil-gas',
  Healthcare = 'healthcare',
  Agriculture = 'agriculture',
  Automotive = 'automotive',
  CustomerService = 'customer-service',
  Education = 'education'
}

export interface RoadmapInputs {
  industry: Industry;
  manualProcesses: string[];
  infrastructure: string[];
  email?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  metrics: {
    label: string;
    value: string;
  }[];
  description: string;
  industry: string;
}

export interface VideoContent {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}
