"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ahmad R.",
    role: "Kolektor",
    text: "Safir Noir memiliki kedalaman aroma yang luar biasa. Oud-nya sangat seimbang dengan sentuhan cokelat, menciptakan wewangian canggih yang bertahan sepanjang hari. Masya Allah (ما شاء الله).",
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Pencinta Parfum",
    text: "Elnabil Crystal adalah aroma khas baru saya. Sangat lembut namun meninggalkan kesan yang begitu melekat. Benar-benar pengalaman yang mewah.",
  },
  {
    id: 3,
    name: "Faisal H.",
    role: "Pengusaha",
    text: "Presentasi dan kualitas cairannya berkelas dunia. Anda bisa merasakan hasrat yang sesungguhnya dalam meracik parfum ini.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark text-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.2em] text-brand-gold text-sm font-sans mb-4">
            Kata Mereka (آراء عملائنا)
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Testimoni
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-500"
            >
              <div className="text-brand-gold text-4xl font-serif mb-6">"</div>
              <p className="font-sans text-brand-light/80 text-lg leading-relaxed mb-8 italic flex-grow">
                {testimonial.text}
              </p>
              <div className="mt-auto">
                <p className="font-serif text-xl mb-1">{testimonial.name}</p>
                <p className="font-sans text-xs uppercase tracking-widest text-brand-gold">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
