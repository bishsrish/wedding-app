import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAuth, UserRole } from '../lib/AuthContext';
import { cn } from '../lib/utils';

export const Login = () => {
  const [guestId, setGuestId] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const credentials: Record<string, { otp: string; role: UserRole }> = {
      'srishti': { otp: 'srishti', role: 'friends' },
      'shyam': { otp: 'shyam', role: 'planner' },
      'mummy': { otp: 'papa', role: 'family' },
      'rachel': { otp: 'rachel', role: 'friends' }
    };

    const userEntry = credentials[guestId.toLowerCase()];

    if (userEntry && userEntry.otp === otp.toLowerCase()) {
      login(guestId, userEntry.role);
      navigate('/');
    } else {
      setError('Invalid Guest ID or Access Code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Mandala Watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[150%] aspect-square border-[40px] border-gold rounded-full animate-spin-slow" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10 text-center"
      >
        <div className="mb-12">
          <h1 className="text-6xl font-serif text-maroon mb-2">C & D</h1>
          <p className="font-serif italic text-earth">Charu & Divesh</p>
        </div>

        <h2 className="text-2xl font-serif mb-8 text-ink">Welcome to the Union</h2>

        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-maroon text-xs font-bold uppercase tracking-widest bg-maroon/5 py-2 rounded-full"
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-left">
            <label className="text-[10px] uppercase font-bold tracking-widest text-earth/60 ml-4 mb-2 block">
              Guest ID
            </label>
            <input
              type="text"
              value={guestId}
              onChange={(e) => setGuestId(e.target.value)}
              placeholder="Enter your unique ID"
              className="w-full px-6 py-4 rounded-full bg-white border border-gold/20 shadow-sm focus:outline-none focus:border-gold transition-all text-ink"
            />
          </div>

          <div className="text-left">
            <label className="text-[10px] uppercase font-bold tracking-widest text-earth/60 ml-4 mb-2 block">
              Access Code / OTP
            </label>
            <input
              type="password"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="••••••"
              className="w-full px-6 py-4 rounded-full bg-white border border-gold/20 shadow-sm focus:outline-none focus:border-gold transition-all text-ink"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-maroon text-cream font-bold tracking-widest uppercase text-sm shadow-xl hover:bg-maroon/90 transition-colors"
          >
            Enter the Celebration
          </button>
        </form>

        <p className="mt-12 text-xs text-earth/60">
          Lost your ID? <button className="text-maroon font-semibold">Contact the Wedding Concierge</button>
        </p>
      </motion.div>
    </div>
  );
};
