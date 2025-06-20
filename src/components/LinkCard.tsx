
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkCardProps {
  title: string;
  url: string;
  icon: string;
  description: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ title, url, icon, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-4 hover:bg-card/50 hover:border-border/60 hover:shadow-sm transition-all duration-300 ease-out">
        <div className="flex items-center gap-3">
          <div className="text-lg flex-shrink-0 w-8 flex justify-center">
            {icon}
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="font-medium text-foreground text-sm group-hover:text-foreground/90 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground/80 font-normal truncate mt-0.5">
              {description}
            </p>
          </div>
          <ExternalLink 
            size={16} 
            className="text-muted-foreground/60 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" 
          />
        </div>
      </div>
    </a>
  );
};
