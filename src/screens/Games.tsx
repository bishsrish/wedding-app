import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Music, Gamepad2, Gift, Users, Star, Dices, Puzzle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Games = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState({ ladkiwale: 1250, ladkawale: 1180 });

  return (
    <div className="p-6 space-y-8 pb-24 bg-cream min-h-screen">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm border border-gold/10">
          <Gamepad2 size={20} className="text-maroon" />
        </button>
        <h1 className="text-3xl font-serif text-ink">Games & Fun</h1>
      </div>

      {/* Scoreboard: Ladkiwale vs Ladkawale */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-serif text-ink">The Great Wedding War</h3>
          <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Live Scoreboard</p>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold/5 flex items-center justify-center text-maroon">
              <Users size={32} />
            </div>
            <h4 className="font-serif text-lg text-ink">Ladkiwale</h4>
            <p className="text-2xl font-bold text-maroon">{scores.ladkiwale}</p>
          </div>
          
          <div className="text-2xl font-serif text-gold/30 italic">VS</div>
          
          <div className="flex-1 text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold/5 flex items-center justify-center text-maroon">
              <Users size={32} />
            </div>
            <h4 className="font-serif text-lg text-ink">Ladkawale</h4>
            <p className="text-2xl font-bold text-maroon">{scores.ladkawale}</p>
          </div>
        </div>
        
        <div className="p-4 bg-cream rounded-2xl text-center border border-gold/10">
          <p className="text-[10px] font-bold text-maroon uppercase tracking-widest">Next Battle: Sangeet Dance-off</p>
        </div>
      </div>

      {/* Daily Games */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-maroon p-6 rounded-[32px] text-cream space-y-4 shadow-lg">
          <Dices size={24} className="text-apricot" />
          <div>
            <h4 className="font-serif text-lg">Housie Day</h4>
            <p className="text-[10px] opacity-60 uppercase tracking-widest">Starts @ 4 PM</p>
          </div>
          <button className="w-full py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">Join Room</button>
        </div>
        
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gold/10 space-y-4">
          <Puzzle size={24} className="text-maroon" />
          <div>
            <h4 className="font-serif text-lg text-ink">Sudoku Day</h4>
            <p className="text-[10px] text-earth/40 uppercase tracking-widest">Win 50 Points</p>
          </div>
          <button className="w-full py-2 bg-gold/5 text-maroon rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gold/10 transition-colors">Play Now</button>
        </div>
      </div>

      {/* Playlists */}
      <div className="space-y-4">
        <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">The Couple's Playlists</h3>
        <div className="space-y-3">
          {[
            { title: "Divesh's Road Trip Mix", count: "24 Songs", icon: Music, color: "bg-gold/5 text-maroon" },
            { title: "Charu's Bridal Entry", count: "12 Songs", icon: Star, color: "bg-gold/5 text-maroon" },
            { title: "Our Sangeet Hits", count: "45 Songs", icon: Trophy, color: "bg-gold/5 text-maroon" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gold/10 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}>
                <item.icon size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                <p className="text-[10px] text-earth/40 uppercase tracking-widest">{item.count}</p>
              </div>
              <button className="p-2 bg-cream rounded-full text-earth/40 hover:text-maroon transition-colors">
                <Music size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sangeet DJ Request */}
      <div className="bg-ink p-8 rounded-[40px] text-cream space-y-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 text-apricot flex items-center justify-center">
            <Music size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-apricot">Sangeet DJ Portal</h4>
            <p className="text-xs opacity-60 uppercase tracking-widest">Request your favorite track</p>
          </div>
        </div>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Song Name / Artist..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-apricot/50 outline-none text-cream placeholder:text-cream/30"
          />
          <button className="w-full py-4 bg-maroon text-cream rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-maroon/90 transition-colors">
            Request Song
          </button>
        </div>
        <div className="space-y-3 pt-4 border-t border-white/5">
          <p className="text-[10px] text-gold uppercase tracking-widest font-bold">Live Queue</p>
          {[
            { song: "Tum Hi Ho", user: "Priya V." },
            { song: "Gallan Goodiyaan", user: "Rahul S." }
          ].map((req, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="font-medium">{req.song}</span>
              <span className="opacity-40 text-[10px]">{req.user}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reward Center */}
      <div className="bg-maroon p-8 rounded-[40px] text-cream space-y-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-apricot">
            <Gift size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl">Win Your Gift</h4>
            <p className="text-xs opacity-80">Redeem points for real rewards</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/5">
            <span className="text-xs font-bold uppercase tracking-widest">10% Off Uber Premier</span>
            <span className="text-[10px] font-bold bg-cream text-maroon px-2 py-1 rounded-full">500 PTS</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/5">
            <span className="text-xs font-bold uppercase tracking-widest">Custom Wedding Mug</span>
            <span className="text-[10px] font-bold bg-cream text-maroon px-2 py-1 rounded-full">1200 PTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
