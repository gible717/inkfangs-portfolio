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
              Advocacy
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              Accessibility Isn't Optional
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 18, 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              As Mahasiswa OKU, I've experienced firsthand what happens when developers treat accessibility as an afterthought. Here's why it should always come first.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Let me tell you about the website I couldn't use last week.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              It was beautifully designed—clean layout, modern aesthetics, smooth animations. But the form labels had no association with their inputs. The navigation relied entirely on hover states. The error messages appeared in red text with no icon, no context, no indication of what went wrong except color.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              For someone with visual impairments, that website might as well have been invisible.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Accessibility isn't a feature. It's a fundamental human right in the digital age."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              What Accessibility Actually Means
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              When most developers hear "accessibility," they think screen readers and alt text. That's part of it. But accessibility is so much more.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Accessibility means designing for the full spectrum of human experience:
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <ul className="space-y-4 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <div>
                    <strong>Visual disabilities:</strong> Blindness, low vision, color blindness
                    <p className="text-sm text-[#666666] mt-1">Screen readers, high contrast, semantic HTML</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <div>
                    <strong>Motor disabilities:</strong> Limited fine motor control, tremors, paralysis
                    <p className="text-sm text-[#666666] mt-1">Keyboard navigation, large click targets, no hover-only interactions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <div>
                    <strong>Cognitive disabilities:</strong> ADHD, dyslexia, memory challenges
                    <p className="text-sm text-[#666666] mt-1">Clear language, consistent patterns, forgiving interfaces</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <div>
                    <strong>Situational limitations:</strong> Bright sunlight, noisy environments, broken arm
                    <p className="text-sm text-[#666666] mt-1">Responsive design, captions, flexible input methods</p>
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              If you design for accessibility, you design for everyone. Because at some point, we all need it.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Myth of "Extra Work"
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I hear this all the time: "Accessibility is important, but we don't have time right now. We'll add it later."
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's the truth: Building accessibility from the start is <em>faster</em> than retrofitting it later.
            </p>

            <div className="bg-[#535353] text-white p-8 my-12">
              <h3 className="text-2xl font-bold mb-6">Accessible from Day One</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#D1D1D1] mb-2">Instead of:</p>
                  <code className="bg-black/30 px-3 py-2 rounded block text-sm">
                    {'<div onClick={handleClick}>Click me</div>'}
                  </code>
                </div>
                <div>
                  <p className="text-sm text-[#D1D1D1] mb-2">Write this:</p>
                  <code className="bg-black/30 px-3 py-2 rounded block text-sm">
                    {'<button onClick={handleClick}>Click me</button>'}
                  </code>
                  <p className="text-sm text-[#D1D1D1] mt-2">Instant keyboard support. Semantic meaning. Screen reader friendly.</p>
                </div>
              </div>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              One line of code. Same functionality. Accessible by default. That's not "extra work." That's just good engineering.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Every inaccessible interface is a locked door. You're not just excluding users—you're telling them they don't matter."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              How InventStor Was Built Accessible
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              When I built InventStor, accessibility wasn't an add-on. It was part of the foundation.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-4">What I Did</h3>
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">✓</span>
                  <span><strong>Semantic HTML:</strong> Every form had proper labels, every button was actually a button</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">✓</span>
                  <span><strong>Keyboard navigation:</strong> Entire system navigable without a mouse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">✓</span>
                  <span><strong>Color contrast:</strong> WCAG AA compliant (4.5:1 minimum ratio)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">✓</span>
                  <span><strong>Error messages:</strong> Clear text + visual icons, never color alone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">✓</span>
                  <span><strong>Focus states:</strong> Visible outline on every interactive element</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">✓</span>
                  <span><strong>Language:</strong> Clear Malay instructions, no jargon, simple sentences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">✓</span>
                  <span><strong>Responsive design:</strong> Works at 200% zoom without breaking</span>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              None of this required extra time. It just required thinking about people from the beginning.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              Why I Care So Deeply
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm Mahasiswa OKU—a student with disabilities. I know what it's like to encounter barriers that shouldn't exist.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I know what it's like to have technology exclude you, not because you can't use it, but because someone didn't think about you when they built it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I know the frustration of seeing a beautiful interface that you can't access. The isolation of being told "it works for everyone else" when it doesn't work for you.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              That's why every project I build starts with one question: <em>Who might I be excluding, and how do I bring them in?</em>
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Business Case (If You Need One)
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Let's be clear: accessibility should matter because <em>people</em> matter. But if you need a business reason:
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>15% of the global population</strong> has some form of disability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Accessible sites have better SEO</strong> (semantic HTML helps search engines)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Keyboard navigation improves productivity</strong> for all users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Clear language reduces support tickets</strong> and user confusion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span><strong>Accessible design is good design</strong>—everyone benefits</span>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              But honestly? If you need a business case to care about people, we need to have a different conversation.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "I build accessible tech because I refuse to be the developer who locks someone out."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              Where to Start
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              If you're reading this and thinking, "Okay, I get it. But where do I start?"—here's your checklist:
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-4">The Accessibility Starter Pack</h3>
              <ol className="space-y-3 text-[#000000] list-decimal list-inside">
                <li><strong>Use semantic HTML.</strong> Buttons are buttons. Headings are headings. Forms have labels.</li>
                <li><strong>Test with keyboard only.</strong> Unplug your mouse. Can you navigate your entire site? If not, fix it.</li>
                <li><strong>Check color contrast.</strong> Use a tool like WebAIM's contrast checker. Aim for WCAG AA minimum.</li>
                <li><strong>Add alt text to images.</strong> Describe what the image shows. If it's decorative, use empty alt ("").</li>
                <li><strong>Make error messages helpful.</strong> "Password incorrect" is better than "Error 401".</li>
                <li><strong>Test with a screen reader.</strong> NVDA (Windows) and VoiceOver (Mac) are free. Listen to your site.</li>
                <li><strong>Ask real users.</strong> People with disabilities are the experts. Listen to them.</li>
              </ol>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              Start small. Start now. Every improvement matters.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              My Commitment
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Every project I touch will be accessible. Not as an afterthought. Not as a "nice to have." As a baseline.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Because technology should open doors, not close them.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Because design is an act of care, and care means including everyone.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Because I refuse to be the developer who builds beautiful things that some people can never see.
            </p>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                Accessibility isn't optional. It's essential. It's overdue. It's our responsibility.
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
                  Mahasiswa OKU and accessibility advocate. Building technology that works for everyone.
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
              <Link href="/thoughts/i-hope-this-doesnt-happen-to-you" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Vulnerability
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    I Hope This Doesn't Happen to You
                  </h4>
                  <p className="text-sm text-[#666666]">
                    There's a vulnerability in writing code that people don't talk about. Every function you write is a confession.
                  </p>
                </article>
              </Link>

              {/* Article 2 */}
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
