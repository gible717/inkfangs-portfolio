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
              Origin Story
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              The Arcade Principle
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 20, 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-0 mb-6">
              Origin Story
            </h2>

            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              I was three years old the first time I understood that technology could feel like magic.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Not because I understood how it worked. I didn't know what a polygon was, or what made the colors move on the screen. I just knew that when my cousin handed me the PlayStation controller, I could make things <em>happen</em>. Press a button, and the world responded. That feedback loop—action, reaction, wonder—embedded itself somewhere deep.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              The arcade came next. Rows of machines glowing in the dark, sounds layering over each other, crowds gathering around whoever was winning. I was too short to see over most people's shoulders, but I didn't need to. The energy was enough. This wasn't solitary entertainment. This was a <em>scene</em>. People were here <em>together</em>, watching each other play, cheering, groaning, calling next.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Then there was Windows Vista at three or four years old—buggy, beautiful, endlessly explorable. I'd click through folders just to see what was inside. Open programs I didn't understand just to watch them load. It wasn't productive. It was pure discovery. The interface felt <em>alive</em>, like it had secrets waiting for someone curious enough to find them.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8 font-semibold">
              I thought I was falling in love with technology.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              But looking back now, I see the pattern I missed: <em>none of those memories were solo</em>.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "I wasn't drawn to tech for the systems. I was drawn to tech for the people experiencing those systems together."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Misdiagnosis
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              For years, I thought the common thread was the tech itself. The systems. The logic. The way things fit together when you understood the architecture.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              So I went into Computer Science. Learned to code. Built projects. Got decent at it—decent enough that people assumed I'd stay in development forever.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              But here's the thing about being good at something: it can hide what you actually care about.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I kept building, but something felt off. I'd finish a feature, and instead of feeling satisfied with the technical execution, I'd be stuck thinking: <em>But does this feel right to use? Will people understand this interaction? Is this delightful, or just functional?</em>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              The questions weren't about optimization. They were about <em>experience</em>.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And when I started paying attention to where my energy actually went, the pattern from childhood reappeared:
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>PS1 at my cousin's house</strong> → I wasn't alone. I was <em>with someone</em>, sharing the controller, laughing when we messed up.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Arcade at three</strong> → The games mattered, but the <em>crowd</em> mattered more. The collective experience of watching, playing, learning together.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Windows Vista exploration</strong> → Even that "solo" memory was about interfaces designed to invite curiosity, to make you <em>feel</em> like you were discovering something meant to be found.</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8 font-semibold">
              I wasn't drawn to tech for the systems.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8 font-semibold">
              I was drawn to tech for the people experiencing those systems together.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Realization
            </h2>

            <p className="text-[#000000] leading-relaxed mb-8">
              Once I saw it, I couldn't unsee it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Every project I actually cared about had the same fingerprint: it was about connection, not just code.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              InventStor wasn't exciting because of the database schema. It was exciting because it was asking <em>"How do we serve people better?"</em>—the warehouse staff, the admins, the users who'd interact with it daily.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              This portfolio isn't impressive because of React hooks or Tailwind config. It's meaningful because of the <strong>file explorer bio</strong> (inviting people to explore like I explored Vista), the <strong>UNO card animations</strong> (making talent feel accessible and playful, not corporate), the <strong>community directory</strong> (building an arcade, not a leaderboard).
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Even the <strong>easter egg</strong> for Hazeeq—hidden poetry for someone I couldn't reach—wasn't a technical flex. It was emotional architecture. A way to hold complexity in code: honoring someone professionally while processing what didn't work personally.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8 font-semibold">
              My consistency was never through technology. It was always through people.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And once I named that, my pivot to HR Management stopped feeling like a betrayal of my skills. It started feeling like the most honest thing I could do.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "The best experiences aren't built for solo players. They're built for people to share."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Arcade Principle
            </h2>

            <p className="text-[#000000] leading-relaxed mb-8">
              Here's what I learned from three-year-old me at the arcade:
            </p>

            <p className="text-[#000000] leading-relaxed mb-8 font-semibold">
              The best experiences aren't built for solo players. They're built for people to share.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              You don't optimize for the fastest load time or the cleanest codebase (though those matter). You optimize for the moment someone feels seen, understood, invited in. You build systems that make people want to bring others along.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              That's the Arcade Principle.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It's why I'm transitioning from code to HR. Not because I'm abandoning tech, but because I finally understand what I was always trying to do with it: <strong>create spaces where people feel like they belong, where talent is accessible, where the experience matters as much as the outcome</strong>.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I'm not writing functions anymore. I'm designing environments.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Not for machines to execute. For people to <em>feel</em>.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Redirect
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              If you're reading this and resonating, maybe you're like me—someone who got good at building systems but kept asking the wrong questions. Not <em>"Does this work?"</em> but <em>"Does this feel right? Will people love this? Does this bring people together?"</em>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              If that's you, you're not broken. You're not unfocused.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8 font-semibold">
              You're just an arcade kid in a world that keeps handing you solo campaigns.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And maybe it's time to build the multiplayer experience you've been craving all along.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              Closing
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I still remember the glow of those arcade screens. The hum of the machines. The feeling that something bigger than any individual game was happening in that room.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm trying to build that feeling now—not in code, but in community. Not in systems, but in people.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Still learning. Still building. Still chasing that three-year-old wonder.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              But this time, I know what I'm actually building for.
            </p>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                Building arcades, not leaderboards. Creating spaces, not just systems.
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
              <Link href="/thoughts/when-gaming-taught-me-about-workplace-manipulation" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Gaming • Workplace
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    When Gaming Taught Me About Workplace Manipulation
                  </h4>
                  <p className="text-sm text-[#666666]">
                    Recognizing toxic patterns in multiplayer games helped me see the same dynamics in professional environments.
                  </p>
                </article>
              </Link>

              {/* Article 2 */}
              <Link href="/thoughts/why-i-learn-from-chefs-not-just-coders" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Philosophy • Craft
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    Why I Learn from Chefs, Not Just Coders
                  </h4>
                  <p className="text-sm text-[#666666]">
                    Michelin-starred kitchens taught me more about software development than most tech talks ever could.
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
