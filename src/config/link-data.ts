import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  Share2,
  Briefcase,
  FolderTree,
  Send,
  Linkedin,
  Github,
  Instagram,
  AtSign,
  Music,
  BookOpen,
  FileText,
  Globe2,
  Globe,
  Bot,
  Sprout,
  Stethoscope,
  BarChart3,
  Sparkles,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Search,
  Flame,
  Activity,
  Recycle,
  Car,
  School,
} from 'lucide-react';

export interface BaseLink {
  title: string;
  url: string;
  icon: LucideIcon;
  description?: string;
  external?: boolean;
  badge?: string;
}

export type ProjectCategory = 'aiAutomation' | 'analyticsDashboards' | 'webExperiences';

export interface ProjectLink {
  title: string;
  url: string;
  icon: LucideIcon;
  description: string;
  technologies: string[];
  status?: 'Live' | 'In Progress' | 'Prototype' | 'Archived';
  category: ProjectCategory;
  featured?: boolean;
}

export const navigationLinks: BaseLink[] = [
  {
    title: 'Overview',
    url: '#overview',
    icon: LayoutDashboard,
    external: false,
  },
  {
    title: 'Social Hub',
    url: '#social',
    icon: Share2,
    external: false,
  },
  {
    title: 'Portfolio',
    url: '#portfolio',
    icon: Briefcase,
    external: false,
  },
  {
    title: 'Projects',
    url: '#projects',
    icon: FolderTree,
    external: false,
  },
  {
    title: 'Contact',
    url: '#contact',
    icon: Send,
    external: false,
  },
];

export const socialLinks: BaseLink[] = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/',
    icon: Linkedin,
    description: 'Professional updates, milestones, and networking.',
    external: true,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/Santosh-Reddy1310',
    icon: Github,
    description: 'Open-source projects, experiments, and code snippets.',
    external: true,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/klyn.am/',
    icon: Instagram,
    description: 'Snapshots from build logs, design inspo, and daily life.',
    external: true,
  },
  {
    title: 'Threads',
    url: 'https://www.threads.com/?xmt=AQF0Me9aJ05xjQnIx9g86h9MhNKVg4tjAOPFRrfS-s_E2l4&next=%2F',
    icon: AtSign,
    description: 'Short-form thoughts on AI, product ideas, and learning.',
    badge: 'New',
    external: true,
  },
  {
    title: 'Spotify',
    url: 'https://open.spotify.com/user/31qbytuay5cuqdesdxtxuqythopq',
    icon: Music,
    description: 'Playlists that fuel focus, deep work, and weekend vibes.',
    external: true,
  },
];

export const portfolioLinks: BaseLink[] = [
  {
    title: 'Live Portfolio',
    url: 'https://resk-portfolio.vercel.app/',
    icon: Globe2,
    description: 'End-to-end case studies with narrative, visuals, and results.',
    external: true,
  },
  {
    title: 'Notion Portfolio',
    url: 'https://yummy-squash-18c.notion.site/RESK-2182ce4878a9809a9e8fd23de5e8eb48?pvs=74',
    icon: BookOpen,
    description: 'Comprehensive project documentation, learnings, and impact.',
    external: true,
  },
  {
    title: 'Personal Notion',
    url: 'https://www.notion.so/0d2c629503804d26a4ebb7c5ecbd5944',
    icon: FileText,
    description: 'Research garden with notes, resources, and ideas in flight.',
    external: true,
  },
];

export const contactLinks: BaseLink[] = [
  {
    title: 'Contact Form',
    url: 'https://tally.so/r/mBqjA5',
    icon: Send,
    description: 'Share collaboration ideas or requests via a quick Tally form.',
    external: true,
  },
  {
    title: 'LinkedIn Message',
    url: 'https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/',
    icon: Linkedin,
    description: 'Reach out directly on LinkedIn for partnerships or mentoring.',
    external: true,
  },
];

export const projectCategoryMeta: Record<ProjectCategory, { label: string; summary: string }> = {
  aiAutomation: {
    label: 'AI & Automation',
    summary: 'Conversational agents, research assistants, and predictive intelligence.',
  },
  analyticsDashboards: {
    label: 'Analytics & Dashboards',
    summary: 'Insight-rich dashboards that surface metrics and decision-ready views.',
  },
  webExperiences: {
    label: 'Web Experiences',
    summary: 'Polished marketing sites, product UIs, and portfolio experiences.',
  },
};

export const projectCategoryOrder: ProjectCategory[] = [
  'aiAutomation',
  'analyticsDashboards',
  'webExperiences',
];

