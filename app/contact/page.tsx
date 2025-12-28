"use client";
import Header from "../components/Header";
import Guestbook from "../components/Guestbook";
import ViewSource from "../components/ViewSource";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Page Header */}
          <header className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold font-serif text-[#000000] mb-4">
              CONTACT
            </h1>
            <p className="text-lg text-[#666666] italic mb-2">
              Let's build something meaningful together
            </p>
            <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto mt-8"></div>
          </header>

          {/* Two Column Layout: Contact Info Left, Guestbook Right */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">

            {/* LEFT COLUMN: Contact Info & What I'm Looking For */}
            <div className="space-y-8">

              {/* What I'm Looking For */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h2 className="text-2xl font-bold font-serif text-[#000000] mb-6">
                  What I'm Looking For
                </h2>
                <ul className="space-y-3 text-[#000000] mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">✓</span>
                    <span>HR internships or entry-level positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">✓</span>
                    <span>Web development projects with social impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">✓</span>
                    <span>Accessibility consulting opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">✓</span>
                    <span>Speaking engagements on CS → HR transition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">✓</span>
                    <span>Collaborations on inclusive workplace initiatives</span>
                  </li>
                </ul>
                <div className="border-t border-[#D1D1D1] pt-6">
                  <p className="text-sm text-[#666666] mb-2">Graduating 2026 • Open to opportunities</p>
                </div>
              </div>

              {/* Professional Contact */}
              <div className="bg-[#000000] text-white p-8">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#D1D1D1] mb-1">Email</p>
                    <a href="mailto:noufah.abdullah@example.com" className="text-white hover:text-[#D1D1D1] transition-colors">
                      noufah.abdullah@example.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[#D1D1D1] mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/noufah-abdullah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#D1D1D1] transition-colors"
                    >
                      linkedin.com/in/noufah-abdullah
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[#D1D1D1] mb-1">GitHub</p>
                    <a
                      href="https://github.com/inkfangs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#D1D1D1] transition-colors"
                    >
                      github.com/inkfangs
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-4">
                  Learn More About Me
                </h3>
                <div className="space-y-2 text-sm">
                  <a href="/bio" className="block text-[#000000] hover:text-[#3A4F5B] transition-colors">
                    → Read my full story
                  </a>
                  <a href="/builds" className="block text-[#000000] hover:text-[#3A4F5B] transition-colors">
                    → Explore my projects
                  </a>
                  <a href="/thoughts" className="block text-[#000000] hover:text-[#3A4F5B] transition-colors">
                    → Read my thoughts
                  </a>
                  <a href="/working" className="block text-[#000000] hover:text-[#3A4F5B] transition-colors">
                    → View my experience
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Anonymous Guestbook */}
            <div>
              <Guestbook />

              {/* View Source */}
              <ViewSource
                file="app/api/guestbook/route.ts"
                text="Want to see the guestbook API implementation?"
              />
            </div>

          </div>

          {/* Links to Credibility Pages */}
          <div className="text-center mt-16 pt-8 border-t border-[#D1D1D1]">
            <p className="text-sm text-[#666666] mb-4">
              Curious how this site was built?
            </p>
            <div className="flex gap-4 justify-center text-sm flex-wrap">
              <a href="/how-i-built-this" className="text-[#000000] underline hover:text-[#3A4F5B] transition-colors">
                How I Built This
              </a>
              <span className="text-[#666666]">•</span>
              <a href="/changelog" className="text-[#000000] underline hover:text-[#3A4F5B] transition-colors">
                Changelog
              </a>
            </div>
          </div>

          {/* Simple Closing Line */}
          <p className="text-center text-sm text-[#666666] mt-8 font-serif italic">
            inkfangs • 2025
          </p>
        </div>
      </main>
    </>
  );
}
