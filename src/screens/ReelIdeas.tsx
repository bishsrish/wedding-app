import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, ChevronLeft, FolderOpen, Play, Plus, Search, Filter, MoreVertical, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ReelIdea {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  instagramUrl: string;
}

export const ReelIdeas = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Bride Solo', 'With Friends', 'Groom & Bride', 'Family', 'Transition'];

  const ideas: ReelIdea[] = [
    {
      id: '1',
      title: 'The Royal Entry',
      category: 'Bride Solo',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop',
      instagramUrl: 'https://www.instagram.com/reels/'
    },
    {
      id: '2',
      title: 'Squad Goals Dance',
      category: 'With Friends',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop',
      instagramUrl: 'https://www.instagram.com/reels/'
    },
    {
      id: '3',
      title: 'Haldi Slow-mo',
      category: 'Transition',
      thumbnail: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400&auto=format&fit=crop',
      instagramUrl: 'https://www.instagram.com/reels/'
    },
    {
      id: '4',
      title: 'The First Look',
      category: 'Groom & Bride',
      thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop',
      instagramUrl: 'https://www.instagram.com/reels/'
    },
    {
      id: '5',
      title: 'Jewelry Reveal',
      category: 'Bride Solo',
      thumbnail: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400&auto=format&fit=crop',
      instagramUrl: 'https://www.instagram.com/reels/'
    },
    {
      id: '6',
      title: 'Family Portrait Fun',
      category: 'Family',
      thumbnail: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=400&auto=format&fit=crop',
      instagramUrl: 'https://www.instagram.com/reels/'
    }
  ];

  const filteredIdeas = activeCategory === 'All' 
    ? ideas 
    : ideas.filter(idea => idea.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream p-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-ink border border-gold/10"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-serif text-ink">Reel Inspiration</h1>
          <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">Wedding Inspo Folders</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-maroon text-cream shadow-lg flex items-center justify-center">
          <Plus size={20} />
        </button>
      </div>

      {/* Instagram Integration Notice */}
      <div className="bg-ink p-6 rounded-[32px] text-cream mb-8 flex items-center gap-4 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-apricot">
          <Instagram size={24} />
        </div>
        <div>
          <h4 className="text-sm font-bold">Linked to Instagram</h4>
          <p className="text-[10px] opacity-60">Open ideas directly in the Instagram app to save them to your folders.</p>
        </div>
      </div>

      {/* Categories Scroller */}
      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap",
              activeCategory === cat 
                ? "bg-maroon text-cream shadow-lg" 
                : "bg-white text-earth border border-gold/10"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Folders Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredIdeas.map((idea) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gold/10 group"
          >
            <div className="relative aspect-[3/4]">
              <img 
                src={idea.thumbnail} 
                alt={idea.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-cream">
                      <Play size={12} fill="currentColor" />
                    </div>
                    <span className="text-[8px] font-bold text-cream uppercase tracking-widest">{idea.category}</span>
                  </div>
                  <a 
                    href={idea.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-apricot text-ink shadow-lg"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-xs font-bold text-ink truncate">{idea.title}</h4>
              <p className="text-[8px] text-earth/60 uppercase tracking-widest mt-1">Saved to Folder</p>
            </div>
          </motion.div>
        ))}
        
        {/* Add New Folder */}
        <div className="aspect-[3/4] rounded-[32px] border-2 border-dashed border-gold/20 flex flex-col items-center justify-center text-gold bg-white/50">
          <FolderOpen size={24} />
          <span className="text-[10px] font-bold uppercase mt-2">New Folder</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-12 space-y-4">
        <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">Quick Folders</h3>
        <div className="grid grid-cols-3 gap-4">
          {['Solo', 'Squad', 'Couple'].map((label) => (
            <button key={label} className="bg-white p-4 rounded-2xl border border-gold/10 text-center space-y-2 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-gold/5 text-maroon mx-auto flex items-center justify-center">
                <FolderOpen size={16} />
              </div>
              <p className="text-[10px] font-bold text-ink uppercase tracking-widest">{label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
