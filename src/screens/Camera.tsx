import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera as CameraIcon, Zap, RefreshCw, Scan, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export const Camera = () => {
  const [filter, setFilter] = useState('none');

  const filters = [
    { id: 'none', label: 'Normal', class: 'grayscale' },
    { id: 'noir', label: 'Noir', class: 'grayscale brightness-90 contrast-150' },
    { id: 'silver', label: 'Silver', class: 'grayscale brightness-110 contrast-110' },
    { id: 'high-key', label: 'High Key', class: 'grayscale brightness-150 contrast-125' },
    { id: 'low-key', label: 'Low Key', class: 'grayscale brightness-50 contrast-150' },
    { id: 'grainy', label: 'Grainy', class: 'grayscale contrast-125 brightness-110' }
  ];

  return (
    <div className="fixed inset-0 bg-ink z-40 flex flex-col">
      {/* Viewport */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://picsum.photos/seed/view/1080/1920"
          alt="Camera View"
          className={cn("w-full h-full object-cover transition-all duration-500", filters.find(f => f.id === filter)?.class)}
          referrerPolicy="no-referrer"
        />
        
        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center bg-gradient-to-b from-ink/60 to-transparent">
          <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-[70%]">
            {filters.map((f) => (
              <button 
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-[8px] font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                  filter === f.id ? "bg-cream text-maroon" : "bg-white/10 text-cream backdrop-blur-md border border-white/10"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
          <button className="p-3 rounded-full bg-white/10 text-cream backdrop-blur-md border border-white/10">
            <Zap size={20} />
          </button>
        </div>

        {/* AI Discovery Badge */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-14 h-14 rounded-full bg-cream text-maroon flex items-center justify-center shadow-2xl border border-gold/20">
            <Scan size={24} />
          </div>
          <span className="text-[8px] text-cream font-bold uppercase tracking-widest drop-shadow-md">Find Me</span>
        </motion.button>
      </div>

      {/* Bottom Controls */}
      <div className="h-48 bg-ink flex items-center justify-around px-8">
        <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-gold/20">
          <img src="https://picsum.photos/seed/last/100/100" alt="Last" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>

        <button className="w-24 h-24 rounded-full border-4 border-cream flex items-center justify-center group">
          <div className="w-20 h-20 rounded-full bg-cream group-active:scale-90 transition-transform" />
        </button>

        <button className="p-4 rounded-full bg-white/5 text-cream border border-white/10">
          <RefreshCw size={24} />
        </button>
      </div>
    </div>
  );
};
