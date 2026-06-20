"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductExplanation() {
  return (
    <section className="py-24 md:py-32 bg-brand-light text-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
            Seni Pembuatan Parfum (فن العطور)
          </h2>
          <p className="text-brand-dark/70 font-sans max-w-2xl mx-auto text-lg">
            Temukan lapisan aroma yang rumit dan bahan-bahan langka yang mendefinisikan parfum khas kami.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Safir Noir */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-square w-full max-w-md mx-auto bg-white/50 rounded-full flex items-center justify-center p-8 overflow-hidden shadow-sm">
                 <Image src="/images/product_1.png" alt="Safir Noir Details" fill className="object-contain p-8 drop-shadow-xl hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-3xl font-serif mb-4">Safir Noir</h3>
              <p className="text-brand-dark/70 font-sans mb-6 text-lg leading-relaxed">
                Sebuah perjalanan yang memabukkan di malam hari. Safir Noir dibuka dengan sentuhan tegas saffron pedas dan lada hitam, secara perlahan mengungkap inti aroma cokelat hitam yang kaya dan mawar Turki. Aroma dasarnya menetap dalam perpaduan mendalam dari gaharu (Oud) yang telah matang dan dupa berasap, menghadirkan nuansa barakah (بركة) dalam setiap semprotannya.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-brand-dark/10 pt-6">
                <div>
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-gold mb-2">Aroma Atas</h4>
                  <p className="font-serif text-sm">Saffron, Lada Hitam</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-gold mb-2">Aroma Tengah</h4>
                  <p className="font-serif text-sm">Cokelat Hitam, Mawar</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-gold mb-2">Aroma Dasar</h4>
                  <p className="font-serif text-sm">Gaharu (Oud), Dupa, Kulit</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Elnabil Crystal */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-square w-full max-w-md mx-auto bg-white/50 rounded-full flex items-center justify-center p-8 overflow-hidden shadow-sm">
                 <Image src="/images/product_2.png" alt="Elnabil Crystal Details" fill className="object-contain p-8 drop-shadow-xl hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-3xl font-serif mb-4">Elnabil Crystal</h3>
              <p className="text-brand-dark/70 font-sans mb-6 text-lg leading-relaxed">
                Komposisi yang bercahaya dan sangat halus. Elnabil Crystal bersinar dengan aroma atas dari bergamot yang segar dan buah pir, mekar menjadi inti floral yang memancarkan melati sambac dan lily of the valley. Wewangian ini meninggalkan jejak lembut yang tak terlupakan dari musk putih dan vanila Madagaskar, menciptakan aura keindahan (جمال) sejati.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-brand-dark/10 pt-6">
                <div>
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-gold mb-2">Aroma Atas</h4>
                  <p className="font-serif text-sm">Bergamot, Pir</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-gold mb-2">Aroma Tengah</h4>
                  <p className="font-serif text-sm">Melati, Lily</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-gold mb-2">Aroma Dasar</h4>
                  <p className="font-serif text-sm">Musk Putih, Vanila</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
