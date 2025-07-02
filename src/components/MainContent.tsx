import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export const MainContent = () => {
  return (
    <div className="flex flex-1 flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center gap-2 border-b border-black/10 dark:border-white/10 px-4">
        <SidebarTrigger />
        <div className="ml-auto">
          <span className="text-sm text-gray-600 dark:text-white/60 font-poppins">Developer Dashboard</span>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-6 py-12 max-w-2xl">
          <div className="text-center space-y-8">

            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32">
              <img 
                src="/lovable-uploads/d73fc8f9-c8c2-42e3-99a0-01e4dfeef9b7.png"
                alt="RESK"
                className="w-full h-full rounded-full object-cover border-4 border-black/20 dark:border-white/20 shadow-lg"
              />
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight font-outfit">RESK</h1>
              <div className="space-y-3">
                <p className="text-xl text-gray-700 dark:text-white/70 font-poppins">
                  Full Stack Developer & AI/ML Enthusiast
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-white/60 font-poppins">
                  <MapPin size={16} />
                  <span className="text-sm">Vijayawada, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Bio Box */}
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 shadow-md">
              <p className="text-gray-700 dark:text-white/70 leading-relaxed font-poppins">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:opacity-90 transition-colors font-medium font-poppins"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Santosh-Reddy1310"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-black/10 dark:border-white/20 text-black dark:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors font-medium font-poppins"
              >
                <ExternalLink size={16} />
                GitHub
              </a>
            </div>

            {/* Footer Note */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 dark:text-white/50 font-poppins">
                Use the sidebar to explore my social links, portfolio, and projects →
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
