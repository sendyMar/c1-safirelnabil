"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-24 md:py-40 bg-brand-dark text-brand-light relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.2em] text-brand-gold text-sm font-sans mb-8"
        >
          Warisan Kami (تراثنا)
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12"
        >
          Sebuah Warisan <br className="hidden md:block" /> Kemewahan Tanpa Kompromi
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-6 font-sans text-brand-light/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Lahir dari hasrat akan sesuatu yang luar biasa, Safir Elnabil lebih dari sekadar wewangian. Ini adalah pernyataan prestise (هيبة), dirancang bagi mereka yang menghargai keindahan sejati dalam kehidupan.
          </p>
          <p>
            Diramu dari bahan-bahan paling langka di seluruh penjuru dunia, parfum kami diciptakan untuk membangkitkan emosi, kenangan, dan aura keanggunan yang tak tertandingi. Rasakan aroma yang abadi sebagai mahakarya sepanjang masa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
