import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const info = [
    { icon: <HiLocationMarker />, label: 'Visit Us', value: 'Jimma, Ethiopia' },
    { icon: <HiPhone />, label: 'Call Us', value: '+251 968 944 894', link: 'tel:+251968944894' },
    { icon: <HiMail />, label: 'Email Us', value: 'nufurther@gmail.com', link: 'mailto:nufurther@gmail.com' },
  ];

 const socials = [
  { Icon: FaFacebookF, href: 'https://facebook.com/yourpage', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://instagram.com/yourpage', label: 'Instagram' },
  { Icon: FaTelegram, href: 'https://t.me/yourchannel', label: 'Telegram' },
  { Icon: FaTiktok, href: 'https://tiktok.com/@yourpage', label: 'TikTok' },
];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange uppercase tracking-[0.3em] text-xs mb-4 font-medium"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-6"
          >
            Let's Create <span className="italic text-brand-orange">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-brand-dark/70 text-lg"
          >
            Have a project in mind? We'd love to hear about it.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-brand-orange uppercase tracking-[0.3em] text-xs mb-3 font-medium">Contact Info</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark">
              NU Furniture
            </h2>
          </AnimatedSection>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {info.map((i, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <a
                  href={i.link || '#'}
                  className="flex flex-col items-center text-center p-8 bg-brand-beige rounded-2xl hover:bg-brand-orange/10 hover:-translate-y-2 transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl mb-5 shadow-lg">
                    {i.icon}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-brand-dark/60 mb-2">{i.label}</div>
                  <div className="font-display text-xl font-semibold text-brand-dark">{i.value}</div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Social Media */}
          <AnimatedSection delay={0.3} className="text-center">
            <div className="text-xs uppercase tracking-wider text-brand-dark/60 mb-5">Follow Us</div>
            <div className="flex justify-center gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center text-lg hover:bg-brand-orange hover:scale-110 hover:-translate-y-1 transition-all shadow-md"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}