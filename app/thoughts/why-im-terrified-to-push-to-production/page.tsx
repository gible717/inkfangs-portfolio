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
              Impostor Syndrome • Production • Reality
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              Why I'm Terrified to Push to Production (And Do It Anyway)
            </h1>
            <p className="text-lg text-[#666666] italic mb-4">
              On ~18,000+ lines of code, the denial that never quite fades, and the question I still can't shake: "Did I really do this?"
            </p>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>January 2026</span>
              <span>•</span>
              <span>9 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              InventStor is complete. 100% done. Ready for deployment to government offices.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              ~18,000+ lines of code. 98 PHP files. 8-table database. Managing inventory, tracking requests, handling permissions.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And I still don't believe I built it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>Not in a humble way. In a "this can't be real" way.</strong>
            </p>

            {/* Section 1: The Denial */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Denial That Won't Quit
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              People ask me about InventStor. They ask about the tech stack, the architecture, the deployment process.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              And inside my head, a voice keeps asking:
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong><em>"Is it true that I was doing all of this?"</em></strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Not past tense.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                Present continuous. <em>"Was doing."</em>
              </p>
              <p className="text-[#E0E0E0] leading-relaxed">
                Like it's something that happened to someone else. Like I watched myself build it, but I wasn't really <em>there.</em>
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-4">
              I look at the codebase and think:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Did I really design this database schema?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Did I actually implement role-based permissions from scratch?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Did people really trust <em>my code</em> with government data?</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>And the answer is yes. But my brain refuses to accept it.</strong>
            </p>

            {/* Section 2: The Terror Before Deploy */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Moment Before You Push
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              There's a specific kind of fear that happens right before deployment.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Not fear of failure. <strong>Fear of exposure.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Because once your code is live, there's no hiding. No "it works on my machine." No draft mode.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                Every time I prepare to deploy, my brain runs through catastrophic scenarios:
              </p>
              <ul className="space-y-2 mb-4 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>What if there's a bug that deletes all the data?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>What if the permissions system has a vulnerability I missed?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>What if it crashes the moment someone actually uses it?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>What if they realize I'm just a student who has no idea what she's doing?</span>
                </li>
              </ul>
              <p className="text-[#000000] leading-relaxed font-medium">
                That last one. That's the real fear.
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              Production isn't just technical. <strong>It's proof.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Proof that you're good enough. Or proof that you're not.
            </p>

            {/* Section 3: The Gap */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Gap Between "Student Project" and "Government System"
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's the thing that keeps me up at night:
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>I built this as a student. And now government employees—real people with real jobs—depend on it every day.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              There's a moment when your code stops being a "project" and becomes a "system."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And I'm not sure I was ready for that transition.
            </p>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                In university, bugs are learning experiences.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                In production, bugs are someone's workday getting derailed.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                The stakes went from "I might lose marks" to "people might lose data."
              </p>
              <p className="text-[#D1D1D1] leading-relaxed mt-4">
                And I'm supposed to act like that's normal. Like I'm qualified for this.
              </p>
            </div>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                There's no ceremony when student code becomes production code. One day you're testing locally. The next day, strangers depend on what you built.
              </p>
            </blockquote>

            {/* Section 4: Impostor Syndrome in Production */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              When Your Code Works But You Don't Believe It
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              InventStor works. It's stable. Users haven't reported major issues.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>And somehow, that makes the impostor syndrome worse.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Because if it works, that means I actually did it. And if I actually did it, that means I'm capable.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And my brain <em>refuses</em> to accept that.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I keep waiting for the other shoe to drop.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                For someone to email me: "We found a critical bug."<br />
                For the system to crash spectacularly.<br />
                For someone to audit the code and say, "Who wrote this?"
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                I keep waiting for proof that I was right to doubt myself.
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              But it doesn't come.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              The system keeps running. People keep using it.<br />
              <strong>And I keep thinking: "Is it true that I was doing all of this?"</strong>
            </p>

            {/* Section 5: Why I Push Anyway */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Terrified Courage of Shipping
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's what no one tells you about production deployments:
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>The fear doesn't go away. You just get better at doing it scared.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              Every deploy, I'm terrified. But I push anyway because:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>People need this system to work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Perfect code doesn't exist—working code does</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Bugs can be fixed; not shipping can't</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Courage isn't the absence of fear—it's coding despite it</span>
              </li>
            </ul>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Deployment Day Ritual:
              </p>
              <ol className="space-y-2 mb-4 text-[#E0E0E0] list-decimal list-inside">
                <li>Run tests (again)</li>
                <li>Review changes (again)</li>
                <li>Check backups (again)</li>
                <li>Stare at the deploy button</li>
                <li>Think "What if—"</li>
                <li>Push anyway</li>
                <li>Hold my breath</li>
                <li>Watch the logs</li>
                <li>Wait for disaster</li>
                <li>Realize it's... fine?</li>
              </ol>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                Every. Single. Time.
              </p>
            </div>

            {/* Section 6: The Question That Remains */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              "Is It True That I Was Doing All of This?"
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm in denial. Still. Even now.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Even with the production logs showing successful deployments.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Even with user feedback saying the system works.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Even with ~18,000+ lines of code and 116 commits with my name on them.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>Part of me still can't believe I did this.</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                Maybe that's okay.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                Maybe the denial isn't impostor syndrome. Maybe it's <strong>healthy disbelief that I actually pulled this off.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                Maybe being surprised by your own competence is better than assuming you know everything.
              </p>
            </div>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                The code is complete. The system is ready. It's going to help people.<br />
                <strong>Whether I believe it or not doesn't change the fact that it's real.</strong>
              </p>
            </blockquote>

            {/* Section 7: What Production Taught Me */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              What Pushing to Production Actually Means
            </h2>

            <p className="text-[#000000] leading-relaxed mb-8">
              Production isn't about perfect code. <strong>It's about useful code.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It's not about being fearless. <strong>It's about shipping despite fear.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It's not about confidence. <strong>It's about commitment to making something that helps people.</strong>
            </p>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I built a government inventory system as a university student.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                I'm terrified every time I deploy.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I'm in denial that I actually did this.
              </p>
              <p className="text-[#D1D1D1] leading-relaxed">
                <strong className="text-white">And it's 100% complete. Ready to deploy. Ready to help people.</strong>
              </p>
            </div>

            {/* Closing */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              To Everyone Afraid to Ship
            </h2>

            <p className="text-[#000000] leading-relaxed mb-4">
              If you're staring at a deploy button thinking:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"What if it breaks?"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"What if I'm not ready?"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"What if people realize I don't know what I'm doing?"</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>Push anyway.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Because the fear doesn't mean you're not ready.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>It means you care enough to worry about getting it right.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm text-center">
              <p className="text-[#000000] leading-relaxed mb-4">
                You'll never feel ready.<br />
                <strong>Ship anyway.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed italic">
                The code that helps people isn't perfect code.<br />
                It's code that exists.<br />
                <strong>In production. Where people can actually use it.</strong>
              </p>
            </blockquote>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I'm still in denial that I built InventStor.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                I'm still terrified every time I deploy.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4 font-medium">
                <strong>But the system is live. And it works.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed mt-6">
                Maybe that's what courage looks like:<br />
                <strong>Not the absence of fear. But the refusal to let fear stop you from shipping.</strong>
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                Still terrified. Still shipping. Still caring enough to worry.
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
