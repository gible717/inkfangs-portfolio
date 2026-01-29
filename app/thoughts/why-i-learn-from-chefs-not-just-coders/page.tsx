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
              Philosophy • Craft
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              Why I Learn From Chefs, Not Just Coders
            </h1>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 2025</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#000000] text-white">
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-4">
                "When you think of a chef, people only seem to picture an already successful one. No matter what profession you're in, the process is hidden. But what actually decides the success is the process."
              </p>
              <p className="text-[#D1D1D1] text-sm">— Chef Sung Anh</p>
            </blockquote>

            {/* Introduction */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              I didn't expect to find my most profound lessons about coding from watching Korean cooking shows.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But here I am, a Computer Science student at UiTM, finding more inspiration in Chef Sung Anh's philosophy, Chef Son Jong Won's meticulous processes, and Chef Choi Hyun Seok's fearless fusion — than in most tech tutorials I've watched.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              It started innocuously enough: <em>Chef and My Fridge</em> and <em>Culinary Class Wars</em> became my background noise while debugging code. But somewhere between watching chefs transform leftover ingredients into Michelin-worthy dishes and listening to their quiet reflections on craft, I realized something. These chefs were speaking directly to what I was struggling with as a developer.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              The tech world obsesses over finished products. We celebrate deployed apps, viral launches, successful startups. We screenshot our GitHub contribution graphs. We share our portfolios once they're polished. But the 3am debugging sessions? The six failed attempts before the seventh works? The months of learning that don't look impressive on LinkedIn? <strong>That process stays hidden.</strong> Just like Chef Sung Anh said — we only see the successful chef, never the burned sauces and failed experiments that built them.
            </p>

            {/* Section 1: Chef Sung Anh */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Hidden Process
            </h2>
            <p className="text-sm text-[#666666] italic mb-8">Chef Sung Anh — On what success actually depends on</p>

            {/* Image Placeholder - Chef Sung Anh */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#D1D1D1]/20 aspect-[4/5] relative overflow-hidden rounded">
                <Image src="/assets/chef-sung-anh-portrait.jpg" alt="Chef Sung Anh" fill className="object-cover" />
              </div>
              <div className="bg-[#D1D1D1]/20 aspect-[4/5] relative overflow-hidden rounded">
                <Image src="/assets/mosu-restaurant-dish.webp" alt="Dish from Mosu Restaurant" fill className="object-cover" />
              </div>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>Chef Sung Anh</strong> — Korean-American chef, Michelin three-star holder, judge on <em>Culinary Class Wars</em> — said something that stopped me mid-keystroke. In his culinary philosophy, he emphasizes that true innovation is born when "tradition, technique, and fresh ideas converge." But more importantly, he acknowledges what the public doesn't see: the relentless, often invisible process.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              When I look at my own coding journey, I see this everywhere:
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>The InventStor system I built</strong> (~18,000+ lines of PHP across 98 files) didn't start elegant. It started broken. Version 1 was a mess. It took 116 commits to get it right.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>This portfolio you're reading?</strong> The 3D lanyard took <strong>six iterations</strong> just to get the texture mapping right. Hours of tweaking <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">flipY</code>, <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">repeat.set()</code>, and <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">offset</code> values that nobody will ever know about.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>My transition from "I know HTML"</strong> to "I understand React Three Fiber" wasn't a tutorial — it was months of small, unglamorous commits.</span>
              </li>
            </ul>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                Chef Sung Anh doesn't cook within boundaries or single genres. At his restaurant Mosu, he cooks "what I think is the best, no boundaries, no genre." That resonates. I'm not coding to fit a template. I'm coding to solve real problems, tell real stories, serve real people — even if the process is messy and nonlinear.
              </p>
            </blockquote>

            {/* Section 2: Chef Son Jong Won */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Craft as Communication
            </h2>
            <p className="text-sm text-[#666666] italic mb-8">Chef Son Jong Won — On cooking as structured communication</p>

            {/* Image Placeholder - Chef Son Jong Won */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#D1D1D1]/20 aspect-[4/5] relative overflow-hidden rounded">
                <Image src="/assets/chef-son-jong-won-portrait.jpg" alt="Chef Son Jong Won" fill className="object-cover" />
              </div>
              <div className="bg-[#D1D1D1]/20 aspect-[4/5] relative overflow-hidden rounded">
                <Image src="/assets/eatanic-garden-dish.jpg" alt="Dish from Eatanic Garden or L'Amant Secret" fill className="object-cover" />
              </div>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>Chef Son Jong Won</strong> — the only chef in Korea leading two one-Michelin-star restaurants simultaneously (Eatanic Garden and L'Amant Secret) — defines cooking as <strong>communication, not just preparation.</strong> He trained at Noma, Benu, Quince, and Coi. He knows fine dining. But what struck me wasn't his résumé. It was his perspective: cooking transcends food preparation. It's art. It's communication.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              He describes processes that take days: sauces that simmer for hours, fish preparations that demand minutes of precision, meat cuts requiring patient craft. To him, fine dining is "an exchange between the kitchen and guests during specific occasions rather than everyday meals."
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              This is what I try to do with code:
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Code is communication.</strong> Not just to computers, but to future developers (including future me). The way I name variables, structure functions, write comments — it's all communication.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Some problems need time.</strong> Not everything can be solved with a quick Stack Overflow search. Some bugs require days of simmering thought. Some features need patient, meticulous building.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>Craft over convenience.</strong> I could have used a portfolio template. I chose to build from scratch because the process itself taught me things no template could.</span>
              </li>
            </ul>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#535353] text-white">
              <p className="text-lg font-serif italic leading-relaxed">
                Chef Son Jong Won approaches both Korean heritage (Eatanic Garden) and French technique (L'Amant Secret) with equal respect, blending sustainability and artistry. I see that in my code: blending accessibility principles (heritage of inclusive design) with modern frameworks (new techniques) to create something meaningful.
              </p>
            </blockquote>

            {/* Section 3: Chef Choi Hyun Seok */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Fearless Fusion
            </h2>
            <p className="text-sm text-[#666666] italic mb-8">Chef Choi Hyun Seok — On simplicity as mastery</p>

            {/* Image Placeholder - Chef Choi Hyun Seok */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#D1D1D1]/20 aspect-[4/5] relative overflow-hidden rounded">
                <Image src="/assets/chef-choi-hyun-seok-portrait.jpg" alt="Chef Choi Hyun Seok" fill className="object-cover" />
              </div>
              <div className="bg-[#D1D1D1]/20 aspect-[4/5] relative overflow-hidden rounded">
                <Image src="/assets/choi-dot-restaurant-dish.jpg" alt="Dish from Choi Dot Restaurant" fill className="object-cover" />
              </div>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>Chef Choi Hyun Seok</strong> named his restaurant "Choi Dot" (최.) because his dishes "need no further explanation" — symbolized by the period after his surname. With over 30 years of experience, he's known for blending traditional Korean flavors with European techniques, creating what he calls cuisine that embodies "fun."
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg text-[#000000] leading-relaxed">
                <strong>His signature vongole pasta?</strong> Minimalist to the extreme: olive oil, garlic, butter, clam broth, salt. That's it. No pepper. No white wine. Just five ingredients, executed perfectly. <strong>The restraint is the flex.</strong>
              </p>
            </blockquote>

            <p className="text-[#000000] leading-relaxed mb-4">
              This taught me something about code: <strong>complexity is not craftsmanship.</strong>
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>My best functions are the simplest ones. Clear inputs, clear outputs, clear purpose.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>The 3D lanyard on my portfolio? It looks complex, but the code is actually clean and minimal. Physics does the work. I just set the stage.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>The most elegant solution isn't always the one with the most libraries or the most clever abstractions. Sometimes it's the one that does exactly what it needs to do — nothing more, nothing less.</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              Chef Choi encouraged his Head Chef to compete in <em>Culinary Class Wars</em> to receive feedback from Chef Sung Anh. He mentors through trust: "Go test yourself. Learn from others. Bring it back." That's how I approach coding now. I don't hide my projects until they're perfect. I share them, get feedback, iterate.
            </p>

            {/* Section 4: Why Chefs, Not Just Coders? */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Why Chefs, Not Just Coders?
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's what confuses people: "Why are you watching cooking shows when you should be watching tech tutorials?"
            </p>

            <p className="text-xl text-[#000000] leading-relaxed mb-8 font-medium">
              Because the principles are the same, but chefs talk about them honestly.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h3 className="text-xl font-bold text-[#000000] mb-4">Tech Culture Glorifies:</h3>
                <ul className="space-y-2 text-[#000000]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666] mt-1">•</span>
                    <span>The 10x developer (the "successful chef")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666] mt-1">•</span>
                    <span>The overnight success (the Michelin star, not the decade before it)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666] mt-1">•</span>
                    <span>The viral app (the finished dish, not the burned prototypes)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6">
                <h3 className="text-xl font-bold text-[#000000] mb-4">Chefs Talk Openly About:</h3>
                <ul className="space-y-2 text-[#000000]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666] mt-1">•</span>
                    <span><strong>Process over product</strong> (Chef Sung Anh)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666] mt-1">•</span>
                    <span><strong>Craft as communication</strong> (Chef Son Jong Won)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666] mt-1">•</span>
                    <span><strong>Simplicity as mastery</strong> (Chef Choi Hyun Seok)</span>
                  </li>
                </ul>
              </div>
            </div>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                I learn more from watching Chef Son Jong Won meticulously plate a dish — explaining why each element exists, what it communicates, how it serves the whole — than from watching a developer speed-code a CRUD app without explaining <em>why</em> they made those choices.
              </p>
            </blockquote>

            {/* Section 5: Bringing It Into Code */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Bringing It Into Code
            </h2>

            <p className="text-[#000000] leading-relaxed mb-8">
              So how do I apply this?
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6">
                <h3 className="text-lg font-bold text-[#000000] mb-3">1. Document my process, not just my product.</h3>
                <p className="text-[#000000] leading-relaxed">
                  This portfolio has a "How I Built This" page. Not because I'm bragging, but because the process is valuable. The six failed texture attempts taught me more than the final working version.
                </p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6">
                <h3 className="text-lg font-bold text-[#000000] mb-3">2. Code as communication, not just functionality.</h3>
                <p className="text-[#000000] leading-relaxed">
                  Every function I write now, I ask: "If someone reads this in six months, will they understand <em>why</em> I did this, not just <em>what</em> it does?"
                </p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6">
                <h3 className="text-lg font-bold text-[#000000] mb-3">3. Embrace simplicity.</h3>
                <p className="text-[#000000] leading-relaxed">
                  My guestbook API started in-memory because I didn't need Supabase yet. Ship, learn, iterate. Don't over-engineer.
                </p>
              </div>

              <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6">
                <h3 className="text-lg font-bold text-[#000000] mb-3">4. Learn from other disciplines.</h3>
                <p className="text-[#000000] leading-relaxed">
                  Chefs understand craft, iteration, and mastery in ways that directly apply to code. Designers understand whitespace and hierarchy. Writers understand narrative flow. Don't limit your learning to your field.
                </p>
              </div>
            </div>

            {/* Closing */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#000000] text-white">
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
                "When you think of a chef, people only seem to picture an already successful one... But what actually decides the success is the process."
              </p>
              <p className="text-[#D1D1D1] text-sm mt-4">— Chef Sung Anh's words stay with me</p>
            </blockquote>

            <p className="text-[#000000] leading-relaxed mb-6">
              When you look at my portfolio, you see a finished product. You see a 3D lanyard, editorial articles, a clean design system. But what <em>actually</em> built this wasn't talent or templates. It was process:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>100+ hours of iteration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>6 texture mapping attempts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>3 complete redesigns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Countless bugs, broken builds, and "why isn't this working?" moments</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              I'm learning from chefs because they understand something tech culture often forgets: <strong>the hidden process is where the real growth happens.</strong>
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm text-center">
              <p className="text-[#000000] leading-relaxed mb-4">
                The burned sauces teach you heat control.<br />
                The broken builds teach you architecture.<br />
                The failures teach you resilience.
              </p>
              <p className="text-[#000000] leading-relaxed italic">
                And one day, when people see your Michelin star (or your deployed app), they'll only see success. But you'll know the truth: success was just the visible part. The process was everything.
              </p>
            </blockquote>

            {/* Sources */}
            <div className="mt-12 pt-8 border-t border-[#D1D1D1]">
              <p className="text-sm text-[#666666] mb-4 italic">
                <strong>About this article:</strong> Inspired by Chef Sung Anh (Mosu, Culinary Class Wars judge), Chef Son Jong Won (Eatanic Garden, L'Amant Secret), and Chef Choi Hyun Seok (Choi Dot) — three chefs who taught me more about coding than most programmers ever could.
              </p>
              <p className="text-xs text-[#666666] mb-2">Sources:</p>
              <ul className="space-y-1 text-xs text-[#666666]">
                <li>
                  • <a href="https://guide.michelin.com/kr/en/article/people/chef-sung-anh-of-culinary-class-wars-the-visionary-and-true-master-leading-korea-s-fine-dining-renaissance" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3A4F5B]">
                    Michelin Guide: Chef Sung Anh of 'Culinary Class Wars'
                  </a>
                </li>
                <li>
                  • <a href="https://guide.michelin.com/kr/en/article/people/chef-son-jong-won-s-seoul-is-creative-refined-and-inspiring" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3A4F5B]">
                    Michelin Guide: Chef Son Jong-won's Seoul
                  </a>
                </li>
                <li>
                  • <a href="https://www.preview.ph/culture/who-is-choi-hyun-seok-a5158-20241101" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3A4F5B]">
                    Preview.ph: Who Is Choi Hyun Seok?
                  </a>
                </li>
              </ul>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                The burned sauces teach you heat control. The broken builds teach you architecture. The failures teach you resilience.
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
              <Link href="/thoughts/im-a-melomaniac-why-i-listen-to-coldplay-and-tool-in-the-same-playlist" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Music • Personal
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    I'm a Melomaniac: Why I Listen to Coldplay and Tool in the Same Playlist
                  </h4>
                  <p className="text-sm text-[#666666]">
                    From Slipknot to Chase Atlantic through $400 headphones. My music taste doesn't make sense to anyone but me.
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
