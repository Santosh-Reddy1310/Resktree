import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export const MainContent = () => {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/40 px-4">
        <SidebarTrigger />
        <div className="ml-auto">
          <span className="text-sm text-muted-foreground">Developer Dashboard</span>
        </div>
      </header>
      
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-6 py-12 max-w-2xl">
          <div className="text-center space-y-8">
            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32">
              <img 
                src="/lovable-uploads/d73fc8f9-c8c2-42e3-99a0-01e4dfeef9b7.png"
                alt="RESK"
                className="w-full h-full rounded-full object-cover border-4 border-border/20 shadow-lg"
              />
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground tracking-tight font-outfit">
                RESK
              </h1>
              <div className="space-y-3">
                <p className="text-xl text-muted-foreground font-poppins">
                  Full Stack Developer & AI/ML Enthusiast
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span className="text-sm font-poppins">Vijayawada, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-sm">
              <p className="text-muted-foreground leading-relaxed font-poppins">
                Passionate about crafting responsive web applications and intelligent ML models. 
                I love solving real-world problems using Java, Python, React, and Machine Learning tools.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-4 justify-center pt-4">
              <a
                href="https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-medium font-poppins"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-black border border-gray-300 rounded-xl hover:bg-gray-200 transition-colors font-medium font-poppins"
              >
                <ExternalLink size={16} />
                GitHub
              </a>
            </div>

            {/* Navigation Note */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground/70 font-poppins">
                Use the sidebar to explore my social links, portfolio, and projects →
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};