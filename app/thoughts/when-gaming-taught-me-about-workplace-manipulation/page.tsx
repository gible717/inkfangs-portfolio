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
              Professional Growth
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              When Gaming Taught Me About Workplace Manipulation
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>January 12, 2026</span>
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
              I thought I was special. Turns out, I was just next in line.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              We met in an online game. Daily voice calls turned into hours-long conversations. He shared his struggles—how he dropped out of school to support his sister, how his income was unstable, how he just needed someone who understood.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I felt chosen. He made me feel like I was different from everyone else, like our connection was unique. He played the noble struggler narrative so well that I wanted to be the person who saw his potential, who believed in him when no one else did.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Then I found out about the others. Multiple women, all in rotation. All receiving the same daily attention. All believing they were special.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Being 'chosen' by someone who chooses everyone means you're not chosen at all."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Red Flags I Missed
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Looking back, the patterns were clear. But when you're in it, when someone is making you feel seen and valued, it's easy to rationalize away the warning signs.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Here's what I learned to recognize—patterns that show up not just in personal relationships, but in professional ones too.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-6">Pattern 1: Love-Bombing</h3>
              <p className="text-[#000000] mb-4">
                <strong>What it looked like:</strong> Excessive attention right from the start. Daily calls, constant messages, making me feel like I was the most important person in his world. It felt amazing—until I realized it was a script.
              </p>
              <p className="text-[#000000] mb-4">
                <strong>In the workplace:</strong> The new colleague who immediately overshares personal struggles to create false intimacy. The manager who showers you with praise in private but never advocates for you publicly. The coworker who makes you feel like a confidant, but it's really about collecting information.
              </p>
              <p className="text-[#666666] text-sm italic">
                Red flag: When someone invests heavily in you before they actually know you, ask yourself what they're trying to gain.
              </p>
            </div>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-6">Pattern 2: Victim Mentality as a Tool</h3>
              <p className="text-[#000000] mb-4">
                <strong>What it looked like:</strong> Every story was about how hard his life was, how he was always struggling but never changing. The narrative stayed the same: he was the underdog, and I could be his hero.
              </p>
              <p className="text-[#000000] mb-4">
                <strong>In the workplace:</strong> The colleague who's always in crisis but never takes action. The team member who uses their struggles to avoid accountability—deadlines missed because of "personal issues," but the pattern repeats every sprint. The person who positions themselves as perpetually disadvantaged to extract emotional labor from others.
              </p>
              <p className="text-[#666666] text-sm italic">
                Red flag: Genuine struggle involves growth or change. Manipulation uses struggle as a static identity to elicit sympathy.
              </p>
            </div>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-6">Pattern 3: Boundary Violations Disguised as Persistence</h3>
              <p className="text-[#000000] mb-4">
                <strong>What it looked like:</strong> When I tried to create distance, he framed it as me being "too guarded" or "not giving us a chance." My boundaries became obstacles to overcome, not limits to respect.
              </p>
              <p className="text-[#000000] mb-4">
                <strong>In the workplace:</strong> The manager who messages you at 11 PM and calls it "dedication." The colleague who keeps pushing for after-work hangouts despite repeated no's, framing your boundaries as being "unfriendly." The supervisor who dismisses your request for work-life balance as "not being a team player."
              </p>
              <p className="text-[#666666] text-sm italic">
                Red flag: Healthy relationships—personal or professional—respect boundaries. Manipulation reframes them as problems to solve.
              </p>
            </div>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-6">Pattern 4: The Rotation System</h3>
              <p className="text-[#000000] mb-4">
                <strong>What it looked like:</strong> Multiple women receiving the same treatment simultaneously, each thinking they had a unique connection. The same stories, the same vulnerability, the same manufactured intimacy.
              </p>
              <p className="text-[#000000] mb-4">
                <strong>In the workplace:</strong> The manager who plays favorites, pitting team members against each other for approval. The colleague who tells different people contradictory things to maintain control. The leader who creates artificial scarcity of recognition, making people compete for basic validation.
              </p>
              <p className="text-[#666666] text-sm italic">
                Red flag: When you're constantly competing for someone's attention or approval, you're in a system designed to keep you off-balance.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Consistency matters more than words. Watch what people do when they think no one's paying attention."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              What Gaming Taught Me About Work
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              This experience happened in a gaming community, but the lessons translated directly to professional environments. Because manipulation doesn't stop at the boundaries of a Discord server or a Zoom call. The tactics are the same. The dynamics are the same.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Here's what I wish I'd known earlier:
            </p>

            <div className="bg-[#535353] text-white p-8 my-12">
              <h3 className="text-2xl font-bold mb-6">Lessons That Transfer</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-bold mb-2">1. Boundaries aren't mean—they're protective</p>
                  <p className="text-sm text-[#D1D1D1]">
                    Saying no to after-hours messages, declining social invitations, protecting your time—these aren't signs of being difficult. They're signs of self-respect. And anyone who punishes you for having boundaries is showing you who they are.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2">2. Watch for consistency over time</p>
                  <p className="text-sm text-[#D1D1D1]">
                    Words are easy. Anyone can say they value transparency, teamwork, or work-life balance. Watch what happens when no one's watching. Do their actions match their words? Or is there a pattern of saying one thing and doing another?
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2">3. Genuine need vs. manufactured crisis</p>
                  <p className="text-sm text-[#D1D1D1]">
                    Everyone has rough patches. But when someone is perpetually in crisis, never growing or changing, using their struggles to extract resources (time, energy, emotional labor) without reciprocity—that's not vulnerability. That's manipulation.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2">4. You don't owe anyone your discomfort</p>
                  <p className="text-sm text-[#D1D1D1]">
                    If something feels off, trust that feeling. You don't need to justify your unease. You don't need evidence to set a boundary. Your discomfort is information, not something to be rationalized away.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              Why This Matters for HR
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm transitioning into HR because I want to build workplace cultures where these dynamics don't thrive. Where manipulation is recognized and addressed, not enabled. Where boundaries are normalized, not punished.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              In HR, we'll encounter these patterns constantly:
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>The employee who weaponizes vulnerability to avoid accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>The manager who uses favoritism to maintain power imbalances</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>The team lead who dismisses boundaries as "not being committed"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>The colleague who creates artificial scarcity to keep others competing</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              Part of building healthier environments is recognizing these patterns—in others, yes, but also in ourselves. Because anyone can fall into manipulative behaviors when systems reward them.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              The goal isn't to become cynical. It's to become discerning.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Recognizing manipulation isn't about distrust. It's about protecting your capacity to care for the people who reciprocate it."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              What I'm Taking Forward
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I don't regret the experience. It taught me pattern recognition in a way no textbook could.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I learned that empathy without boundaries isn't kindness—it's depletion. That being understanding doesn't mean accepting poor treatment. That you can hold space for someone's struggles without becoming responsible for solving them.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Most importantly, I learned that healthy relationships—personal or professional—are built on reciprocity, respect, and consistency. Not on making someone feel special while treating them as interchangeable.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 mb-8">
              <h3 className="text-xl font-bold text-[#000000] mb-4">Questions I Now Ask</h3>
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>Do this person's actions match their words over time?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>Are they respecting my boundaries, or reframing them as problems?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>Is this relationship reciprocal, or am I doing all the emotional heavy lifting?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>Do I feel energized or depleted after interacting with them?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666]">•</span>
                  <span>Is their vulnerability genuine, or is it being used strategically?</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              If This Sounds Familiar
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              If you're reading this and recognizing patterns from your own life—whether in gaming communities, friendships, romantic relationships, or workplaces—I hope this helps you name what you're experiencing.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              You're not overreacting. You're not being too sensitive. If something feels manipulative, trust that instinct.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And remember: boundaries aren't cruel. Protecting your energy isn't selfish. Refusing to participate in someone's rotation system isn't mean—it's self-respect.
            </p>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1]">
              <p className="text-[#000000] leading-relaxed mb-6">
                I'm sharing this not to shame anyone, but to recognize the patterns that show up everywhere—including in professional spaces. As I move into HR, I'm carrying these lessons with me. Not as armor, but as awareness.
              </p>
              <p className="text-[#666666] italic text-center">
                Building healthier workplaces starts with recognizing unhealthy patterns—and refusing to normalize them.
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
              <Link href="/thoughts/enfp-in-a-codebase-why-culture-fit-almost-kept-me-out" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Identity • Tech Culture
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    ENFP in a Codebase: Why "Culture Fit" Almost Kept Me Out
                  </h4>
                  <p className="text-sm text-[#666666]">
                    I don't fit the developer stereotype. I almost let that stop me from building something that mattered.
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
