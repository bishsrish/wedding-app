import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plane, Bed, FileText, Settings, LogOut, Phone, CheckCircle2, ChevronRight, ChevronDown, Beer, Users, Heart, Sparkles, ListTodo, Plus, Trash2, CheckSquare, Square, Briefcase, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../lib/AuthContext';

export const Profile = () => {
  const { user, logout } = useAuth();
  const [dietary, setDietary] = useState(() => localStorage.getItem('dietary_pref') || '');
  const [alcohol, setAlcohol] = useState(() => localStorage.getItem('alcohol_pref') || '');
  const [familyCount, setFamilyCount] = useState(() => localStorage.getItem('family_count') || '1');
  const [newDuty, setNewDuty] = useState('');

  const getRoleInfo = () => {
    switch (user?.role) {
      case 'couple': return { label: 'The Couple', icon: Heart, color: 'text-maroon bg-maroon/5' };
      case 'planner': return { label: 'Wedding Planner', icon: Briefcase, color: 'text-apricot bg-apricot/5' };
      case 'family': return { label: 'Family Member', icon: Users, color: 'text-gold bg-gold/5' };
      case 'friends': return { label: 'Guest & Friend', icon: Star, color: 'text-apricot bg-apricot/5' };
      default: return { label: 'Guest', icon: Users, color: 'text-gold bg-gold/5' };
    }
  };

  const roleInfo = getRoleInfo();
  const [duties, setDuties] = useState(() => {
    const saved = localStorage.getItem('my_duties');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, text: 'Coordinate for Aadhar card', completed: false },
      { id: 2, text: 'Look for Haldi outfits', completed: false },
      { id: 3, text: 'Pickup fabric', completed: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem('my_duties', JSON.stringify(duties));
  }, [duties]);

  const toggleDuty = (id: number) => {
    setDuties(duties.map(d => d.id === id ? { ...d, completed: !d.completed } : d));
  };

  const addDuty = () => {
    if (!newDuty.trim()) return;
    setDuties([...duties, { id: Date.now(), text: newDuty, completed: false }]);
    setNewDuty('');
  };

  const removeDuty = (id: number) => {
    setDuties(duties.filter(d => d.id !== id));
  };

  return (
    <div className="p-6 space-y-8 bg-cream min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gold/5">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover transition-all duration-500" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-maroon text-cream rounded-full flex items-center justify-center border-2 border-white shadow-lg">
            <CheckCircle2 size={16} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-serif text-ink">{user?.username || 'Srishti Bhartia'}</h2>
          <div className={cn("inline-flex items-center gap-1 mt-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest", roleInfo.color)}>
            <roleInfo.icon size={10} />
            {roleInfo.label}
          </div>
        </div>
      </div>

      {/* Digital Wedding ID */}
      <div className="bg-ink p-8 rounded-[40px] text-cream shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Digital Wedding ID</h4>
              <p className="text-xl font-serif mt-1 text-apricot">Srishti Bhartia</p>
            </div>
            <div className="w-20 h-20 bg-cream rounded-2xl flex flex-col items-center justify-center shadow-inner p-2">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GUEST_SRISHTI_4402" alt="QR" className="w-16 h-16" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <div className="text-center pt-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-apricot">Scan at venue to enter</p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-widest opacity-40">Access Level</p>
              <p className="text-xs font-bold mt-1 text-cream">All Events</p>
            </div>
            <div>
              <p className="text-[8px] font-bold uppercase tracking-widest opacity-40">Pass Status</p>
              <p className="text-xs font-bold mt-1 text-cream">Verified</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 pt-2">
            <div className="h-1.5 w-1.5 rounded-full bg-apricot animate-pulse" />
            <span className="text-[8px] font-bold uppercase tracking-widest opacity-60">Active Pass • Udaipur 2026</span>
          </div>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="bg-white p-6 rounded-[40px] shadow-sm border border-gold/10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
            <Settings size={20} />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ink">My Preferences</h4>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {/* Dietary */}
          <div className="space-y-1">
            <label className="text-[8px] font-bold uppercase tracking-widest text-gold ml-2">Dietary</label>
            <div className="relative">
              <input 
                type="text"
                value={dietary}
                onChange={(e) => {
                  setDietary(e.target.value);
                  localStorage.setItem('dietary_pref', e.target.value);
                }}
                placeholder="e.g. Vegan, Jain"
                className="w-full px-4 py-3 rounded-xl border-2 transition-all text-xs font-medium bg-cream border-transparent focus:border-gold outline-none text-ink"
              />
            </div>
          </div>

          {/* Alcohol */}
          <div className="space-y-1">
            <label className="text-[8px] font-bold uppercase tracking-widest text-gold ml-2">Alcohol</label>
            <div className="relative">
              <select 
                value={alcohol}
                onChange={(e) => {
                  setAlcohol(e.target.value);
                  localStorage.setItem('alcohol_pref', e.target.value);
                }}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all text-xs font-medium appearance-none bg-cream border-transparent focus:border-gold outline-none text-ink pr-10"
              >
                <option value="">Select</option>
                <option value="Beer">Beer</option>
                <option value="Gin">Gin</option>
                <option value="Wine">Wine</option>
                <option value="Vodka">Vodka</option>
                <option value="Whiskey">Whiskey</option>
                <option value="Tequila">Tequila</option>
                <option value="Rum">Rum</option>
                <option value="Everything">Everything</option>
                <option value="Nothing">Nothing</option>
                <option value="Mocktails">Mocktails only</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold/50">
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          {/* Family Count */}
          <div className="space-y-1">
            <label className="text-[8px] font-bold uppercase tracking-widest text-gold ml-2">Family Members</label>
            <div className="relative">
              <input 
                type="number"
                min="1"
                max="10"
                value={familyCount}
                onChange={(e) => {
                  setFamilyCount(e.target.value);
                  localStorage.setItem('family_count', e.target.value);
                }}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all text-xs font-medium bg-cream border-transparent focus:border-gold outline-none text-ink"
              />
            </div>
          </div>
        </div>
      </div>

      {/* My Duties Checklist */}
      <div className="bg-white p-6 rounded-[40px] shadow-sm border border-gold/10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
              <ListTodo size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-ink">My Duties</h4>
              <p className="text-[10px] text-earth/40">Bride's Sister Responsibilities</p>
            </div>
          </div>
          <div className="text-[10px] font-bold text-gold bg-gold/5 px-3 py-1 rounded-full uppercase tracking-widest">
            {duties.filter(d => d.completed).length}/{duties.length} Done
          </div>
        </div>

        <div className="space-y-3">
          {duties.map((duty) => (
            <div 
              key={duty.id} 
              className={cn(
                "flex items-center justify-between p-4 rounded-2xl border transition-all duration-300",
                duty.completed ? "bg-gold/5 border-transparent opacity-60" : "bg-cream border-transparent shadow-sm"
              )}
            >
              <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={() => toggleDuty(duty.id)}>
                {duty.completed ? (
                  <CheckSquare size={18} className="text-maroon" />
                ) : (
                  <Square size={18} className="text-gold" />
                )}
                <span className={cn(
                  "text-xs font-medium transition-all",
                  duty.completed ? "line-through text-earth/40" : "text-ink"
                )}>
                  {duty.text}
                </span>
              </div>
              <button 
                onClick={() => removeDuty(duty.id)}
                className="p-2 text-gold/30 hover:text-maroon transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}

          <div className="flex gap-2 pt-2">
            <input 
              type="text"
              value={newDuty}
              onChange={(e) => setNewDuty(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addDuty()}
              placeholder="Add a new duty..."
              className="flex-1 bg-cream border-transparent focus:border-gold outline-none rounded-xl px-4 py-3 text-xs font-medium text-ink transition-all"
            />
            <button 
              onClick={addDuty}
              className="w-12 h-12 rounded-xl bg-maroon text-cream flex items-center justify-center shadow-lg hover:bg-maroon/90 transition-all"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Guest Wishes & After Party */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-[32px] border border-gold/10 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
            <Heart size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-ink">Guest Wishes</h4>
            <p className="text-[10px] text-earth/40 mt-1">Birthday/Anniversary</p>
          </div>
          <button className="w-full py-2 bg-cream text-maroon text-[10px] font-bold uppercase tracking-widest rounded-full border border-gold/10 hover:bg-white transition-colors">
            Add Wish
          </button>
        </div>

        <div className="bg-white p-6 rounded-[32px] border border-gold/10 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-ink">After Party</h4>
            <p className="text-[10px] text-earth/40 mt-1">Closed Group Access</p>
          </div>
          <button className="w-full py-2 bg-cream text-maroon text-[10px] font-bold uppercase tracking-widest rounded-full border border-gold/10 hover:bg-white transition-colors">
            Must Haves
          </button>
        </div>
      </div>

      {/* Logistics Carousel */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        <div className="min-w-[280px] bg-maroon p-6 rounded-[32px] text-cream space-y-4 shadow-xl">
          <div className="flex justify-between items-start">
            <Bed size={24} className="text-apricot" />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Stay</span>
          </div>
          <div>
            <h4 className="text-xl font-serif text-apricot">Room 402</h4>
            <p className="text-xs opacity-80 mt-1">Heritage Wing | Roommate: Rahul S.</p>
          </div>
          <button className="w-full py-3 rounded-full bg-white/10 text-cream text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
            Call Housekeeping
          </button>
        </div>

        <div className="min-w-[280px] bg-white p-6 rounded-[32px] shadow-sm border border-gold/10 space-y-4">
          <div className="flex justify-between items-start text-maroon">
            <Plane size={24} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold opacity-60">Transit</span>
          </div>
          <div>
            <h4 className="text-xl font-serif text-ink">Pickup @ 2:00 PM</h4>
            <p className="text-xs text-earth/40 mt-1">Driver: Vikram | Car #4402</p>
          </div>
          <button className="w-full py-3 rounded-full bg-gold/5 text-maroon text-[10px] font-bold uppercase tracking-widest hover:bg-gold/10 transition-colors">
            Call Driver
          </button>
        </div>
      </div>

      {/* My AI Gallery (Face Recognition) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-4">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold">My AI Gallery</h3>
          <span className="text-[8px] font-bold text-maroon bg-maroon/5 px-2 py-0.5 rounded-full uppercase">8 Photos Found</span>
        </div>
        <div className="bg-white p-6 rounded-[40px] shadow-sm border border-gold/10 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-apricot/20 text-maroon flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-ink">Face Recognition Active</p>
              <p className="text-[10px] text-earth/60">We've found photos of you from the events!</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=200&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl overflow-hidden bg-cream border border-gold/5"
              >
                <img src={img} alt={`AI Found ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
            <div className="aspect-square rounded-xl bg-cream border-2 border-dashed border-gold/20 flex flex-col items-center justify-center text-gold">
              <Plus size={16} />
              <span className="text-[8px] font-bold uppercase mt-1">View All</span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Vault */}
      <div className="space-y-4">
        <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">Personal Vault</h3>
        <div className="bg-white rounded-[32px] shadow-sm border border-gold/10 divide-y divide-gold/5">
          {[
            { label: 'Aadhar Card / ID', status: 'Verified ✓', icon: FileText },
            { label: 'Flight Tickets', status: 'View PDF', icon: Plane },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-6 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/5 text-maroon flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <item.icon size={18} />
                </div>
                <span className="text-sm font-medium text-ink">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-maroon uppercase tracking-widest">{item.status}</span>
                <ChevronRight size={16} className="text-gold/30" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <button 
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-maroon text-cream font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-maroon/90 transition-colors"
        >
          <LogOut size={16} />
          Log Out
        </button>
      </div>
    </div>
  );
};
