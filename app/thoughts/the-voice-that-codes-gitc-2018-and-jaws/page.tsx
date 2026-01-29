"use client";
import Link from "next/link";
import Header from "../../components/Header";

export default function Article() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <article className="max-w-4xl mx-auto">

          {/* Article Header */}
          <header className="mb-12 pb-8">
            <div className="text-xs text-[#666666] mb-4 uppercase tracking-widest">
              Accessibility • Perspective • GITC 2018
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              The Voice That Codes: What I Learned Watching a Blind Competitor at GITC 2018
            </h1>
            <p className="text-lg text-[#666666] italic mb-4">
              On hotel room phone calls, curiosity I couldn't shake, and the moment I realized accessibility isn't optional—it's foundational
            </p>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>January 2026</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              I was 14 when the phone rang in my hotel room.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Global IT Challenge 2018. I was there representing Malaysia, nervous and excited in equal measure.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              The organizer's voice was professional, polite: <em>"Do you need JAWS support for the competition?"</em>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I said no. I didn't need it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              But the question stayed with me: <strong>Who does?</strong>
            </p>

            {/* Section 1: The Curiosity I Couldn't Shake */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Question That Wouldn't Leave
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I didn't know what JAWS was. I had no context for why they were asking.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But somewhere in the back of my mind, a question formed:
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>How do you compete in a programming competition if you can't see the screen?</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I kept thinking about it.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                How do you read code?<br />
                How do you debug?<br />
                How do you know where your cursor is?
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                I couldn't imagine coding without seeing. But someone, somewhere in this competition, was about to do exactly that.
              </p>
            </div>

            {/* Section 2: The Moment That Changed Everything */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              And Then I Saw It
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              The individual challenge. Rows of competitors at their workstations. Everyone focused, typing, debugging.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              And then I heard it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>A voice. Fast, mechanical, relentless. Reading code aloud.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I looked over.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              A participant—completely blind—sitting at their computer, headphones on, hands flying across the keyboard. The screen reader was speaking so quickly I couldn't even process the words. But they could. They were writing code. Real, functional, competitive code.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>I was shocked. And then I was amazed.</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I had been coding for years at that point. I thought I understood what programming was.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                But watching that competitor shattered every assumption I didn't know I had.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed">
                I thought coding required seeing.<br />
                I thought debugging required visual scanning.<br />
                I thought you <em>needed</em> a screen.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mt-4 font-medium">
                I was wrong.
              </p>
            </div>

            {/* Section 3: What JAWS Actually Is */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Technology Behind the Voice
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              JAWS—Job Access With Speech—is a screen reader. It converts text on the screen into synthesized speech or refreshable Braille.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              It's not just for reading documents. <strong>It's built for everything</strong>—emails, spreadsheets, web browsers, and yes, code editors.
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              And it's powerful:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Customizable reading speed (which is why that voice sounded impossibly fast)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Control over punctuation verbosity (critical for code)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Scripting language to make non-accessible apps usable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Support for nearly every major application</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              For someone who is blind, JAWS isn't assistive technology.<br />
              <strong>It's the interface itself.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                Imagine if every line of code you wrote had to be spoken aloud before you could understand it. Imagine debugging by listening instead of scanning. That's what programming with JAWS is like—and people do it. Successfully.
              </p>
            </blockquote>

            {/* Section 4: What It Taught Me About Accessibility */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Why This Moment Mattered
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Before GITC 2018, accessibility was theoretical to me.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I knew it was "important." I knew developers should "care about it."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              But I didn't <em>get</em> it. Not really.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Watching that competitor changed everything.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I realized:
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                <strong>Accessibility isn't a "nice-to-have." It's not a checkbox. It's not something you add at the end.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                Accessibility is what makes technology usable for everyone. And when you ignore it, you're not just excluding people—you're saying their participation doesn't matter.
              </p>
            </div>

            {/* Section 5: How It Shaped My Career */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Seed That Grew
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm pivoting from software development to HR now. People ask why.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Part of the answer starts here. At GITC 2018. Watching someone code without sight.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Because I realized: <strong>I don't just want to build systems. I want to build systems that include everyone.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And sometimes that's not about the code. It's about the people using it.
            </p>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                When I built InventStor—an ~18,000+ line government inventory system—I thought about that GITC competitor.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                Could someone using JAWS navigate my system?<br />
                Could they complete tasks independently?<br />
                Or did I accidentally build barriers into my code?
              </p>
              <p className="text-[#E0E0E0] leading-relaxed">
                I didn't have all the answers. But <strong className="text-white">I started asking the questions.</strong>
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              And now, as I move toward HR, I carry that same principle: <strong>If your process, your policy, your system excludes people—it's not finished.</strong>
            </p>

            {/* Section 6: What I Want Other Developers to Know */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              To Every Developer Reading This
            </h2>

            <p className="text-[#000000] leading-relaxed mb-4">
              If you're building something—an app, a website, a dashboard, anything—ask yourself:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Can someone using a screen reader navigate this?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Can someone who can't use a mouse still complete tasks?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Are my error messages readable by assistive tech?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Did I rely on color alone to communicate information?</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              You don't need to be an accessibility expert to start caring.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>You just need to remember: the person using your code might experience it in ways you never considered.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                Accessibility isn't about accommodating edge cases. It's about recognizing that "normal use" looks different for everyone.
              </p>
            </blockquote>

            {/* Section 7: The Bigger Lesson */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              What GITC 2018 Really Taught Me
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              That competitor didn't just teach me about JAWS.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              They taught me about assumptions.
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              I assumed:
            </p>

            <ul className="space-y-2 mb-6 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Coding required sight</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Visual interfaces were the only way</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"Everyone" used a mouse and a monitor</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>I was wrong on all counts.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              And if I was wrong about that—
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>What other assumptions am I carrying without realizing it?</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                This is why I want to work in HR.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                Because I want to challenge assumptions about who belongs, who's capable, who deserves a seat at the table.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I want to build workplaces where a blind developer isn't "inspiring"—they're just... a developer. Where accessibility isn't an afterthought—it's baked into the foundation.
              </p>
              <p className="text-[#D1D1D1] leading-relaxed">
                That GITC competitor proved something I'll never forget: <strong className="text-white">Barriers aren't inherent. They're designed. And what's designed can be redesigned.</strong>
              </p>
            </div>

            {/* Closing */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Phone Call That Started It All
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I still think about that hotel room phone call.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              <em>"Do you need JAWS support?"</em>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I said no. But someone else said yes.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And because the organizers <strong>asked</strong>—because they <strong>planned</strong> for it—that competitor got to participate. They got to compete. They got to prove that blindness doesn't disqualify you from coding.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>That's what accessibility is.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It's not charity. It's not inspiration porn.<br />
              <strong>It's making sure the door is open before people arrive.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm text-center">
              <p className="text-[#000000] leading-relaxed mb-4">
                To the competitor I watched at GITC 2018:<br />
                <strong>You changed how I see technology.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed italic">
                I don't know your name.<br />
                I don't know if you won.<br />
                But you taught me something I'll carry for the rest of my career:<br />
                <strong>Inclusion isn't a feature. It's the foundation.</strong>
              </p>
            </blockquote>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I'm not a developer anymore. Not primarily.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                But I'm taking this lesson with me into HR:
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                If you're building something—a system, a team, a culture—and someone can't participate because of how you designed it, <strong>the problem isn't them. It's your design.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed mt-6">
                And the solution? <strong>Redesign.</strong>
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                Inclusion isn't a feature. It's the foundation.
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
              <Link href="/thoughts/women-who-built-programming-then-disappeared" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    History • Gender
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    Women Who Built Programming, Then Disappeared from the Story
                  </h4>
                  <p className="text-sm text-[#666666]">
                    On the six women who invented modern programming, the industry that erased them, and why their story matters now.
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
