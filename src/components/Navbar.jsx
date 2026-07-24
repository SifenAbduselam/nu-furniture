import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-gray'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-brand-dark' : 'text-white';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          
          <span className={`font-display text-xl font-bold tracking-tight ${textColor} transition`}>
            NU <span className="text-brand-orange">Furniture</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `${textColor} relative text-sm font-medium tracking-wide uppercase transition hover:text-brand-orange
                  ${isActive ? 'text-brand-orange' : ''}
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-brand-orange after:transition-all hover:after:w-full ${isActive ? 'after:w-full' : ''}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block px-6 py-2.5 bg-brand-orange text-white text-sm font-medium rounded-full hover:bg-brand-dark hover:scale-105 transition-all shadow-md"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`md:hidden text-2xl ${textColor}`}>
          {open ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-white ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="px-6 py-4 space-y-4">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-brand-dark text-base font-medium uppercase tracking-wide ${isActive ? 'text-brand-orange' : ''}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" onClick={() => setOpen(false)} className="inline-block px-6 py-2.5 bg-brand-orange text-white rounded-full">
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}