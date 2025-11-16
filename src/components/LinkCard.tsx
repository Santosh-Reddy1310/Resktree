
import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface LinkCardProps {
  title: string;
  url: string;
  icon: LucideIcon;
  description?: string;
  badge?: string;
  external?: boolean;
  animationDelay?: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  title,
  url,
  icon: Icon,
  description,
  badge,
  external = true,
  animationDelay,
}) => {
  const target = external ? '_blank' : undefined;
  const rel = external ? 'noopener noreferrer' : undefined;
  const animationStyle = animationDelay
    ? ({ animationDelay: `${animationDelay}ms` } as React.CSSProperties)
    : undefined;

  return (
    <a
      href={url}
      target={target}
      rel={rel}
      className="group block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div
        className="flex items-center justify-between gap-4 rounded-xl border border-border/40 bg-card/40 p-4 shadow-sm transition-all duration-500 animate-in fade-in slide-in-from-bottom-2 group-hover:-translate-y-1 group-hover:border-border/70 group-hover:bg-card/70 group-hover:shadow-lg"
        style={animationStyle}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 text-primary transition-all duration-300 group-hover:scale-105">
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-foreground/90">
              {title}
            </h3>
            {description && (
              <p className="mt-1 text-xs text-muted-foreground/80 line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {badge && (
            <Badge variant="secondary" className="whitespace-nowrap">
              {badge}
            </Badge>
          )}
          {external ? (
            <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          ) : (
            <ArrowRight className="h-4 w-4 text-muted-foreground/60 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </a>
  );
};
