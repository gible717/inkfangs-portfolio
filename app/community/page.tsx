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
            <p className="text-sm text-[#666666] mb-2 tracking-widest">THE COMMUNITY COLUMN</p>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6">
              Tech Talent Network
            </h1>
            <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto mb-8"></div>
            <p className="text-lg text-[#666666] italic max-w-3xl mx-auto">
              Bridging talent and opportunity • Building ecosystem, not competition
            </p>
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
              <p className="text-[#000000] leading-relaxed italic text-sm">
                I don't receive commissions or referral fees. This is simply me connecting good people with good work.
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
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-2">
                  Muhammad Hazeeq Haikal
                </h3>
                <p className="text-sm text-[#666666] mb-4 italic">
                  Full-Stack Developer (Web • Mobile • IoT)
                </p>

                <div className="border-t border-[#D1D1D1] pt-4 mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">KEY TECHNOLOGIES</p>
                  <p className="text-sm text-[#000000]">
                    PHP, React, Flutter, MySQL, Arduino/ESP32
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
                    Freelance developer | 300+ completed projects | UiTM Information Systems
                  </p>
                </div>

                <div className="border-t border-[#D1D1D1] pt-4 flex gap-3">
                  <a
                    href="https://hazeeq.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#000000] underline hover:text-[#3A4F5B] transition-colors"
                  >
                    Portfolio →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-hazeeq-haikal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#000000] underline hover:text-[#3A4F5B] transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>

              {/* Card 2: Muhammad Haikal Iman */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-2">
                  Muhammad Haikal Iman
                </h3>
                <p className="text-sm text-[#666666] mb-4 italic">
                  Full-Stack Web Developer
                </p>

                <div className="border-t border-[#D1D1D1] pt-4 mb-4">
                  <p className="text-xs text-[#666666] mb-2 font-semibold">KEY TECHNOLOGIES</p>
                  <p className="text-sm text-[#000000]">
                    Laravel, React, Next.js, Node.js, MongoDB
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
                    Freelance developer | UiTM Shah Alam Netcentric Computing
                  </p>
                </div>

                <div className="border-t border-[#D1D1D1] pt-4 flex gap-3">
                  <a
                    href="https://mhdhaikalll.github.io/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#000000] underline hover:text-[#3A4F5B] transition-colors"
                  >
                    Portfolio →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mhdhaikaliman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#000000] underline hover:text-[#3A4F5B] transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>

              {/* Card 3: Muaz Hazali */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
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
                    Data Scientist | Building LepakMasjid.app & PasarMalam.app | UiTM
                  </p>
                </div>

                <div className="border-t border-[#D1D1D1] pt-4 flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/muazhazali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#000000] underline hover:text-[#3A4F5B] transition-colors"
                  >
                    LinkedIn →
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
                Get in Touch →
              </a>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center mt-16 pt-8 border-t border-[#D1D1D1]">
            <p className="text-sm text-[#666666] italic">
              This directory is maintained as a community service. I don't receive commissions or referral fees.
            </p>
            <p className="text-sm text-[#666666] mt-6 font-serif">
              inkfangs • 2025
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
