import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Shirt, MapPin, Download, ExternalLink, CheckCircle, Check, Play, ListTodo, Users2, Video, Gift, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VENUE_DIRECTIONS_URL } from '../constants';
import confetti from 'canvas-confetti';

const INITIAL_CHECKLIST = [
  { id: 1, text: 'Traditional Yellow Outfit (Haldi)', checked: false },
  { id: 2, text: 'Indo-Western Glitz (Sangeet)', checked: false },
  { id: 3, text: 'Wedding Splendor (Main Event)', checked: false },
  { id: 4, text: 'Comfortable Flats for Dancing', checked: false },
  { id: 5, text: 'Power Bank & Chargers', checked: false },
  { id: 6, text: 'Wedding Invite (Digital/Physical)', checked: false },
  { id: 7, text: 'Safety Pins & Double-sided Tape', checked: false },
  { id: 8, text: 'Personal Medications', checked: false },
  { id: 9, text: 'Sunscreen & Sunglasses', checked: false },
  { id: 10, text: 'Hair Accessories & Jewelry', checked: false },
  { id: 11, text: 'Perfume & Deodorant', checked: false },
  { id: 12, text: 'Emergency Cash', checked: false }
];

const SCHEDULE = [
  { day: 'Day 1', title: 'The Welcome Brunch', time: '11:00 AM', venue: 'The Terrace', dress: 'Floral Casuals' },
  { day: 'Day 1', title: 'Sangeet Night', time: '07:00 PM', venue: 'Grand Ballroom', dress: 'Indo-Western Glitz' },
  { day: 'Day 2', title: 'Haldi Ceremony', time: '10:00 AM', venue: 'Poolside Lawn', dress: 'Vibrant Yellows' },
  { day: 'Day 2', title: 'The Wedding Vows', time: '05:00 PM', venue: 'Temple Courtyard', dress: 'Traditional Splendor' },
];

