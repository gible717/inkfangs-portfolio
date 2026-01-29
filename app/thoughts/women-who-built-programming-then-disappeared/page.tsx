"use client";
import Link from "next/link";
import Image from "next/image";
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
              History • Gender • Tech
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              Women Who Built Programming, Then Disappeared from the Story
            </h1>
            <p className="text-lg text-[#666666] italic mb-4">
              On the six women who invented modern programming, the industry that erased them, and why their story matters now
            </p>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>January 2026</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              Here's something they don't teach you in Computer Science 101: <strong>Programming was invented by women.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Not "contributed to by women."<br />
              Not "also included women."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>Invented. By women.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And then—carefully, systematically, thoroughly—they were written out of the story.
            </p>

            {/* Section 1: The Six */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Six Who Wrote the First Code
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              1945. World War II. The U.S. Army needs to calculate ballistics trajectories faster.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              They build ENIAC—the world's first general-purpose, programmable, all-electronic computer.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And they hire six women to make it work:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Jean Jennings Bartik</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Kathleen McNulty Mauchly Antonelli</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Marlyn Wescoff Meltzer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Frances Bilas Spence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Ruth Lichterman Teitelbaum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Betty Snyder Holberton</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              These women weren't hired as "assistants." They weren't hired to "support" the real engineers.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>They were hired because no one—not one single person on Earth—knew how to program a computer yet.</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Think about that for a second.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                There were no programming languages.<br />
                No instruction manuals.<br />
                No Stack Overflow.<br />
                No GitHub.<br />
                No documentation whatsoever.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed">
                These six women looked at a room-sized machine with 18,000 vacuum tubes and <strong className="text-white">invented programming from scratch.</strong>
              </p>
            </div>

            {/* Section 2: What They Actually Did */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              What They Actually Built
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              The ENIAC could calculate a ballistic trajectory in 20 seconds—something that took humans 40 hours by hand.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But it was useless without instructions.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              So these six women:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Invented subroutines</strong>—the foundation of every function you've ever written</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Invented nesting</strong>—the concept of putting code inside other code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Figured out parallel processing</strong>—when the Army complained ENIAC was too slow, they made it run calculations simultaneously</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              These aren't "contributions to programming."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>These ARE programming.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                Every time you write a function, you're using a concept invented by these six women.
              </p>
            </blockquote>

            {/* Section 3: The Disappearance */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              And Then They Vanished
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              February 15, 1946. The ENIAC is unveiled to the public.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Press. Photographers. Military officials. Everyone wants to see this revolutionary machine.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>The six women who made it work? Not introduced. Not mentioned. Not invited to the celebratory dinner.</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                The newspapers described them as "machine operators."
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                The Army called them "computers"—a job title for women who did manual calculations.
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                They were the first programmers in human history, and they were labeled as clerks.
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              For decades, their names weren't in the history books.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              For decades, people assumed the men who built the hardware also wrote the software.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              For decades, <strong>the women who invented programming were invisible.</strong>
            </p>

            {/* Section 4: Why It Happened */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Why This Erasure Wasn't an Accident
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's the part that makes me angry.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              In the 1940s, programming was seen as <strong>"women's work"</strong>—similar to secretarial tasks. It was considered less important than building hardware.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But as programming became more lucrative, more prestigious, more powerful—
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>It was rebranded as "men's work."</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              By the 1960s, the industry had transformed. Programming was suddenly seen as highly technical, mathematical, logical—traits that were (wrongly) associated with men.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              The women who built the foundation? Written out. Forgotten. Erased.
            </p>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                This wasn't a slow, natural change.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                This was deliberate.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Companies started screening candidates with personality tests designed to favor men. Job descriptions started requiring traits like "doesn't care about people"—explicitly filtering out women.
              </p>
              <p className="text-[#D1D1D1] leading-relaxed">
                The field that women created was systematically redesigned to exclude them.
              </p>
            </div>

            {/* Section 5: The Other Pioneers */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              And They Weren't the Only Ones
            </h2>

            <p className="text-[#000000] leading-relaxed mb-8">
              Before the six ENIAC programmers, there was Ada Lovelace—who in 1843 wrote the first algorithm intended for a machine, decades before computers existed.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              After them, there was Grace Hopper—who invented the first compiler and developed COBOL, a language still used today in banking and government systems.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Women didn't just "participate" in computing history.<br />
              <strong>They BUILT it.</strong>
            </p>

            {/* Section 6: Belated Recognition */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Fifty Years Too Late
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              It took until 1997—more than 50 years later—for the six ENIAC programmers to be inducted into the Women in Technology International Hall of Fame.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              By then, some of them had already passed away.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              By then, generations of computer science students had graduated without knowing their names.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              By then, <strong>the damage was done.</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I studied Computer Science. I learned about Alan Turing, Charles Babbage, John von Neumann.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                Not once—not in a single lecture, textbook, or course—did I hear the names Jean Bartik, Kathleen Antonelli, or Betty Holberton.
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                I learned the history of computing. But I learned a version where women were footnotes, not founders.
              </p>
            </div>

            {/* Section 7: Why This Matters Now */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Why I'm Writing This
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Because every time someone says "women just aren't interested in tech," I think about the six women who invented programming.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Every time someone says "coding isn't for everyone," I think about how it was once considered women's work—until it became profitable.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Every time I feel like I don't belong in tech spaces, <strong>I remember: women built this industry. We didn't show up late. We were here first.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                You can't tell women they don't belong in tech when women literally invented programming.
              </p>
            </blockquote>

            {/* Section 8: Personal Reflection */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              What Their Story Teaches Me
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm pivoting from tech to HR. Some people think I'm "wasting" my technical skills.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But these six women remind me: <strong>the work that matters isn't always the work that gets recognized.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              They built the foundation of modern computing. They solved impossible problems. They invented concepts we still use today.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And for decades, <strong>no one knew their names.</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I don't want recognition. I don't need my name in textbooks.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                I want to do work that matters—even if no one sees it.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed">
                These six women taught me: <strong className="text-white">Impact isn't measured by visibility. It's measured by what you leave behind.</strong>
              </p>
            </div>

            {/* Closing */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              To the Women Who Come After
            </h2>

            <p className="text-[#000000] leading-relaxed mb-4">
              If you're a woman in tech:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>When they say you don't belong—remember Jean, Kathleen, Marlyn, Frances, Ruth, and Betty built this field.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>When they say you're "not technical enough"—remember these women invented the concept of <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">functions</code> without a manual.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>When they erase your contributions—remember it happened to the greatest programmers in history, and it didn't make their work any less real.</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>You are not an outsider in tech. You are continuing a legacy that women started.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm text-center">
              <p className="text-[#000000] leading-relaxed mb-4">
                They tried to write women out of the story.<br />
                <strong>But the code we wrote is still running.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed italic">
                And no amount of historical revisionism can undo that.
              </p>
            </blockquote>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 my-8">
              <p className="text-[#000000] leading-relaxed mb-4 font-medium">
                Their names:
              </p>
              <p className="text-[#000000] leading-relaxed mb-2">
                Jean Jennings Bartik.<br />
                Kathleen McNulty Mauchly Antonelli.<br />
                Marlyn Wescoff Meltzer.<br />
                Frances Bilas Spence.<br />
                Ruth Lichterman Teitelbaum.<br />
                Betty Snyder Holberton.
              </p>
              <p className="text-[#000000] leading-relaxed mt-6 font-medium">
                Say their names.<br />
                Remember their work.<br />
                <strong>Tell their story.</strong>
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                They tried to write women out of the story. But the code we wrote is still running.
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
              <Link href="/thoughts/the-voice-that-codes-gitc-2018-and-jaws" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Accessibility • Perspective
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    The Voice That Codes: GITC 2018 and JAWS
                  </h4>
                  <p className="text-sm text-[#666666]">
                    Watching a blind competitor code at GITC changed how I think about inclusion and accessibility forever.
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
