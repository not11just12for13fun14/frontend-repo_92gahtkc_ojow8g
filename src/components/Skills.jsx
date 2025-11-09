import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, Layout } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'React / Next.js', level: 'Expert', accent: 'from-indigo-400 to-cyan-400' },
  { icon: Layout, title: 'UI / UX', level: 'Advanced', accent: 'from-fuchsia-400 to-pink-400' },
  { icon: Cpu, title: 'WebGL / 3D', level: 'Intermediate', accent: 'from-emerald-400 to-cyan-400' },
  { icon: Sparkles, title: 'Motion Design', level: 'Advanced', accent: 'from-violet-400 to-indigo-400' },
];

const SkillCard = ({ icon: Icon, title, level, accent }) => (
  <motion.div
    whileHover={{ y: -6, rotateX: 6, rotateY: -6 }}
    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_10px_40px_rgba(99,102,241,0.15)]"
  >
    <div className={`pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40 bg-gradient-to-br ${accent}`} />
    <div className="relative z-10 flex items-center gap-4">
      <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-cyan-200 shadow-[0_0_30px_rgba(99,102,241,0.35)]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-sm text-slate-300/90">{level}</p>
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950/30 py-24 text-white">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-semibold"
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <SkillCard key={s.title} icon={s.icon} title={s.title} level={s.level} accent={s.accent} />)
          )}
        </div>
      </div>
    </section>
  );
}
