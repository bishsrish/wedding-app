import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Camera, HelpCircle, MessageSquare, User, LayoutDashboard } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useAuth } from '../lib/AuthContext';

export const BottomNav = () => {
  const { user } = useAuth();
  
  const guestItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Camera, label: 'Camera', path: '/camera' },
    { icon: HelpCircle, label: 'Guide', path: '/info' },
    { icon: MessageSquare, label: 'Feed', path: '/feed' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  const plannerItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/planner-dashboard' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  const navItems = user?.role === 'planner' ? plannerItems : guestItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-cream/90 backdrop-blur-xl border-t border-gold/10 px-6 py-4 flex justify-between items-center z-50 rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      {navItems.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            cn(
              'flex flex-col items-center gap-1.5 transition-all duration-300',
              isActive ? 'text-maroon scale-110' : 'text-earth/40 hover:text-maroon'
            )
          }
        >
          {({ isActive }) => (
            <>
              <div className={cn(
                "p-1 rounded-xl transition-all relative",
                isActive ? "bg-maroon/5" : ""
              )}>
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-maroon"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
              <span className={cn(
                "text-[9px] uppercase font-bold tracking-[0.15em]",
                isActive ? "opacity-100" : "opacity-60"
              )}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
