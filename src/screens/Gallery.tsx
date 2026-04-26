import React from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, Filter, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EVENTS = [
  { id: '1', name: 'Welcome Brunch', count: 42, img: 'https://picsum.photos/seed/brunch/400/300' },
  { id: '2', name: 'Sangeet Night', count: 128, img: 'https://picsum.photos/seed/sangeet/400/300' },
  { id: '3', name: 'Haldi Ceremony', count: 85, img: 'https://picsum.photos/seed/haldi/400/300' },
  { id: '4', name: 'Wedding Vows', count: 210, img: 'https://picsum.photos/seed/wedding/400/300' },
];

export const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-8 pb-24 bg-cream min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm border border-gold/10">
            <ImageIcon size={20} className="text-maroon" />
          </button>
          <h1 className="text-3xl font-serif text-ink">Moments</h1>
        </div>
        <button className="p-3 bg-white rounded-full shadow-sm text-earth/40 border border-gold/10">
          <Filter size={20} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {EVENTS.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative h-64 rounded-[40px] overflow-hidden shadow-sm group border border-gold/10"
          >
            <img src={event.img} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent flex flex-col justify-end p-6 text-cream">
              <h4 className="font-serif text-lg">{event.name}</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mt-1">{event.count} Photos</p>
              <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-apricot">
                  <Download size={14} />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-apricot">
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reel Maker Promo */}
      <div className="bg-maroon p-8 rounded-[40px] text-cream flex items-center justify-between relative overflow-hidden shadow-xl">
        <div className="relative z-10">
          <h4 className="font-serif text-xl text-apricot">Post-Wedding Reel</h4>
          <p className="text-xs opacity-60 mt-1">Create a cinematic memory in seconds.</p>
          <button className="mt-6 px-8 py-3 bg-cream text-maroon rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-white transition-colors">
            Create Reel
          </button>
        </div>
        <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-cream relative z-10">
          <ImageIcon size={40} />
        </div>
      </div>
    </div>
  );
};
