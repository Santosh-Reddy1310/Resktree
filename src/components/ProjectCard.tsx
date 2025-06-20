
import React from 'react';
import { ExternalLink, Clock, CheckCircle } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  status: 'Completed' | 'In Progress';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  url, 
  status 
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-4 hover:bg-card/50 hover:border-border/60 hover:shadow-sm transition-all duration-300 ease-out h-full">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-medium text-foreground text-sm group-hover:text-foreground/90 transition-colors line-clamp-2">
              {title}
            </h3>
            <ExternalLink 
              size={14} 
              className="text-muted-foreground/60 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" 
            />
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground/80 font-normal line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-normal bg-muted/50 text-muted-foreground/90 rounded-lg border border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-1.5 pt-1">
            {status === 'Completed' ? (
              <CheckCircle size={12} className="text-green-600 dark:text-green-400" />
            ) : (
              <Clock size={12} className="text-yellow-600 dark:text-yellow-400" />
            )}
            <span className={`text-xs font-normal ${
              status === 'Completed' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
            }`}>
              {status}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