export const EssentialsHub = () => {
  const navigate = useNavigate();
  const [checklist, setChecklist] = useState(INITIAL_CHECKLIST);

  const toggleItem = (id: number) => {
    setChecklist(prev => prev.map(item => {
      if (item.id === id) {
        const newChecked = !item.checked;
        if (newChecked) {
          const duration = 3 * 1000;
          const animationEnd = Date.now() + duration;
          const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
          const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

          const interval: any = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#D4AF37', '#F4C2C2', '#800000'] });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#D4AF37', '#F4C2C2', '#800000'] });
          }, 250);
        }
        return { ...item, checked: newChecked };
      }
      return item;
    }));
  };

  return (
    <div className="p-6 space-y-8 pb-24 bg-cream min-h-screen">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm border border-gold/10">
          <Calendar size={20} className="text-maroon" />
        </button>
        <h1 className="text-3xl font-serif text-ink">Essentials Hub</h1>
      </div>

      {/* Next Event Card (Moved from Home) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-maroon p-8 rounded-[40px] shadow-xl text-cream space-y-6 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="flex justify-between items-start relative z-10">
          <div>
            <span className="px-3 py-1 bg-white/20 text-cream text-[10px] font-bold rounded-full uppercase tracking-wider backdrop-blur-md">
              Coming Up Next
            </span>
            <h3 className="text-3xl font-serif mt-3">The Haldi Ceremony</h3>
          </div>
          <div className="p-4 bg-white/20 rounded-full backdrop-blur-md animate-bounce text-apricot">
            <Calendar size={24} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 relative z-10">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest opacity-70">Time</p>
            <p className="text-sm font-bold">10:00 AM Today</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest opacity-70">Location</p>
            <p className="text-sm font-bold">Poolside Lawn</p>
          </div>
        </div>

        <button 
          onClick={() => window.open(VENUE_DIRECTIONS_URL, '_blank')}
          className="w-full py-4 rounded-full bg-cream text-maroon text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-white transition-colors relative z-10"
        >
          Navigate to Venue
        </button>
      </motion.div>

      {/* Digital Invite Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 text-center space-y-6"
      >
        <div className="w-20 h-20 mx-auto border-2 border-gold rounded-full flex items-center justify-center text-maroon font-serif text-3xl">
          C&D
        </div>
        <div>
          <h2 className="text-2xl font-serif italic text-ink">The Digital Invitation</h2>
          <p className="text-sm text-earth/60 mt-2">We request the honor of your presence as we celebrate our union in the city of lakes.</p>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-maroon text-cream rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
            <Download size={16} /> Download PDF
          </button>
        </div>
      </motion.div>

      {/* Full Schedule */}
      <div className="space-y-4">
        <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">Full Schedule</h3>
        <div className="space-y-4">
          {SCHEDULE.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm flex items-center gap-6 border border-gold/10">
              <div className="text-center min-w-[60px]">
                <p className="text-[10px] font-bold text-maroon uppercase">{item.day}</p>
                <p className="text-xs font-medium text-earth/40 mt-1">{item.time}</p>
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-lg text-ink">{item.title}</h4>
                <div className="flex items-center gap-4 mt-2">
                  <button 
                    onClick={() => window.open(VENUE_DIRECTIONS_URL, '_blank')}
                    className="flex items-center gap-1 text-[10px] text-earth/60 hover:text-maroon transition-colors"
                  >
                    <MapPin size={12} /> {item.venue}
                  </button>
                  <div className="flex items-center gap-1 text-[10px] text-gold font-bold">
                    <Shirt size={12} /> {item.dress}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wardrobe Planner */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-4">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold">Wardrobe Planner</h3>
          <span className="text-[10px] font-bold text-maroon">PRE-PLAN YOUR LOOKS</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { event: 'Welcome Brunch', theme: 'Linen Co-ords & Florals', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop' },
            { event: 'Sangeet Night', theme: 'Mirror-work & Velvet', img: 'https://images.unsplash.com/photo-1583939411023-14783179e581?q=80&w=400&auto=format&fit=crop' },
            { event: 'Haldi', theme: 'Block-prints & Yellows', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop' },
            { event: 'Wedding', theme: 'Royal Silks & Zardosi', img: 'https://images.unsplash.com/photo-1595910194003-f202dc3f0b0f?q=80&w=400&auto=format&fit=crop' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[32px] shadow-sm overflow-hidden border border-gold/10 group">
              <div className="relative h-32">
                <img src={item.img} alt={item.event} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-maroon/20" />
                <button className="absolute top-2 right-2 p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                  <Download size={12} />
                </button>
              </div>
              <div className="p-4">
                <h5 className="font-serif text-sm text-ink">{item.event}</h5>
                <p className="text-[10px] text-gold font-bold mt-1 uppercase tracking-tighter">{item.theme}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RSVP Status */}
      <div className="bg-gold/5 p-6 rounded-[32px] border border-gold/10 flex items-center justify-between">
        <div>
          <h4 className="font-serif text-lg text-ink">Your RSVP</h4>
          <p className="text-xs text-earth/70 mt-1">Confirmed for 2 Guests</p>
        </div>
        <CheckCircle className="text-maroon" size={32} />
      </div>

      {/* Packing Checklist */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-4">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold">Guest Packing Checklist</h3>
          <span className="text-[10px] font-bold text-maroon">
            {checklist.filter(i => i.checked).length}/{checklist.length} DONE
          </span>
        </div>
        <div className="bg-white rounded-[40px] shadow-sm border border-gold/10 p-8">
          <div className="grid grid-cols-1 gap-1">
            {checklist.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="flex items-center gap-4 py-3 group transition-all"
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                  item.checked ? 'bg-maroon text-cream' : 'border-2 border-gold/20'
                }`}>
                  {item.checked && <Check size={12} strokeWidth={4} />}
                </div>
                <span className={`text-sm transition-all text-left flex-1 ${
                  item.checked ? 'text-earth/30 line-through' : 'text-earth/80'
                }`}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bride & Groom Pre-Wedding Checklist */}
      <div className="space-y-4">
        <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">The Couple's Checklist</h3>
        <div className="bg-maroon p-8 rounded-[40px] text-cream space-y-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-apricot">
              <ListTodo size={24} />
            </div>
            <div>
              <h4 className="font-serif text-xl">Pre-Wedding Prep</h4>
              <p className="text-xs opacity-60">Clothes, jewelry & rituals</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              "Pick up Sherwani from designer",
              "Lehenga final trial & fitting",
              "Jewelry collection from bank",
              "Mehendi artist confirmation",
              "Vows finalization"
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-3 text-sm opacity-90">
                <div className="w-1.5 h-1.5 rounded-full bg-apricot/40" />
                {task}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dance Choreography */}
      <div className="space-y-4">
        <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">Dance Choreography</h3>
        <div className="grid grid-cols-1 gap-4">
          {[
            { title: "Groom's Side Medley", duration: "4:30", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop" },
            { title: "Bride's Side Performance", duration: "5:15", img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=400&auto=format&fit=crop" },
            { title: "Couple's Special Waltz", duration: "3:45", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop" }
          ].map((video, i) => (
            <div key={i} className="relative h-48 rounded-[32px] overflow-hidden shadow-sm group">
              <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent flex flex-col justify-end p-6 text-cream">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-serif text-lg">{video.title}</h4>
                    <p className="text-[10px] opacity-60 uppercase tracking-widest">{video.duration} Mins</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-apricot">
                    <Video size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Livestream */}
      <div className="bg-ink p-8 rounded-[40px] text-cream space-y-4 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-4 opacity-20 text-apricot">
          <ExternalLink size={60} />
        </div>
        <div className="relative z-10">
          <span className="px-2 py-1 bg-maroon text-[8px] font-bold uppercase rounded border border-gold/20 tracking-widest">Upcoming</span>
          <h4 className="text-xl font-serif mt-2 text-apricot">Event Livestream</h4>
          <p className="text-xs opacity-60 mt-1">For family members joining us virtually from across the globe.</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Live in 2 Days
            </div>
            <button className="px-8 py-3 bg-maroon text-cream rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-maroon/90 transition-colors">
              Set Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
