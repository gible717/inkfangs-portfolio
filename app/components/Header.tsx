export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F5F1E8] py-6 px-8 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-[#2B2B2B] font-serif">
          inkfangs
        </a>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-sm">
          <li>
            <a href="/" className="text-[#2B2B2B] hover:opacity-60 transition-opacity">
              index
            </a>
          </li>
          <li>
            <a href="/bio" className="text-[#2B2B2B] hover:opacity-60 transition-opacity">
              bio
            </a>
          </li>
          <li>
            <a href="/builds" className="text-[#2B2B2B] hover:opacity-60 transition-opacity">
              builds
            </a>
          </li>
          <li>
            <a href="/thoughts" className="text-[#2B2B2B] hover:opacity-60 transition-opacity">
              thoughts
            </a>
          </li>
          <li>
            <a href="/working" className="text-[#2B2B2B] hover:opacity-60 transition-opacity">
              working
            </a>
          </li>
          <li>
            <a href="/contact" className="text-[#2B2B2B] hover:opacity-60 transition-opacity">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}