"use client";
import Header from "../../components/Header";
import Link from "next/link";

export default function Article() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <article className="max-w-4xl mx-auto">

          {/* Article Header */}
          <header className="mb-12 pb-8 border-b border-[#D1D1D1]">
            <div className="text-xs text-[#666666] mb-4 uppercase tracking-widest">
              Technical Deep Dive
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              14,460 Lines to Ask One Question
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 12, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              InventStor wasn't just about inventory management. It was about asking: <em>How do we serve people better?</em>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Every line of code was part of that conversation. Every database table, every validation rule, every error message—they were all attempts to answer that question in a language computers could understand but humans could feel.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              This is the story of a government inventory management system built during my final internship. But more than that, it's the story of what happens when you stop building features and start building questions.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "14,460 lines of code. 90+ files. 7-table database. One question: How do we serve people better?"
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Problem Nobody Asked Me to Solve
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              When I started my internship at the government office, the brief was simple: build an inventory tracking system. Track assets. Monitor stock levels. Generate reports. Standard CRUD operations. Nothing complicated.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But I spent the first week just watching. Watching how staff logged items manually in thick ledgers. Watching how they searched for asset information by flipping through pages. Watching how long it took to prepare a single inventory report for their superiors.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I could have built what they asked for. But I kept thinking: <em>What if we could do better?</em>
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Architecture of Empathy
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I designed InventStor around how people actually work, not just how systems theoretically should work.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-4">Technical Stack</h3>
              <ul className="space-y-2 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Backend:</strong> PHP (native, no framework—full control)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Database:</strong> MySQL with 7 interconnected tables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Frontend:</strong> Bootstrap 5 for responsive design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Interactivity:</strong> Vanilla JavaScript for real-time updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Architecture:</strong> 90+ files, modular structure</span>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              But the tech stack was just the tool. The real architecture was built around three principles:
            </p>

            <h3 className="text-2xl font-bold text-[#000000] mb-4">
              1. Anticipate needs before users ask
            </h3>

            <p className="text-[#000000] leading-relaxed mb-6">
              Instead of just tracking "Item Name" and "Quantity," I built in fields for supplier information, purchase dates, warranty periods, and asset locations. Why? Because I watched staff scramble through physical files trying to answer these questions when their supervisors asked.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              The system didn't just store data—it anticipated the questions people would ask three months from now.
            </p>

            <h3 className="text-2xl font-bold text-[#000000] mb-4">
              2. Fail gracefully and helpfully
            </h3>

            <p className="text-[#000000] leading-relaxed mb-6">
              Every error message was written in Malay, clear and actionable. Not "Error 404: Resource not found" but "Item tidak dijumpai dalam sistem. Cuba cari dengan nombor aset yang lain." (Item not found in system. Try searching with a different asset number.)
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Because errors aren't failures—they're conversations. And conversations should be in a language people actually speak.
            </p>

            <h3 className="text-2xl font-bold text-[#000000] mb-4">
              3. Respect the person, not just the process
            </h3>

            <p className="text-[#000000] leading-relaxed mb-6">
              I added a confirmation dialog before any deletion. Not just "Are you sure?" but a message that explained what would happen: "Tindakan ini akan memadamkan rekod inventori secara kekal. Adakah anda pasti?" (This action will permanently delete the inventory record. Are you sure?)
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It's a small thing. But it's the difference between treating users like they might make mistakes and treating them like they're collaborators in the system's integrity.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "The best code doesn't just work—it understands."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Database That Tells a Story
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Seven tables. Each one connected, each one purposeful:
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">users</code>
                  <span>— Who has access, what they can do</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">categories</code>
                  <span>— How we organize the world of things</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">items</code>
                  <span>— The things themselves, with all their details</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">stock</code>
                  <span>— Real-time quantities, locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">transactions</code>
                  <span>— The story of movement—in, out, between</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">suppliers</code>
                  <span>— Who we trust, how to reach them</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">reports</code>
                  <span>— Generated insights, saved time</span>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              Each table was a chapter. Together, they told the story of how things move through a system—and more importantly, how people interact with those things.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              What I Learned About Myself
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's the part nobody tells you about building something real: it changes you.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I started InventStor thinking I was building a system. I finished it realizing I was building a relationship—between technology and the people who depend on it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I learned that I don't love code for code's sake. I love code because of what it can do for people. I love the moment when someone says, "Oh, this makes my job so much easier."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And that realization—that's what led me to HR. Because I realized my gift isn't just building systems. It's understanding the humans who use them.
            </p>

            {/* Stats Section */}
            <div className="bg-[#535353] text-white p-8 my-12">
              <h3 className="text-2xl font-bold mb-6">By The Numbers</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-4xl font-bold mb-2">14,460</p>
                  <p className="text-sm text-[#D1D1D1]">Lines of code</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">90+</p>
                  <p className="text-sm text-[#D1D1D1]">Files created</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">7</p>
                  <p className="text-sm text-[#D1D1D1]">Database tables</p>
                </div>
              </div>
              <p className="text-sm text-[#D1D1D1] mt-6 italic">
                Still in active use. Still serving people. Still asking better questions.
              </p>
            </div>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Question Remains
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              InventStor is complete. It's being used. It's working. But the question I built it around—<em>How do we serve people better?</em>—that question doesn't end.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              It follows me into every project. Every design decision. Every career choice. Including my decision to transition from Computer Science to HR Management.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Because serving people better isn't just about better code. It's about better understanding. Better empathy. Better systems that remember we're human.
            </p>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                14,460 lines later, still asking questions. Still listening for answers.
              </p>
            </div>

          </div>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-[#D1D1D1]">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-[#D1D1D1]/30 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#000000] mb-2">Written by Noufah</p>
                <p className="text-sm text-[#666666] mb-4">
                  Final semester CS110 student at UiTM Perlis, transitioning to HR Management.
                  Building technology that remembers we're human.
                </p>
                <Link href="/bio" className="text-sm text-[#000000] underline hover:text-[#3A4F5B]">
                  Read my full story →
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-[#D1D1D1]">
            <h3 className="text-2xl font-bold font-serif text-[#000000] mb-8">
              Continue Reading
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Article 1 */}
              <Link href="/thoughts/from-syntax-to-empathy" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Personal Journey
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    From Syntax to Empathy: Why I'm Choosing HR
                  </h4>
                  <p className="text-sm text-[#666666]">
                    I'm good at code. That's why I'm leaving it. This is the story of how InventStor showed me what I actually love.
                  </p>
                </article>
              </Link>

              {/* Article 2 */}
              <Link href="/thoughts/accessibility-isnt-optional" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Advocacy
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    Accessibility Isn't Optional
                  </h4>
                  <p className="text-sm text-[#666666]">
                    As Mahasiswa OKU, I've experienced firsthand what happens when developers treat accessibility as an afterthought.
                  </p>
                </article>
              </Link>
            </div>
          </div>

          {/* Back to Archive */}
          <div className="mt-12 text-center">
            <Link href="/thoughts" className="inline-block text-[#666666] hover:text-[#000000] transition-colors">
              ← Back to all articles
            </Link>
          </div>

        </article>
      </main>
    </>
  );
}
