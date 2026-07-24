import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';

// IMPORT ALL LOCAL IMAGES
import elegantSofa from '../assets/images/elegant-sofa.jpg';
import elegantBeds from '../assets/images/elegant-beds.jpg';
import berauChair from '../assets/images/berau-chair.jpg';
import Dressings from '../assets/images/Dressings.jpg';
import doors from '../assets/images/doors.jpg';
import weddingChairs from '../assets/images/wedding-chairs.jpg';
import diningTableAndChair from '../assets/images/dining-table-ad-chair.jpg';

const products = [
  { 
    name: 'Elegant Lounge Sofa', 
    category: 'Sofas', 
    img: elegantSofa, 
    desc: 'Plush comfort meets minimalist design for your living space.' 
  },
  { 
    name: 'Premium Bed Frame', 
    category: 'Bed Frames', 
    img: elegantBeds, 
    desc: 'Elegant solid-wood frame with premium finish for restful nights.' 
  },
  { 
    name: 'Berau Accent Chair', 
    category: 'Chairs', 
    img: berauChair, 
    desc: 'Stylish accent chair perfect for any room corner.' 
  },
  { 
    name: 'Classic Wardrobe', 
    category: 'Storage', 
    img: Dressings, 
    desc: 'Spacious wardrobe with elegant design for your clothing storage.' 
  },
  { 
    name: 'Custom Cabinet Doors', 
    category: 'Built-in Furniture', 
    img: doors, 
    desc: 'Premium crafted doors for wardrobes, cabinets, and built-ins.' 
  },
  { 
    name: 'Wedding Event Chair', 
    category: 'Event Chairs', 
    img: weddingChairs, 
    desc: 'Elegant seating for weddings and special occasions.' 
  },
  { 
    name: 'Dining Set', 
    category: 'Dining Furniture', 
    img: diningTableAndChair, 
    desc: 'Complete dining table and chair set for family gatherings.' 
  },
];

export default function Products() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange uppercase tracking-[0.3em] text-xs mb-4 font-medium"
          >
            Our Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-6"
          >
            What We <span className="italic text-brand-orange">Build</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-brand-dark/70 text-lg"
          >
            Every piece tells a story — of craftsmanship, comfort, and timeless design.
          </motion.p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-brand-gray/50"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-brand-dark">
                    {p.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">{p.name}</h3>
                  <p className="text-brand-dark/60 text-sm mb-5 leading-relaxed">{p.desc}</p>
                  <button className="inline-flex items-center gap-2 text-brand-orange font-medium text-sm group/btn">
                    View Details
                    <HiArrowRight className="group-hover/btn:translate-x-1 transition" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Need Something <span className="italic text-brand-orange">Custom?</span>
            </h2>
            <p className="text-brand-dark/70 text-lg mb-10 max-w-2xl mx-auto">
              We design and build furniture tailored to your space and vision.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-brand-orange text-white rounded-full hover:bg-brand-dark transition-all shadow-lg"
            >
              Request Custom Design
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}