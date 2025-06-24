import React from 'react';
import { Home, ExternalLink, FolderOpen, User, Instagram, Music, BookOpen } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { ThemeToggle } from './ThemeToggle';

const socialLinks = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/',
    icon: ExternalLink,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/',
    icon: ExternalLink,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/syntax_error_sk/?next=%2F',
    icon: Instagram,
  },
  {
    title: 'Threads',
    url: 'https://www.threads.com/?xmt=AQF0Me9aJ05xjQnIx9g86h9MhNKVg4tjAOPFRrfS-s_E2l4&next=%2F',
    icon: ExternalLink,
  },
  {
    title: 'Spotify',
    url: 'https://open.spotify.com/user/31qbytuay5cuqdesdxtxuqythopq',
    icon: Music,
  },
];

const portfolioLinks = [
  {
    title: 'Live Portfolio',
    url: 'https://resk-portfolio.vercel.app/',
    icon: ExternalLink,
  },
  {
    title: 'Notion Portfolio',
    url: 'https://yummy-squash-18c.notion.site/RESK-2182ce4878a9809a9e8fd23de5e8eb48?pvs=74',
    icon: BookOpen,
  },
  {
    title: 'Personal Notion',
    url: 'https://www.notion.so/0d2c629503804d26a4ebb7c5ecbd5944',
    icon: BookOpen,
  },
];

const projectLinks = [
  {
    title: 'DashBoard UI',
    url: 'https://dash-ui-ruby.vercel.app/',
    icon: FolderOpen,
  },
  {
    title: 'RESK Chatbot Assistant',
    url: 'https://resk-chatbot.vercel.app/',
    icon: FolderOpen,
  },
  {
    title: 'SRK College Website Redesign',
    url: 'https://srkit-innovate-hub.vercel.app/',
    icon: FolderOpen,
  },
  {
    title: 'Saas PortFolio',
    url: 'https://resk-portfolio.vercel.app/',
    icon: FolderOpen,
  },
  {
    title: 'Simple Landing Portfolio Page',
    url: 'https://re-sk.netlify.app/',
    icon: FolderOpen,
  },
  {
    title: 'Gen Ai Search Engine',
    url: 'https://resk-genai-app.streamlit.app/',
    icon: FolderOpen,
  },
  {
    title: 'Breast Cancer Prediction',
    url: 'https://predictbc.streamlit.app/',
    icon: FolderOpen,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/40">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/d73fc8f9-c8c2-42e3-99a0-01e4dfeef9b7.png"
            alt="RESK"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">RESK Dashboard</h2>
            <p className="text-xs text-muted-foreground">Developer Hub</p>
          </div>
        </div>
        <div className="mt-3">
          <ThemeToggle />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="sidebar-content-scrollable">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/">
                    <Home />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="https://tally.so/r/mBqjA5" target="_blank" rel="noopener noreferrer">
                    <User />
                    <span>Contact Me</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Social Links</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon />
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {portfolioLinks.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon />
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projectLinks.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon />
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}