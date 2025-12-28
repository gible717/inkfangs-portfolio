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
              Advocacy • Leadership
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              When the VC Called Me "Daughter of the University"
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 20, 2025</span>
              <span>•</span>
              <span>9 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              I walked in as a student, but I walked out feeling like a daughter of the university.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              This is the story of what happens when you stop waiting for permission to advocate for change—and instead walk directly into the Vice Chancellor's orbit with a policy proposal in your hands.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It's a story about courage, conviction, and the moment I realized that true leadership isn't about titles. It's about humanity and inclusion.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Inclusion is not just about allowing people into the room—it's about ensuring they feel truly seen and celebrated when they get there."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              October 2024: The Recognition
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              October 31, 2024. Shah Alam. I stood on stage receiving the <strong>Anugerah Khas Mahasiswa OKU Harapan 2024</strong>—Special Recognition for OKU Students of Promise.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-4">The Numbers</h3>
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Top 3</strong> out of 700-1,750 OKU students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>35 UiTM campuses</strong> across Malaysia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>University-wide recognition</strong> from Bahagian Perkhidmatan & Pembangunan OKU (U-DserveD UiTM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>First time</strong> the university saw me as "exceptional"</span>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              This wasn't just a trophy. This was validation. This was the institution saying: <em>We see you. Your voice matters.</em>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And when an institution finally sees you—that's when you realize you have a responsibility to speak not just for yourself, but for everyone who's still waiting to be seen.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Moment I Decided to Act
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              The ceremony was beautiful. The celebration was meaningful. But as I watched my fellow OKU students—brilliant, resilient, deserving—I kept thinking:
            </p>

            <p className="text-[#000000] leading-relaxed mb-6 italic">
              This recognition is wonderful. But what happens after tonight? What changes? What systems improve? How do we ensure this isn't just one night of visibility, but the beginning of sustained, meaningful inclusion?
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I could have gone home with my award and called it a success. Instead, I spent the next few weeks drafting a policy proposal.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "I walked in as a student, but I walked out feeling like a daughter of the university."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              January 2025: The Meeting That Changed Everything
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Last Friday evening. Majlis Sambutan Hari OKU peringkat Universiti Teknologi MARA (UiTM) 2025. Cowboy-themed celebration, lively atmosphere, fellow students celebrating.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              And then: the Vice Chancellor arrived.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Most students would take a photo, shake hands, say thank you. I did all of that. But I also did something else.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I presented a <em>buah tangan</em>—a personal proposal advocating for greater visibility and meaningful recognition specifically for UiTM OKU students.
            </p>

            <h3 className="text-2xl font-bold text-[#000000] mb-4">
              What I Proposed
            </h3>

            <p className="text-[#000000] leading-relaxed mb-6">
              The proposal wasn't long. It didn't need to be. It focused on actionable, sustainable ways to support OKU students beyond ceremonial recognition:
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Increased visibility:</strong> Highlighting OKU student achievements year-round, not just during OKU Day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Meaningful recognition:</strong> Creating pathways for OKU students to contribute to university policy and planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Systemic support:</strong> Ensuring accessibility isn't an afterthought in campus infrastructure and digital systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Community building:</strong> Facilitating mentorship and peer support networks for OKU students across campuses</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              I handed it to the Vice Chancellor. And I waited.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              "Dia Bermuka Masam dan Berpaling..."
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              During the ceremony, a student recited <strong>Surah Abasa (1-6)</strong>:
            </p>

            <div className="bg-[#535353] text-white p-8 my-12">
              <p className="text-xl italic leading-relaxed mb-4">
                "Dia (Muhammad) bermuka masam dan berpaling, kerana telah datang seorang buta kepadanya..."
              </p>
              <p className="text-sm text-[#D1D1D1]">
                "He frowned and turned away, because there came to him the blind man..."
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              The surah is a reminder: we must never turn away from those seeking light. We must never dismiss those who approach us with need, with questions, with hope.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Later that evening, the Vice Chancellor posted about the event on Facebook—and quoted this exact surah. To see a top leader resonate with this specific reminder was a masterclass in empathetic leadership.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Leadership is often defined by KPIs and rankings. But true leadership is about humanity and inclusion."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              What This Taught Me About Advocacy
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I used to think advocacy meant waiting for the right moment. The right credentials. The right platform.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But that night taught me something different:
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-4">Lessons in Advocacy</h3>
              <ol className="space-y-4 text-[#000000] list-decimal list-inside">
                <li>
                  <strong>You don't need permission to advocate.</strong> You need courage and a clear proposal.
                </li>
                <li>
                  <strong>Timing matters, but preparation matters more.</strong> The moment presented itself because I was ready.
                </li>
                <li>
                  <strong>Representation is powerful, but policy is permanent.</strong> Awards celebrate. Systems sustain.
                </li>
                <li>
                  <strong>Empathetic leaders exist.</strong> Look for them. Approach them. Trust that your voice matters.
                </li>
                <li>
                  <strong>Change starts with one conversation.</strong> You don't need a movement—just a memo and the courage to hand it over.
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              Why This Matters for My HR Journey
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              As I transition from Computer Science into Human Resources & People Strategy, this moment reinforced my <em>why</em>.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              My goal isn't just to manage people. It's to build workplaces and policies where diversity isn't just a quota, but a source of strength.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Where accessibility isn't an accommodation—it's a foundation.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Where every person who walks into the room feels seen, celebrated, and valued—not despite their differences, but because of them.
            </p>

            {/* Stats Section */}
            <div className="bg-[#535353] text-white p-8 my-12">
              <h3 className="text-2xl font-bold mb-6">By The Numbers</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-4xl font-bold mb-2">Top 3</p>
                  <p className="text-sm text-[#D1D1D1]">Out of 700-1,750 OKU students</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">35</p>
                  <p className="text-sm text-[#D1D1D1]">UiTM campuses represented</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">1</p>
                  <p className="text-sm text-[#D1D1D1]">Policy proposal. One conversation. Infinite impact.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              To Every Student Who Thinks They're Not Ready
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              You are.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              You don't need a perfect resume. You don't need years of experience. You don't need someone else's permission to speak up for what you believe in.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              What you need is:
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">✓</span>
                <span>A clear understanding of the problem</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">✓</span>
                <span>A thoughtful, actionable proposal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">✓</span>
                <span>The courage to walk up to someone in power and say: "I have an idea."</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              That's it. That's all it takes to start changing systems.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              What Happens Next
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I don't know yet if every suggestion in my proposal will be implemented. That's not entirely in my control.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But what I do know is this: the conversation has started. The Vice Chancellor has the proposal. The institution knows that students are watching, advocating, expecting meaningful change.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And sometimes, that's enough to shift the entire trajectory of what's possible.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Jazakallah khair, Datuk VC, for the grace and the inspiration. Here's to hoping that our suggestions can spark a positive change for the community."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Daughter of the University
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I walked in as a student. But I walked out feeling like a daughter of the university.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Not because of the award. Not because of the recognition. But because for the first time, I felt like I had a voice in shaping the institution that shaped me.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              That's what advocacy feels like. That's what inclusion feels like. That's what it means to be truly seen.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And now? Now I carry that responsibility forward—into HR, into people strategy, into every workplace and policy I touch. Building spaces where everyone feels like they belong. Where no one is turned away. Where everyone is celebrated.
            </p>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#000000] text-lg mb-2">
                From award recipient to advocate.
              </p>
              <p className="text-[#666666] italic">
                One policy proposal. One conversation. One step toward systemic change.
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
                  Mahasiswa OKU, disability advocate, and Top 3 Anugerah Khas Mahasiswa OKU Harapan 2024 recipient.
                  Building policies and workplaces where diversity is strength.
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

              {/* Article 2 */}
              <Link href="/thoughts/from-syntax-to-empathy" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Personal Journey
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    From Syntax to Empathy: Why I'm Choosing HR
                  </h4>
                  <p className="text-sm text-[#666666]">
                    I'm good at code. That's why I'm leaving it. This is the story of how I discovered what I actually love.
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
