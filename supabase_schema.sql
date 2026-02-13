-- Qasberry AI Consultation Hub - Supabase Schema

-- 1. Industries Table
CREATE TABLE IF NOT EXISTS public.industries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    icon_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Roadmaps Table
CREATE TABLE IF NOT EXISTS public.roadmaps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_email TEXT,
    industry_id UUID REFERENCES public.industries(id),
    manual_processes JSONB DEFAULT '[]'::jsonb,
    infrastructure JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Leads & Bookings Table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT,
    booking_date DATE,
    booking_time TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Blog Posts Table
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT,
    excerpt TEXT,
    category TEXT,
    author_name TEXT,
    author_role TEXT,
    image_url TEXT,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Videos Table
CREATE TABLE IF NOT EXISTS public.videos (
    id TEXT PRIMARY KEY, -- YouTube Video ID
    title TEXT NOT NULL,
    category TEXT,
    url TEXT NOT NULL,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Subscribers Table
CREATE TABLE IF NOT EXISTS public.subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE public.industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roadmaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- POLICIES

-- Industries: Anyone can read
CREATE POLICY "Public Read Industries" ON public.industries FOR SELECT USING (true);

-- Roadmaps: Anyone can insert, only authenticated admins or the user (by email) can read
CREATE POLICY "Public Sync Roadmaps" ON public.roadmaps FOR INSERT WITH CHECK (true);
-- (Optional: Add more specific read policies if user authentication is added later)

-- Leads: Anyone can insert, only admins can read
CREATE POLICY "Public Submit Leads" ON public.leads FOR INSERT WITH CHECK (true);

-- Blog Posts: Anyone can read
CREATE POLICY "Public Read Blog Posts" ON public.blog_posts FOR SELECT USING (true);

-- Videos: Anyone can read
CREATE POLICY "Public Read Videos" ON public.videos FOR SELECT USING (true);

-- Subscribers: Anyone can insert
CREATE POLICY "Public Newsletter Signup" ON public.subscribers FOR INSERT WITH CHECK (true);

-- SEED DATA (Optional Examples)
-- INSERT INTO public.industries (name, slug, icon_name) VALUES ('Healthcare', 'healthcare', 'Activity');
-- INSERT INTO public.videos (id, title, category, url, is_featured) VALUES ('RJvJpxziQ2c', 'GenAI vs Agentic AI Explained', 'AI Concepts', 'https://youtu.be/RJvJpxziQ2c', true);
