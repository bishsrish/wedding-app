import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { AnnouncementBar } from './AnnouncementBar';
import { motion, AnimatePresence } from 'motion/react';

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cream pb-24 font-sans text-ink overflow-x-hidden relative">
      {/* Monochrome Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%2399782E' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }} />
      
      <div className="relative z-10">
        <div className="sticky top-0 z-[60]">
          <AnnouncementBar />
        </div>
        <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <BottomNav />
      </div>
    </div>
  );
};
