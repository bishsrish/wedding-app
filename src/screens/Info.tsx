import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { MapPin, Music, HelpCircle, Lock, ChevronRight, PlayCircle, ExternalLink, Plus, Minus, Scissors, Phone, Compass, Star, Users, Heart, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../lib/AuthContext';
import { VENUE_DIRECTIONS_URL } from '../constants';

export const Info = () => {
  const location = useLocation();
  const { user } = useAuth();
  const tabs = [
    { id: 'faq', label: 'FAQs', icon: HelpCircle },
    { id: 'udaipur', label: 'Udaipur', icon: Compass },
    { id: 'services', label: 'Services', icon: Scissors },
    { id: 'map', label: 'Venue Map', icon: MapPin },
    { id: 'sangeet', label: 'Sangeet DJ', icon: Music },
    { id: 'capsule', label: 'Capsule', icon: Lock },
  ];

  const [activeTab, setActiveTab] = useState('faq');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const choreography = [
    { id: 'bride', title: "1st: Bride's Solo (Ganesh Vandana)", role: 'couple', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'chachis', title: "2nd: Chachi's Special", role: 'family', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'friends', title: "3rd: Friends Medley", role: 'friends', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'couple', title: "Last: The Couple's Grand Finale", role: 'couple', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ];

  const isLocked = (itemRole: string) => {
    if (user?.role === 'couple' || user?.role === 'planner') return false;
    return user?.role !== itemRole;
  };

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  const faqs = [
    { category: "Transport", q: "How do I get from the airport to the hotel?", a: "We have arranged private shuttles for all guests. Look for the 'C&D Wedding' sign at the arrivals gate." },
    { category: "Transport", q: "Is there parking available at the venue?", a: "Yes, valet parking is available for all wedding events at the main entrance." },
    { category: "Transport", q: "What is the best way to get around Udaipur?", a: "While we provide shuttles for events, for personal exploration, we recommend using the pre-booked cars available at the hotel concierge or Uber/Ola." },
    { category: "Transport", q: "Are there boat transfers to the island venues?", a: "Yes, for the Sangeet, boats will depart from the main jetty every 15 minutes starting at 6:30 PM." },
    { category: "Dress Code", q: "What should I wear for the Haldi?", a: "The theme is 'Vibrant Yellows'. Think comfortable cottons, linens, and bright sunny shades." },
    { category: "Dress Code", q: "Is there a specific color for the wedding?", a: "We suggest traditional Indian wear in pastels or jewel tones. Please avoid wearing pure white or pure black." },
    { category: "Dress Code", q: "Can I get help with my Saree/Turban?", a: "Yes! Draping assistants and Turban stylists will be available in the hospitality lounge 2 hours before each event." },
    { category: "Facilities", q: "Is there a salon at the hotel?", a: "Yes, the hotel has a full-service salon. We recommend booking your appointments at least 24 hours in advance." },
    { category: "Facilities", q: "What is the Wi-Fi password?", a: "The network is 'Udaipur_Palace_Guest' and the password is 'wedding2026'." },
    { category: "Facilities", q: "Are there medical facilities on-site?", a: "A 24/7 medical desk is located near the lobby. In case of emergency, use the SOS button in this app." },
    { category: "Food & Drinks", q: "Are there vegan/gluten-free options?", a: "Yes, all our buffets will have clearly marked vegan and gluten-free sections. Please inform the servers of any severe allergies." },
    { category: "Food & Drinks", q: "Is the water safe to drink?", a: "Please only drink bottled mineral water provided in your rooms and at the event venues." },
    { category: "Sightseeing", q: "When is the best time to visit the City Palace?", a: "Early morning (9:30 AM) is best to avoid the crowds and the afternoon heat." },
    { category: "Sightseeing", q: "Do I need to book tickets for the Lake Cruise?", a: "We have a private sunset cruise booked for Day 1. For other times, tickets can be bought at the jetty." },
    { category: "General", q: "Where can I find the wedding gift registry?", a: "You can find it right here in the app under the 'Gifts' section on the home screen." },
    { category: "General", q: "Is there a designated smoking area?", a: "Yes, smoking is permitted only in the outdoor designated zones. Please check with the staff for directions." },
    { category: "General", q: "Can I bring a plus one?", a: "Due to venue capacity, we can only accommodate guests named on the invitation. Thank you for understanding." },
    { category: "General", q: "What is the weather like at night?", a: "It can get a bit chilly by the lake at night. We recommend carrying a light shawl or jacket for the Sangeet." },
    { category: "General", q: "Who do I contact for lost items?", a: "Please post in the 'Lost & Found' section of the Social Hub or visit the hospitality desk." },
    { category: "General", q: "Will there be a child-care service?", a: "Yes, a dedicated kids' zone with professional nannies will be available during the Sangeet and Wedding." }
  ];

  return (
    <div className="p-6 space-y-8 bg-cream min-h-screen">
      <h1 className="text-3xl font-serif text-ink">Guest Guide</h1>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all",
              activeTab === id ? "bg-maroon text-cream shadow-lg" : "bg-white text-earth/40 border border-gold/10"
            )}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[400px] pb-12">
        {activeTab === 'faq' && (
          <div className="space-y-8">
            {Array.from(new Set(faqs.map(f => f.category))).map((category) => (
              <div key={category} className="space-y-4">
                <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold ml-4">{category}</h3>
                <div className="space-y-3">
                  {faqs.filter(f => f.category === category).map((faq, i) => {
                    const globalIndex = faqs.findIndex(f => f.q === faq.q);
                    return (
                      <div 
                        key={globalIndex} 
                        className="bg-white rounded-[24px] border border-gold/10 shadow-sm overflow-hidden transition-all duration-300"
                      >
                        <button 
                          onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left"
                        >
                          <span className="text-sm font-bold text-ink pr-4">{faq.q}</span>
                          <div className={cn(
                            "p-1.5 rounded-full transition-colors",
                            openFaq === globalIndex ? "bg-maroon text-cream" : "bg-gold/5 text-earth/40"
                          )}>
                            {openFaq === globalIndex ? <Minus size={14} /> : <Plus size={14} />}
                          </div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: openFaq === globalIndex ? 'auto' : 0, opacity: openFaq === globalIndex ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-xs text-earth leading-relaxed border-t border-gold/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'udaipur' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-[32px] border border-gold/10 shadow-sm">
              <h4 className="font-serif text-xl text-ink">Udaipur Guide</h4>
              <p className="text-xs text-earth mt-2 leading-relaxed">
                Welcome to the City of Lakes! Udaipur is known for its stunning palaces, vibrant markets, and serene waters. Here are some top picks for your free time.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">Top Restaurants & Salons</h5>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "Ambrai Restaurant", type: "Lakeside Fine Dining", rating: "4.9", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" },
                  { name: "The Royal Spa", type: "Luxury Salon", rating: "4.8", img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800&auto=format&fit=crop" },
                  { name: "Upre by 15AD", type: "Rooftop Cafe", rating: "4.7", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" }
                ].map((place, i) => (
                  <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gold/10 flex items-center gap-4 group">
                    <img src={place.img} alt={place.name} className="w-16 h-16 rounded-2xl object-cover group-hover:scale-105 transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-ink">{place.name}</h4>
                      <p className="text-[10px] text-earth/40 uppercase tracking-widest">{place.type}</p>
                    </div>
                    <div className="flex items-center gap-1 text-maroon">
                      <Star size={12} fill="currentColor" />
                      <span className="text-xs font-bold">{place.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { name: 'City Palace', dist: '0.5 km', desc: 'A majestic complex overlooking Lake Pichola. Best visited in the early morning.', img: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc6f8a?q=80&w=800&auto=format&fit=crop' },
                { name: 'Lake Pichola', dist: '1.2 km', desc: 'Take a boat ride at sunset for the most romantic views of the city.', img: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=800&auto=format&fit=crop' },
                { name: 'Jag Mandir', dist: '3.0 km', desc: 'An island palace known for its elephant statues and garden.', img: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=800&auto=format&fit=crop' }
              ].map((loc, i) => (
                <div key={i} className="bg-white rounded-[32px] shadow-sm overflow-hidden border border-gold/10 group">
                  <img src={loc.img} alt={loc.name} className="h-40 w-full object-cover group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h5 className="font-serif text-lg text-ink">{loc.name}</h5>
                      <span className="text-[10px] font-bold text-maroon bg-gold/5 px-2 py-1 rounded-full">{loc.dist}</span>
                    </div>
                    <p className="text-xs text-earth mt-2 leading-relaxed">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-8">
            {/* Salon & Mehendi Booking */}
            <div className="bg-maroon p-8 rounded-[40px] text-cream space-y-6 shadow-xl">
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-xl text-apricot">Makeup & Draping</h4>
                <Scissors className="text-apricot" />
              </div>
              <p className="text-sm opacity-80">Book your slot for professional makeup, saree draping, mehendi, or nail art services.</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="py-3 rounded-full bg-white/10 text-cream text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
                  View Slots
                </button>
                <button className="py-3 rounded-full bg-cream text-maroon text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Shadow Service */}
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gold/10 space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/5 flex items-center justify-center text-maroon">
                <Users size={32} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-ink">Want a Shadow?</h4>
                <p className="text-xs text-earth mt-2">Get a dedicated personal assistant to help you with everything from luggage to logistics.</p>
              </div>
              <button className="w-full py-4 rounded-full bg-maroon text-cream text-[10px] font-bold uppercase tracking-widest hover:bg-maroon/90 transition-colors">
                Request Assistant
              </button>
            </div>

            {/* Emergency Contacts */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">Emergency Contacts</h3>
              <div className="bg-white rounded-[40px] shadow-sm border border-gold/10 divide-y divide-gold/5">
                {[
                  { label: "Bride's Best Friend (Ananya)", phone: '+91 98765 43210' },
                  { label: "Groom's Best Friend (Vikram)", phone: '+91 98765 43211' },
                  { label: 'Hotel Front Desk', phone: '+91 12345 67890' },
                  { label: 'Your Driver (Ramesh)', phone: '+91 55555 55555' },
                  { label: 'Local Transport (Udaipur Cabs)', phone: '+91 55555 55556' },
                  { label: 'On-call Doctor', phone: '+91 55555 55557' }
                ].map((contact, i) => (
                  <div key={i} className="flex items-center justify-between p-6">
                    <div>
                      <h5 className="text-sm font-bold text-ink">{contact.label}</h5>
                      <p className="text-xs text-earth/40 mt-1">{contact.phone}</p>
                    </div>
                    <a href={`tel:${contact.phone}`} className="p-3 rounded-full bg-gold/5 text-maroon hover:bg-gold/10 transition-colors">
                      <Phone size={18} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'map' && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-[32px] shadow-sm border border-gold/10 relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop" alt="Venue" className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-ink/20 rounded-2xl">
                <button 
                  onClick={() => window.open(VENUE_DIRECTIONS_URL, '_blank')}
                  className="bg-maroon text-cream px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl hover:bg-maroon/90 transition-colors"
                >
                  <ExternalLink size={14} /> Open Directions
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Haldi @ Poolside', url: 'https://maps.google.com/?q=Poolside+Lawn+Udaipur' },
                { name: 'Sangeet @ Ballroom', url: 'https://maps.google.com/?q=Grand+Ballroom+Udaipur' },
                { name: 'Wedding @ Temple', url: 'https://maps.google.com/?q=Temple+Courtyard+Udaipur' },
                { name: 'Brunch @ Terrace', url: 'https://maps.google.com/?q=The+Terrace+Udaipur' }
              ].map((loc) => (
                <button 
                  key={loc.name} 
                  onClick={() => window.open(loc.url, '_blank')}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left border border-gold/10"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/5 text-maroon flex items-center justify-center">
                    <MapPin size={14} />
                  </div>
                  <span className="text-xs font-bold text-earth">{loc.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sangeet' && (
          <div className="space-y-8">
            {/* Sangeet Portal */}
            <div className="bg-ink p-8 rounded-[32px] text-cream space-y-6 shadow-xl">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-serif text-xl text-apricot">Sufi Night</h4>
                  <p className="text-[10px] text-apricot/60 uppercase tracking-widest mt-1">Song Requests</p>
                </div>
                <Music className="text-apricot" />
              </div>
              <p className="text-xs text-cream/60 italic leading-relaxed">
                "Lose yourself in the mystical melodies. Request your favorite Sufi tracks for the evening."
              </p>
              <input
                type="text"
                placeholder="Search for a Sufi track..."
                className="w-full bg-white/10 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-apricot/50 text-cream placeholder:text-cream/30"
              />
              <button className="w-full py-4 rounded-full bg-maroon text-cream font-bold uppercase tracking-widest text-xs hover:bg-maroon/90 transition-colors shadow-lg">
                Request Song
              </button>
            </div>

            {/* Dance Choreography Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-4">
                <h5 className="text-[10px] uppercase font-bold tracking-widest text-gold">Dance Choreography</h5>
                <span className="text-[8px] font-bold text-maroon bg-maroon/5 px-2 py-0.5 rounded-full uppercase">Sequence Guide</span>
              </div>
              
              <div className="space-y-3">
                {choreography
                  .filter(item => {
                    if (user?.role === 'couple' || user?.role === 'planner') return true;
                    return user?.role === item.role;
                  })
                  .map((item) => {
                    const locked = isLocked(item.role);
                    return (
                      <div 
                        key={item.id} 
                        className={cn(
                          "p-4 rounded-2xl border transition-all flex items-center justify-between",
                          locked ? "bg-cream border-gold/10 opacity-60" : "bg-white border-gold/10 shadow-sm"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center",
                            locked ? "bg-gold/5 text-gold" : "bg-maroon text-cream"
                          )}>
                            {locked ? <Lock size={18} /> : <PlayCircle size={24} />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-ink">{item.title}</p>
                            <p className="text-[10px] text-earth/40 uppercase tracking-widest">
                              {locked ? "Locked for your group" : "Available to learn"}
                            </p>
                          </div>
                        </div>
                        {!locked && (
                          <button 
                            onClick={() => window.open(item.video, '_blank')}
                            className="p-2 text-maroon hover:bg-maroon/5 rounded-full transition-colors"
                          >
                            <ExternalLink size={16} />
                          </button>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-gold ml-4">Recent Requests</h5>
              {[
                { title: "Afreen Afreen", requester: "Priya V." },
                { title: "Mast Qalandar", requester: "Rahul S." }
              ].map((song, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gold/10">
                  <PlayCircle size={24} className="text-maroon" />
                  <div>
                    <p className="text-sm font-bold text-ink">{song.title}</p>
                    <p className="text-[10px] text-earth/40">Requested by {song.requester}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'capsule' && (
          <div className="flex flex-col items-center justify-center text-center space-y-6 pt-12">
            <div className="w-24 h-24 rounded-full bg-gold/5 flex items-center justify-center text-maroon shadow-inner">
              <Lock size={48} />
            </div>
            <div>
              <h4 className="text-2xl font-serif text-ink">Memory Capsule</h4>
              <p className="text-sm text-earth mt-2 max-w-xs">
                Leave a digital note or video that will be time-locked until the couple's 1st anniversary.
              </p>
            </div>
            <button className="px-8 py-4 rounded-full bg-maroon text-cream font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-maroon/90 transition-colors">
              Record a Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
