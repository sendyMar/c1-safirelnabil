"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Safir Noir",
    description: "Perpaduan intens antara gaharu (oud), cokelat hitam, dan saffron yang pedas.",
    image: "/images/product_1.png",
    price: "Rp 1.500.000",
  },
  {
    id: 2,
    name: "Elnabil Crystal",
    description: "Buket bunga yang lembut berpadu dengan kehangatan musk dan vanila.",
    image: "/images/product_2.png",
    price: "Rp 1.250.000",
  },
];

export default function ProductShowcase() {
  return (
    <section id="collection" className="py-24 md:py-32 bg-brand-light relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
            Koleksi Prestise (مجموعة استثنائية)
          </h2>
          <p className="text-brand-dark/70 font-sans max-w-2xl mx-auto text-lg">
            Diciptakan untuk penikmat modern. Setiap botol menyimpan simfoni kemewahan dan keanggunan yang tak terlupakan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 bg-white/50 rounded-sm shadow-sm flex items-center justify-center p-8">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full h-full relative"
                  style={{ perspective: 1000 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-2 group-hover:text-brand-gold transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-brand-dark/70 font-sans text-center mb-4 max-w-sm">
                {product.description}
              </p>
              <p className="text-brand-dark font-sans tracking-widest uppercase text-sm font-semibold mb-6">
                {product.price}
              </p>
              <a
                href={`https://wa.me/6282223278363?text=${encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-brand-dark text-brand-dark px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-brand-dark hover:text-brand-light transition-colors duration-300"
              >
                Beli via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
