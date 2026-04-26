import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Users, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Beer, 
  Utensils, 
  ChevronUp, 
  ChevronDown,
  ArrowLeft,
  LayoutDashboard,
  UserPlus,
  Plane,
  Wallet,
  Settings,
  Bell,
  Music,
  Scissors,
  FileCheck,
  Dog,
  UserCheck,
  Filter,
  Download,
  MoreVertical,
  ShoppingBag,
  ClipboardList,
  Sparkles,
  Heart,
  Megaphone,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useAuth } from '../lib/AuthContext';

// --- Types ---
type TabType = 'guests' | 'preferences' | 'transport' | 'finance' | 'operations';

interface GuestRecord {
  id: string;
  name: string;
  group: string;
  rsvpStatus: 'Attending' | 'Declined' | 'Pending';
  headcount: number;
  roomNumber: string;
  roommate: string;
  aadharUploaded: boolean;
  ticketsUploaded: boolean;
  specialNeeds: ('Pet' | 'Shadow' | 'None')[];
  alcoholPref: string;
  dietary: string;
  flightArrival: string;
  pickupRequired: boolean;
}

interface ServiceSlot {
  id: string;
  guestName: string;
  service: 'Makeup' | 'Draping' | 'Mehendi';
  time: string;
}

interface SongRequest {
  id: string;
  guestName: string;
  song: string;
  artist: string;
}

// --- Mock Data ---
const MOCK_GUESTS: GuestRecord[] = [
  { 
    id: '1', name: 'Rahul Sharma', group: "Groom's Family", rsvpStatus: 'Attending', headcount: 2, 
    roomNumber: '402', roommate: 'Sneha S.', aadharUploaded: true, ticketsUploaded: true, 
    specialNeeds: ['None'], alcoholPref: 'Whiskey', dietary: 'None',
    flightArrival: '02 Apr, 10:30 AM', pickupRequired: true
  },
  { 
    id: '2', name: 'Priya Verma', group: "Bride's Friends", rsvpStatus: 'Attending', headcount: 1, 
    roomNumber: '505', roommate: 'Ananya R.', aadharUploaded: true, ticketsUploaded: false, 
    specialNeeds: ['Shadow'], alcoholPref: 'Gin', dietary: 'Vegetarian',
    flightArrival: '02 Apr, 02:15 PM', pickupRequired: true
  },
  { 
    id: '3', name: 'Amit Patel', group: "Groom's Friends", rsvpStatus: 'Pending', headcount: 2, 
    roomNumber: 'TBD', roommate: 'TBD', aadharUploaded: false, ticketsUploaded: false, 
    specialNeeds: ['Pet'], alcoholPref: 'Beer', dietary: 'None',
    flightArrival: '03 Apr, 09:00 AM', pickupRequired: false
  },
  { 
    id: '4', name: 'Vikram Singh', group: "Groom's Family", rsvpStatus: 'Attending', headcount: 1, 
    roomNumber: '408', roommate: 'Single', aadharUploaded: true, ticketsUploaded: true, 
    specialNeeds: ['None'], alcoholPref: 'Vodka', dietary: 'Gluten-Free',
    flightArrival: '02 Apr, 11:45 AM', pickupRequired: true
  }
];

const MOCK_SLOTS: ServiceSlot[] = [
  { id: '1', guestName: 'Priya Verma', service: 'Makeup', time: '02 Apr, 04:00 PM' },
  { id: '2', guestName: 'Sneha Gupta', service: 'Mehendi', time: '02 Apr, 02:00 PM' },
  { id: '3', guestName: 'Ananya Rao', service: 'Draping', time: '03 Apr, 09:30 AM' }
];

const MOCK_SONGS: SongRequest[] = [
  { id: '1', guestName: 'Rahul Sharma', song: 'Tum Hi Ho', artist: 'Arijit Singh' },
  { id: '2', guestName: 'Amit Patel', song: 'Kala Chashma', artist: 'Badshah' }
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
      active 
        ? "bg-[#542916] text-white shadow-lg shadow-[#542916]/20" 
        : "text-gray-500 hover:bg-gray-100 hover:text-[#542916]"
    )}
  >
    <Icon size={18} />
    {label}
  </button>
);

