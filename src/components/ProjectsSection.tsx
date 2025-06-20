
import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Web App',
      description: 'Full-stack React & Node.js application with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB'],
      url: 'https://github.com/example/ecommerce-app',
      status: 'Completed' as const
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Machine learning powered chatbot using Python and TensorFlow',
      technologies: ['Python', 'TensorFlow', 'NLP'],
      url: 'https://github.com/example/ai-chatbot',
      status: 'In Progress' as const
    },
    {
      title: 'Task Management System',
      description: 'Java Spring Boot REST API with React frontend',
      technologies: ['Java', 'Spring Boot', 'React'],
      url: 'https://github.com/example/task-manager',
      status: 'Completed' as const
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence and reporting',
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
