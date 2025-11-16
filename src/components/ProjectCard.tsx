
import React from 'react';
import { Archive, CheckCircle, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ProjectStatus = 'Live' | 'In Progress' | 'Prototype' | 'Archived';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  status?: ProjectStatus;
  category?: string;
  highlight?: boolean;
  animationDelay?: number;
}

const statusConfig: Record<ProjectStatus, { Icon: typeof CheckCircle; className: string }> = {
  Live: {
    Icon: CheckCircle,
    className: 'text-emerald-500 dark:text-emerald-400',
  },
  'In Progress': {
    Icon: Clock,
    className: 'text-amber-500 dark:text-amber-400',
  },
  Prototype: {
    Icon: Sparkles,
    className: 'text-sky-500 dark:text-sky-400',
  },
  Archived: {
    Icon: Archive,
    className: 'text-muted-foreground',
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  url,
  status,
  category,
  highlight,
  animationDelay,
}) => {
  const statusDetails = status ? statusConfig[status] : null;
  const animationStyle = animationDelay
    ? ({ animationDelay: `${animationDelay}ms` } as React.CSSProperties)
    : undefined;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div
        className={cn(
          'h-full rounded-2xl border border-border/40 bg-card/40 p-5 shadow-sm transition-all duration-500 animate-in fade-in slide-in-from-bottom-3 group-hover:-translate-y-1 group-hover:border-border/70 group-hover:bg-card/60 group-hover:shadow-xl',
          highlight && 'border-primary/50 shadow-primary/10'
        )}
        style={animationStyle}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            {category && (
              <Badge variant="secondary" className="bg-secondary/60 text-foreground/70">
                {category}
              </Badge>
            )}
            <h3 className="text-base font-semibold leading-tight text-foreground group-hover:text-foreground/90">
              {title}
            </h3>
          </div>
          <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/50 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {statusDetails && (
          <div className="mt-4 flex items-center gap-1.5">
            <statusDetails.Icon className={cn('h-3.5 w-3.5', statusDetails.className)} />
            <span className={cn('text-xs font-medium', statusDetails.className)}>{status}</span>
          </div>
        )}
      </div>
    </a>
  );
};
