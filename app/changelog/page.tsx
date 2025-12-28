"use client";
import Header from "../components/Header";

export default function Changelog() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Page Header */}
          <header className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold font-serif text-[#000000] mb-4">
              CHANGELOG
            </h1>
            <p className="text-lg text-[#666666] italic mb-2">
              How this portfolio evolved over time
            </p>
            <p className="text-sm text-[#666666]">
              Every version, every feature, every iteration
            </p>
            <div className="w-32 h-[#1px] bg-[#D1D1D1] mx-auto mt-8"></div>
          </header>

          {/* Timeline */}
          <div className="space-y-12 border-l-2 border-[#D1D1D1] pl-8 ml-4">

            {/* v3.0 - Current */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000] animate-pulse"></div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-[#666666]">February 2025</span>
                <span className="bg-[#000000] text-white text-xs px-2 py-1 rounded">CURRENT</span>
              </div>
              <h2 className="text-3xl font-bold font-serif text-[#000000] mb-4">
                v3.0 - The Complete Portfolio
              </h2>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 mb-4">
                <h3 className="font-bold text-[#000000] mb-3">✨ New Features</h3>
                <ul className="space-y-2 text-sm text-[#000000]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Added <strong>5 complete pages</strong>: Bio, Builds, Thoughts, Worklog, Contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Published <strong>5 editorial articles</strong> in "The Developer Times"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Built <strong>custom guestbook</strong> with API routes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Created <strong>"How I Built This"</strong> behind-the-scenes page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Added <strong>console message easter egg</strong> for developers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Implemented <strong>typing quote animations</strong> on landing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Created <strong>"Three Acts" timeline</strong> for worklog</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 mb-4">
                <h3 className="font-bold text-[#000000] mb-3">🎨 Design Updates</h3>
                <ul className="space-y-2 text-sm text-[#000000]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Refined <strong>newspaper/editorial aesthetic</strong> across all pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Added <strong>glassmorphism effects</strong> (backdrop-blur)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Improved <strong>responsive design</strong> for mobile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Enhanced <strong>accessibility</strong> (WCAG AA compliant)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h3 className="font-bold text-[#000000] mb-3">🔧 Technical</h3>
                <ul className="space-y-2 text-sm text-[#000000]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span><strong>API Routes:</strong> /api/guestbook for message handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span><strong>Components:</strong> 12 custom React components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span><strong>Code:</strong> 3,200+ lines of TypeScript</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* v2.5 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#535353]"></div>
              <div className="text-sm text-[#666666] mb-2">Mid-January 2025</div>
              <h2 className="text-3xl font-bold font-serif text-[#000000] mb-4">
                v2.5 - The 3D Lanyard
              </h2>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 mb-4">
                <h3 className="font-bold text-[#000000] mb-3">✨ New Features</h3>
                <ul className="space-y-2 text-sm text-[#000000]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Built <strong>3D interactive lanyard</strong> with React Three Fiber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Implemented <strong>physics simulation</strong> with Rapier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Added <strong>texture mapping</strong> for profile photo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Created <strong>rope mesh</strong> with realistic materials</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h3 className="font-bold text-[#000000] mb-3">🐛 Challenges Solved</h3>
                <ul className="space-y-2 text-sm text-[#000000]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Fixed texture flipping (took 6+ iterations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Tuned physics parameters for smooth animation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Made lanyard appear only on landing section</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* v2.0 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#666666]"></div>
              <div className="text-sm text-[#666666] mb-2">Early January 2025</div>
              <h2 className="text-3xl font-bold font-serif text-[#000000] mb-4">
                v2.0 - The Redesign
              </h2>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 mb-4">
                <h3 className="font-bold text-[#000000] mb-3">✨ New Features</h3>
                <ul className="space-y-2 text-sm text-[#000000]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Migrated to <strong>Next.js 14</strong> (App Router)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Adopted <strong>Hindia-inspired aesthetic</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Implemented <strong>Tailwind CSS</strong> design system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Created <strong>custom header</strong> with active state detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Added <strong>page load animations</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h3 className="font-bold text-[#000000] mb-3">🎨 Design Philosophy</h3>
                <p className="text-sm text-[#000000]">
                  Shifted from technical showcase to contemplative, narrative-driven design.
                  Focused on storytelling over feature lists. Embraced newspaper/editorial aesthetic.
                </p>
              </div>
            </div>

            {/* v1.0 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#D1D1D1]"></div>
              <div className="text-sm text-[#666666] mb-2">November 2024</div>
              <h2 className="text-3xl font-bold font-serif text-[#000000] mb-4">
                v1.0 - The Beginning
              </h2>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h3 className="font-bold text-[#000000] mb-3">✨ Initial Features</h3>
                <ul className="space-y-2 text-sm text-[#000000]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Basic <strong>HTML/CSS portfolio</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Single page layout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Simple project showcase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#666666]">•</span>
                    <span>Contact form</span>
                  </li>
                </ul>
                <p className="text-xs text-[#666666] italic mt-4">
                  "Everyone starts somewhere. This was mine."
                </p>
              </div>
            </div>

          </div>

          {/* Future Plans */}
          <section className="mt-16 pt-16 border-t border-[#D1D1D1]">
            <h2 className="text-3xl font-bold font-serif text-[#000000] mb-8 text-center">
              What's Next?
            </h2>

            <div className="bg-[#535353] text-white p-8">
              <h3 className="text-xl font-bold mb-4">Planned for v3.5+</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="opacity-50">☐</span>
                  <span>Connect guestbook to Supabase for persistence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="opacity-50">☐</span>
                  <span>Add open-source GitHub repository</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="opacity-50">☐</span>
                  <span>Implement blog RSS feed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="opacity-50">☐</span>
                  <span>Add analytics (Vercel Analytics)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="opacity-50">☐</span>
                  <span>Create case study videos for projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="opacity-50">☐</span>
                  <span>Add interactive code playgrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="opacity-50">☐</span>
                  <span>Improve Lighthouse performance score to 100</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Closing */}
          <div className="text-center pt-12">
            <p className="text-sm text-[#666666] italic">
              This changelog will continue to grow as the portfolio evolves.
            </p>
            <p className="text-sm text-[#666666] mt-4 font-serif">
              inkfangs • Always iterating
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
