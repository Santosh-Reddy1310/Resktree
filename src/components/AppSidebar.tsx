import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { ThemeToggle } from './ThemeToggle';
import type { BaseLink } from '@/config/link-data';
import {
  contactLinks,
  navigationLinks,
  portfolioLinks,
  projects,
  socialLinks,
} from '@/config/link-data';

const projectShortcuts: BaseLink[] = projects
  .filter((project) => project.featured)
  .map((project) => ({
    title: project.title,
    url: project.url,
    icon: project.icon,
    external: true,
  }));

const linkGroups: { label: string; links: BaseLink[] }[] = [
  { label: 'Navigate', links: navigationLinks },
  { label: 'Social', links: socialLinks },
  { label: 'Portfolio', links: portfolioLinks },
  { label: 'Featured Projects', links: projectShortcuts },
  { label: 'Contact', links: contactLinks },
].filter((group) => group.links.length > 0);

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/50 bg-sidebar text-sidebar-foreground">
      <SidebarHeader className="gap-4 p-4 pb-2">
        <div className="flex items-center gap-3">
          <img
            src="/lovable-uploads/d73fc8f9-c8c2-42e3-99a0-01e4dfeef9b7.png"
            alt="RESK"
            className="h-9 w-9 rounded-full border border-sidebar-border"
          />
          <div>
            <h2 className="text-sm font-semibold text-sidebar-foreground">RESK Dashboard</h2>
            <p className="text-xs text-sidebar-foreground/70">AI-first developer hub</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="sidebar-content-scrollable pb-4">
        {linkGroups.map(({ label, links }, index) => (
          <React.Fragment key={label}>
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wide text-sidebar-foreground/60">
                {label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {links.map((link) => {
                    const Icon = link.icon;
                    const isExternal = link.external ?? true;

                    return (
                      <SidebarMenuItem key={`${label}-${link.title}`}>
                        <SidebarMenuButton asChild>
                          <a
                            href={link.url}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{link.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {index < linkGroups.length - 1 && <SidebarSeparator />}
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter className="mt-auto gap-3 border-t border-sidebar-border/60 bg-sidebar/60">
        <ThemeToggle />
        <p className="text-center text-xs text-sidebar-foreground/60">Crafted with curiosity.</p>
      </SidebarFooter>
    </Sidebar>
  );
}