
import React from 'react';
import { LinkCard } from './LinkCard';

export const LinksSection = () => {
  const links = [
    {
      title: 'Live Web Portfolio',
      url: 'https://resk-portfolio.vercel.app/',
      icon: '🖥️',
      description: 'View my complete portfolio'
    },
    {
      title: 'Notion Portfolio',
      url: 'https://yummy-squash-18c.notion.site/RESK-2182ce4878a9809a9e8fd23de5e8eb48?pvs=74',
      icon: '📘',
      description: 'Detailed project documentation'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/',
      icon: '💼',
      description: 'Connect with me professionally'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/',
      icon: '🧠',
      description: 'Explore my code repositories'
    },
    {
      title: 'Contact Me',
      url: 'https://tally.so/r/mBqjA5',
      icon: '📬',
      description: 'Get in touch via form'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-foreground text-center mb-6">
        Connect With Me
      </h2>
      <div className="space-y-3">
        {links.map((link, index) => (
          <LinkCard key={index} {...link} />
        ))}
      </div>
    </div>
  );
};
