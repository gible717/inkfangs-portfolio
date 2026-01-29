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
              Personality • Belonging • Culture
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              ENFP in a Codebase: Why "Culture Fit" Almost Kept Me Out of Tech
            </h1>
            <p className="text-lg text-[#666666] italic mb-4">
              On choosing coffee shops over hackathons, caring about people more than algorithms, and why the tech industry almost convinced me I didn't belong
            </p>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>January 2026</span>
              <span>•</span>
              <span>11 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              I can code. I've built an ~18,000+ line government inventory system that's 100% complete. I won an international tech competition at 14.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But ask me where I'd rather be on a Friday night—
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>I'd choose a noisy coffee shop with friends over a quiet room with my code editor. Every single time.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And according to tech culture, that makes me "not technical enough."
            </p>

            {/* Section 1: The Confession */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Thing I'm Not Supposed to Admit
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm an ENFP. Extraverted, Intuitive, Feeling, Perceiving.
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              Which means:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>I get energy from being around people, not from solitary coding sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>I care deeply about how users <em>feel</em> using my software, not just if it works</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>I'd rather understand the "why" behind a project than optimize the "how"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>I think about systems in terms of people, not just processes</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              And in Computer Science, <strong>that's treated like a liability.</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                The "ideal developer" in tech culture is:
              </p>
              <ul className="space-y-2 mb-4 text-[#E0E0E0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#999999] mt-1">•</span>
                  <span>Introverted (thrives in isolation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#999999] mt-1">•</span>
                  <span>Logical over emotional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#999999] mt-1">•</span>
                  <span>Obsessed with optimization, not people</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#999999] mt-1">•</span>
                  <span>Codes for fun, not just for work</span>
                </li>
              </ul>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                I am none of those things. And for years, I thought that meant I didn't belong.
              </p>
            </div>

            {/* Section 2: Social Places vs Coding Alone */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              When I'd Rather Be Anywhere But My Code Editor
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I love being in social places. Coffee shops. Study groups. Community events.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I've had some of my best ideas not while staring at a screen—but while <strong>talking to people.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              But in tech spaces, that's seen as distraction. As lack of focus. As being "not serious enough."
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I remember classmates who would skip social events to code. Who bragged about pulling all-nighters debugging. Who said things like "I don't really like people, I like computers."
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                And I felt... broken.
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                Because I <em>do</em> like people. I like understanding what they need. I like solving problems <em>with</em> them, not just <em>for</em> them.
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              When I built InventStor, the part that excited me most wasn't the database architecture.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It was <strong>watching government staff use it and hearing them say "this makes my job easier."</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              That human connection? That's what makes coding meaningful to me.<br />
              But tech culture kept telling me that made me <em>less</em> of a developer.
            </p>

            {/* Section 3: Soft Skills vs Hard Skills */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              When Your Strengths Are Called "Just Soft Skills"
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm good at:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Understanding what users actually need (not just what they say they want)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Explaining technical concepts to non-technical people</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Building systems that feel intuitive, not just functional</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Mediating between stakeholders with conflicting needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Caring about whether my code actually helps people</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              These are called "soft skills."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              As if they're <em>optional.</em> As if they don't matter as much as knowing the latest JavaScript framework.
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                "Soft skills" is just what we call essential human skills when we want to pretend they're less important than technical ones.
              </p>
            </blockquote>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I've sat in interviews where they asked:
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                "Can you optimize this algorithm?"
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                But never:
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                "Can you understand why a user might struggle with this interface?"
              </p>
              <p className="text-[#D1D1D1] leading-relaxed">
                The second question is just as technical. Just as critical. Just as hard.<br />
                <strong className="text-white">But it's not valued the same way.</strong>
              </p>
            </div>

            {/* Section 4: The Isolation */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              When You Can't Find Your People in Tech
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I used to have tech friends. I used to go to competitions.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But somewhere along the way, I stopped fitting in.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>Not because I couldn't code. But because I couldn't pretend coding was all I cared about.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              Conversations at tech events felt like:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"What frameworks are you learning?"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"Did you see that new library drop?"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"What side projects are you building?"</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              And I wanted to talk about: <strong>Who are we building this for? What problem does this actually solve? How does this make someone's life better?</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I stopped going to hackathons. Not because I couldn't compete.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                But because I realized: <strong>everyone there was trying to build the fastest solution. I was trying to build the most human one.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                And those aren't always the same thing.
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              I couldn't find tech friends who cared about people as much as performance.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              So I stopped looking.<br />
              And I started feeling like maybe I just... <strong>didn't belong in tech.</strong>
            </p>

            {/* Section 5: The Realization */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              What "Culture Fit" Really Means
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              "Culture fit" sounds neutral. Professional. Objective.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              But here's what it actually means in tech:
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                <strong className="text-white">"Culture fit"</strong> = "You remind us of people we already have"
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                <strong className="text-white">"Not technical enough"</strong> = "You care about things beyond code"
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                <strong className="text-white">"Soft skills"</strong> = "Skills we need but won't admit are essential"
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                <strong>"We're looking for someone more passionate"</strong> = "You're not willing to sacrifice your entire life for this job"
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              I almost believed them.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I almost convinced myself that because I didn't fit the stereotype, I didn't belong.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>But then I realized: the problem isn't me. It's a culture that only values one way of being technical.</strong>
            </p>

            {/* Section 6: What I've Learned */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Why Being ENFP Actually Makes Me Better at Tech
            </h2>

            <p className="text-[#000000] leading-relaxed mb-4">
              Here's what I know now:
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>1. Empathy is a technical skill.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Understanding users isn't "just" UX. It's the difference between software that works and software that <em>helps.</em>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>2. Communication is infrastructure.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              The best code in the world is useless if no one understands what it does or why it matters.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>3. Caring about people isn't "soft."</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It's the whole point. We don't write code for machines. We write it for humans.
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                The industry needs people who can code. But it also desperately needs people who can code <em>and</em> care about the humans using that code.
              </p>
            </blockquote>

            {/* Section 7: Why I'm Leaving (But Not Really) */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              From Developer to HR: Not Running Away, Leaning In
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm pivoting to HR. People ask if I'm "leaving tech."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>I'm not leaving. I'm taking everything I learned from being the "wrong" personality type in tech—and using it to fix the culture that almost kept me out.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              Because I want to build workplaces where:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"Culture fit" means diverse perspectives, not identical personalities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Empathy and communication are valued as much as algorithm optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>People who care about <em>why</em> we code aren't dismissed as "not technical enough"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>You can be an ENFP—or any personality type—and still be a damn good developer</span>
              </li>
            </ul>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I can code. I proved that with InventStor.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                But I care more about the people using the system than the elegance of the code behind it.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed">
                And instead of seeing that as a weakness—<strong className="text-white">I'm building a career around it.</strong>
              </p>
            </div>

            {/* Closing */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              To Everyone Who Doesn't Fit the Mold
            </h2>

            <p className="text-[#000000] leading-relaxed mb-4">
              If you:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Love coding but also love people</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Care about the "why" as much as the "how"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Would rather collaborate than compete</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Have been told you're "not technical enough" despite building real, working systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Feel like you don't fit tech culture—even though you're good at tech</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>You're not broken. The culture is.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm text-center">
              <p className="text-[#000000] leading-relaxed mb-4">
                Tech doesn't need more people who code like machines.<br />
                <strong>It needs more people who code for humans.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed italic">
                And if that's you?<br />
                You belong here. Even if they haven't figured that out yet.
              </p>
            </blockquote>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I'm ENFP. I love coffee shops more than hackathons. I care about soft skills as much as hard skills.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                And I built a government system that real people use every day.
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                <strong>Both things can be true.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed mt-6">
                The question isn't whether you fit tech culture.<br />
                <strong>The question is: will you help change it?</strong>
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                ENFP in a codebase. Too much for tech culture. Just enough for tech impact.
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
              <Link href="/thoughts/the-arcade-principle" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Philosophy • Gaming
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    The Arcade Principle
                  </h4>
                  <p className="text-sm text-[#666666]">
                    What fighting games taught me about learning, losing, and the courage to keep putting in quarters.
                  </p>
                </article>
              </Link>

              {/* Article 2 */}
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
