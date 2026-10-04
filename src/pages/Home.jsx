import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import photo2 from '../assets/photo2.jpeg';

const Home = () => {
  const navigate = useNavigate();

  return (
    // استخدام fixed و touch-none لمنع السكرول تماماً
    <div className="fixed inset-0 h-[100dvh] w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden touch-none selection:bg-blue-500">
      {/* ── Ambient Glow Orbs ── */}
      <div className="absolute top-[-15%] left-[-5%] w-96 h-96 bg-blue-600 rounded-full blur-[100px] md:blur-[140px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-cyan-500 rounded-full blur-[90px] md:blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-indigo-900 rounded-full blur-[100px] md:blur-[160px] opacity-15 pointer-events-none" />

      {/* ── Decorative Grid Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Top Edge Bar ── */}
      <div className="absolute top-0 left-0 w-full flex items-center gap-0">
        <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-cyan-500" />
        <div className="h-[3px] w-8 bg-blue-400" />
      </div>

      {/* ── Corner Ornaments ── */}
      <div className="absolute top-5 left-5 md:top-6 md:left-6 w-10 h-10 border-t-2 border-l-2 border-blue-500/60 rounded-tl-sm" />
      <div className="absolute top-5 right-5 md:top-6 md:right-6 w-10 h-10 border-t-2 border-r-2 border-blue-500/60 rounded-tr-sm" />
      <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 w-10 h-10 border-b-2 border-l-2 border-blue-500/60 rounded-bl-sm" />
      <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6 w-10 h-10 border-b-2 border-r-2 border-blue-500/60 rounded-br-sm" />

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -(35 + Math.random() * 55)],
              x: [(Math.random() - 0.5) * 25],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeOut',
            }}
            className="absolute rounded-full will-change-transform"
            style={{
              top: `${15 + Math.random() * 75}%`,
              left: `${5 + Math.random() * 90}%`,
              width: `${2.5 + Math.random() * 3.5}px`,
              height: `${2.5 + Math.random() * 3.5}px`,
              background: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#22d3ee' : '#a5b4fc',
              boxShadow: '0 0 8px rgba(96, 165, 250, 0.6)',
            }}
          />
        ))}
      </div>

      {/* ── Main Content Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-3 sm:py-6 mx-auto max-w-lg w-full"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-2 sm:mb-3"
        />

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-400 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-1 sm:mb-2"
        >
          ✦ SOMETHING SPECIAL IS WAITING ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] mb-1.5 sm:mb-2 tracking-tight drop-shadow-md"
        >
          A Gift{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            just for You
          </span>
        </motion.h1>

        {/* ── Photo 2 (Prominent Royal Portrait Frame) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, type: 'spring' }}
          className="relative my-2 sm:my-3 group cursor-pointer"
        >
          {/* Pulsing Aura */}
          <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl p-[3px] sm:p-[3.5px] bg-gradient-to-tr from-blue-400 via-cyan-300 to-indigo-500 overflow-hidden shadow-2xl shadow-black">
            <img
              src={photo2}
              alt="Mohamed"
              className="w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Royal Crown Badge */}
          <motion.div
            animate={{ y: [0, -5, 0], rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-4 -right-2 text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] select-none"
          >
            👑
          </motion.div>
        </motion.div>

        {/* ── Heartfelt Message Card (Larger, High-Contrast & Enchanting) ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative my-2.5 sm:my-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-700/70 backdrop-blur-xl shadow-xl shadow-black/60 max-w-sm sm:max-w-md w-full"
        >
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-zinc-100 leading-relaxed drop-shadow-sm font-normal">
            "I am always proud of you, and I see you as the best person in the world."
          </p>
          
          <div className="flex items-center justify-center gap-3 my-2 opacity-70">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <span className="text-cyan-400 text-xs">✦</span>
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          <p className="font-serif italic text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 font-medium tracking-wide">
            I hope this year is full of success for you. ✨
          </p>
        </motion.div>

        {/* ── Main Action Button ── */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 45px rgba(59, 130, 246, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/BirthdayCake')}
          className="relative group inline-flex cursor-pointer items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] hover:bg-right text-white px-9 sm:px-14 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg tracking-wide transition-all duration-500 shadow-xl shadow-blue-900/60 overflow-hidden mt-1"
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
          <span className="relative">Open Your Surprise</span>
          <span className="relative text-lg sm:text-xl">🎁</span>
        </motion.button>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-3 sm:mt-5"
        />
      </motion.div>

      {/* ── Bottom Edge Bar ── */}
      <div className="absolute bottom-0 left-0 w-full flex items-center">
        <div className="h-[3px] flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent" />
        <div className="h-[3px] w-8 bg-blue-400" />
      </div>

      {/* ── Side Roman Numerals ── */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 select-none pointer-events-none hidden md:flex">
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        <p className="text-zinc-600 text-xs tracking-[0.3em] font-light" style={{ writingMode: 'vertical-rl' }}>
          BIRTHDAY • CELEBRATION
        </p>
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
      </div>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 select-none pointer-events-none hidden md:flex">
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        <p className="text-zinc-600 text-xs tracking-[0.3em] font-light" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          WITH LOVE • FOR YOU
        </p>
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
      </div>
    </div>
  );
};

export default Home;