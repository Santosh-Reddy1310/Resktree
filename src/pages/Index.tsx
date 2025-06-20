
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarInset } from '@/components/ui/sidebar';
import { MainContent } from '@/components/MainContent';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <SidebarInset>
          <MainContent />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
