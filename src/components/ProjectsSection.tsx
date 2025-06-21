import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'DashBoard UI',
      description: 'Modern admin dashboard with payment integration built using Next.js and ShadCN UI components',
      technologies: ['NextJS','ShadCN UI'],
      url: 'https://dash-ui-ruby.vercel.app/',
      status: 'Completed' as const
    },
    {
      title: 'RESK Chatbot Assistant',
      description: 'AI-powered conversational assistant leveraging Openrouter API with a Next.js frontend',
      technologies: ['NextJS', 'ShadCN UI', 'Openrouter API'],
      url: 'https://resk-chatbot.vercel.app/',
      status: 'Completed' as const
    },
    {
      title: 'SRK College Website Redesign',
      description: 'Complete college website overhaul featuring Next.js frontend with Tailwind CSS styling',
      technologies: ['NextJS', 'ShadCN UI', 'Tailwind CSS'],
      url: 'https://srkit-innovate-hub.vercel.app/',
      status: 'Completed' as const
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Streamlit-based data visualization tool for analyzing and reporting business metrics',
      technologies: ['Python', 'Streamlit', 'Pandas'],
      url: 'https://github.com/example/analytics-dashboard',
      status: 'In Progress' as const
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-foreground text-center mb-6">
        Featured Projects
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