export const PlannerDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('guests');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuests = useMemo(() => {
    return MOCK_GUESTS.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  return (
    <div className="flex h-screen bg-[#fcfcfc] font-sans text-[#1a1a1a] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white p-6 flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-[#542916] rounded-lg flex items-center justify-center text-white font-serif font-bold">P</div>
          <div>
            <h2 className="text-sm font-bold tracking-tight">Planner Pro</h2>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Admin Console</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <SidebarItem icon={Users} label="Guest CRM" active={activeTab === 'guests'} onClick={() => setActiveTab('guests')} />
          <SidebarItem icon={Settings} label="Preferences" active={activeTab === 'preferences'} onClick={() => setActiveTab('preferences')} />
          <SidebarItem icon={Plane} label="Transport" active={activeTab === 'transport'} onClick={() => setActiveTab('transport')} />
          <SidebarItem icon={Wallet} label="Finance" active={activeTab === 'finance'} onClick={() => setActiveTab('finance')} />
          <SidebarItem icon={ClipboardList} label="Operations" active={activeTab === 'operations'} onClick={() => setActiveTab('operations')} />
        </nav>

        <div className="pt-6 border-t border-gray-100">
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-maroon transition-colors"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-gray-200 bg-white px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold capitalize">{activeTab.replace('-', ' ')}</h1>
            <div className="h-4 w-[1px] bg-gray-200" />
            <p className="text-xs text-gray-400">Wedding of Charu & Divesh • April 2026</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-[#542916] transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-maroon rounded-full border-2 border-white" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200" />
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          
          {activeTab === 'guests' && (
            <div className="space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-4 gap-6">
                {[
                  { label: 'Total Guests', value: '142', icon: Users, color: 'text-blue-600 bg-blue-50' },
                  { label: 'Confirmed', value: '98', icon: CheckCircle2, color: 'text-green-600 bg-green-50' },
                  { label: 'Pending', value: '44', icon: Clock, color: 'text-amber-600 bg-amber-50' },
                  { label: 'Plus Ones', value: '12', icon: UserPlus, color: 'text-purple-600 bg-purple-50' },
                ].map((m, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className={cn("p-2 rounded-lg", m.color)}>
                        <m.icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live</span>
                    </div>
                    <p className="text-2xl font-bold">{m.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Table Controls */}
              <div className="flex items-center justify-between">
                <div className="relative w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search guests, groups, or rooms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#542916]/10 focus:border-[#542916] transition-all"
                  />
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-all">
                    <Filter size={14} /> Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-[#542916] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-[#542916]/20">
                    <Download size={14} /> Export
                  </button>
                </div>
              </div>

              {/* Guest Table */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] border-b border-gray-100">
                      <th className="px-6 py-4">Guest Info</th>
                      <th className="px-6 py-4">RSVP / Headcount</th>
                      <th className="px-6 py-4">Accommodation</th>
                      <th className="px-6 py-4">Documents</th>
                      <th className="px-6 py-4">Special Needs</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredGuests.map((guest) => (
                      <tr key={guest.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-6 py-5">
                          <p className="text-sm font-bold text-gray-900">{guest.name}</p>
                          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">{guest.group}</p>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <span className={cn(
                              "px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest",
                              guest.rsvpStatus === 'Attending' ? "bg-green-50 text-green-600" :
                              guest.rsvpStatus === 'Declined' ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                            )}>
                              {guest.rsvpStatus}
                            </span>
                            <span className="text-xs font-bold text-gray-500">×{guest.headcount}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <p className="text-xs font-bold text-gray-700">Room {guest.roomNumber}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">w/ {guest.roommate}</p>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex gap-2">
                            <div title="Aadhar Card" className={cn("p-1.5 rounded-lg border", guest.aadharUploaded ? "bg-green-50 border-green-100 text-green-600" : "bg-gray-50 border-gray-100 text-gray-300")}>
                              <FileCheck size={14} />
                            </div>
                            <div title="Travel Tickets" className={cn("p-1.5 rounded-lg border", guest.ticketsUploaded ? "bg-green-50 border-green-100 text-green-600" : "bg-gray-50 border-gray-100 text-gray-300")}>
                              <Plane size={14} />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex gap-2">
                            {guest.specialNeeds.map((need, idx) => (
                              need !== 'None' && (
                                <div key={idx} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-[9px] font-bold uppercase tracking-widest">
                                  {need === 'Pet' ? <Dog size={10} /> : <UserCheck size={10} />}
                                  {need}
                                </div>
                              )
                            ))}
                            {guest.specialNeeds.includes('None') && <span className="text-[10px] text-gray-300">—</span>}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button className="p-2 text-gray-300 hover:text-gray-600 transition-colors">
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                {/* F&B Needs */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Beer size={18} /></div>
                      <h3 className="font-bold">F&B Requirements</h3>
                    </div>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/50 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">
                        <th className="px-6 py-4">Guest</th>
                        <th className="px-6 py-4">Alcohol</th>
                        <th className="px-6 py-4">Dietary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {MOCK_GUESTS.map(g => (
                        <tr key={g.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium">{g.name}</td>
                          <td className="px-6 py-4">
                            <span className="text-xs font-bold text-gray-600">{g.alcoholPref}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={cn(
                              "text-[10px] font-bold uppercase px-2 py-1 rounded-lg",
                              g.dietary === 'None' ? "text-gray-300" : "bg-green-50 text-green-600"
                            )}>{g.dietary}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Service Slots */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Scissors size={18} /></div>
                      <h3 className="font-bold">Service Bookings</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {MOCK_SLOTS.map(slot => (
                      <div key={slot.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 shadow-sm">
                            {slot.service === 'Makeup' ? <Sparkles size={16} /> : slot.service === 'Mehendi' ? <Heart size={16} /> : <Scissors size={16} />}
                          </div>
                          <div>
                            <p className="text-sm font-bold">{slot.guestName}</p>
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{slot.service}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-gray-700">{slot.time}</p>
                          <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-0.5">Confirmed</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Entertainment */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden col-span-2">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Music size={18} /></div>
                      <h3 className="font-bold">Song Requests (DJ Queue)</h3>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{MOCK_SONGS.length} Requests</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-6">
                    {MOCK_SONGS.map(song => (
                      <div key={song.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-[#542916]/20 transition-all">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-[#542916] group-hover:text-white transition-all">
                          <Music size={16} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold">{song.song}</p>
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{song.artist}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">By {song.guestName}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'transport' || activeTab === 'finance' || activeTab === 'operations') && (
            <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                <LayoutDashboard size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Module Under Development</h3>
                <p className="text-sm text-gray-500 max-w-xs mx-auto mt-2">
                  The {activeTab} management module is currently being optimized for high-density data operations.
                </p>
              </div>
              <button 
                onClick={() => setActiveTab('guests')}
                className="px-6 py-2 bg-[#542916] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#542916]/20"
              >
                Back to Guest CRM
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
