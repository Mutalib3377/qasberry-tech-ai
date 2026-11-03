
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
  category?: string;
  is_featured?: boolean;
}

// Supabase Table Types
export interface DBIndustry {
  id: string;
  name: string;
  slug: string;
  icon_name: string | null;
  created_at: string;
}

export interface DBRoadmap {
  id: string;
  user_email: string | null;
  industry_id: string;
  manual_processes: string[];
  infrastructure: string[];
  created_at: string;
}

export interface DBLead {
  id: string;
  full_name: string;
  email: string;
  company: string | null;
  message: string | null;
  booking_date: string | null;
  booking_time: string | null;
  status: 'new' | 'contacted' | 'completed' | 'cancelled';
  created_at: string;
}

export interface DBBlogPost {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  category: string | null;
  author_name: string | null;
  author_role: string | null;
  image_url: string | null;
  published_at: string | null;
  created_at: string;
}

export interface DBVideo {
  id: string;
  title: string;
  category: string | null;
  url: string;
  is_featured: boolean;
  created_at: string;
}

export interface DBSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
}
