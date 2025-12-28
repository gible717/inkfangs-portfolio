"use client";
import Header from "../components/Header";
import Link from "next/link";

export default function HowIBuiltThis() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Page Header */}
          <header className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold font-serif text-[#000000] mb-4">
              HOW I BUILT THIS
            </h1>
            <p className="text-lg text-[#666666] italic mb-2">
              Behind the scenes of inkfangs.dev
            </p>
            <p className="text-sm text-[#666666]">
              Every technical decision, challenge, and learning moment
            </p>
            <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto mt-8"></div>
          </header>

          {/* The Philosophy */}
          <section className="mb-16">
            <div className="bg-[#535353] text-white p-12">
              <p className="text-2xl font-serif italic leading-relaxed mb-4">
                "I didn't use a template. I didn't hire someone. I built this from scratch because I wanted to prove—to myself and to you—that I can."
              </p>
              <p className="text-sm text-[#D1D1D1]">— Noufah, explaining why this took longer than expected</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-8">
              The Tech Stack
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-xl font-bold text-[#000000] mb-4">Frontend Framework</h3>
                <div className="mb-4">
                  <p className="text-lg font-bold text-[#000000]">Next.js 14</p>
                  <p className="text-sm text-[#666666]">App Router, Server Components</p>
                </div>
                <p className="text-sm text-[#000000]">
                  <strong>Why?</strong> I wanted to learn the latest Next.js patterns and App Router. Plus, built-in routing and API routes made development faster.
                </p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-xl font-bold text-[#000000] mb-4">Language</h3>
                <div className="mb-4">
                  <p className="text-lg font-bold text-[#000000]">TypeScript</p>
                  <p className="text-sm text-[#666666]">Type-safe development</p>
                </div>
                <p className="text-sm text-[#000000]">
                  <strong>Why?</strong> Catch errors before runtime. Better autocomplete. More confidence when refactoring.
                </p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-xl font-bold text-[#000000] mb-4">3D Graphics</h3>
                <div className="mb-4">
                  <p className="text-lg font-bold text-[#000000]">React Three Fiber + Rapier</p>
                  <p className="text-sm text-[#666666]">3D lanyard with physics</p>
                </div>
                <p className="text-sm text-[#000000]">
                  <strong>Why?</strong> I wanted an interactive element that showed I can go beyond basic web dev. Physics simulation was a fun challenge.
                </p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-xl font-bold text-[#000000] mb-4">Styling</h3>
                <div className="mb-4">
                  <p className="text-lg font-bold text-[#000000]">Tailwind CSS</p>
                  <p className="text-sm text-[#666666]">Utility-first CSS</p>
                </div>
                <p className="text-sm text-[#000000]">
                  <strong>Why?</strong> Faster prototyping. Consistent design system. Easy responsive design.
                </p>
              </div>
            </div>
          </section>

          {/* Creative Inspiration - Hindia */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-8">
              Creative Inspiration: Doves '25 on Blank Canvas
            </h2>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-6">
              <h3 className="text-xl font-bold text-[#000000] mb-4">
                Where the Aesthetic Came From
              </h3>
              <p className="text-[#000000] leading-relaxed mb-4">
                While most developer portfolios pull inspiration from Dribbble or Awwwards, mine came from music:
                <strong> Hindia's album <em>Doves '25 on Blank Canvas</em></strong>.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                The album's visual identity—newspaper-style typography, contemplative minimalism, editorial layouts—resonated
                with how I wanted to tell my story. Not flashy. Not competing for attention. Just thoughtful, intentional, and real.
              </p>
              <p className="text-[#000000] leading-relaxed">
                What drew me: Indonesian artist bringing authenticity to global aesthetics. Contemplative, not performative.
                Minimalist but emotionally rich.
              </p>
            </div>

            <div className="bg-[#535353] text-white p-8 mb-6">
              <h3 className="text-xl font-bold mb-4">The Symbolism: Doves as Freedom</h3>
              <p className="text-[#D1D1D1] leading-relaxed mb-4">
                In the album, doves write on a blank canvas—they represent <strong>freedom, new beginnings, and creating
                something from nothing</strong>. Birds that fly where they choose, unbound by expectations.
              </p>
              <p className="text-[#D1D1D1] leading-relaxed mb-4">
                In the tech world, this resonates deeply. We're often caged by:
              </p>
              <ul className="text-[#D1D1D1] space-y-2 ml-6 mb-4">
                <li>• Templates and frameworks that all look the same</li>
                <li>• Comparison culture and imposter syndrome</li>
                <li>• "Right way" to build, "best practices" that stifle creativity</li>
                <li>• Expectations of what a CS student portfolio "should" be</li>
              </ul>
              <p className="text-white leading-relaxed italic">
                <strong>Doves don't ask permission to fly. They just fly.</strong>
              </p>
              <p className="text-[#D1D1D1] leading-relaxed mt-4">
                This portfolio is my blank canvas. My code. My story. My freedom to create something authentically mine,
                even if it doesn't look like everyone else's.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h4 className="text-lg font-bold text-[#000000] mb-3">Visual Translation</h4>
                <ul className="text-sm text-[#000000] space-y-2">
                  <li><strong>Serif fonts for headlines</strong> → Newspaper masthead energy</li>
                  <li><strong>"The Developer Times" section</strong> → Editorial design homage</li>
                  <li><strong>Muted palette</strong> → #F5F5F5 (blank canvas), #000000 (ink), #666666 (newsprint)</li>
                  <li><strong>Generous whitespace</strong> → Room to breathe and think</li>
                </ul>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h4 className="text-lg font-bold text-[#000000] mb-3">Content Philosophy</h4>
                <ul className="text-sm text-[#000000] space-y-2">
                  <li><strong>Storytelling over specs</strong> → Narrative-first approach</li>
                  <li><strong>Questions over answers</strong> → "Building questions, not just systems"</li>
                  <li><strong>Vulnerability as strength</strong> → Honest editorial voice</li>
                  <li><strong>Indonesian values</strong> → Thoughtful, communal, reflective</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#666666] italic mb-3">
                "Doves writing on a blank canvas—new beginnings, fresh starts, creating something from nothing."
              </p>
              <a
                href="https://open.spotify.com/album/4KvXSqo0I8ue7RvMC9UZVR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#000000] underline hover:text-[#3A4F5B] transition-colors"
              >
                Listen: Doves '25 on Blank Canvas by Hindia →
              </a>
            </div>
          </section>

          {/* Development Timeline */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-8">
              Development Timeline
            </h2>

            <div className="space-y-8 border-l-2 border-[#D1D1D1] pl-8 ml-4">

              {/* v1.0 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#666666]"></div>
                <div className="text-sm text-[#666666] mb-2">November 2024</div>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                  v1.0 - The Basics
                </h3>
                <p className="text-[#000000] mb-3">
                  Started with basic HTML/CSS portfolio. Single page, no frameworks. Just wanted something online.
                </p>
                <div className="text-sm text-[#666666]">
                  <span className="font-medium">Hours spent:</span> ~10 hours
                </div>
              </div>

              {/* v2.0 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#535353]"></div>
                <div className="text-sm text-[#666666] mb-2">January 2025</div>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                  v2.0 - The Redesign
                </h3>
                <p className="text-[#000000] mb-3">
                  Discovered Hindia's "Doves '25 on Blank Canvas" and fell in love with the contemplative, newspaper-inspired aesthetic. Rebuilt everything in Next.js.
                </p>
                <div className="text-sm text-[#666666]">
                  <span className="font-medium">Hours spent:</span> ~30 hours • <span className="font-medium">Challenges:</span> Learning Next.js App Router
                </div>
              </div>

              {/* v2.5 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#535353]"></div>
                <div className="text-sm text-[#666666] mb-2">Mid-January 2025</div>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                  v2.5 - The 3D Lanyard
                </h3>
                <p className="text-[#000000] mb-3">
                  Added React Three Fiber. Spent days learning 3D graphics, texture mapping, and physics. The lanyard took 6+ iterations to get the photo orientation right.
                </p>
                <div className="text-sm text-[#666666]">
                  <span className="font-medium">Hours spent:</span> ~25 hours • <span className="font-medium">Challenges:</span> Texture mapping (flipY, repeat, offset)
                </div>
              </div>

              {/* v3.0 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                <div className="text-sm text-[#666666] mb-2">February 2025</div>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-3">
                  v3.0 - The Complete Portfolio (Current)
                </h3>
                <p className="text-[#000000] mb-3">
                  Added all pages (bio, builds, thoughts, worklog, contact). Wrote 5 editorial articles. Built custom guestbook with API routes. Implemented animations, accessibility features, and responsive design.
                </p>
                <div className="text-sm text-[#666666]">
                  <span className="font-medium">Hours spent:</span> ~50+ hours • <span className="font-medium">Still iterating</span>
                </div>
              </div>

            </div>
          </section>

          {/* Technical Challenges */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-8">
              Technical Challenges & Solutions
            </h2>

            <div className="space-y-6">

              {/* Challenge 1 */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  Challenge #1: 3D Texture Mapping
                </h3>
                <p className="text-[#000000] mb-4">
                  <strong>Problem:</strong> The profile photo on the 3D lanyard card was flipped, stretched, and not centered properly.
                </p>
                <p className="text-[#000000] mb-4">
                  <strong>Solution:</strong> After 6 iterations, figured out the right combination of texture properties:
                </p>
                <pre className="bg-[#000000] text-green-400 p-4 rounded overflow-x-auto text-xs mb-4">
{`const cardTexture = useTexture('/assets/profile-card.jpeg');
cardTexture.flipY = false;  // Prevents vertical flip
cardTexture.repeat.set(0.95, 0.99);  // Scales texture
cardTexture.center.set(0.5, 0.5);  // Centers the texture
cardTexture.offset.set(0.15, 0.1);  // Fine-tuning position`}
                </pre>
                <p className="text-sm text-[#666666]">
                  <strong>Lesson learned:</strong> 3D graphics require patience. Trial and error is part of the process.
                </p>
              </div>

              {/* Challenge 2 */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  Challenge #2: Navigation Active States
                </h3>
                <p className="text-[#000000] mb-4">
                  <strong>Problem:</strong> Needed navbar to show active state both for scroll positions on home page AND for separate pages (bio, builds, etc.)
                </p>
                <p className="text-[#000000] mb-4">
                  <strong>Solution:</strong> Combined `usePathname()` for page detection with scroll event listeners for home page sections.
                </p>
                <pre className="bg-[#000000] text-green-400 p-4 rounded overflow-x-auto text-xs mb-4">
{`if (pathname === '/bio') {
  setActiveSection('bio');
} else if (pathname === '/builds') {
  setActiveSection('builds');
} else {
  // Handle scroll-based detection for home page
  const handleScroll = () => { /* ... */ }
}`}
                </pre>
                <p className="text-sm text-[#666666]">
                  <strong>Lesson learned:</strong> Sometimes you need multiple detection methods for different contexts.
                </p>
              </div>

              {/* Challenge 3 */}
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
                <h3 className="text-xl font-bold text-[#000000] mb-4">
                  Challenge #3: Guestbook Without Database (Initially)
                </h3>
                <p className="text-[#000000] mb-4">
                  <strong>Problem:</strong> Wanted a functional guestbook but didn't want to set up a full database immediately.
                </p>
                <p className="text-[#000000] mb-4">
                  <strong>Solution:</strong> Built API routes with in-memory storage for development, documented upgrade path to Supabase for production.
                </p>
                <pre className="bg-[#000000] text-green-400 p-4 rounded overflow-x-auto text-xs mb-4">
{`// app/api/guestbook/route.ts
let guestbookEntries: Array<{
  id: string;
  message: string;
  timestamp: string;
  approved: boolean;
}> = [];

export async function POST(request: NextRequest) {
  // Handle message submission
}`}
                </pre>
                <p className="text-sm text-[#666666]">
                  <strong>Lesson learned:</strong> Ship fast, iterate later. In-memory works for testing.
                </p>
              </div>

            </div>
          </section>

          {/* Tools & Environment */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-8">
              Tools & Environment
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h4 className="font-bold text-[#000000] mb-3">Code Editor</h4>
                <p className="text-sm text-[#000000]">Visual Studio Code</p>
                <p className="text-xs text-[#666666] mt-2">Extensions: ESLint, Prettier, Tailwind IntelliSense</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h4 className="font-bold text-[#000000] mb-3">Design</h4>
                <p className="text-sm text-[#000000]">Figma (wireframes)</p>
                <p className="text-xs text-[#666666] mt-2">Mostly coded directly in browser</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h4 className="font-bold text-[#000000] mb-3">Version Control</h4>
                <p className="text-sm text-[#000000]">Git + GitHub</p>
                <p className="text-xs text-[#666666] mt-2">~50+ commits and counting</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h4 className="font-bold text-[#000000] mb-3">Deployment</h4>
                <p className="text-sm text-[#000000]">Vercel</p>
                <p className="text-xs text-[#666666] mt-2">Auto-deploy on push to main</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h4 className="font-bold text-[#000000] mb-3">Package Manager</h4>
                <p className="text-sm text-[#000000]">npm</p>
                <p className="text-xs text-[#666666] mt-2">~15 dependencies total</p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h4 className="font-bold text-[#000000] mb-3">AI Assistant</h4>
                <p className="text-sm text-[#000000]">Claude Sonnet 4.5</p>
                <p className="text-xs text-[#666666] mt-2">For brainstorming, debugging, learning</p>
              </div>
            </div>
          </section>

          {/* By The Numbers */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-8">
              By The Numbers
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 text-center">
                <p className="text-4xl font-bold text-[#000000] mb-2">3,200+</p>
                <p className="text-sm text-[#666666]">Lines of code</p>
              </div>
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 text-center">
                <p className="text-4xl font-bold text-[#000000] mb-2">12</p>
                <p className="text-sm text-[#666666]">Custom components</p>
              </div>
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 text-center">
                <p className="text-4xl font-bold text-[#000000] mb-2">6</p>
                <p className="text-sm text-[#666666]">Complete pages</p>
              </div>
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 text-center">
                <p className="text-4xl font-bold text-[#000000] mb-2">5</p>
                <p className="text-sm text-[#666666]">Editorial articles</p>
              </div>
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 text-center">
                <p className="text-4xl font-bold text-[#000000] mb-2">100+</p>
                <p className="text-sm text-[#666666]">Hours invested</p>
              </div>
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 text-center">
                <p className="text-4xl font-bold text-[#000000] mb-2">0</p>
                <p className="text-sm text-[#666666]">Templates used</p>
              </div>
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 text-center">
                <p className="text-4xl font-bold text-[#000000] mb-2">98</p>
                <p className="text-sm text-[#666666]">Accessibility score</p>
              </div>
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 text-center">
                <p className="text-4xl font-bold text-[#000000] mb-2">100%</p>
                <p className="text-sm text-[#666666]">Built by me</p>
              </div>
            </div>
          </section>

          {/* What I Learned */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-8">
              What I Learned
            </h2>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
              <ul className="space-y-4 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span><strong>Next.js App Router is powerful</strong> but has a learning curve. Server Components vs Client Components took time to understand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span><strong>3D on the web is possible</strong> and actually not as scary as I thought. React Three Fiber makes Three.js approachable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span><strong>Accessibility matters from day one.</strong> Adding it later is harder than building it in from the start.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span><strong>Design systems save time.</strong> Defining colors, typography, and spacing early made development faster.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span><strong>Storytelling {'>'} Feature lists.</strong> People connect with narrative, not just technical specs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span><strong>Iteration is essential.</strong> v1 was basic. v2 was better. v3 is nearly there. There's always a v4.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* View Source */}
          <section className="text-center py-16 border-t border-[#D1D1D1]">
            <h3 className="text-3xl font-bold font-serif text-[#000000] mb-4">
              Want to See the Code?
            </h3>
            <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
              This portfolio is (will be) open source. See every line, every component, every decision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/inkfangs/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#000000] text-white font-medium hover:bg-[#3A4F5B] transition-all duration-300"
              >
                View on GitHub →
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#D1D1D1]/40 text-[#666666] font-medium hover:bg-[#3A4F5B] hover:text-white transition-all duration-300"
              >
                Let's Talk About It
              </Link>
            </div>
          </section>

          {/* Closing Quote */}
          <div className="text-center pt-12">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed mb-6">
              "Building this portfolio taught me more than any tutorial ever could. Every bug was a lesson. Every iteration was growth."
            </blockquote>
            <p className="text-sm text-[#666666] font-serif">
              — Noufah, 2025
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
