import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Invitation = () => {
  const navigate = useNavigate();

  // Target Date: October 26 at 5:00 PM (17:00:00)
  const calculateTimeLeft = () => {
    const now = new Date();
    let currentYear = now.getFullYear();
    let target = new Date(currentYear, 9, 26, 17, 0, 0); // Month is 0-indexed: 9 = October

    // If target has passed this year, target next year
    if (now.getTime() > target.getTime()) {
      target = new Date(currentYear + 1, 9, 26, 17, 0, 0);
    }

    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPassed: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Trigger celebratory confetti on page mount
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#60a5fa', '#22d3ee', '#818cf8', '#ffffff', '#38bdf8'],
    });

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 h-[100dvh] w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden touch-none p-4">
      {/* ── Ambient Glow Orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-12%] left-[-8%] w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full blur-[70px] md:blur-[150px] opacity-15" />
        <div className="absolute bottom-[-10%] right-[-8%] w-72 h-72 md:w-96 md:h-96 bg-cyan-700 rounded-full blur-[70px] md:blur-[150px] opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-900 rounded-full blur-[80px] md:blur-[180px] opacity-10" />
      </div>

      {/* ── Grid Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Top & Bottom Edge Bars ── */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />

      {/* ── Corner Ornaments ── */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-l-2 border-blue-500/50" />
      <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-r-2 border-blue-500/50" />
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-l-2 border-blue-500/50" />
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-blue-500/50" />

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.6, 0], y: [0, -(40 + Math.random() * 60)] }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 7,
              ease: 'easeOut',
            }}
            className="absolute rounded-full will-change-transform"
            style={{
              top: `${20 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 2 === 0 ? '#60a5fa' : '#22d3ee',
            }}
          />
        ))}
      </div>

      {/* ── Main Invitation Card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col"
      >
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-indigo-500/30 blur-md" />

        <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-700/80 rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl shadow-black/80 flex flex-col items-center text-center">
          
          {/* Header Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-3 md:mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em]">
              ✦ VIP INVITATION ✦
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 mb-1"
          >
            Birthday Celebration
          </motion.h1>
          
          <p className="text-zinc-400 text-xs sm:text-sm font-light mb-4 md:mb-5">
            You're invited to celebrate this special day! ✨
          </p>

          {/* ── Countdown Timer Box ── */}
          <div className="w-full bg-zinc-950/70 border border-zinc-800 rounded-2xl p-3.5 sm:p-4 mb-4 md:mb-5 shadow-inner">
            <p className="text-blue-400 text-[10px] sm:text-xs font-medium uppercase tracking-widest mb-2.5 flex items-center justify-center gap-1.5">
              <span>⏳</span>
              <span>Countdown to the Celebration</span>
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds },
              ].map((unit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-zinc-900/90 border border-zinc-700/60 rounded-xl py-2 sm:py-2.5 px-1 relative overflow-hidden group shadow-md"
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                  <span className="font-mono text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-cyan-400">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium uppercase tracking-wider mt-0.5">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Event Details Grid ── */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full mb-5 md:mb-6">
            {/* Date & Time */}
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm mb-1.5 text-blue-400">
                📅
              </div>
              <span className="text-zinc-200 font-semibold text-xs sm:text-sm">October 26</span>
              <span className="text-cyan-400 font-medium text-[11px] sm:text-xs">5:00 PM</span>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-sm mb-1.5 text-cyan-400">
                📍
              </div>
              <span className="text-zinc-200 font-semibold text-xs sm:text-sm">Tagamoa</span>
              <span className="text-blue-400 font-medium text-[11px] sm:text-xs">Fifth Settlement</span>
            </div>
          </div>

          {/* ── Next Button ── */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 35px rgba(59, 130, 246, 0.45)',
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/dresscode')}
            className="relative group cursor-pointer w-full py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] hover:bg-right text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-500 shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <span className="relative">View Dress Code</span>
            <span className="relative text-base sm:text-lg">👔✨</span>
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
};

export default Invitation;
