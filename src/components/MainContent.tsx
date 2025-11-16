import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { LinkCard } from './LinkCard';
import { ProjectCard } from './ProjectCard';
import {
  socialLinks,
  portfolioLinks,
  contactLinks,
  projects,
  projectCategoryMeta,
  projectCategoryOrder,
} from '@/config/link-data';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
}

const heroHighlights = [
  {
    label: 'Focus',
    value: 'Full stack products + AI frameworks',
  },
  {
    label: 'Latest build',
    value: 'Healthcare Sustainability AI Agent System',
  },
  {
    label: 'Exploring',
    value: 'Agent workflows · Data storytelling',
  },
];

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, description }) => (
  <div className="space-y-2">
    {eyebrow && (
      <Badge variant="secondary" className="bg-secondary/60 text-foreground/70">
        {eyebrow}
      </Badge>
    )}
    <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
    <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
  </div>
);

export const MainContent = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const projectsByCategory = projectCategoryOrder
    .map((category) => ({
      category,
      meta: projectCategoryMeta[category],
      items: projects.filter((project) => project.category === category && !project.featured),
    }))
    .filter((group) => group.items.length > 0);

  const primaryCta = portfolioLinks[0];
  const secondaryCta = contactLinks[0];

  return (
    <div className="flex flex-1 flex-col bg-gradient-to-br from-background via-background to-background/90 text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-3 border-b border-border/60 bg-background/90 px-4 backdrop-blur">
        <SidebarTrigger />
        <div className="ml-auto text-sm text-muted-foreground hidden sm:block">Developer Hub</div>
      </header>

      <main className="flex-1 overflow-auto">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12">
          <section id="overview" className="grid gap-8 lg:grid-cols-[auto,minmax(0,1fr)] lg:items-center">
            <div className="mx-auto w-32 shrink-0 overflow-hidden rounded-3xl border border-border/60 shadow-lg shadow-border/20 lg:mx-0">
              <img
                src="/lovable-uploads/d73fc8f9-c8c2-42e3-99a0-01e4dfeef9b7.png"
                alt="RESK profile"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <Badge variant="secondary" className="mx-auto bg-secondary/60 text-foreground/70 lg:mx-0">
                RESK · Developer Hub
              </Badge>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">Reddy Santosh Kumar</h1>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Full stack developer &amp; AI/ML enthusiast crafting human-centred products, intelligent assistants,
                  and data-rich dashboards that tell stories.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
                  <MapPin className="h-4 w-4" />
                  <span>Vijayawada, Andhra Pradesh, India</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {heroHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/60 bg-card/40 px-4 py-3 text-left shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-border/70 hover:shadow-lg"
                  >
                    <span className="text-xs uppercase tracking-wide text-muted-foreground/80">{item.label}</span>
                    <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {primaryCta && (
                  <a
                    href={primaryCta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                  >
                    {primaryCta.title}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/70 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-card/60"
                  >
                    {secondaryCta.title}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </section>

          <section id="social" className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <SectionHeader
              eyebrow="Social"
              title="Stay in the loop"
              description="Follow along for build logs, product drops, and behind-the-scenes experiments."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {socialLinks.map((link, index) => (
                <LinkCard key={link.title} animationDelay={index * 60} {...link} />
              ))}
            </div>
          </section>

          <section id="portfolio" className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <SectionHeader
              eyebrow="Portfolio"
              title="Deep dives & case studies"
              description="Browse detailed breakdowns, documentation, and the systems behind each build."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {portfolioLinks.map((link, index) => (
                <LinkCard key={link.title} animationDelay={index * 70} {...link} />
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <SectionHeader
              eyebrow="Projects"
              title="Ship · Learn · Iterate"
              description="A collection of intelligent tools, dashboards, and web experiences built across hackathons, freelance, and personal explorations."
            />

            {featuredProjects.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-foreground">Featured builds</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      url={project.url}
                      status={project.status}
                      category={projectCategoryMeta[project.category].label}
                      highlight
                      animationDelay={index * 80}
                    />
                  ))}
                </div>
              </div>
            )}

            {projectsByCategory.map(({ category, meta, items }) => (
              <div key={category} className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-foreground">{meta.label}</h3>
                  <p className="text-sm text-muted-foreground sm:max-w-xl">{meta.summary}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      url={project.url}
                      status={project.status}
                      category={meta.label}
                      animationDelay={index * 90}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section id="contact" className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <SectionHeader
              eyebrow="Contact"
              title="Open to collaborations"
              description="Let’s build intelligent experiences together—reach out for product work, mentorship, or speaking."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {contactLinks.map((link, index) => (
                <LinkCard key={link.title} animationDelay={index * 80} {...link} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
