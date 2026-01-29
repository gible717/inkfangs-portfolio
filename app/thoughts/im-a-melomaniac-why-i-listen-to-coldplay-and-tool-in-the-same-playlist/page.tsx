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
              Music • Personal • Reflection
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              I'm a Melomaniac: Why I Listen to Coldplay and Tool in the Same Playlist
            </h1>
            <p className="text-lg text-[#666666] italic mb-4">
              From Slipknot to Chase Atlantic through $400 headphones. My music taste doesn't make sense to anyone but me—and that's exactly the point.
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
            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#000000] p-6 my-8">
              <p className="text-lg text-[#000000] leading-relaxed">
                <strong>Melomaniac:</strong> <em>noun. Someone with an excessive or abnormal love of music.</em>
              </p>
            </div>

            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              If you looked at my Spotify, you'd be confused.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Coldplay. Muse. Polyphia. Tool. Lindsey Stirling. Slipknot. Panic! at the Disco. Bring Me The Horizon. Asking Alexandria. Linkin Park. Chase Atlantic.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              On paper, this makes no sense. These artists exist in different universes. Different genres. Different <em>planets</em>.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>But through my Sennheiser Momentum 4s, they all sound like home.</strong>
            </p>

            {/* Section: The Range */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Range
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I don't have a "type" of music.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>I have music that <em>resonates</em>.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes that's <strong>Coldplay</strong>—soft, melodic, emotionally safe. The kind of music that feels like a warm room when everything outside is cold. "The Scientist" feels like every mistake I've tried to undo.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Muse</strong>—dramatic, symphonic, <em>big</em>. Music that makes you feel like the main character in a film you're still writing. "Knights of Cydonia" sounds like the soundtrack to choosing yourself.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Polyphia</strong>—technically complex, genre-bending, instrumental. Music that challenges you to <em>listen</em>, not just hear. Every guitar run is a reminder that mastery takes practice, and beauty can be mathematical.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Tool</strong>—progressive, philosophical, polyrhythmic. Music that feels like it's asking questions instead of answering them. "Lateralus" feels like my brain trying to make sense of chaos.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Lindsey Stirling</strong>—violin meets electronic meets choreography. Music that proves classical instruments can be modern, that boundaries are suggestions. She took something people said was "outdated" and made it <em>electric</em>.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Slipknot</strong>—aggressive, cathartic, <em>loud</em>. Music that lets you scream without opening your mouth. When everything is too much, Slipknot gives me permission to <em>feel</em> it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Panic! at the Disco</strong>—theatrical, dramatic, unapologetically extra. Music that says it's okay to be too much. "High Hopes" sounds like fighting even when you're exhausted.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Bring Me The Horizon</strong>—metalcore that evolved into something experimental and beautiful. Music that proves you can change completely and still be yourself. "Can You Feel My Heart" is what vulnerability sounds like when you're angry about it.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Asking Alexandria</strong>—emotionally intense, technically precise. Music that holds both rage and sadness in the same breath.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes it's <strong>Linkin Park</strong>—nu-metal that understood depression before most people did. "Numb" was my anthem before I even knew what I was numb from.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And sometimes it's <strong>Chase Atlantic</strong>—atmospheric, moody, vulnerable. Music that sounds like 2 AM drives when you're processing everything. Music that proves you don't need guitars to be heavy. Emotional weight ≠ distorted guitars.
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I don't limit myself to one genre because I don't experience life in one genre.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Some days are Coldplay days. Soft. Reflective. Safe.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Some days are Tool days. Complex. Questioning. Heavy.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Some days are Chase Atlantic days. Moody. Processing. Alone but okay with it.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                And most days? They're everything at once.
              </p>
            </div>

            {/* Section: Why This Matters */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Why This Matters
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              People ask: "What kind of music do you like?"
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I used to panic. Because my answer doesn't fit in a sentence.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              "I like... everything?"
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              That sounds fake. Like I'm trying too hard to seem open-minded.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>But it's true.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm not "into metal" or "into pop" or "into prog rock."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>I'm into <em>music that makes me feel something</em>.</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 my-8">
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Coldplay makes me feel <em>seen</em> (in the gentle way).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Tool makes me feel <em>challenged</em> (in the intellectual way).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Polyphia makes me feel <em>impressed</em> (in the "how is this even possible" way).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Lindsey Stirling makes me feel <em>inspired</em> (in the "boundaries don't exist" way).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Slipknot makes me feel <em>release</em> (in the cathartic way).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Chase Atlantic makes me feel <em>understood</em> (in the "2 AM loneliness" way).</span>
                </li>
              </ul>
              <p className="text-[#000000] leading-relaxed mt-6 font-medium">
                All of these are valid. All of these are <em>me</em>.
              </p>
            </div>

            {/* Section: The Sennheiser Momentum 4s */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Sennheiser Momentum 4s
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I don't just <em>listen</em> to music.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>I <em>experience</em> it.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              That's why I invested in the Sennheiser Momentum 4s. Not because I'm an audiophile snob. But because when you care about sound, gear matters.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <ul className="space-y-3 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">→</span>
                  <span>When Polyphia's guitar hits that complex run, I want to <em>hear every note</em>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">→</span>
                  <span>When Tool builds that polyrhythmic crescendo, I want to <em>feel the layers</em>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">→</span>
                  <span>When Lindsey Stirling's violin soars, I want to <em>catch every harmonic</em>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">→</span>
                  <span>When Chase Atlantic's production wraps around you, I want to <em>sink into the atmosphere</em>.</span>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              Bad headphones flatten music. Make everything sound the same.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Good headphones? They let you hear the <em>intention</em>. The care the artist put into every detail.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And when you're someone who lives in music—who uses it to process, to cope, to <em>survive</em>—that matters.
            </p>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                The Momentum 4s have 60-hour battery life (outlasts my worst days), adaptive noise cancellation (blocks out internship lunch chatter when I'm eating alone at my desk), and audiophile-grade sound (every note, every layer, every breath).
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                They're not just headphones.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                They're how I shut out the world when it's too loud.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                And how I let music <em>in</em> when I need it most.
              </p>
            </div>

            {/* Section: What Gatekeepers Don't Understand */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              What Gatekeepers Don't Understand
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              There's always someone who wants to police your taste.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-2 italic">"Coldplay isn't <em>real</em> music."</p>
              <p className="text-[#000000] leading-relaxed mb-2 italic">"Muse isn't <em>real</em> metal."</p>
              <p className="text-[#000000] leading-relaxed italic">"If you like Panic! at the Disco, you're a <em>poser</em>."</p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>But here's what gatekeepers miss:</strong>
            </p>

            <p className="text-xl text-[#000000] leading-relaxed mb-8 font-medium">
              Music isn't a purity test.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It's not about proving you're "hardcore enough" or "technical enough" or "authentic enough."
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>It's about <em>connection</em>.</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I don't listen to Tool because I want to impress other Tool fans.<br />
                I listen to Tool because "Lateralus" feels like my brain trying to make sense of chaos.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I don't listen to Coldplay to seem "accessible."<br />
                I listen to Coldplay because "The Scientist" feels like every mistake I've tried to undo.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I don't listen to Lindsey Stirling to prove I'm "cultured."<br />
                I listen to Lindsey Stirling because she took an instrument people said was "outdated" and made it <em>electric</em>.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I don't listen to Chase Atlantic to fit a Gen Z aesthetic.<br />
                I listen to Chase Atlantic because "Swim" sounds like drowning in your own thoughts and sometimes that's exactly what I need to hear.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium mt-6">
                My playlist doesn't need your approval. It needs to <em>work for me</em>. And it does.
              </p>
            </div>

            {/* Section: Why I Understand Tech But Don't Code Anymore */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Why I Understand Tech But Don't Code Anymore
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I love learning about technical things.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I listen to Polyphia—insanely complex math rock that requires years of practice to play. I appreciate every technical run, every polyrhythm, every detail.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              But I don't play guitar.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>And I don't need to.</strong>
            </p>

            <p className="text-xl text-[#000000] leading-relaxed mb-8 font-medium">
              I can appreciate the CRAFT without needing to BE the craftsperson.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>That's how I feel about coding now.</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#000000] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I built an ~18,000+ line government inventory management system. 98 PHP files, 8-table database, 116 commits. I understand architecture, databases, logic flows. I can talk shop with developers. I can debug with support. I learned Next.js to build this portfolio.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4 font-medium">
                But I don't THRIVE in day-to-day coding.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                I thrive in UNDERSTANDING it.<br />
                I thrive in TRANSLATING it.<br />
                I thrive in building ENVIRONMENTS where coders can do their best work.
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                That's not failure. That's clarity.
              </p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              Some people are solo virtuosos—Polyphia's Tim Henson playing impossibly complex guitar, 10x engineers shipping features alone at 2 AM.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I'm the person who appreciates their work, creates space for them to thrive, and helps others understand what makes them brilliant.
            </p>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                That's HR.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                That's my path.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Not because I couldn't code.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                But because I can do something MORE valuable: Bridge the gap between tech and humanity.
              </p>
            </div>

            {/* Section: Music as Bridge */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Music as Bridge
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I'm transitioning from Computer Science to HR Management.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              On paper, this doesn't make sense either.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Code and care. Tech and people. Building systems and building <em>environments</em>.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>But to me? It's the same energy as my playlist.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I don't see why I have to <em>choose</em>.
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">Why can't I appreciate:</p>
              <ul className="space-y-2 text-[#000000]">
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Technical complexity (Polyphia, Tool) AND emotional accessibility (Coldplay, Chase Atlantic)?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Heavy catharsis (Slipknot) AND delicate beauty (Lindsey Stirling)?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#666666] mt-1">•</span>
                  <span>Systems thinking (CS) AND human empathy (HR)?</span>
                </li>
              </ul>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              The world wants you to pick a lane.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>But some of us are multi-lane highways.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And that's not confusion. <strong>That's <em>range</em>.</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                My playlist goes from Slipknot to Chase Atlantic.<br />
                From aggressive metal to moody R&B.<br />
                From screaming to whispering.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                That's not indecision.<br />
                That's understanding that "heavy" isn't just about volume.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Some nights I need Slipknot—loud, aggressive, cathartic release.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Other nights I need Chase Atlantic—atmospheric, vulnerable, the kind of music that sounds like 2 AM when you're driving alone processing everything you've been avoiding all day.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium mt-4">
                Both are heavy. One is heavy in VOLUME. One is heavy in WEIGHT.<br />
                Both are valid. Both are me.
              </p>
            </div>

            {/* Section: The Playlist as Philosophy */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Playlist as Philosophy
            </h2>

            <p className="text-[#000000] leading-relaxed mb-8">
              My music taste is my life philosophy:
            </p>

            <p className="text-2xl text-[#000000] leading-relaxed mb-8 font-serif font-bold text-center">
              "You don't have to fit in one box."
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              You can be:
            </p>

            <ul className="space-y-2 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Technical AND empathetic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Logical AND emotional</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Structured AND creative</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span><strong>All of it, all at once</strong></span>
              </li>
            </ul>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 my-8">
              <ul className="space-y-3 text-[#000000]">
                <li><strong>Coldplay</strong> taught me: softness is strength.</li>
                <li><strong>Muse</strong> taught me: drama is valid.</li>
                <li><strong>Polyphia</strong> taught me: complexity is beautiful.</li>
                <li><strong>Tool</strong> taught me: questions matter more than answers.</li>
                <li><strong>Lindsey Stirling</strong> taught me: boundaries are suggestions.</li>
                <li><strong>Slipknot</strong> taught me: rage is cathartic.</li>
                <li><strong>Panic! at the Disco</strong> taught me: being "too much" is perfect.</li>
                <li><strong>Bring Me The Horizon</strong> taught me: evolution doesn't mean losing yourself.</li>
                <li><strong>Linkin Park</strong> taught me: it's okay to feel numb.</li>
                <li><strong>Chase Atlantic</strong> taught me: melancholy can be beautiful.</li>
              </ul>
            </div>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                And my Sennheiser Momentum 4s?
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                They taught me:
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium text-lg">
                "When you care about something—music, code, people, yourself—invest in experiencing it <em>fully</em>."
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                My playlist doesn't make sense to you. But it makes perfect sense to me. And that's all that matters.
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
              <Link href="/thoughts/listening-to-hindia-feels-like-code-that-never-compiled" className="group">
                <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                    Music • Code
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                    Listening to Hindia Feels Like Code That Never Compiled
                  </h4>
                  <p className="text-sm text-[#666666]">
                    On Baskara Putra's music, technical metaphors, and the quiet exhaustion of trying to belong.
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
