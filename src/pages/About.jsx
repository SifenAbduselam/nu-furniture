import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

// IMPORT LOCAL IMAGES
import heroBgImg from '../assets/images/hero-bg.jpg';      // Same as homepage hero
import workshopImg from '../assets/images/workshop.jpg';   // Workshop/craftsmanship image
import brandPosterImg from '../assets/images/brand-poster.jpg'; // Brand/showroom image

export default function About() {
  const values = [
    { title: 'Craftsmanship', desc: 'Every joint, every stitch — done with care.' },
    { title: 'Innovation', desc: 'Modern design meets timeless tradition.' },
    { title: 'Sustainability', desc: 'Responsibly sourced materials, built to last.' },
    { title: 'Customer First', desc: 'Your vision drives every decision.' },
  ];

  return (
    <>
      {/* HERO WITH BACKGROUND IMAGE - SAME AS HOMEPAGE */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange uppercase tracking-[0.3em] text-xs mb-4 font-medium"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Designing Homes, <br />
            <span className="italic text-brand-orange">Building Dreams</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-white/80 text-lg"
          >
            A journey of passion, precision, and purpose — one piece at a time.
          </motion.p>
        </div>
      </section>

      {/* STORY - WORKSHOP IMAGE */}
      {/* STORY - WORKSHOP IMAGE */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* IMAGE */}
      <AnimatedSection>
        <div className="h-full">
          <img 
  src={workshopImg} 
  alt="Our Workshop" 
  className="rounded-2xl shadow-2xl w-full h-[520px] object-cover"
  loading="lazy"
/>
        </div>
      </AnimatedSection>

      {/* TEXT */}
      <AnimatedSection delay={0.2}>
        <div className="flex flex-col justify-center h-full lg:pr-10">
          <p className="text-brand-orange uppercase tracking-[0.3em] text-xs mb-4 font-medium">
            Who We Are
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            Crafting Beauty Since Day One
          </h2>

          <p className="text-brand-dark/70 text-lg leading-relaxed mb-5">
            At NU Furniture, we create furniture that combines modern design,
            comfort, and durability. Every piece is carefully crafted to
            transform your space into something beautiful and functional.
          </p>

          <p className="text-brand-dark/70 text-lg leading-relaxed mb-5">
            Our craftsmen focus on every detail — from selecting quality
            materials to perfecting the final finish. We believe furniture
            should not only fill a room but also express the personality and
            lifestyle of the people who live there.
          </p>

          <p className="text-brand-dark/70 text-lg leading-relaxed">
            Based in Jimma, Ethiopia, our workshop blends traditional
            craftsmanship with contemporary aesthetics, delivering pieces
            that feel as good as they look and are built to last for years.
          </p>
        </div>
      </AnimatedSection>

    </div>
  </div>
</section>

      {/* VALUES */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-brand-orange uppercase tracking-[0.3em] text-xs mb-4 font-medium">Our Values</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark">
              What We Stand For
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-5">
                    <span className="font-display text-xl font-bold text-brand-orange">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-2">{v.title}</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* POSTER - BRAND IMAGE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <img 
              src={brandPosterImg} 
              alt="NU Furniture Brand" 
              className="rounded-2xl shadow-2xl w-full" 
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}