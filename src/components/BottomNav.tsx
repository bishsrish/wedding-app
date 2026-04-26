import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useAuth } from '../lib/AuthContext';

interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const ArchwayIcon: React.FC<IconProps> = ({ size = 24, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 21h16M6 21v-9M18 21v-9" />
    <path d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6" />
    <path d="M12 6c1.5-1 3-1 4 0M12 6c-1.5-1-3-1-4 0" />
    <path d="M8 12c0-2.209 1.791-4 4-4s4 1.791 4 4" />
  </svg>
);

const LotusIcon: React.FC<IconProps> = ({ size = 24, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 18c-2-2-2-6 0-10 2 4 2 8 0 10Z" />
    <path d="M12 18c-2.5 0-5-2-6-5 .5-2 2-4 6-4" />
    <path d="M12 18c2.5 0 5-2 6-5-.5-2-2-4-6-4" />
    <path d="M12 18c-4 0-7-1-8-3 1-1.5 3.5-2 8-2" />
    <path d="M12 18c4 0 7-1 8-3-1-1.5-3.5-2-8-2" />
    <path d="M4 21c4 1 12 1 16 0" />
  </svg>
);

const DiyaIcon: React.FC<IconProps> = ({ size = 24, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14c0 4.418 3.582 6 8 6s8-1.582 8-6H4Z" />
    <path d="M10 20v2h4v-2" />
    <path d="M12 10c1.5-1.5 1.5-4.5 0-6-1.5 1.5-1.5 4.5 0 6Z" />
  </svg>
);

const NagadaIcon: React.FC<IconProps> = ({ size = 24, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="7.5" cy="9" rx="3.5" ry="2" />
    <ellipse cx="16.5" cy="11" rx="4.5" ry="2.5" />
    <path d="M4 9c0 3 1.5 6 3.5 6s3.5-3 3.5-6" />
    <path d="M12 11c0 4 2 8 4.5 8s4.5-4 4.5-8" />
    <path d="M5 12l2-3 2 3M6 13l3-4M13 15l3.5-4 3.5 4M14 16l5-5" />
  </svg>
);

const SafaUserIcon: React.FC<IconProps> = ({ size = 24, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    <circle cx="12" cy="8" r="5" />
    <path d="M7 6c1.5-1.5 5-2 10 1" />
    <path d="M7 8.5c1.5-1.5 5-2 10 1" />
    <path d="M7 4c2-2 6-2 10 0" />
  </svg>
);

const DashboardIcon: React.FC<IconProps> = ({ size = 24, strokeWidth = 2, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const BottomNav = () => {
  const { user } = useAuth();
  
  const guestItems = [
    { icon: ArchwayIcon, label: 'Home', path: '/' },
    { icon: LotusIcon, label: 'Camera', path: '/camera' },
    { icon: DiyaIcon, label: 'Guide', path: '/info' },
    { icon: NagadaIcon, label: 'Feed', path: '/feed' },
    { icon: SafaUserIcon, label: 'Profile', path: '/profile' },
  ];

  const plannerItems = [
    { icon: DashboardIcon, label: 'Dashboard', path: '/planner-dashboard' },
    { icon: SafaUserIcon, label: 'Profile', path: '/profile' },
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
