"use client";

import { motion } from "framer-motion";
import { Coffee, Zap, Star, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-oat text-ink">

      {/* NAVIGATION */}
      <nav className="absolute w-full top-0 z-50 px-6 py-8 flex justify-between items-center">
        <div className="font-display font-black text-4xl tracking-tighter uppercase transform -rotate-2">
          VIBE<span className="text-orange">.</span>
        </div>
        <button className="btn-vibe px-8 py-3 text-sm tracking-widest">
          Asztalfoglalás
        </button>
      </nav>

      {/* SECTION 1: BOLD HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden">
        {/* Background blobs / Shapes */}
        <motion.div
          animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20vw] -right-[10vw] w-[50vw] h-[50vw] bg-lavender rounded-full mix-blend-multiply blur-3xl opacity-70 z-0 pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10vw] -left-[10vw] w-[40vw] h-[40vw] bg-matcha rounded-full mix-blend-multiply blur-3xl opacity-70 z-0 pointer-events-none"
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: -3 }} transition={{ type: "spring", bounce: 0.5 }}
            className="bg-orange text-oat border-2 border-ink px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm mb-8 flex items-center gap-2 shadow-[4px_4px_0px_var(--color-ink)]"
          >
            <Zap className="w-4 h-4" /> Új Hullám. Új Szabályok.
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
            className="font-display font-black text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter uppercase mb-8"
          >
            Ébreszd <br />
            <span className="text-forest">Fel</span> Magad.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-medium text-ink/80 leading-relaxed"
          >
            Felejtsd el a megszokott, unalmas kávézókat. Vad, gyümölcsös pörkölések, brutális energiák és egy közösség, ami felpezsdít.
          </motion.p>
        </div>

        {/* Floating Images (Neo-brutalist pop) */}
        <motion.div
          initial={{ y: 100, opacity: 0, rotate: 10 }} animate={{ y: 0, opacity: 1, rotate: 6 }} transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:block absolute bottom-20 left-10 lg:left-32 w-64 aspect-[3/4] card-pop z-20 overflow-hidden bg-forest p-2"
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0, rotate: -10 }} animate={{ y: 0, opacity: 1, rotate: -6 }} transition={{ duration: 1, delay: 0.6 }}
          className="hidden md:block absolute top-40 right-10 lg:right-32 w-56 aspect-square card-pop z-20 overflow-hidden bg-orange p-2"
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"></div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: ENDLESS MARQUEE BANNERS */}
      <section className="py-12 bg-forest text-matcha border-y-4 border-ink transform -rotate-2 scale-105 z-30 relative shadow-2xl">
        <div className="marquee-wrapper">
          <div className="marquee-content font-display font-black text-4xl md:text-6xl uppercase tracking-widest flex items-center gap-8">
            {/* Repeat content to make infinite loop seamless */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <span>100% Arabica</span>
                <Star className="w-10 h-10 text-orange fill-orange" />
                <span>Single Origin</span>
                <Star className="w-10 h-10 text-orange fill-orange" />
                <span>Good Vibes Only</span>
                <Star className="w-10 h-10 text-orange fill-orange" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PLAYFUL MENU */}
      <section className="py-32 px-6 md:px-12 bg-oat relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase leading-none">
              A Mi<br /><span className="text-forest">Kávéink</span>
            </h2>
            <div className="bg-lavender border-2 border-ink p-6 rounded-3xl max-w-sm card-pop transform rotate-2">
              <p className="font-bold text-lg mb-2">Nem iszunk rossz kávét.</p>
              <p className="opacity-80">Minden ital, amit kiadunk a kezünkből, heti friss pörkölésű the-best-of-the-best lotokból készül.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Napi Filter", desc: "A filterkávé az új sör. Világos, gyümölcsös teaszerű élmény.", price: "1200", color: "bg-matcha" },
              { title: "Flat White", desc: "Ausztrál klasszikus, brutál selymes habbal. Nem latyak, kávé.", price: "1450", color: "bg-orange", text: "text-oat" },
              { title: "Vad Espresso", desc: "Egy korty színtiszta energia. Savas, élénk, pofonvág.", price: "850", color: "bg-lavender" },
              { title: "Iced Matcha", desc: "Folyékony zöld arany extra jéggel. Ha le akarsz lazulni.", price: "1700", color: "bg-forest", text: "text-matcha" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`card-pop p-8 flex flex-col justify-between aspect-square ${item.color} ${item.text || 'text-ink'}`}
              >
                <div>
                  <h3 className="font-display font-black text-3xl uppercase mb-4">{item.title}</h3>
                  <p className="font-medium text-lg leading-tight opacity-90">{item.desc}</p>
                </div>
                <div className="flex justify-between items-end mt-8">
                  <span className="font-display font-black text-4xl">{item.price} <span className="text-xl">Ft</span></span>
                  <div className={`w-12 h-12 rounded-full border-2 border-current flex items-center justify-center`}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: VIBE CHECK (GALLERY INSTEAD OF BORING GRID) */}
      <section className="py-24 px-6 md:px-12 bg-ink text-oat relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase mb-8">
              Közösség.<br /><span className="text-orange">Tér.</span><br /><span className="text-lavender">Zene.</span>
            </h2>
            <p className="text-xl max-w-md font-medium text-oat/80 mb-10">
              Ide nem csak dolgozni jössz. A zene hangosabb, a színek élesebbek. Ez egy kreatív hub, ahol összegyűlünk.
            </p>
            <button className="btn-vibe px-8 py-4 bg-matcha text-ink">
              Kövess Instán
            </button>
          </div>
          <div className="w-full lg:w-1/2 relative h-[600px]">
            {/* Collage of images */}
            <motion.div
              style={{ rotate: -5 }} whileHover={{ scale: 1.05, zIndex: 30 }}
              className="absolute top-0 right-10 w-64 h-80 card-pop bg-orange p-2 z-10"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
            </motion.div>
            <motion.div
              style={{ rotate: 8 }} whileHover={{ scale: 1.05, zIndex: 30 }}
              className="absolute bottom-10 left-0 w-72 h-72 card-pop bg-lavender p-2 z-20"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
            </motion.div>
            <motion.div
              style={{ rotate: -2 }} whileHover={{ scale: 1.05, zIndex: 30 }}
              className="absolute top-1/2 right-1/4 w-56 h-56 card-pop bg-matcha p-2 z-25"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-forest text-matcha px-6 relative overflow-hidden text-center border-t-4 border-ink">
        <h2 className="font-display font-black text-[18vw] leading-none uppercase tracking-tighter opacity-20 transform scale-y-125 mb-4">
          Lépj Be.
        </h2>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto font-bold uppercase tracking-widest text-sm">
          <span>1051 Budapest, Vibe Utca 10.</span>
          <div className="flex gap-4 my-6 md:my-0">
            <a href="#" className="hover:text-orange hover:-translate-y-1 transition-transform">Instagram</a>
            <a href="#" className="hover:text-orange hover:-translate-y-1 transition-transform">TikTok</a>
            <a href="#" className="hover:text-orange hover:-translate-y-1 transition-transform">Spotify Playlist</a>
          </div>
          <span>&copy; 2026 Vibe Coffee.</span>
        </div>
      </footer>

    </main>
  );
}
