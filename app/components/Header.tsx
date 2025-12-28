'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('index');

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
    if (pathname === '/community') {
      setActiveSection('community');
      return;
    }

    // Otherwise, handle scroll-based section detection for home page
    const handleScroll = () => {
      const sections = ['index'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F5F5F5] py-6 px-4 z-50 border-b border-[#D1D1D1]/30">
      <nav className="flex items-center w-full relative">

        {/* Logo - Far Left */}
        <a href="/" className="text-2xl font-bold text-[#000000] font-serif">
          inkfangs
        </a>

        {/* Navigation Links - Centered */}
        <ul className="flex gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
          <li>
            <a href="/" className={`nav-link ${activeSection === 'index' ? 'active' : ''}`}>
              index
            </a>
          </li>
          <li>
            <a href="/bio" className={`nav-link ${activeSection === 'bio' ? 'active' : ''}`}>
              bio
            </a>
          </li>
          <li>
            <a href="/builds" className={`nav-link ${activeSection === 'builds' ? 'active' : ''}`}>
              builds
            </a>
          </li>
          <li>
            <a href="/thoughts" className={`nav-link ${activeSection === 'thoughts' ? 'active' : ''}`}>
              thoughts
            </a>
          </li>
          <li>
            <a href="/working" className={`nav-link ${activeSection === 'worklog' ? 'active' : ''}`}>
              worklog
            </a>
          </li>
          <li>
            <a href="/community" className={`nav-link ${activeSection === 'community' ? 'active' : ''}`}>
              community
            </a>
          </li>
          <li>
            <a href="/contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}