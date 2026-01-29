'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('index');
  const [isNavRevealed, setIsNavRevealed] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isIndexHovered, setIsIndexHovered] = useState(false);

  // Check if we're on the homepage
  const isHomepage = pathname === '/';

  // On mount, check localStorage for previous interaction
  useEffect(() => {
    const navRevealed = localStorage.getItem('navRevealed');
    if (navRevealed === 'true') {
      setIsNavRevealed(true);
      setHasInteracted(true);
      setShouldAnimate(false); // No animation for returning users
    }
  }, []);

  // If not on homepage, always show full nav (no animation)
  useEffect(() => {
    if (!isHomepage && !isNavRevealed) {
      setIsNavRevealed(true);
      setShouldAnimate(false); // No animation when navigating to other pages
    }
  }, [isHomepage, isNavRevealed]);

  useEffect(() => {
    // Check if we're on a specific page route
    if (pathname === '/bio') {
      setActiveSection('bio');
      return;
    }
    if (pathname === '/builds') {
      setActiveSection('builds');
      return;
    }
    if (pathname === '/working') {
      setActiveSection('worklog');
      return;
    }
    if (pathname.startsWith('/thoughts')) {
      setActiveSection('thoughts');
      return;
    }
    if (pathname === '/contact') {
      setActiveSection('contact');
      return;
    }
    if (pathname === '/how-i-built-this' || pathname === '/changelog') {
      setActiveSection('contact');
      return;
    }
    if (pathname === '/community') {
      setActiveSection('community');
      return;
    }

    // Otherwise, handle scroll-based section detection for home page
    setActiveSection('index');
  }, [pathname]);

  const handleIndexClick = (e: React.MouseEvent) => {
    if (isHomepage && !isNavRevealed) {
      e.preventDefault();
      setIsNavRevealed(true);
      setHasInteracted(true);
      setShouldAnimate(true); // Only animate on first click
      localStorage.setItem('navRevealed', 'true');
    }
  };

  // All nav items that appear after index
  const navItems = [
    { href: '/bio', label: 'bio', section: 'bio' },
    { href: '/builds', label: 'builds', section: 'builds' },
    { href: '/thoughts', label: 'thoughts', section: 'thoughts' },
    { href: '/working', label: 'worklog', section: 'worklog' },
    { href: '/community', label: 'community', section: 'community' },
    { href: '/contact', label: 'contact', section: 'contact' },
  ];

  // Animation variants for staggered slide from left to right
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldAnimate ? 0.08 : 0,
        delayChildren: shouldAnimate ? 0.15 : 0,
      },
    },
  };

  const itemVariants = {
    hidden: shouldAnimate ? {
      opacity: 0,
      x: -20,
      filter: 'blur(4px)',
    } : {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: shouldAnimate ? 0.4 : 0,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F5F5F5] py-6 px-4 z-50 border-b border-[#D1D1D1]/30">
      <nav className="flex items-center w-full relative">

        {/* Logo - Far Left */}
        <a href="/" className="text-2xl font-bold text-[#000000] font-serif">
          inkfangs
        </a>

        {/* Navigation Links - Centered */}
        <motion.ul
          className="flex gap-8 text-sm absolute left-1/2 transform -translate-x-1/2"
          layout={shouldAnimate}
          transition={shouldAnimate ? { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } : { duration: 0 }}
        >

          {/* Index - always visible, clickable to reveal */}
          <motion.li className="relative" layout={shouldAnimate}>
            <motion.div
              whileHover={isHomepage && !isNavRevealed ? { scale: 1.05 } : {}}
              onMouseEnter={() => setIsIndexHovered(true)}
              onMouseLeave={() => setIsIndexHovered(false)}
            >
              <a
                href="/"
                onClick={handleIndexClick}
                className={`nav-link ${activeSection === 'index' ? 'active' : ''} ${
                  isHomepage && !isNavRevealed ? 'cursor-pointer' : ''
                }`}
              >
                index
              </a>

              {/* Hint indicator - only show on homepage when nav is hidden, appears on hover */}
              {isHomepage && !isNavRevealed && !hasInteracted && (
                <motion.span
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-[10px] text-[#666666] whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isIndexHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  click to explore
                </motion.span>
              )}
            </motion.div>
          </motion.li>

          {/* Other nav items - revealed after click */}
          {isNavRevealed && (
            <motion.div
              className="flex gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={itemVariants}
                >
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.div>
          )}

        </motion.ul>
      </nav>
    </header>
  );
}
