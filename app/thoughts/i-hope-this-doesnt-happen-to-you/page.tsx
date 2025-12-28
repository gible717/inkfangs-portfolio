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
              Vulnerability
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              I Hope This Doesn't Happen to You
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 10, 2025</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              There's a vulnerability in writing code that people don't talk about.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Every function you write, every database you design, every interaction you craft—it's a confession of how you see the world working, or how you wish it would work. When you build something, you're not just arranging logic and syntax. You're embedding your assumptions, your values, your understanding of people into lines that will execute without question.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And that means every bug, every edge case you missed, every user who gets frustrated—it's personal in a way that's hard to explain to people who don't write code.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Code is poetry that computers can understand, but it should be poetry that humans can feel."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Weight of a Single Line
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I remember the first time someone told me my code didn't work the way they expected. It wasn't angry. It wasn't even critical. Just… confused. "I thought clicking here would do this, but it did that instead."
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Such a small thing. A misalignment between what I imagined and what they needed. But it hit differently because I had spent hours on that feature, thinking through the logic, making sure the syntax was clean, the queries optimized.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I had built it with care. And somehow, that made the gap between my intention and their experience feel wider.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              When Code Becomes Personal
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's the thing about being a developer who cares: you can't stop at "it works." You start asking harder questions.
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Does it work for everyone, or just for people who think like me?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Is it accessible to someone using a screen reader?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Does the error message help, or does it just blame the user?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Am I building this because it's easy for me, or because it's right for them?</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              Those questions don't have clean answers. And that's the vulnerability—realizing that good code isn't just about efficiency or elegance. It's about empathy. And empathy is messy.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "The most beautiful programs aren't just efficient—they're empathetic."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Confession in the Console
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I used to think the terminal was a neutral space. Just errors and outputs, objective and impersonal. But the longer I code, the more I see it differently.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Every <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">console.log()</code> I write is a conversation with my future self. Every comment is a note to someone I'll never meet. Every function name is a promise about what this piece of the system will do.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And when those promises break? When the logic fails in a way I didn't anticipate? It's not just a bug. It's a reminder that I'm building something bigger than my own understanding.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              I Hope This Doesn't Happen to You
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              But if it does—if you write something with care and watch it fail, if you build something beautiful and see it misunderstood, if you pour yourself into code only to realize it doesn't serve the people you meant it for—I hope you don't walk away.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I hope you take the feedback. I hope you refactor. I hope you learn to see the gap not as failure, but as information. Because the vulnerability of writing code that matters is also the gift.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It means you care enough to get it wrong. And caring enough to get it wrong is the first step to getting it right.
            </p>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                Still learning. Still debugging. Still building.
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
              <Link href="/thoughts/14460-lines-to-ask-one-question" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Technical Deep Dive
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    14,460 Lines to Ask One Question
                  </h4>
                  <p className="text-sm text-[#666666]">
                    InventStor wasn't just about inventory management. It was about asking: How do we serve people better?
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
                    I'm good at code. That's why I'm leaving it. This is the story of how InventStor showed me what I actually love.
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
