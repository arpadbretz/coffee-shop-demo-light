"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Menu } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUpText: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);

  // Parallax calculations for hero background
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  // Handle sticky nav backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 noise-bg font-sans selection:bg-terracotta-500 selection:text-slate-50">

      {/* NAVIGATION */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl tracking-tight text-slate-900 font-bold">Lumina<span className="text-terracotta-500">.</span></div>
          <div className="hidden md:flex gap-10 items-center justify-center">
            {["Rólunk", "Filozófia", "Itallap", "Galéria"].map((item, i) => (
              <a key={i} href="#" className="font-serif text-xs uppercase tracking-[0.1em] font-medium text-slate-700 hover:text-terracotta-500 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden text-slate-700 hover:text-terracotta-500 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <button className="hidden md:block bg-slate-900 border border-slate-900 text-slate-50 hover:bg-terracotta-500 hover:border-terracotta-500 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300">
            Asztalfoglalás
          </button>
        </div>
      </motion.nav>

      {/* SECTION 1: CLEAN PARALLAX HERO */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-100">
        {/* Parallax Background */}
        <motion.div
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute inset-0 z-0 h-[120%]"
        >
          {/* Light overlay to make text pop */}
          <div className="absolute inset-0 bg-white/30 z-10 backdrop-blur-[2px]"></div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=2500')] bg-cover bg-center"
          ></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUpText} className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-terracotta-500 block"></span>
              <span className="text-terracotta-500 font-serif tracking-[0.2em] font-medium uppercase text-xs md:text-sm">Világos Pörkölés</span>
              <span className="h-[1px] w-8 bg-terracotta-500 block"></span>
            </motion.div>

            <motion.h1
              variants={fadeUpText}
              className="font-serif text-6xl md:text-[8rem] text-slate-900 mb-6 leading-[0.95] tracking-tighter text-balance font-bold"
            >
              Lumina <br />
              <span className="text-outline italic font-light hover:text-terracotta-500 transition-colors duration-500 cursor-default tracking-normal">Kávézó.</span>
            </motion.h1>

            <motion.p variants={fadeUpText} className="text-slate-700 text-lg md:text-xl max-w-xl mx-auto mb-12 text-balance leading-relaxed">
              Kezdd a napot frissességgel és letisztultsággal. Skandináv minimalizmus, gondosan szelektált, tiszta ízű világos pörkölésű kávék kíséretében.
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-12 flex flex-col items-center gap-4"
          >
            <span className="text-slate-500 text-[10px] font-semibold tracking-widest uppercase mb-4">Felfedezés</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE EXPERIENCE */}
      <section className="py-32 md:py-48 px-6 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpText}
            className="flex flex-col md:flex-row justify-between items-end mb-20"
          >
            <div className="md:w-1/2">
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-4 tracking-tight">Könnyed <span className="text-terracotta-500 italic font-medium">Lendület</span></h2>
              <p className="text-slate-500 font-normal max-w-sm">Minden apró részlet a nyugodt, fókuszált napindítást szolgálja.</p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "Világos Pörkölés", num: "01", desc: "Kávéinkat világos profilra pörköljük, így a babok eredeti, gyümölcsös és virágos jegyei érvényesülnek a keserűség helyett." },
              { title: "Skandináv Tér", num: "02", desc: "Tágas, világos, natúr tölgyfával és rengeteg szobanövénnyel dekorált letisztult környezet." },
              { title: "Lassú Rituálé", num: "03", desc: "A minőséghez idő kell. Filterkávéinkat kézzel készítjük el, hogy minden ízjegyet precízen kioldjunk." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUpText}
                className="bg-white p-10 lg:p-12 border border-slate-100 shadow-sm hover:shadow-xl rounded-3xl group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta-400 to-terracotta-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 font-normal leading-relaxed text-sm lg:text-base">
                  {item.desc}
                </p>
                <div className="mt-8 font-serif text-5xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors duration-300 pointer-events-none select-none">
                  {item.num}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: VISUAL MENU WITH OVERLAYS */}
      <section className="py-24 md:py-32 px-6 bg-slate-100 relative overflow-hidden">
        {/* Subtle decorative background circle */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center relative z-10">

          {/* Menu Image Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-terracotta-500 rounded-bl-[4rem] rounded-tr-[4rem] transform translate-y-4 -translate-x-4 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0 opacity-10"></div>
            <div className="relative aspect-square overflow-hidden rounded-bl-[3rem] rounded-tr-[3rem] shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1500')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
            </div>
          </motion.div>

          {/* Menu List */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpText}
              className="mb-12"
            >
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-slate-900 mb-6">Tiszta Ízek</h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                { name: "Espresso", desc: "Savina, gyümölcsös és élénk textúra.", price: "850 Ft" },
                { name: "Cortado", desc: "Espresso minimális, lágy tejhabbal.", price: "1050 Ft" },
                { name: "Flat White", desc: "Dupla ristretto selymes tejjel, könnyed élmény.", price: "1350 Ft" },
                { name: "V60 Filter", desc: "Világos pörkölés, filteren átcsöpögtetve. Teaszerű.", price: "1650 Ft" },
                { name: "Matcha Latte", desc: "Prémium japán matcha zabtejjel lágyítva.", price: "1550 Ft" },
              ].map((item, i) => (
                <motion.div key={i} variants={slideInRight} className="group cursor-pointer bg-white p-5 rounded-2xl border border-slate-100 hover:border-terracotta-400 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-serif font-bold text-xl text-slate-800 group-hover:text-terracotta-500 transition-colors duration-300">{item.name}</h4>
                      <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                    </div>
                    <div className="text-slate-900 font-semibold text-lg bg-slate-50 px-4 py-2 rounded-xl group-hover:bg-terracotta-50 group-hover:text-terracotta-600 transition-colors">
                      {item.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GALLERY */}
      <section className="py-24 md:py-32 px-6 bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpText}
          className="max-w-7xl mx-auto mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-slate-900">Galéria</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1495474472205-51f4034fa04f?auto=format&fit=crop&q=80&w=1500",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1627448375005-4c07d3539fb0?auto=format&fit=crop&q=80&w=1000",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-sm"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${src})` }} />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <section className="bg-slate-900 pt-24 pb-8 px-6 overflow-hidden relative text-slate-100">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

            {/* Left Col */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              <motion.h3 variants={fadeUpText} className="font-serif font-bold text-4xl text-white mb-6">Találjuk meg<br />a közös hangot.</motion.h3>
              <motion.p variants={fadeUpText} className="text-slate-400 font-light mb-10 max-w-sm">
                Várunk szeretettel letisztult környezetünkben egy frissítő filterkávéra és egy jó beszélgetésre.
              </motion.p>

              <div className="space-y-6">
                {[{ icon: MapPin, t1: "1051 Budapest", t2: "Letisztult utca 8." }, { icon: Clock, t1: "H-P: 07:00 - 17:00", t2: "Szo-V: 08:30 - 15:00" }, { icon: Phone, t1: "Hívj minket", t2: "+36 30 987 6543" }].map((item, i) => (
                  <motion.div key={i} variants={fadeUpText} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-terracotta-500 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{item.t1}</p>
                      <p className="text-slate-400 font-light text-sm">{item.t2}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Col: Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
              className="h-[350px] lg:h-auto rounded-[2rem] overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent pointer-events-none transition-colors duration-500 mix-blend-color z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.538561141724!2d19.049405615626356!3d47.49896747917726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI5JzU2LjMiTiAxOcKwMDMnMDUuNyJF!5e0!3m2!1sen!2shu!4v1655000000000!5m2!1sen!2shu"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) opacity(0.9) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800">
            <p className="font-serif font-bold text-xl text-white">Lumina.</p>
            <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase">© 2026 LUMINA. Minden jog fenntartva.</p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-terracotta-500 hover:bg-terracotta-500 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
