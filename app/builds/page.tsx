"use client";
import Header from "../components/Header";
import ViewSource from "../components/ViewSource";

export default function Builds() {
  return (
    <>
      <Header />

      {/* BUILDS - EXHIBITION HALL */}
      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Exhibition Title */}
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-[#000000] mb-4">
              THE EXHIBITION
            </h1>
            <p className="text-lg text-[#666666] italic">
              Building questions, not just systems
            </p>
            <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto mt-8"></div>
          </header>

          {/* FEATURED PROJECT: InventStor */}
          <section className="mb-24">

            {/* The Question Wall - Large Typography */}
            <div className="text-center mb-12">
              <blockquote className="text-4xl md:text-5xl font-bold font-serif text-[#000000] leading-tight max-w-4xl mx-auto">
                "14,460 lines to ask one question: <br />
                <span className="text-[#535353]">How do we serve people better?</span>"
              </blockquote>
            </div>

            {/* Hero Screenshot/Mockup Placeholder */}
            <div className="mb-12 max-w-5xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 rounded-lg shadow-lg">
                <div className="aspect-video bg-[#D1D1D1]/20 flex items-center justify-center rounded">
                  <p className="text-[#666666] italic">InventStor Screenshot / Demo</p>
                </div>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-12">

              {/* LEFT: The Problem & Solution */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                    The Problem
                  </h3>
                  <p className="text-[#000000] leading-relaxed">
                    Government offices were still using paper ledgers. Public servants spent
                    hours on manual tracking. Citizens experienced delays because of broken
                    systems. I saw people serving people, but the tools weren't serving them.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                    The Solution
                  </h3>
                  <p className="text-[#000000] leading-relaxed">
                    A comprehensive inventory management system built during my final internship.
                    Not just tracking assets—tracking dignity. Every feature designed to make
                    public servants' jobs easier, so they could serve citizens better.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                    The Impact
                  </h3>
                  <p className="text-[#000000] leading-relaxed">
                    Currently in active use serving government offices. Real people using it
                    every day. Real efficiency gained. Real dignity restored.
                  </p>
                </div>
              </div>

              {/* RIGHT: Tech Stack & Scale */}
              <div className="space-y-8">
                <div className="bg-white/60 backdrop-blur-sm p-8 border border-[#D1D1D1]/30 rounded-lg">
                  <h3 className="text-xl font-bold text-[#000000] mb-4">TECH STACK</h3>
                  <div className="space-y-2 text-[#000000]">
                    <p><span className="text-[#666666]">Frontend:</span> Bootstrap + JavaScript</p>
                    <p><span className="text-[#666666]">Backend:</span> PHP</p>
                    <p><span className="text-[#666666]">Database:</span> MySQL (7 tables)</p>
                    <p><span className="text-[#666666]">Features:</span> Real-time tracking + CRUD</p>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-8 border border-[#D1D1D1]/30 rounded-lg">
                  <h3 className="text-xl font-bold text-[#000000] mb-4">BY THE NUMBERS</h3>
                  <div className="space-y-2 text-[#000000]">
                    <p>• 14,460 lines of code</p>
                    <p>• 90+ files</p>
                    <p>• 7-table database architecture</p>
                    <p>• Real-time inventory tracking</p>
                    <p>• In active government use</p>
                  </div>
                </div>

                <div className="bg-[#535353] text-white p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">CODE PHILOSOPHY</h3>
                  <p className="italic leading-relaxed">
                    "Every function I wrote was a conversation with a future user.
                    Every error message was a moment of empathy."
                  </p>
                </div>
              </div>
            </div>

            {/* Journey Cards: Challenges → Solutions → Learnings */}
            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-3xl font-bold font-serif text-[#000000] mb-8 text-center">
                The Journey
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Challenge 1 */}
                <div className="bg-white/60 backdrop-blur-sm p-6 border border-[#D1D1D1]/30 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-4">🔍</div>
                  <h4 className="font-bold text-[#000000] mb-3">Database Performance</h4>
                  <p className="text-sm text-[#666666] mb-2">THE PROBLEM</p>
                  <p className="text-[#000000] text-sm mb-3">
                    Queries slowing down with hundreds of assets
                  </p>
                  <p className="text-sm text-[#666666] mb-2">THE FIX</p>
                  <p className="text-[#000000] text-sm">
                    Strategic denormalization + proper indexing
                  </p>
                </div>

                {/* Challenge 2 */}
                <div className="bg-white/60 backdrop-blur-sm p-6 border border-[#D1D1D1]/30 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-4">👥</div>
                  <h4 className="font-bold text-[#000000] mb-3">UX for Non-Technical Users</h4>
                  <p className="text-sm text-[#666666] mb-2">THE PROBLEM</p>
                  <p className="text-[#000000] text-sm mb-3">
                    Clerks aren't programmers—I had to think like them
                  </p>
                  <p className="text-sm text-[#666666] mb-2">THE FIX</p>
                  <p className="text-[#000000] text-sm">
                    Large buttons, clear labels, human-friendly errors
                  </p>
                </div>

                {/* Challenge 3 */}
                <div className="bg-white/60 backdrop-blur-sm p-6 border border-[#D1D1D1]/30 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-4">♿</div>
                  <h4 className="font-bold text-[#000000] mb-3">Accessibility First</h4>
                  <p className="text-sm text-[#666666] mb-2">THE PROBLEM</p>
                  <p className="text-[#000000] text-sm mb-3">
                    Not everyone experiences the web the same way
                  </p>
                  <p className="text-sm text-[#666666] mb-2">THE FIX</p>
                  <p className="text-[#000000] text-sm">
                    Screen reader friendly, keyboard navigation, high contrast
                  </p>
                </div>
              </div>
            </div>

            {/* Design Principles */}
            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-3xl font-bold font-serif text-[#000000] mb-8 text-center">
                Design Principles
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-[#000000] mb-2">Accessibility First</h4>
                    <p className="text-[#666666] text-sm">Large buttons, clear labels, screen reader friendly</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-[#000000] mb-2">Forgiveness Over Punishment</h4>
                    <p className="text-[#666666] text-sm">Undo features, clear error messages</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-[#000000] mb-2">Progressive Disclosure</h4>
                    <p className="text-[#666666] text-sm">Don't overwhelm—reveal complexity gradually</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-[#000000] mb-2">Offline Resilience</h4>
                    <p className="text-[#666666] text-sm">Rural offices don't always have stable internet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-[#D1D1D1]/40 text-[#666666] font-medium hover:bg-[#3A4F5B] hover:text-white transition-all duration-300"
              >
                Ask Me About This Project →
              </a>
            </div>

            {/* View Source */}
            <ViewSource
              file="app/builds/page.tsx"
              text="See how I structured the builds exhibition page."
            />

          </section>

          {/* SECONDARY PROJECTS - Gallery */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-8 text-center">
              Other Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

              {/* Project Card 2 */}
              <div className="bg-white/60 backdrop-blur-sm p-6 border border-[#D1D1D1]/30 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-[#D1D1D1]/20 flex items-center justify-center rounded mb-4">
                  <p className="text-4xl">📱</p>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-2">
                  Portfolio Site
                </h3>
                <p className="text-[#666666] italic text-sm mb-4">
                  "The meta-project: building the page you're reading"
                </p>
                <p className="text-xs text-[#666666] mb-2">TECH</p>
                <p className="text-sm text-[#000000] mb-4">Next.js 14 • React Three Fiber • TypeScript</p>
                <p className="text-xs text-[#535353]">Status: Completed ✓</p>
              </div>

              {/* Project Card 3 - Placeholder */}
              <div className="bg-white/60 backdrop-blur-sm p-6 border border-[#D1D1D1]/30 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-[#D1D1D1]/20 flex items-center justify-center rounded mb-4">
                  <p className="text-4xl">🎓</p>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-2">
                  Academic Project
                </h3>
                <p className="text-[#666666] italic text-sm mb-4">
                  "University capstone or group project"
                </p>
                <p className="text-xs text-[#666666] mb-2">TECH</p>
                <p className="text-sm text-[#000000] mb-4">Your tech stack here</p>
                <p className="text-xs text-[#535353]">Status: Add details</p>
              </div>

              {/* Project Card 4 - Placeholder */}
              <div className="bg-white/60 backdrop-blur-sm p-6 border border-[#D1D1D1]/30 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-[#D1D1D1]/20 flex items-center justify-center rounded mb-4">
                  <p className="text-4xl">💡</p>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-2">
                  Personal Experiment
                </h3>
                <p className="text-[#666666] italic text-sm mb-4">
                  "Side project or exploration"
                </p>
                <p className="text-xs text-[#666666] mb-2">TECH</p>
                <p className="text-sm text-[#000000] mb-4">Your tech stack here</p>
                <p className="text-xs text-[#535353]">Status: Add details</p>
              </div>

            </div>
          </section>

          {/* THE SKETCHBOOK - Future Projects */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold font-serif text-[#000000] mb-4 text-center">
              The Sketchbook
            </h2>
            <p className="text-center text-[#666666] italic mb-12">
              Ideas in progress • Future builds • Open to collaboration
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Future Project 1 */}
              <div className="bg-white/60 backdrop-blur-sm p-8 border-2 border-dashed border-[#D1D1D1]/50 rounded-lg">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-3">
                  Accessibility Toolkit
                </h3>
                <p className="text-sm text-[#666666] mb-2">THE QUESTION</p>
                <p className="text-[#000000] mb-4">
                  "What if accessibility was built-in, not bolted-on?"
                </p>
                <p className="text-sm text-[#666666] mb-2">THE WHY</p>
                <p className="text-[#000000] text-sm mb-4">
                  Web components designed for everyone from day one
                </p>
                <p className="text-xs text-[#535353]">Status: 🛠️ Planning</p>
              </div>

              {/* Future Project 2 */}
              <div className="bg-white/60 backdrop-blur-sm p-8 border-2 border-dashed border-[#D1D1D1]/50 rounded-lg">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-3">
                  HR Analytics Dashboard
                </h3>
                <p className="text-sm text-[#666666] mb-2">THE QUESTION</p>
                <p className="text-[#000000] mb-4">
                  "Can data help us understand people better?"
                </p>
                <p className="text-sm text-[#666666] mb-2">THE WHY</p>
                <p className="text-[#000000] text-sm mb-4">
                  Bringing my CS and HR worlds together
                </p>
                <p className="text-xs text-[#535353]">Status: 💭 Thinking</p>
              </div>

              {/* Future Project 3 */}
              <div className="bg-white/60 backdrop-blur-sm p-8 border-2 border-dashed border-[#D1D1D1]/50 rounded-lg">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-3">
                  Mental Health Check-in
                </h3>
                <p className="text-sm text-[#666666] mb-2">THE QUESTION</p>
                <p className="text-[#000000] mb-4">
                  "How can tech hold space for feelings?"
                </p>
                <p className="text-sm text-[#666666] mb-2">THE WHY</p>
                <p className="text-[#000000] text-sm mb-4">
                  Because developers are human too
                </p>
                <p className="text-xs text-[#535353]">Status: 💭 Thinking</p>
              </div>

              {/* Collaboration Invitation */}
              <div className="bg-[#535353] text-white p-8 rounded-lg flex flex-col justify-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">
                  Have an idea?
                </h3>
                <p className="text-[#D1D1D1] mb-4">
                  I'm always open to collaborating on projects that serve people
                  and make technology more human.
                </p>
                <a
                  href="#contact"
                  className="text-white underline hover:text-[#D1D1D1] transition-colors"
                >
                  Let's talk →
                </a>
              </div>

            </div>
          </section>

          {/* CLOSING STATEMENT */}
          <section className="text-center max-w-3xl mx-auto">
            <div className="w-24 h-[1px] bg-[#D1D1D1] mx-auto mb-8"></div>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#000000] leading-tight mb-6">
              "Every project is a question. <br />
              Every line of code, a conversation."
            </blockquote>
            <p className="text-xl text-[#666666] mb-8">
              Want to build something together?
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-[#000000] text-white font-medium hover:bg-[#3A4F5B] transition-all duration-300 text-lg"
            >
              Let's Connect
            </a>
            <p className="text-sm text-[#666666] mt-12 font-serif italic">
              inkfangs • 2025
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
