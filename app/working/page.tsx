"use client";
import Header from "../components/Header";
import Link from "next/link";
import CountUp from "../components/CountUp";

export default function Working() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Page Header */}
          <header className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold font-serif text-[#000000] mb-4">
              WORKLOG
            </h1>
            <p className="text-lg text-[#666666] italic mb-2">
              A chronicle of building & leading
            </p>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto mt-8"></div>
          </header>

          {/* Two Column Layout: Timeline Left, Currently Right */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 mb-16">

            {/* LEFT: Main Timeline */}
            <div>

              {/* ACT I: THE FOUNDATION */}
              <section className="mb-16">
                <div className="mb-8">
                  <p className="text-xs text-[#666666] mb-2 uppercase tracking-widest">2018 — 2022</p>
                  <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#000000] mb-4">
                    Act I: The Foundation
                  </h2>
                  <p className="text-xl text-[#666666] italic">
                    "Gold medals and first steps"
                  </p>
                  <div className="w-24 h-[2px] bg-[#000000] mt-4"></div>
                </div>

                {/* Timeline Entries */}
                <div className="space-y-8 border-l-2 border-[#D1D1D1] pl-8 ml-4">

                  {/* 2018: GITC */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                    <div className="text-sm text-[#666666] mb-2">2018 • Age 14</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      GITC 2018 Best Award
                    </h3>
                    <p className="text-[#000000] mb-3">
                      International recognition at Global IT Challenge, India. Competed against students worldwide and brought home gold for Malaysia.
                    </p>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Impact:</span> First major validation that I could build things that matter.
                    </div>
                  </div>

                  {/* 2018-2022: University Journey */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#535353]"></div>
                    <div className="text-sm text-[#666666] mb-2">2018 — 2022</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      State-Level Championships & University Honors
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Multiple state-level victories in IT competitions. Academic honors throughout early university years at UiTM Perlis.
                    </p>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Skills developed:</span> Competitive coding, problem-solving under pressure, resilience.
                    </div>
                  </div>

                  {/* Early Leadership */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#535353]"></div>
                    <div className="text-sm text-[#666666] mb-2">2019 — 2022</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      First Steps in Leadership
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Student Parliament member. Learning that leadership isn't about titles—it's about service.
                    </p>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Lesson learned:</span> The best systems serve people, not just processes.
                    </div>
                  </div>

                </div>
              </section>

              {/* ACT II: THE BUILDER */}
              <section className="mb-16">
                <div className="mb-8">
                  <p className="text-xs text-[#666666] mb-2 uppercase tracking-widest">2023 — 2024</p>
                  <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#000000] mb-4">
                    Act II: The Builder
                  </h2>
                  <p className="text-xl text-[#666666] italic">
                    "From code to systems to people"
                  </p>
                  <div className="w-24 h-[2px] bg-[#000000] mt-4"></div>
                </div>

                <div className="space-y-8 border-l-2 border-[#D1D1D1] pl-8 ml-4">

                  {/* 2023: Duke of Edinburgh */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#535353]"></div>
                    <div className="text-sm text-[#666666] mb-2">2023</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      Duke of Edinburgh Bronze Award
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Completed the Duke of Edinburgh International Award program—community service, physical recreation, skills development, and adventurous journey.
                    </p>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Growth area:</span> Learning to lead through service, not just technical skill.
                    </div>
                  </div>

                  {/* 2024: InventStor Development */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                    <div className="text-sm text-[#666666] mb-2">2024 — Present</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      InventStor Developer (Internship)
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Built a comprehensive government inventory management system from the ground up. ~18,000+ lines of code. 98 PHP files. 8-table interconnected database. 116 commits over 4+ months. 100% complete, ready for deployment.
                    </p>
                    <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-4 mb-3">
                      <p className="text-sm text-[#000000] mb-2"><strong>Tech Stack:</strong></p>
                      <p className="text-sm text-[#666666]">PHP 8.3 • MySQL 8.4 • Bootstrap 5.3 • Vanilla JS • Chart.js</p>
                    </div>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Key insight:</span> I don't love code for code's sake. I love code because of what it can do for people.
                    </div>
                    <Link href="/thoughts/14460-lines-to-ask-one-question" className="text-sm text-[#000000] underline hover:text-[#3A4F5B] mt-2 inline-block">
                      Read the full story →
                    </Link>
                  </div>

                  {/* 2024: Leadership Roles */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                    <div className="text-sm text-[#666666] mb-2">2024 — Present</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      Secretary General, Sekretariat Rakan Muda
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Leading administrative and coordination efforts for youth development programs. Managing teams, organizing events, building community.
                    </p>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Skills applied:</span> Event coordination, team management, public speaking, strategic planning.
                    </div>
                  </div>

                  {/* Head of Information Unit */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                    <div className="text-sm text-[#666666] mb-2">2024 — Present</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      Head of Information Unit, Student Parliament
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Overseeing information dissemination, digital communications, and student engagement strategies across campus.
                    </p>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Realization:</span> Communication isn't just about clarity—it's about empathy.
                    </div>
                  </div>

                </div>
              </section>

              {/* ACT III: THE TRANSITION */}
              <section className="mb-16">
                <div className="mb-8">
                  <p className="text-xs text-[#666666] mb-2 uppercase tracking-widest">2024 — Present</p>
                  <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#000000] mb-4">
                    Act III: The Transition
                  </h2>
                  <p className="text-xl text-[#666666] italic">
                    "Expanding, not leaving"
                  </p>
                  <div className="w-24 h-[2px] bg-[#000000] mt-4"></div>
                </div>

                <div className="space-y-8 border-l-2 border-[#D1D1D1] pl-8 ml-4">

                  {/* October 2024: OKU Recognition */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                    <div className="text-sm text-[#666666] mb-2">October 2024</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      Anugerah Khas Mahasiswa OKU Harapan 2024
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Top 3 out of 700-1,750 OKU students across 35 UiTM campuses. University-wide recognition for academic performance, leadership, and potential.
                    </p>
                    <div className="bg-[#535353] text-white p-4 mb-3">
                      <p className="text-sm italic">
                        "The first time the university saw me as 'exceptional.' And with that recognition came responsibility."
                      </p>
                    </div>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Given by:</span> Bahagian Perkhidmatan & Pembangunan OKU (U-DserveD UiTM)
                    </div>
                  </div>

                  {/* January 2025: VC Meeting */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                    <div className="text-sm text-[#666666] mb-2">January 2025</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      Policy Proposal to Vice Chancellor
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Presented <em>buah tangan</em>—a personal policy proposal advocating for greater visibility and meaningful recognition for UiTM OKU students—directly to the Vice Chancellor.
                    </p>
                    <div className="text-sm text-[#666666] mb-3">
                      <span className="font-medium">Proposed:</span> Year-round visibility, systemic accessibility improvements, mentorship networks, policy participation pathways.
                    </div>
                    <Link href="/thoughts/when-the-vc-called-me-daughter-of-the-university" className="text-sm text-[#000000] underline hover:text-[#3A4F5B] inline-block">
                      Read the full story →
                    </Link>
                  </div>

                  {/* 2025: HR Application */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                    <div className="text-sm text-[#666666] mb-2">2025</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      Applied: HR Management Degree
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Transitioning from Computer Science to Human Resources Management. Not leaving tech—expanding it. Taking everything learned about building systems and applying it to the most complex system of all: humans.
                    </p>
                    <div className="text-sm text-[#666666]">
                      <span className="font-medium">Why HR?</span> Because my gift isn't debugging code—it's debugging team dynamics. My passion isn't optimizing algorithms—it's optimizing human potential.
                    </div>
                    <Link href="/thoughts/from-syntax-to-empathy" className="text-sm text-[#000000] underline hover:text-[#3A4F5B] mt-2 inline-block">
                      Read about my transition →
                    </Link>
                  </div>

                  {/* Final Semester */}
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                    <div className="text-sm text-[#666666] mb-2">Present</div>
                    <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                      Final Semester, CS110 • UiTM Perlis
                    </h3>
                    <p className="text-[#000000] mb-3">
                      Graduating 2026 with Diploma in Computer Science. Final internship wrapping up. Portfolio complete. Next chapter: HR Management degree and building inclusive workplaces.
                    </p>
                    <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-4">
                      <p className="text-sm text-[#000000] italic">
                        "Still learning. Still debugging. Still building—just shifting from code to people."
                      </p>
                    </div>
                  </div>

                </div>
              </section>

            </div>

            {/* RIGHT: Currently Sidebar */}
            <div className="md:sticky md:top-32 md:self-start">

              {/* Currently Box */}
              <div className="bg-[#000000] text-white p-8 mb-8">
                <div className="border-b border-white pb-4 mb-6">
                  <h3 className="text-2xl font-bold font-serif">NOW</h3>
                  <p className="text-sm text-[#D1D1D1]">February 2025</p>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span>📍</span>
                    <span>Wrapping up InventStor internship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>📚</span>
                    <span>Final semester CS110, UiTM Perlis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>🎯</span>
                    <span>Applied to HR Management degree</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>💭</span>
                    <span>Building this portfolio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>♿</span>
                    <span>Advocating for OKU student inclusion</span>
                  </li>
                </ul>
              </div>

              {/* What I'm Learning */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 mb-8">
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-4">
                  What I'm Learning
                </h3>
                <ul className="space-y-2 text-sm text-[#000000]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">→</span>
                    <span>HR psychology & people management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">→</span>
                    <span>Inclusive workplace design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">→</span>
                    <span>Trauma-informed leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">→</span>
                    <span>Balancing empathy with systems thinking</span>
                  </li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-4">
                  By The Numbers
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-[#000000]">
                      <CountUp to={18000} prefix="~" suffix="+" className="tabular-nums" />
                    </p>
                    <p className="text-xs text-[#666666]">Lines of code in InventStor</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#000000]">Top 3</p>
                    <p className="text-xs text-[#666666]">Out of 700-1,750 OKU students</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#000000]">
                      <CountUp to={2} duration={1} suffix="+" className="tabular-nums" />
                    </p>
                    <p className="text-xs text-[#666666]">Leadership positions held</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#000000]">
                      <CountUp to={7} duration={1.5} className="tabular-nums" />
                    </p>
                    <p className="text-xs text-[#666666]">Years from GITC gold to HR pivot</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Skills Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#000000] mb-4">
                Tools I've Picked Up Along the Way
              </h2>
              <p className="text-[#666666] italic">
                Not just technologies—ways of thinking, leading, and building.
              </p>
              <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {/* Technical Skills */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-6">
                  Languages I Speak
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#666666] mb-1">Programming</p>
                    <p className="text-[#000000]">PHP • JavaScript • MySQL • HTML/CSS</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666] mb-1">Frameworks & Tools</p>
                    <p className="text-[#000000]">Bootstrap • Git/GitHub • Next.js • React</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666] mb-1">Specializations</p>
                    <p className="text-[#000000]">Database design • CRUD operations • Responsive design • Accessibility</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666] mb-1">Human</p>
                    <p className="text-[#000000]">Malay (native) • English (fluent)</p>
                  </div>
                </div>
              </div>

              {/* Leadership Skills */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-6">
                  Communities I've Led
                </h3>
                <ul className="space-y-3 text-[#000000]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>Secretary General, Sekretariat Rakan Muda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>Head of Information Unit, Student Parliament</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>OKU student advocacy & policy development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>Event coordination & team management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>Public speaking & strategic planning</span>
                  </li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-6">
                  How I Approach Work
                </h3>
                <ul className="space-y-3 text-[#000000]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span><strong>Accessibility advocacy:</strong> Building for everyone, not just some</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span><strong>Inclusive design:</strong> Anticipating needs before they're asked</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span><strong>Cross-cultural communication:</strong> Bridging technical & human languages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span><strong>Empathetic systems thinking:</strong> Code is poetry humans can feel</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Certifications & Awards */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#000000] mb-4">
                Recognition & Achievements
              </h2>
              <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto mt-6"></div>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold text-[#000000] mb-2">GITC 2018 Best Award</h4>
                <p className="text-sm text-[#666666]">Global IT Challenge • India • Age 14</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <div className="text-3xl mb-3">🎖️</div>
                <h4 className="font-bold text-[#000000] mb-2">Anugerah Khas Mahasiswa OKU Harapan 2024</h4>
                <p className="text-sm text-[#666666]">Top 3 • UiTM System-Wide • October 2024</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <div className="text-3xl mb-3">🥇</div>
                <h4 className="font-bold text-[#000000] mb-2">Duke of Edinburgh Bronze Award</h4>
                <p className="text-sm text-[#666666]">International Award Programme • 2023</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <div className="text-3xl mb-3">🏅</div>
                <h4 className="font-bold text-[#000000] mb-2">State-Level Championships</h4>
                <p className="text-sm text-[#666666]">Multiple victories • IT Competitions • 2018-2022</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-bold text-[#000000] mb-2">Leadership Positions</h4>
                <p className="text-sm text-[#666666]">Secretary General • Head of Information Unit • 2024-Present</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-[#000000] mb-2">University Honors</h4>
                <p className="text-sm text-[#666666]">Academic recognition • CS110 • UiTM Perlis</p>
              </div>

            </div>
          </section>

          {/* Download CV Section */}
          <section className="text-center py-16 border-t border-[#D1D1D1]">
            <h3 className="text-3xl font-bold font-serif text-[#000000] mb-4">
              The Full Archive
            </h3>
            <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
              Want the traditional format? Download my CV or connect on LinkedIn for the full professional breakdown.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-[#000000] text-white font-medium hover:bg-[#3A4F5B] transition-all duration-300">
                Download CV (PDF)
              </button>
              <a
                href="https://www.linkedin.com/in/noufahabdullah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#D1D1D1]/40 text-[#666666] font-medium hover:bg-[#3A4F5B] hover:text-white transition-all duration-300"
              >
                View LinkedIn Profile →
              </a>
            </div>
          </section>

          {/* Closing Quote */}
          <div className="text-center pt-12 max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed mb-6">
              "From gold medals to government systems to human resources. Every chapter taught me something new. Every transition was expansion, not abandonment."
            </blockquote>
            <p className="text-sm text-[#666666] font-serif mb-8">
              — Noufah, 2025
            </p>

            {/* Links to Credibility Pages */}
            <div className="mt-12 pt-8 border-t border-[#D1D1D1]">
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
              <p className="text-sm text-[#666666] mt-6 font-serif">
                inkfangs • 2025
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
