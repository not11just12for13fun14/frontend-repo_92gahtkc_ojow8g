import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const GlassButton = ({ children, icon: Icon, href }) => (
  <a
    href={href || '#'}
    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white shadow-[0_0_40px_rgba(99,102,241,0.2)] backdrop-blur-md transition-all hover:border-indigo-300/60 hover:bg-white/20 hover:shadow-[0_0_80px_rgba(99,102,241,0.35)]"
  >
    <span className="absolute inset-0 -z-0 bg-gradient-to-r from-indigo-500/20 via-cyan-400/10 to-fuchsia-400/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100 pointer-events-none" />
    {Icon && <Icon className="h-5 w-5 drop-shadow" />}
    <span className="font-medium tracking-wide">{children}</span>
  </a>
);

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Holographic gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[40vmax] w-[40vmax] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[45vmax] w-[45vmax] rounded-full bg-fuchsia-500/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-1/2 h-[35vmax] w-[35vmax] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div style={{ y, opacity }} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
            <span className="text-sm text-slate-200/80">Interface Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            Yadu Example
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-lg text-slate-200/90 md:text-xl"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mx-auto max-w-2xl text-slate-300"
          >
            A developer who creates futuristic and animated digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            <GlassButton icon={Rocket} href="#projects">
              View Projects
            </GlassButton>
            <GlassButton icon={Mail} href="#contact">
              Contact Me
            </GlassButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle scanner line */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />
    </section>
  );
}
