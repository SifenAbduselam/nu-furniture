import { Link } from 'react-router-dom';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-14 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="font-display text-xl font-bold">NU <span className="text-brand-orange">Furniture</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Crafting premium furniture that transforms houses into homes. Based in Jimma, Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/products', label: 'Products' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-brand-orange transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-5">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <HiLocationMarker className="text-brand-orange text-xl flex-shrink-0 mt-0.5" />
                <span>Jimma, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <HiPhone className="text-brand-orange text-xl flex-shrink-0 mt-0.5" />
                <a href="tel:+251968944894" className="hover:text-brand-orange transition">+251 968 944 894</a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <HiMail className="text-brand-orange text-xl flex-shrink-0 mt-0.5" />
                <a href="mailto:nufurther@gmail.com" className="hover:text-brand-orange transition break-all">nufurther@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2026 NU Furniture. All Rights Reserved.</p>
          <p>Designed with <span className="text-brand-orange">♥</span> for beautiful spaces.</p>
        </div>
      </div>
    </footer>
  );
}