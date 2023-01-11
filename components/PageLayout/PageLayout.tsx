import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex-1">
      {children}
    </div>
    <Footer />
  </div>
);