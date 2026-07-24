import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';

// IMPORT YOUR LOCAL IMAGES HERE
// Make sure these files exist in src/assets/images/
import heroImg from '../assets/images/hero-bg.jpg';
import aboutImg from '../assets/images/about-us.jpg';
import sofaImg from '../assets/images/sofa.jpg';
import bedImg from '../assets/images/bed.jpg';
import chairImg from '../assets/images/chair.jpg';

export default function Home() {
  return (
    <>
      {/* HERO */}
   

         {/* HERO */}
<section
  className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-0"
  style={{
    backgroundImage: `url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/75 via-brand-dark/60 to-brand-dark/90" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-brand-orange uppercase tracking-[0.25em] text-[11px] md:text-sm mb-5 font-medium"
    >
      
    </motion.p>


    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
    >
      Crafted To <br />
      <span className="text-brand-orange italic">
        Inspire
      </span>{" "}
      Your Space
    </motion.h1>


    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white/80 mb-8 leading-relaxed"
    >
      Premium furniture designed with creativity, comfort, and quality —
      transforming your home into a timeless sanctuary.
    </motion.p>


    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >

      <Link
        to="/products"
        className="px-8 py-4 bg-brand-orange text-white font-medium rounded-full hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center justify-center gap-2"
      >
        Explore Our Collection
        <HiArrowRight />
      </Link>


      <Link
        to="/contact"
        className="px-8 py-4 border-2 border-white/40 text-white font-medium rounded-full hover:bg-white hover:text-brand-dark transition-all"
      >
        Contact Us
      </Link>

    </motion.div>

  </div>

</section>

       

      {/* FEATURED PRODUCTS — Sofas, Bed Frames, Event Chairs */}
      <section className="py-24 md:py-32 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-brand-orange uppercase tracking-[0.3em] text-xs mb-4 font-medium">Our Collection</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              Signature Pieces
            </h2>
            <p className="max-w-2xl mx-auto text-brand-dark/70">
              Discover our most loved designs — crafted with precision, designed for life.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: sofaImg, name: 'Modern Sofas', desc: 'Comfort redefined for modern living.' },
              { img: bedImg, name: 'Bed Frames', desc: 'Rest in timeless elegance.' },
              { img: chairImg, name: 'Elegant Chairs', desc: 'Statement seating for every occasion.' },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="overflow-hidden h-72">
                    <img 
                      src={p.img} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">{p.name}</h3>
                    <p className="text-brand-dark/60 mb-5">{p.desc}</p>
                    <Link to="/products" className="text-brand-orange font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Details <HiArrowRight />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/products"
              className="inline-block px-10 py-4 bg-brand-dark text-white rounded-full hover:bg-brand-orange transition-all shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="italic text-brand-orange">Space?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Let's design furniture that tells your story. Get in touch with our team today.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-brand-orange text-white rounded-full hover:bg-white hover:text-brand-dark transition-all shadow-xl"
            >
              Start Your Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}