export const projects: ProjectLink[] = [
  {
    title: 'PaperProof – AI Research Paper Generator',
    url: 'https://paper-proof.onrender.com/',
    icon: Bot,
    description: 'Automates scholarly paper drafts with citation-ready structure and AI-assisted prose.',
    technologies: ['AI', 'Automation', 'Web App'],
    status: 'Live',
    category: 'aiAutomation',
    featured: true,
  },
  {
    title: 'QBot – Hybrid Quantum AI Chatbot',
    url: 'https://qbot-ai.streamlit.app/',
    icon: Sparkles,
    description: 'Combines quantum-inspired reasoning with AI chat flows for nuanced responses.',
    technologies: ['AI', 'Quantum Inspired', 'Streamlit'],
    status: 'Live',
    category: 'aiAutomation',
    featured: true,
  },
  {
    title: 'InsightSphere – AI Agriculture Insights Dashboard',
    url: 'https://insightsphere-azure.vercel.app/',
    icon: BarChart3,
    description: 'Agricultural intelligence hub with geospatial metrics and crop health analytics.',
    technologies: ['Analytics', 'Azure', 'Visualization'],
    status: 'Live',
    category: 'analyticsDashboards',
    featured: true,
  },
  {
    title: 'Healthcare Sustainability AI Agent System',
    url: 'https://ai-hospi-dashboard.streamlit.app/',
    icon: Stethoscope,
    description: 'Agentic workflows to monitor hospital sustainability metrics and suggest optimizations.',
    technologies: ['AI Agents', 'Sustainability', 'Streamlit'],
    status: 'Live',
    category: 'analyticsDashboards',
    featured: true,
  },
  {
    title: 'AgriScope',
    url: 'https://agriscope.streamlit.app/',
    icon: Sprout,
    description: 'Field-ready dashboard translating crop data into actionable agronomy insights.',
    technologies: ['Streamlit', 'Agritech', 'Visualization'],
    status: 'Live',
    category: 'analyticsDashboards',
  },
  {
    title: 'AutoML',
    url: 'https://automl-flow.streamlit.app/',
    icon: ShieldCheck,
    description: 'Guided AutoML workflows for rapid model experimentation and evaluation.',
    technologies: ['AutoML', 'Python', 'Streamlit'],
    status: 'Live',
    category: 'analyticsDashboards',
  },
  {
    title: 'MediScan.AI',
    url: 'https://med-scan-ai.streamlit.app/',
    icon: Stethoscope,
    description: 'Clinical scanning assistant that highlights anomalies and treatment references.',
    technologies: ['Healthcare', 'AI', 'Streamlit'],
    status: 'Live',
    category: 'aiAutomation',
  },
  {
    title: 'Gen AI Search Engine',
    url: 'https://resk-genai-app.streamlit.app/',
    icon: Search,
    description: 'Semantic search interface layering generative answers over curated knowledge.',
    technologies: ['GenAI', 'Search', 'Streamlit'],
    status: 'Live',
    category: 'aiAutomation',
  },
  {
    title: 'TeslaPulse.AI',
    url: 'https://tesla-pulse.vercel.app/',
    icon: Gauge,
    description: 'Real-time Tesla market sentiment dashboard with price and volume overlays.',
    technologies: ['Next.js', 'Charts', 'APIs'],
    status: 'Live',
    category: 'analyticsDashboards',
    featured: true,
  },
  {
    title: 'Roastume – Resume Analyser & Roaster',
    url: 'https://roastume.streamlit.app/',
    icon: Flame,
    description: 'Playful resume critique assistant delivering actionable feedback and humor.',
    technologies: ['AI', 'NLP', 'Streamlit'],
    status: 'Live',
    category: 'aiAutomation',
  },
  {
    title: 'RESK Chatbot Assistant',
    url: 'https://resk-chatbot.vercel.app/',
    icon: MessageCircle,
    description: 'Personal AI assistant answering FAQs and showcasing capabilities in real time.',
    technologies: ['Next.js', 'AI', 'Edge'],
    status: 'Live',
    category: 'aiAutomation',
    featured: true,
  },
  {
    title: 'Breast Cancer Prediction',
    url: 'https://predictbc.streamlit.app/',
    icon: Activity,
    description: 'Predictive analytics tool highlighting risk scores with interpretable visuals.',
    technologies: ['ML', 'Healthcare', 'Streamlit'],
    status: 'Live',
    category: 'aiAutomation',
  },
  {
    title: 'E-Waste Classification',
    url: 'https://github.com/Santosh-Reddy1310/E-Waste-Project/blob/main/Final_project_e-waste.ipynb',
    icon: Recycle,
    description: 'Notebook exploring ML models for sustainable e-waste categorisation.',
    technologies: ['ML', 'Sustainability', 'Jupyter'],
    status: 'Live',
    category: 'aiAutomation',
  },
  {
    title: 'CarVerse',
    url: 'https://carverse.streamlit.app/',
    icon: Car,
    description: 'Interactive car analytics experience with filtering, comparisons, and insights.',
    technologies: ['Streamlit', 'Analytics', 'Visualization'],
    status: 'Live',
    category: 'analyticsDashboards',
  },
  {
    title: 'DashBoard UI',
    url: 'https://dash-ui-ruby.vercel.app/',
    icon: LayoutDashboard,
    description: 'Polished admin experience with billing flows, theming, and responsive layout.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn'],
    status: 'Live',
    category: 'webExperiences',
    featured: true,
  },
  {
    title: 'SRK College Website Redesign',
    url: 'https://srkit-innovate-hub.vercel.app/',
    icon: School,
    description: 'Modernised college website with improved navigation and content strategy.',
    technologies: ['Next.js', 'Tailwind', 'UX'],
    status: 'Live',
    category: 'webExperiences',
  },
  {
    title: 'SaaS Portfolio',
    url: 'https://resk-portfolio.vercel.app/',
    icon: Globe2,
    description: 'SaaS-inspired portfolio with conversion-focused storytelling.',
    technologies: ['Next.js', 'Design Systems', 'Content'],
    status: 'Live',
    category: 'webExperiences',
  },
  {
    title: 'Simple Landing Portfolio Page',
    url: 'https://re-sk.netlify.app/',
    icon: Globe,
    description: 'Lightweight landing page showcasing personal brand and quick links.',
    technologies: ['Netlify', 'Responsive', 'Marketing'],
    status: 'Live',
    category: 'webExperiences',
  },
];
