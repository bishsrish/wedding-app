import React from 'react';
import { motion } from 'motion/react';
import { Gift, Heart, ExternalLink, CreditCard, ShoppingBag, ListChecks, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Gifts = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-8 pb-24 bg-cream min-h-screen">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm border border-gold/10">
          <Gift size={20} className="text-maroon" />
        </button>
        <h1 className="text-3xl font-serif text-ink">Gifts & Registry</h1>
      </div>

      {/* Bride & Groom's Wishlist */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
            <ShoppingBag size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-ink">Our Wishlist</h4>
            <p className="text-xs text-earth/40 uppercase tracking-widest mt-1">Things we'd love</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { item: "Espresso Machine", brand: "Breville", price: "₹45,000" },
            { item: "Dyson V15", brand: "Dyson", price: "₹55,000" }
          ].map((gift, i) => (
            <div key={i} className="p-4 bg-cream rounded-2xl space-y-2 border border-gold/5">
              <h5 className="text-xs font-bold text-ink">{gift.item}</h5>
              <p className="text-[10px] text-earth/40 uppercase tracking-widest">{gift.brand}</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] font-bold text-maroon">{gift.price}</span>
                <button className="p-1.5 bg-white rounded-full shadow-sm text-maroon border border-gold/10">
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full py-4 rounded-full bg-maroon text-cream font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-maroon/90 transition-colors">
          View Full Wishlist
        </button>
      </div>

      {/* Choose Your Gift (Games Reward) */}
      <div className="bg-white p-8 rounded-[40px] border border-gold/10 shadow-sm space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
            <Trophy size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-ink">Game Rewards</h4>
            <p className="text-xs text-earth/40 uppercase tracking-widest mt-1">Choose your gift</p>
          </div>
        </div>
        <p className="text-sm text-earth leading-relaxed">Participate in wedding games to earn points and choose your reward!</p>
        <button 
          onClick={() => navigate('/games')}
          className="w-full py-4 rounded-full bg-maroon text-cream font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-maroon/90 transition-colors"
        >
          Go to Games Section
        </button>
      </div>

      {/* Gift Tracking (Private for Couple/Admin) */}
      <div className="bg-ink p-8 rounded-[40px] space-y-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 text-apricot flex items-center justify-center">
            <ListChecks size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-cream">Gift Tracker</h4>
            <p className="text-xs text-cream/40 uppercase tracking-widest mt-1">Private Admin View</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { guest: "The Malhotras", gift: "Silver Coin Set", status: "Received" },
            { guest: "Ananya S.", gift: "Honeymoon Fund", status: "Pending" }
          ].map((track, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-2xl flex justify-between items-center border border-white/5">
              <div>
                <h5 className="text-xs font-bold text-cream">{track.guest}</h5>
                <p className="text-[10px] text-cream/40 uppercase tracking-widest">{track.gift}</p>
              </div>
              <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded-full ${track.status === 'Received' ? 'bg-apricot text-ink' : 'bg-white/10 text-cream/60'}`}>
                {track.status}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-cream/30 text-center italic">Only visible to the couple and planners.</p>
      </div>

      {/* Honeymoon Fund */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
            <Heart size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-ink">Honeymoon Fund</h4>
            <p className="text-xs text-earth/40 uppercase tracking-widest mt-1">Help us create memories</p>
          </div>
        </div>
        <p className="text-sm text-earth leading-relaxed">Your presence is all we need, but if you'd like to help us celebrate our first journey as a married couple, you can contribute to our honeymoon fund.</p>
        <button className="w-full py-4 rounded-full bg-maroon text-cream font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-maroon/90 transition-colors">
          Contribute to Honeymoon
        </button>
      </div>

      {/* Cash Blessings */}
      <div className="bg-gold/5 p-8 rounded-[40px] border border-gold/10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/10 text-maroon flex items-center justify-center">
            <CreditCard size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-ink">Cash Blessings</h4>
            <p className="text-xs text-earth/60 uppercase tracking-widest mt-1">Digital Shagun</p>
          </div>
        </div>
        <p className="text-sm text-earth leading-relaxed">For those who prefer the traditional way of sending blessings digitally.</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="py-3 rounded-full bg-white text-maroon text-[10px] font-bold uppercase tracking-widest border border-gold/20 hover:bg-cream transition-colors">
            UPI / Bank
          </button>
          <button className="py-3 rounded-full bg-maroon text-cream text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-maroon/90 transition-colors">
            Send Gift
          </button>
        </div>
      </div>

      {/* Charity Storytelling */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
            <Heart size={24} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-ink">Charity Contribution</h4>
            <p className="text-xs text-earth/40 uppercase tracking-widest mt-1">Spread the Joy</p>
          </div>
        </div>
        <p className="text-sm text-earth leading-relaxed">In lieu of gifts, we would be honored if you made a contribution to our chosen charity, supporting child education in rural India.</p>
        <div className="p-4 bg-cream rounded-2xl flex items-center justify-between border border-gold/5">
          <span className="text-xs font-bold text-ink uppercase tracking-widest">Education for All</span>
          <ExternalLink size={16} className="text-maroon" />
        </div>
        <button className="w-full py-4 rounded-full bg-maroon text-cream font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-maroon/90 transition-colors">
          Contribute to Charity
        </button>
      </div>
    </div>
  );
};
