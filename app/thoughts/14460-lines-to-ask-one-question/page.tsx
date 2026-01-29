"use client";
import Header from "../../components/Header";
import Link from "next/link";
import CountUp from "../../components/CountUp";

export default function Article() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <article className="max-w-4xl mx-auto">

          {/* Article Header */}
          <header className="mb-12 pb-8">
            <div className="text-xs text-[#666666] mb-4 uppercase tracking-widest">
              Technical Deep Dive
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              ~18,000+ Lines to Ask One Question
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 12, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
            {/* Border line - longer than text but not full width */}
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
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
                "~18,000+ lines of code. 98 PHP files. 8-table database. 116 commits. One question: How do we serve people better?"
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
                  <span><strong>Backend:</strong> PHP 8.3 (native, no framework—full control)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Database:</strong> MySQL 8.4 with 8 interconnected tables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Frontend:</strong> Bootstrap 5.3 for responsive design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Interactivity:</strong> Vanilla JavaScript for real-time updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Charts:</strong> Chart.js for dashboard visualizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Security:</strong> bcrypt hashing, session management, CSRF protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Architecture:</strong> 98 PHP files, modular structure</span>
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
              Eight tables. Each one connected, each one purposeful:
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">staf</code>
                  <span>— User accounts, roles, authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">jabatan</code>
                  <span>— Department/unit organization</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">kategori</code>
                  <span>— Product categorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">barang</code>
                  <span>— Inventory items with stock levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">permohonan</code>
                  <span>— Stock request headers</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">permohonan_barang</code>
                  <span>— Request line items</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">transaksi_stok</code>
                  <span>— Stock movement audit trail</span>
                </li>
                <li className="flex items-start gap-3">
                  <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm flex-shrink-0">telegram_reminder_log</code>
                  <span>— Automated notification tracking</span>
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
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <p className="text-4xl font-bold mb-2">
                    <CountUp to={18000} prefix="~" suffix="+" className="tabular-nums" />
                  </p>
                  <p className="text-sm text-[#D1D1D1]">Lines of code</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">
                    <CountUp to={98} className="tabular-nums" />
                  </p>
                  <p className="text-sm text-[#D1D1D1]">PHP files</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">
                    <CountUp to={8} duration={1} className="tabular-nums" />
                  </p>
                  <p className="text-sm text-[#D1D1D1]">Database tables</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">
                    <CountUp to={116} className="tabular-nums" />
                  </p>
                  <p className="text-sm text-[#D1D1D1]">Git commits</p>
                </div>
              </div>
              <p className="text-sm text-[#D1D1D1] mt-6 italic">
                4+ months of development. 100% complete. Ready to serve people. Still asking better questions.
              </p>
            </div>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Question Remains
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              InventStor is complete. 100% done. Ready for deployment. But the question I built it around—<em>How do we serve people better?</em>—that question doesn't end.
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
                ~18,000+ lines later, still asking questions. Still listening for answers.
              </p>
            </div>

          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-[#D1D1D1]">
            <h3 className="text-2xl font-bold font-serif text-[#000000] mb-8">
              Continue Reading
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Article 1 */}
              <Link href="/thoughts/why-im-terrified-to-push-to-production" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Impostor Syndrome
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    Why I'm Terrified to Push to Production
                  </h4>
                  <p className="text-sm text-[#666666]">
                    The code works. The tests pass. But my finger hovers over the deploy button like it's a self-destruct switch.
                  </p>
                </article>
              </Link>

              {/* Article 2 */}
              <Link href="/thoughts/when-the-vc-called-me-daughter-of-the-university" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Achievement
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    When the VC Called Me "Daughter of the University"
                  </h4>
                  <p className="text-sm text-[#666666]">
                    On winning pitch competitions, being called "inspirational," and wondering why validation never feels like enough.
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
