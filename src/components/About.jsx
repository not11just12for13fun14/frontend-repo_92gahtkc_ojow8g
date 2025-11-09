import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950/40 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-52 w-52 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_60px_rgba(99,102,241,0.15)]"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl border border-white/20 bg-white/10 p-2 shadow-[0_0_30px_rgba(99,102,241,0.35)]">
              <User className="h-5 w-5 text-cyan-300" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-[160px,1fr]">
            <motion.div
              initial={{ rotate: -8, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.25),transparent_55%)]" />
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=600&auto=format&fit=crop"
                alt="Profile"
                className="relative z-10 h-full w-full rounded-xl object-cover mix-blend-screen"
              />
            </motion.div>
            <div className="space-y-4 text-slate-200/90">
              <p>
                I craft interfaces that feel alive: soft hologram glows, glass panels, and motion that guides without distracting. My goal is to merge clarity with futuristic aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-300/90 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">Email<br/><span className="text-white/90">example@domain.com</span></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">Phone<br/><span className="text-white/90">+00 000 000 0000</span></div>
                <a href="#" className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition hover:border-cyan-300/50 hover:bg-white/10">LinkedIn<br/><span className="text-white/90">@yadu</span></a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
