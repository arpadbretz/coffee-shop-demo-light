"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDownRight, Instagram, Facebook } from "lucide-react";
import { useRef } from "react";

// --- Minimalist Stagger & Fade Animations ---
const staggerWrapper: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

const imageReveal: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } },
};

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Extremely subtle parallax
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <main ref={containerRef} className="bg-alabaster min-h-screen relative text-charcoal">
      {/* Global Grain Overlay for texture */}
      <div className="fixed inset-0 noise-overlay z-50"></div>

      {/* --- MINIMAL NAVIGATION --- */}
      <nav className="fixed w-full top-0 z-40 px-6 md:px-12 py-8 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="font-serif text-2xl tracking-widest uppercase pointer-events-auto">
          Lumina
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }} className="text-xs uppercase tracking-[0.2em] pointer-events-auto cursor-pointer hover:text-camel transition-colors">
          Asztalfoglalás
        </motion.div>
      </nav>

      <div className="fixed w-full bottom-0 z-40 px-6 md:px-12 py-8 mix-blend-difference text-white flex justify-between items-end pointer-events-none hidden md:flex">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="text-[10px] uppercase tracking-[0.2em] vertical-rl rotate-180">
          Budapest, Hungary
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="text-[10px] uppercase tracking-[0.2em] flex items-center gap-4 vertical-rl rotate-180">
          Scroll <ArrowRight className="w-3 h-3 rotate-90" />
        </motion.div>
      </div>

      {/* --- EDITORIAL HERO --- */}
      <section className="h-screen flex flex-col justify-end pb-20 px-6 md:px-12 relative overflow-hidden bg-alabaster">
        {/* Background Image Container with parallax */}
        <div className="absolute inset-x-6 inset-y-6 md:inset-x-12 md:inset-y-12 overflow-hidden z-0">
          <motion.div
            style={{ y: imgY }}
            initial="hidden"
            animate="visible"
            variants={imageReveal}
            className="w-full h-[120%] -top-[10%] relative"
          >
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=2500')] bg-cover bg-center"></div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: headerY }}
          variants={staggerWrapper}
          initial="hidden"
          animate="visible"
          className="relative z-20 text-white mix-blend-difference"
        >
          <div className="overflow-hidden">
            <motion.h1 variants={textFadeUp} className="font-serif text-[12vw] leading-[0.85] tracking-tight font-light uppercase">
              Tiszta
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-center gap-8 md:gap-16">
            <motion.div variants={textFadeUp} className="hidden md:block w-32 h-[1px] bg-white"></motion.div>
            <motion.h1 variants={textFadeUp} className="font-serif text-[12vw] leading-[0.85] tracking-tight font-light uppercase italic opacity-90">
              Esszencia
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* --- STATEMENT / PHILOSOPHY --- */}
      <section className="min-h-screen py-32 px-6 md:px-12 flex items-center border-b border-editorial">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/3 flex flex-col justify-between"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50 mb-8 block font-semibold">01 / Filozófia</span>
            <div className="aspect-[3/4] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1500')] bg-cover bg-center hover:scale-105 transition-transform duration-[2s] ease-out"></div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-2/3 flex flex-col justify-center"
          >
            <div className="overflow-hidden mb-12">
              <motion.h2 variants={textFadeUp} className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-light">
                A kávézás rituálé, nem puszta rutin. A világos pörkölés megőrzi a kávébab eredeti, őszinte karakterét.
              </motion.h2>
            </div>

            <div className="overflow-hidden max-w-md">
              <motion.p variants={textFadeUp} className="text-charcoal/60 leading-relaxed text-sm md:text-base mb-12">
                A minimalizmus nálunk nem a hiányról szól, hanem a lényeg kiemeléséről. Nincsenek felesleges adalékok, csak a tiszta víz, a gondosan válogatott single-origin kávébab és a precíz baristamunka.
              </motion.p>
            </div>

            <motion.div variants={textFadeUp} className="flex items-center gap-4 group cursor-pointer inline-flex w-fit">
              <span className="text-xs uppercase tracking-widest font-semibold border-b border-charcoal/30 pb-1 group-hover:border-camel group-hover:text-camel transition-colors">Történetünk</span>
              <ArrowDownRight className="w-4 h-4 text-charcoal/50 group-hover:text-camel group-hover:-rotate-45 transition-all duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- THE MENU (EDITORIAL GRID) --- */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24 border-b border-editorial pb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50 font-semibold">02 / Kínálat</span>
            <h3 className="font-serif text-xl italic font-light">Szelekció</h3>
          </div>

          <motion.div
            variants={staggerWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16"
          >
            {[
              { n: "Espresso", d: "Tiszta, világos, savas textúra.", p: "850" },
              { n: "Flat White", d: "Dupla ristretto, hajszálvékony selymes mikróhab.", p: "1350" },
              { n: "Cortado", d: "Kiegyensúlyozott espresso és tejharmónia.", p: "1050" },
              { n: "V60 Filter", d: "Lassú csepegtetős, elegáns teaszerű ízprofil.", p: "1650" },
              { n: "Matcha", d: "Ceremoniális kategória közvetlenül Japánból.", p: "1550" },
              { n: "Sütemények", d: "Helyben sült, kézműves fúziós desszertek.", p: "1200+" },
            ].map((item, i) => (
              <motion.div key={i} variants={textFadeUp} className="group relative">
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="font-serif text-3xl font-light group-hover:text-camel transition-colors duration-500">{item.n}</h4>
                  <span className="text-sm tracking-widest font-medium text-charcoal/60">{item.p}</span>
                </div>
                <p className="text-charcoal/50 text-sm tracking-wide">{item.d}</p>
                <div className="absolute -bottom-6 left-0 w-full h-[1px] bg-sand origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FULL WIDTH IMAGE BREAK --- */}
      <section className="h-[70vh] w-full overflow-hidden relative">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale opacity-80"
        ></motion.div>
        <div className="absolute inset-0 bg-alabaster/10 mix-blend-overlay"></div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <section className="py-32 px-6 md:px-12 text-center flex flex-col items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50 mb-16 block font-semibold">03 / Látogatás</span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[8vw] md:text-[6vw] leading-none tracking-tight font-light mb-16 hover:text-camel transition-colors cursor-pointer"
        >
          Foglaljon Asztalt
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl border-t border-editorial pt-16">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-charcoal/50 mb-3 block">Lokáció</span>
            <p className="font-serif text-xl font-light">1051 Budapest,<br />Letisztult utca 8.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-charcoal/50 mb-3 block">Nyitvatartás</span>
            <p className="font-serif text-xl font-light">H-P: 08:00 - 17:00<br />Szo-V: 09:00 - 15:00</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-charcoal/50 mb-3 block">Kapcsolat</span>
            <p className="font-serif text-xl font-light mb-4">+36 30 987 6543<br />hello@lumina.hu</p>
            <div className="flex gap-4">
              <Instagram className="w-4 h-4 text-charcoal/50 hover:text-camel cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-charcoal/50 hover:text-camel cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="mt-32 text-[10px] uppercase tracking-widest text-charcoal/30 flex w-full justify-between items-end border-t border-editorial pt-6">
          <span>© 2026 Lumina.</span>
          <span className="font-serif italic text-sm normal-case">By Prometheus</span>
        </div>
      </section>

    </main>
  );
}
