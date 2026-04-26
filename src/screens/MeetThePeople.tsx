import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Star, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PEOPLE = [
  { name: 'Rahul Sharma', role: 'Best Man', relation: 'Groom\'s Best Friend', bio: 'The life of the party and the man who knows all the secrets.' },
  { name: 'Priya Verma', role: 'Maid of Honor', relation: 'Bride\'s Sister', bio: 'The planner, the protector, and the one who keeps Charu calm.' },
  { name: 'Amit & Sunita', role: 'The Parents', relation: 'Groom\'s Parents', bio: 'The pillars of strength who made this dream wedding possible.' },
  { name: 'Srishti Bishnoi', role: 'Bridesmaid', relation: 'College Bestie', bio: 'The fashionista who curated the wedding looks.' },
];

export const MeetThePeople = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-8 pb-24 bg-cream min-h-screen">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm border border-gold/10">
          <Users size={20} className="text-maroon" />
        </button>
        <h1 className="text-3xl font-serif text-ink">Meet the People</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {PEOPLE.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 flex flex-col items-center text-center space-y-4 group"
          >
            <div className="w-24 h-24 rounded-full border-4 border-gold/5 shadow-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={`https://i.pravatar.cc/150?u=${person.name}`} alt={person.name} referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="px-3 py-1 bg-gold/5 text-maroon text-[10px] font-bold rounded-full uppercase tracking-widest">
                {person.role}
              </span>
              <h3 className="text-2xl font-serif mt-2 text-ink">{person.name}</h3>
              <p className="text-[10px] text-earth/40 uppercase tracking-widest mt-1">{person.relation}</p>
            </div>
            <p className="text-sm text-earth italic leading-relaxed max-w-xs">"{person.bio}"</p>
            <div className="flex gap-4 pt-4">
              <button className="p-3 rounded-full bg-gold/5 text-maroon hover:bg-gold/10 transition-colors">
                <Heart size={18} />
              </button>
              <button className="p-3 rounded-full bg-gold/5 text-maroon hover:bg-gold/10 transition-colors">
                <Star size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
