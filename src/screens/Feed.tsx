import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, Share2, Plus, Megaphone, Play, Camera, BarChart2, HelpCircle, Cake, MoreHorizontal, BookOpen, Search, PartyPopper } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../lib/AuthContext';

const POSTS = [
  {
    id: '1',
    author: 'Rahul Sharma',
    role: 'Cousin',
    content: 'Just reached Udaipur! The palace is breathtaking. Can\'t wait for the Haldi tomorrow! 💛',
    likes: 24,
    time: '2h ago',
    imageUrl: 'https://picsum.photos/seed/palace/800/600'
  },
  {
    id: '2',
    author: 'Priya Verma',
    role: 'Bridesmaid',
    content: 'Divesh, you better be ready for the Sangeet performance! We have been practicing for months! 💃🕺',
    likes: 42,
    time: '4h ago'
  }
];

export const Feed = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const { user } = useAuth();

  const canPostAnnouncement = user?.role === 'couple' || user?.role === 'planner';

  return (
    <div className="p-6 space-y-8 pb-24 bg-cream min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-ink">Social Hub</h1>
        {canPostAnnouncement && (
          <button className="flex items-center gap-2 px-4 py-2 bg-maroon text-cream rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-maroon/90 transition-colors">
            <Megaphone size={14} />
            Announce
          </button>
        )}
      </div>

      {/* Feed Tabs */}
      <div className="flex gap-4 border-b border-gold/10 overflow-x-auto no-scrollbar">
        {['feed', 'polls', 'guestbook', 'lost-found', 'celebrations'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-4 text-[10px] font-bold uppercase tracking-widest transition-all relative whitespace-nowrap",
              activeTab === tab ? "text-maroon" : "text-earth/40"
            )}
          >
            {tab.replace('-', ' ')}
            {activeTab === tab && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-maroon" />
            )}
          </button>
        ))}
      </div>

      {activeTab === 'feed' && (
        <>
          {/* Feed Posts */}
          <div className="space-y-6">
            {POSTS.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[32px] shadow-sm border border-gold/10 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cream overflow-hidden border border-gold/10">
                      <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} referrerPolicy="no-referrer" className="transition-all" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">{post.author}</h4>
                      <p className="text-[10px] text-earth/60 uppercase tracking-widest">{post.role}</p>
                    </div>
                    <span className="ml-auto text-[10px] text-earth/30">{post.time}</span>
                  </div>
                  
                  <p className="text-sm text-earth/80 leading-relaxed mb-4">{post.content}</p>
                  
                  {post.imageUrl && (
                    <div className="rounded-2xl overflow-hidden mb-4 border border-gold/10">
                      <img src={post.imageUrl} alt="Post" className="w-full object-cover transition-all" referrerPolicy="no-referrer" />
                    </div>
                  )}

                  <div className="flex items-center gap-6 pt-4 border-t border-gold/10">
                    <button className="flex items-center gap-2 text-earth/40 hover:text-maroon transition-colors">
                      <Heart size={18} />
                      <span className="text-xs font-bold">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-earth/40 hover:text-maroon transition-colors">
                      <MessageCircle size={18} />
                      <span className="text-xs font-bold">Reply</span>
                    </button>
                    <button className="text-[10px] font-bold text-gold uppercase tracking-widest hover:text-maroon transition-colors">GIF</button>
                    <button className="ml-auto text-earth/40 hover:text-maroon transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'polls' && (
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center text-maroon">
                <BarChart2 size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-ink">The Big Poll</h4>
                <p className="text-xs text-earth/40">Cast your vote!</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-bold text-earth/80">Would you like a sushi counter or tiramisu?</p>
              <div className="space-y-3">
                {[
                  { label: "Sushi Counter 🍣", percentage: 65, color: "bg-maroon" },
                  { label: "Tiramisu 🍮", percentage: 35, color: "bg-gold/20" }
                ].map((option, i) => (
                  <button key={i} className="w-full text-left space-y-2 group">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-earth/60 group-hover:text-maroon transition-colors">
                      <span>{option.label}</span>
                      <span>{option.percentage}%</span>
                    </div>
                    <div className="h-2 bg-cream rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${option.percentage}%` }}
                        className={`h-full ${option.color}`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'guestbook' && (
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-ink">Digital Guestbook</h4>
                <p className="text-xs text-earth/40 uppercase tracking-widest">Leave a note for the couple</p>
              </div>
            </div>
            <textarea 
              placeholder="Your message here..."
              className="w-full bg-cream/30 border border-gold/10 rounded-3xl p-6 text-sm focus:ring-2 focus:ring-maroon/10 outline-none min-h-[120px] text-ink placeholder:text-earth/30"
            />
            <button className="w-full py-4 bg-maroon text-cream rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-maroon/90 transition-colors">
              Post Message
            </button>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Rahul & Sneha', msg: 'Can\'t wait for the Sangeet night! 💃🕺', time: '2h ago' },
              { name: 'Auntie Meena', msg: 'God bless the beautiful couple. 🧿', time: '5h ago' }
            ].map((entry, i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm border border-gold/10">
                <p className="text-sm text-earth/80 italic leading-relaxed">"{entry.msg}"</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gold/10">
                  <span className="text-[10px] font-bold text-maroon uppercase tracking-widest">— {entry.name}</span>
                  <span className="text-[10px] text-earth/30 uppercase tracking-widest">{entry.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'lost-found' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center px-4">
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold">Lost & Found Board</h3>
            <button className="text-[10px] font-bold text-maroon uppercase tracking-widest hover:underline">+ Post Item</button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { item: "Gold Earring", loc: "Poolside Area", time: "10 AM Today", status: "Lost", color: "text-maroon bg-maroon/5 border-maroon/10" },
              { item: "iPhone 13 Case", loc: "Grand Ballroom", time: "Last Night", status: "Found", color: "text-gold bg-gold/5 border-gold/10" }
            ].map((entry, i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm border border-gold/10 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${entry.color}`}>
                  <HelpCircle size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-ink">{entry.item}</h4>
                    <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded-full border ${entry.color}`}>{entry.status}</span>
                  </div>
                  <p className="text-[10px] text-earth/40 mt-1">{entry.loc} • {entry.time}</p>
                </div>
                <button className="p-2 bg-cream rounded-full text-earth/40 hover:text-maroon transition-colors">
                  <MessageCircle size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'celebrations' && (
        <div className="space-y-6">
          <div className="bg-gold/5 p-8 rounded-[40px] border border-gold/10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-maroon shadow-sm">
                <Cake size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-ink">Today's Celebrations</h4>
                <p className="text-xs text-earth/60">Wish your fellow guests!</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Sonia Mehra", designation: "Bestie of the Bride", event: "Birthday", msg: "Happy Birthday Sonia! 🎂" },
                { name: "The Kapoors", designation: "Family Friends", event: "25th Anniversary", msg: "Happy Anniversary! 🥂" }
              ].map((wish, i) => (
                <div key={i} className="bg-white/60 p-4 rounded-2xl backdrop-blur-md flex items-center gap-4 border border-gold/10">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-bold text-ink">{wish.name}</h5>
                      <span className="text-[8px] text-maroon font-bold uppercase tracking-widest">({wish.designation})</span>
                    </div>
                    <p className="text-[10px] text-earth/40 uppercase tracking-widest">{wish.event}</p>
                  </div>
                  <button className="px-4 py-2 bg-maroon text-cream rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm hover:bg-maroon/90 transition-colors">
                    Wish
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-6 w-14 h-14 rounded-full bg-maroon text-cream shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 border border-gold/20">
        <Plus size={28} />
      </button>
    </div>
  );
};
