import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Users, Compass, Gift, Image as ImageIcon, Instagram, Gamepad2, Sun, ShieldAlert, Star, Briefcase, Heart, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { cn } from '../lib/utils';

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const getRoleBadge = () => {
    switch (user?.role) {
      case 'couple': return { label: 'The Couple', icon: Heart, color: 'text-maroon bg-maroon/5' };
      case 'planner': return { label: 'Wedding Planner', icon: Briefcase, color: 'text-apricot bg-apricot/5' };
      case 'family': return { label: 'Family Member', icon: Users, color: 'text-gold bg-gold/5' };
      case 'friends': return { label: 'Guest & Friend', icon: Star, color: 'text-apricot bg-apricot/5' };
      default: return null;
    }
  };

  const badge = getRoleBadge();

  return (
    <div className="p-6 space-y-8 bg-cream min-h-screen">
      {/* Role Welcome Bar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={() => navigate('/profile')}
        className="bg-white border border-gold/10 p-4 rounded-3xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-gold/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-maroon">
            <Users size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-ink">Welcome, {user?.username}!</p>
          </div>
        </div>
      </motion.div>

      {/* Weather Row */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-6 rounded-[32px] border border-gold/10 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <Sun className="text-gold" size={24} />
            <span className="text-[10px] font-bold text-earth/40 uppercase tracking-widest">Udaipur</span>
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-ink">32°</span>
              <span className="text-[10px] text-earth/40 font-bold uppercase">Sunny</span>
            </div>
            <p className="text-[8px] text-gold uppercase tracking-widest mt-1">Perfect for Haldi</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-80 rounded-[40px] overflow-hidden shadow-2xl border border-gold/10">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop"
          alt="Wedding Celebration"
          className="w-full h-full object-cover brightness-90 hover:scale-105 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex flex-col justify-end p-8 text-cream">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-apricot animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-90">The Royal Celebration</p>
          </div>
          <h2 className="text-4xl font-serif leading-tight">02 Days : 14 Hours : 05 Mins</h2>
        </div>
      </div>

      {/* Bento Grid Menu */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => navigate('/essentials')}
          className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col justify-between h-40 text-left border border-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-gold/5 text-gold flex items-center justify-center">
            <Briefcase size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">Essentials Hub</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">Invite & Schedule</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/gallery')}
          className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col justify-between h-40 text-left border border-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-gold/5 text-gold flex items-center justify-center">
            <ImageIcon size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">Moments</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">Gallery</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/people')}
          className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col justify-between h-40 text-left border border-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-gold/5 text-gold flex items-center justify-center">
            <Users size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">People</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">Meet the Circle</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/info')}
          className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col justify-between h-40 text-left border border-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-gold/5 text-gold flex items-center justify-center">
            <Compass size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">Udaipur Guide</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">Local Tips & Places</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/games')}
          className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col justify-between h-40 text-left border border-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-gold/5 text-gold flex items-center justify-center">
            <Gamepad2 size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">Games & Fun</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">Win Rewards</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/info', { state: { tab: 'sangeet' } })}
          className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col justify-between h-40 text-left border border-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-apricot/10 text-apricot flex items-center justify-center">
            <Music size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">Song Requests</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">DJ Queue</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/reel-ideas')}
          className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col justify-between h-40 text-left border border-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-gold/5 text-gold flex items-center justify-center">
            <Instagram size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">Reel Inspo</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">Ideas & Folders</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/gifts')}
          className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col justify-between h-40 text-left border border-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-gold/5 text-gold flex items-center justify-center">
            <Gift size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">Gifts</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">Registry</p>
          </div>
        </button>
      </div>

    </div>
  );
};
