import React from 'react';
import { motion } from 'motion/react';
import { Megaphone } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div className="bg-maroon text-cream py-3 px-6 flex items-center gap-4 shadow-lg border-b border-white/10 relative z-[60]">
      <div className="p-2 bg-white/10 rounded-full animate-pulse">
        <Megaphone size={16} className="text-apricot" />
      </div>
      <div className="flex-1 overflow-hidden">
        <motion.p 
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
        >
          🥁 The Baraat starts at the Main Gate in 30 mins! Everyone gather up! 🥁 &nbsp;&nbsp;&nbsp;&nbsp; ✨ Welcome to the Wedding of Charu & Divesh ✨ &nbsp;&nbsp;&nbsp;&nbsp; 📍 The Grand Palace, Udaipur
        </motion.p>
      </div>
    </div>
  );
};
