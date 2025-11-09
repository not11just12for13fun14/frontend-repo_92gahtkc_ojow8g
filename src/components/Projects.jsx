import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI Kit',
    desc: 'A suite of animated, glassy components for futuristic dashboards.',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Holo Cards',
    desc: 'Interactive hologram cards with depth, tilt, and subtle parallax.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Quantum Particles',
    desc: 'WebGL particle field with micro-interactions and responsiveness.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProjectCard = ({ p }) => (
  <motion.a
    href="#"
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
    </div>
    <div className="relative z-10 p-5">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <ExternalLink className="h-4 w-4 text-slate-300/80" />
      </div>
      <p className="text-sm text-slate-300/90">{p.desc}</p>
    </div>
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="absolute inset-0 rounded-2xl border border-cyan-300/40 shadow-[0_0_60px_rgba(34,211,238,0.25)]" />
    </div>
  </motion.a>
);

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950/40 py-24 text-white">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-semibold"
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
