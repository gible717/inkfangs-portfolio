"use client";
import Header from "../components/Header";

export default function Community() {
  return (
    <>
      <Header />

      {/* COMMUNITY PAGE */}
      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Page Header - Editorial Style */}
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6">
              Tech Talent Network
            </h1>
            <p className="text-lg text-[#666666] italic mb-2">
              Bridging talent and opportunity • Building ecosystem, not competition
            </p>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto mt-8"></div>
          </header>

          {/* Introduction - Your Story */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 rounded-lg">
              <p className="text-[#000000] leading-relaxed mb-4">
                As someone transitioning from Computer Science to HR Management, I understand both sides of the tech world:
                the code and the people who write it.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                This directory exists because I believe in community over competition. These are developers I've worked
                alongside, learned from, and trust. Whether you're a student needing help with a project, a small business
                looking for tech solutions, or just exploring what's possible—these are the people I recommend.
              </p>
              <p className="text-[#666666] leading-relaxed italic text-sm">
                *I don't receive commissions or referral fees. This is simply me connecting good people with good work.
              </p>
            </div>
          </section>

          {/* Developer Cards Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-serif text-[#000000] mb-8 text-center">
              Featured Developers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Card 1: Muhammad Hazeeq Haikal */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 rounded-lg transition-all duration-300 hover:-translate-y-3 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-2">
                  Muhammad Hazeeq Haikal
                </h3>
                <p className="text-sm text-[#666666] mb-4 italic">
                  Multi-Platform Developer (Web • Mobile • IoT)
                </p>

                <div className="border-t border-[#D1D1D1] pt-4 mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">KEY TECHNOLOGIES</p>
                  <p className="text-sm text-[#000000]">
                    Laravel, React, Flutter, MySQL, Arduino/ESP32, Node.js
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">FOCUS AREAS</p>
                  <ul className="text-sm text-[#000000] space-y-1">
                    <li>• Custom web applications & e-commerce</li>
                    <li>• Cross-platform mobile apps (Flutter)</li>
                    <li>• IoT & smart home systems</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">CURRENTLY</p>
                  <p className="text-sm text-[#000000]">
                    Freelance developer | UiTM Business Computing Student 
                  </p>
                </div>

                <div className="border-t border-[#D1D1D1] pt-4 flex justify-center gap-4">
                  <a
                    href="https://hazeeq.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#000000] underline hover:text-[#3A4F5B] transition-colors"
                  >
                    Portfolio
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-hazeeq-haikal-149449246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000000] hover:text-[#3A4F5B] transition-colors"
                    title="Connect on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 2: Muhammad Haikal Iman */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 rounded-lg transition-all duration-300 hover:-translate-y-3 hover:-rotate-1 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-2">
                  Muhammad Haikal Iman
                </h3>
                <p className="text-sm text-[#666666] mb-4 italic">
                  Full-Stack Web Developer
                </p>

                <div className="border-t border-[#D1D1D1] pt-4 mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">KEY TECHNOLOGIES</p>
                  <p className="text-sm text-[#000000]">
                    Laravel, Next.js, Tailwind.css, PostgreSQL, Prisma ORM
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">FOCUS AREAS</p>
                  <ul className="text-sm text-[#000000] space-y-1">
                    <li>• Modern web applications (React/Vue.js)</li>
                    <li>• Backend development (Laravel/Express)</li>
                    <li>• Cybersecurity-aware development</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">CURRENTLY</p>
                  <p className="text-sm text-[#000000]">
                    Freelance developer | UiTM Netcentric Computing Student
                  </p>
                </div>

                <div className="border-t border-[#D1D1D1] pt-4 flex justify-center gap-4">
                  <a
                    href="https://mhdhaikalll.github.io/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#000000] underline hover:text-[#3A4F5B] transition-colors"
                  >
                    Portfolio
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mhdhaikaliman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000000] hover:text-[#3A4F5B] transition-colors"
                    title="Connect on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 3: Muaz Hazali */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 rounded-lg transition-all duration-300 hover:-translate-y-3 hover:rotate-2 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-2">
                  Muaz Hazali
                </h3>
                <p className="text-sm text-[#666666] mb-4 italic">
                  Data Scientist & Analyst
                </p>

                <div className="border-t border-[#D1D1D1] pt-4 mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">KEY TECHNOLOGIES</p>
                  <p className="text-sm text-[#000000]">
                    Python, Tableau, Power BI, Kibana, SQL
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">FOCUS AREAS</p>
                  <ul className="text-sm text-[#000000] space-y-1">
                    <li>• Data analytics & visualization</li>
                    <li>• Building data-driven applications</li>
                    <li>• Graphic design for data storytelling</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">CURRENTLY</p>
                  <p className="text-sm text-[#000000]">
                    Data Scientist | UiTM Information Technology Graduate
                  </p>
                </div>

                <div className="border-t border-[#D1D1D1] pt-4 flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/muazhazali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000000] hover:text-[#3A4F5B] transition-colors"
                    title="Connect on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center max-w-3xl mx-auto">
            <div className="bg-[#535353] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-serif mb-4">
                Need help finding the right person?
              </h3>
              <p className="text-[#D1D1D1] mb-6 leading-relaxed">
                Not sure who to reach out to? As someone who understands both the technical and people sides,
                I'm happy to help you find the right fit for your project.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-[#000000] font-medium hover:bg-[#D1D1D1] transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center mt-16 pt-8 border-t border-[#D1D1D1]">
            <p className="text-sm text-[#666666] mt-6 font-serif">
              inkfangs • 2025
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
