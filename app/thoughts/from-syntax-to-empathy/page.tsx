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
          <header className="mb-12 pb-8">
            <div className="text-xs text-[#666666] mb-4 uppercase tracking-widest">
              Personal Journey
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              From Syntax to Empathy: Why I'm Choosing HR
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 15, 2025</span>
              <span>•</span>
              <span>6 min read</span>
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
              I'm good at code. That's why I'm leaving it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              That sentence confuses people. Recruiters, professors, even my family. "But you won a gold medal in India at 14. You built a government system that's 100% complete. You understand databases, logic, architecture. Why would you walk away?"
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              This is the story of how InventStor showed me what I actually love—and it's not the syntax.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "My gift isn't debugging code—it's debugging team dynamics. My passion isn't optimizing algorithms—it's optimizing human potential."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Moment I Knew
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              It was three weeks into my internship. I had just finished implementing the real-time stock tracking feature for InventStor. The code was clean, the queries were optimized, everything worked perfectly.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But when I showed it to the staff, one of them—an older woman who'd been working there for 15 years—looked at the screen and said, "Oh. This will save me so much time."
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              She didn't say it was elegant. She didn't care about the database architecture. She cared that I had seen her struggle and built something that made her life easier.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              That's when I realized: the part of coding I love isn't the code. It's the person on the other side.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              What Computer Science Taught Me
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Don't get me wrong—I'm grateful for my CS degree. It taught me how to think systematically, how to break down complex problems, how to design solutions that scale.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But more than that, it taught me what I'm <em>not</em>. And that's just as valuable.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-4">I'm not:</h3>
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>The developer who gets excited about new frameworks just because they're new</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>The engineer who can spend 12 hours debugging for the pure satisfaction of solving it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>The coder who wants to build the most technically complex solution</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-4">I am:</h3>
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>The person who watches how users interact with the system and notices when they're frustrated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>The builder who writes error messages that feel like a helpful colleague, not a machine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>The ENFP who gets energy from understanding people, not from perfecting algorithms</span>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              CS didn't just teach me to code. It taught me that I care about people <em>through</em> code, not because of it.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "I realized my strength isn't writing perfect algorithms—it's understanding the people who use them."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              Why HR? Why Now?
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              People think HR is about paperwork and policies. But to me, HR is about designing systems for humans—just like software, but with more complexity and more heart.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              When I look at what excites me most about technology, it's always been:
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>User research:</strong> Understanding how people actually work, not how we think they work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Accessibility advocacy:</strong> Building things that work for everyone, especially Mahasiswa OKU like me</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Team dynamics:</strong> Watching how people collaborate and finding ways to make it smoother</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Empathetic design:</strong> Creating experiences that make people feel seen and understood</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              Those aren't software skills. Those are <em>human</em> skills. And HR lets me focus on exactly that.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              What I'm Taking With Me
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm not abandoning Computer Science. I'm expanding it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Everything I learned about building systems—about anticipating needs, designing for edge cases, testing assumptions, iterating based on feedback—all of that translates directly to HR.
            </p>

            <div className="bg-[#535353] text-white p-8 my-12">
              <h3 className="text-2xl font-bold mb-6">From Code to People</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#D1D1D1] mb-1">In Software:</p>
                  <p className="text-lg">I debugged broken code</p>
                </div>
                <div>
                  <p className="text-sm text-[#D1D1D1] mb-1">In HR:</p>
                  <p className="text-lg">I'll debug broken processes and team dynamics</p>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-[#D1D1D1] mb-1">In Software:</p>
                  <p className="text-lg">I optimized database queries</p>
                </div>
                <div>
                  <p className="text-sm text-[#D1D1D1] mb-1">In HR:</p>
                  <p className="text-lg">I'll optimize workflows and employee experiences</p>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-[#D1D1D1] mb-1">In Software:</p>
                  <p className="text-lg">I built accessible interfaces</p>
                </div>
                <div>
                  <p className="text-sm text-[#D1D1D1] mb-1">In HR:</p>
                  <p className="text-lg">I'll build inclusive workplaces</p>
                </div>
              </div>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              The principles are the same. The medium is different. And honestly? Working with humans directly feels more alive than working through code ever did.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              To Anyone Who Feels the Same
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              If you're good at something but it doesn't light you up—listen to that.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              If you studied one thing but realized you love something adjacent—that's not failure. That's growth.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              If you feel like you're supposed to love what you're good at, but you don't—you're not broken. You're just paying attention.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I'm choosing HR because I'm choosing myself. I'm choosing the work that makes me feel most alive. I'm choosing to use my CS skills in service of people, not just products.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "I'm not leaving Computer Science. I'm expanding it. Taking everything I learned about building systems and applying it to the most complex system of all: humans."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Future I'm Building
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Final semester. Transitioning to HR Management. And for the first time in years, I feel aligned.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'll always be a coder at heart. I'll always think in systems and logic. But now I get to apply that thinking to what I care about most: people.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              So no, I'm not leaving Computer Science. I'm just finally using it the way it was always meant to be used—in service of human flourishing.
            </p>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                From syntax to empathy. From algorithms to advocacy. From code to compassion.
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
              <Link href="/thoughts/14460-lines-to-ask-one-question" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Technical Deep Dive
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    ~18,000+ Lines to Ask One Question
                  </h4>
                  <p className="text-sm text-[#666666]">
                    InventStor wasn't just about inventory management. It was about asking: How do we serve people better?
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
