import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, PenTool, Send } from 'lucide-react';

const services = [
  { icon: PenTool, title: 'Interface Design', desc: 'Clean, futuristic UI with glassmorphism and hologram accents.' },
  { icon: Wrench, title: 'Frontend Engineering', desc: 'Responsive, accessible, and performant user experiences.' },
  { icon: Shield, title: 'Design Systems', desc: 'Reusable components with motion guidelines and tokens.' },
];

export default function ServicesContactFooter() {
  return (
    <div className="bg-slate-950/50 text-white">
      {/* Services */}
      <section id="services" className="relative py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center text-3xl font-semibold"
          >
            Services
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
                <div className="mb-3 inline-flex rounded-xl border border-white/20 bg-white/10 p-3 text-cyan-200 shadow-[0_0_30px_rgba(99,102,241,0.35)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-slate-300/90">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center text-3xl font-semibold"
          >
            Contact Me
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Name</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/50" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/50" placeholder="you@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/50" placeholder="Tell me about your project" />
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <button className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition hover:border-cyan-300/60 hover:bg-white/20">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-300">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Yadu Example · <a href="#" className="underline decoration-dotted underline-offset-4 hover:text-white">Twitter</a> · <a href="#" className="underline decoration-dotted underline-offset-4 hover:text-white">GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
