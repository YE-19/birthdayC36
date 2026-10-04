import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import photo1 from '../assets/photo1.jpg';

const Memories = () => {
  const [selected, setSelected] = useState(null);

  const photo = {
    id: 1,
    url: photo1,
    message: 'i love you',
    date: '',
  };

  const navigate = useNavigate();

  return (
    // منع السكرول نهائياً وتثبيت الشاشة
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

      {/* ── Edge Bars ── */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />

      {/* ── Corner Ornaments ── */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-l-2 border-blue-500/50" />
      <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-r-2 border-blue-500/50" />
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-l-2 border-blue-500/50" />
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-blue-500/50" />

      {/* ── Fairy Lights ── */}
      <div className="absolute top-0 left-0 w-full flex justify-around px-6 pt-3 md:pt-5 z-20 pointer-events-none">
        <div className="absolute top-[14px] md:top-[22px] left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-px h-2 md:h-3 bg-zinc-600" />
            <motion.div
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.92, 1.08, 0.92] }}
              transition={{
                duration: 1.8 + i * 0.15,
                repeat: Infinity,
                delay: i * 0.18,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center will-change-transform"
            >
              <div className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-400 blur-md opacity-60" />
              <div className="relative w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-300 shadow-[0_0_8px_#93c5fd,0_0_20px_#3b82f6]" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-1 mb-4 sm:mb-5 md:mb-6 z-10 mt-4 md:mt-0"
      >
        <p className="text-blue-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em]">
          ✦ Captured Moment ✦
        </p>
        <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
          Special Memory
        </h2>
        <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-1" />
      </motion.div>

      {/* ── Single Photo Showcase ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.7,
          type: 'spring',
          stiffness: 90,
        }}
        whileHover={{ scale: 1.03 }}
        onClick={() => setSelected(photo)}
        className="relative cursor-pointer group z-10 w-full max-w-[260px] sm:max-w-[290px] md:max-w-[330px]"
      >
        <div className="absolute -inset-[2px] md:-inset-[3px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-indigo-500/20 group-hover:from-blue-500/50 group-hover:via-cyan-400/40 group-hover:to-indigo-500/50 blur-md transition-all duration-500" />

        <div className="relative bg-zinc-900 p-2.5 pb-4 sm:p-3 sm:pb-5 border border-zinc-700 group-hover:border-blue-500/60 transition-colors duration-400 rounded-2xl shadow-2xl shadow-black/70 flex flex-col items-center">
          <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-10 h-4 md:w-12 md:h-5 bg-zinc-700/60 border border-zinc-600/40 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 transition-all duration-400 rounded-sm z-10" />

          <div className="w-full h-44 sm:h-52 md:h-60 overflow-hidden rounded-xl bg-zinc-950 relative flex items-center justify-center">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
            <img
              src={photo.url}
              alt="Memory 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="w-full mt-3 flex items-center justify-center gap-1.5 px-2">
            <div className="h-px flex-1 bg-zinc-700 group-hover:bg-blue-500/40 transition-colors duration-400" />
            <span className="text-zinc-600 group-hover:text-blue-400 text-[10px] md:text-xs transition-colors duration-400">
              ✦
            </span>
            <div className="h-px flex-1 bg-zinc-700 group-hover:bg-blue-500/40 transition-colors duration-400" />
          </div>
        </div>
      </motion.div>

      {/* ── Under Photo Text: "i love you" ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col items-center gap-1 mt-4 sm:mt-5 z-10"
      >
        <div className="flex items-center gap-2.5">
          <div className="h-px w-8 md:w-10 bg-gradient-to-r from-transparent to-blue-500/50" />
          <span className="text-blue-400 text-[11px] md:text-xs">💙</span>
          <div className="h-px w-8 md:w-10 bg-gradient-to-l from-transparent to-blue-500/50" />
        </div>
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 font-medium tracking-wide">
          i love you
        </p>
      </motion.div>

      {/* ── Next Button ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="pt-4 sm:pt-5 md:pt-6 flex justify-center pb-2 z-10"
      >
        <button
          onClick={() => navigate('/vid')}
          className="relative group cursor-pointer inline-flex items-center gap-2 md:gap-3 bg-blue-500 hover:bg-blue-400 text-white px-7 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide transition-all duration-300 shadow-lg shadow-blue-900/50 overflow-hidden"
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          <span className="relative">See your last surprise</span>
          <span className="relative text-base md:text-lg transition-transform group-hover:translate-x-1 duration-300">
            →
          </span>
        </button>
      </motion.div>

      {/* ════════════════════════════════
          LIGHTBOX MODAL
          ════════════════════════════════ */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 touch-auto"
          >
            <motion.div
              key="lightbox-card"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl md:max-w-2xl max-h-[92dvh] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/80"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-cyan-500/20 to-indigo-500/40 blur-sm" />

              <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-2xl overflow-y-auto custom-scrollbar flex flex-col">
                <div className="w-full h-[3px] bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-500 shrink-0" />

                <div className="w-full h-[45vh] sm:h-[50vh] md:h-[58vh] overflow-hidden relative shrink-0 bg-black flex items-center justify-center">
                  <img
                    src={selected.url}
                    alt={`Memory ${selected.id}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
                </div>

                <div className="px-5 md:px-7 pb-6 pt-3 flex-1 flex flex-col items-center bg-zinc-900">
                  <p className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 text-base sm:text-lg md:text-xl leading-relaxed text-center px-2 font-medium">
                    "i love you"
                  </p>

                  <div className="mt-4 md:mt-5 flex justify-center w-full">
                    <button
                      onClick={() => setSelected(null)}
                      className="relative group inline-flex items-center gap-2 px-8 py-2 md:px-10 md:py-2.5 rounded-full bg-zinc-800 hover:bg-blue-500 border border-zinc-700 hover:border-blue-400 text-zinc-300 hover:text-white text-xs md:text-sm font-medium tracking-wide transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      <span className="relative">Close Memory</span>
                      <span className="relative text-sm">✕</span>
                    </button>
                  </div>
                </div>

                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent shrink-0" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Memories;