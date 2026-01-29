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
              Music • Code • Loneliness
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6 leading-tight">
              Listening to Hindia Feels Like Reading Code That Never Compiled
            </h1>
            <p className="text-lg text-[#666666] italic mb-4">
              On Baskara Putra's music, technical metaphors, and the quiet exhaustion of trying to belong
            </p>
            <div className="flex gap-4 text-sm text-[#666666] mb-6">
              <span>February 2025</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
            </div>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              There's something about Baskara Putra's music—performing as Hindia—that makes me stop mid-scroll.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Not because it's catchy. Not because it's trending.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              But because <strong>he writes songs like someone who has sat alone at a desk, staring at a screen, wondering: "Why does everything I build feel... incomplete?"</strong>
            </p>

            {/* Hindia Portrait */}
            <div className="my-12">
              <div className="bg-[#D1D1D1]/20 aspect-[16/9] relative overflow-hidden rounded">
                <Image src="/assets/hindia-portrait.jpg" alt="Hindia (Baskara Putra)" fill className="object-cover" />
              </div>
              <p className="text-xs text-[#666666] text-center mt-2 italic">Hindia (Baskara Putra) — Indonesian indie musician</p>
            </div>

            <p className="text-[#000000] leading-relaxed mb-6">
              His lyrics read like error logs. His melodies sound like functions that run but never quite return the expected output. And for those of us who spend our days writing code—whether literal or metaphorical—his work resonates in ways that Indonesian indie music rarely does.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              This isn't a music review. <strong>It's an attempt to understand why his songs feel like reading someone else's Stack Overflow post about a bug you thought only you had.</strong>
            </p>

            {/* Section 1: Evaluasi */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              "Evaluasi" — When You Realize You're Not the Main Character
            </h2>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                <em>"Aku hanya figuran / Di film panjang orang lain"</em><br />
                (I'm just a background character / In someone else's long film)
              </p>
            </blockquote>

            <p className="text-[#000000] leading-relaxed mb-6">
              There's a specific type of loneliness that comes from being physically present but socially invisible.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              You show up to the office. You sit at your desk. You write code, build systems, attend stand-ups. <strong>But somehow, you never got the script.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Others laugh in the break room. Others grab lunch together. Others get pulled into important meetings.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And you? You're just... there.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Hindia sings about being a <em>figuran</em>—a background character, an extra. What he doesn't say is that <strong>sometimes you're not a background character because you're unimportant. You're a background character because you've been too busy observing to actually act.</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                <strong>I remember my internship clearly.</strong>
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I was good at observing. I noticed who was close to whom. Who got invited to lunch. Whose names came up when new projects were assigned.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I watched it all like I was studying an API I couldn't quite figure out how to call.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-2">
                Hindia says he's a background character.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                I wasn't even in the credits.
              </p>
            </div>

            {/* Section 2: Besok Mungkin Kita Sampai */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              "Besok Mungkin Kita Sampai" — False Hope in an Infinite Loop
            </h2>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                <em>"Besok mungkin kita sampai / Besok mungkin kita tiba"</em><br />
                (Tomorrow maybe we'll arrive / Tomorrow maybe we'll get there)
              </p>
            </blockquote>

            <p className="text-[#000000] leading-relaxed mb-6">
              This is essentially a <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">while (true)</code> loop with no break condition.
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              You keep telling yourself "tomorrow."
            </p>

            <ul className="space-y-2 mb-6 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Tomorrow I'll be braver.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Tomorrow I'll be more confident.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Tomorrow I'll join them for lunch.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Tomorrow I'll be the version of myself that doesn't overthink everything.</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>But tomorrow never comes.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Because "tomorrow" isn't a timeline. <strong>"Tomorrow" is a coping mechanism.</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I used to tell myself: "Tomorrow I'll ask where they're eating."
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                Tomorrow became next week. Next week became next month. Next month became <em><strong>yaudahlah</strong></em>—a uniquely Indonesian expression of resigned acceptance that has no direct English translation but means something like "ah, forget it."
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                And somehow you end up being the person who is always planning to connect, but never actually connects.
              </p>
              <p className="text-[#000000] leading-relaxed mb-2">
                Hindia sings about hope.
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                But hope without action is just delayed disappointment.
              </p>
            </div>

            {/* Section 3: Sudah */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              "Sudah" — Acceptance That Feels Like Surrender
            </h2>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                <em>"Sudah, sudah cukup / Semuanya sudah terlalu banyak"</em><br />
                (Enough, it's enough / Everything is already too much)
              </p>
            </blockquote>

            <p className="text-[#000000] leading-relaxed mb-6">
              This hits differently when you're tired.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Not physically tired. <strong>Existentially tired.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              Tired of:
            </p>

            <ul className="space-y-2 mb-6 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Explaining yourself to people who never asked</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Proving you're "good enough" to people who already decided you're not</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Waiting for invitations that don't come</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Trying so hard to belong somewhere you're clearly not wanted</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>And one day you just... stop.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Not dramatically. Not with anger.<br />
              Just... <em>enough.</em>
            </p>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I remember the moment clearly.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I watched them walk to the pantry, laughing together. I wasn't invited. As usual.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                And instead of feeling sad, I just felt... <strong className="text-white">tired.</strong>
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Tired of expecting things that clearly weren't going to happen.
              </p>
              <p className="text-[#D1D1D1] leading-relaxed mb-2">
                Hindia says <em>"sudah."</em>
              </p>
              <p className="text-[#D1D1D1] leading-relaxed mb-2">
                I said "enough."
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                Same energy. Different language.
              </p>
            </div>

            {/* Section 4: Rumah Ke Rumah */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              "Rumah Ke Rumah" — Searching for an Undefined Variable
            </h2>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                <em>"Dari rumah ke rumah / Aku cari yang tahu"</em><br />
                (From house to house / I search for someone who knows)
              </p>
            </blockquote>

            <p className="text-[#000000] leading-relaxed mb-6">
              This is basically searching for a <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">home</code> variable, only to discover it's <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">undefined</code>.
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              You try Computer Science—doesn't fit.<br />
              You try the tech community—too introverted.<br />
              You try family—too many expectations.<br />
              You try friendship—burned before, now scared.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>And you end up being someone who has many "places" but no "home."</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border-l-4 border-[#666666] p-6 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                I used to think: "Maybe I don't fit in tech because I'm ENFP."
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                "Maybe I don't fit in HR because I'm technically-minded."
              </p>
              <p className="text-[#000000] leading-relaxed mb-4 font-medium">
                "Maybe I just... don't fit."
              </p>
              <p className="text-[#000000] leading-relaxed mb-2">
                Hindia searches from house to house.
              </p>
              <p className="text-[#000000] leading-relaxed mb-2">
                I searched from identity to identity.
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                Same search. Different object.
              </p>
            </div>

            {/* Section 5: Membasuh */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              "Membasuh" — Attempting to <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">git reset --hard</code> Your Life
            </h2>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                <em>"Membasuh luka dengan air mata / Semoga bisa jadi suci kembali"</em><br />
                (Washing wounds with tears / Hoping to become pure again)
              </p>
            </blockquote>

            <p className="text-[#000000] leading-relaxed mb-6">
              This is essentially trying to <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">git reset --hard HEAD</code> your emotional state.
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              You want to return to:
            </p>

            <ul className="space-y-2 mb-6 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Before the heartbreak</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Before the ostracization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Before you realized you weren't "enough"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Before you knew what rejection felt like</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>But Git doesn't work that way in real life.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              You can't uncommit trauma.<br />
              You can't <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">git revert</code> to "blissfully unaware."<br />
              <strong>The history is there. In the logs. Forever.</strong>
            </p>

            <div className="bg-[#535353] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I used to wish I could go back to being 14, when I won that international award. When I still felt confident. When coding was still fun.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                <strong className="text-white">Before I learned what "not being chosen" felt like.</strong>
              </p>
              <p className="text-[#D1D1D1] leading-relaxed mb-2">
                Hindia sings about hoping to become pure again.
              </p>
              <p className="text-[#D1D1D1] leading-relaxed mb-2">
                I wished I could factory reset myself.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                Same longing. Different metaphor.
              </p>
            </div>

            {/* Why Am I Writing This */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              Why Am I Writing This?
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Because <strong>sometimes you need someone else's words to articulate what you can't.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              I can't say:
            </p>

            <ul className="space-y-2 mb-6 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"I'm lonely."</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"I feel like a background character."</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>"I'm exhausted from trying."</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>But Hindia can.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And somehow, hearing him sing about it makes me feel less alone in feeling alone.
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-lg font-serif italic text-[#000000] leading-relaxed">
                It's like reading someone else's code when you're stuck on the same bug. You're not alone in thinking "why the fuck doesn't this work?" Turns out many people are stuck on the same line.
              </p>
            </blockquote>

            <p className="text-[#000000] leading-relaxed mb-8">
              Hindia's music is Stack Overflow for emotional bugs.<br />
              Someone already asked the question you were too scared to type.
            </p>

            {/* The Technical Metaphor We're All Living */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              The Technical Metaphor We're All Living
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's what I've learned from both coding and Hindia's discography:
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>Sometimes the code compiles but doesn't run correctly.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes you write clean syntax, follow best practices, do everything "right"—and it still doesn't work.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>Sometimes the bug isn't in your code.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Sometimes the environment is wrong. The dependencies are broken. The system wasn't designed for what you're trying to build.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>Sometimes you need to refactor everything.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Not because you failed. But because <strong>you outgrew the architecture you started with.</strong>
            </p>

            <div className="bg-[#000000] text-white p-8 my-8">
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                I built an ~18,000+ line government inventory system. 98 PHP files, 8-table database. It works. It's 100% complete, ready for deployment.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed mb-4 font-medium">
                But I don't want to be a developer anymore.
              </p>
              <p className="text-[#E0E0E0] leading-relaxed mb-4">
                Not because I can't code. But because I realized: <strong className="text-white">I care more about the people using the system than the system itself.</strong>
              </p>
              <p className="text-[#D1D1D1] leading-relaxed mb-2">
                Hindia writes about searching for home.
              </p>
              <p className="text-[#FFFFFF] leading-relaxed font-medium">
                I'm searching for a career where caring about people isn't a liability—it's the feature.
              </p>
            </div>

            {/* To Anyone Who Needs to Hear This */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              To Anyone Who Needs to Hear This
            </h2>

            <p className="text-[#000000] leading-relaxed mb-4">
              If you:
            </p>

            <ul className="space-y-2 mb-6 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Often eat alone while pretending to be busy on your phone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Have ever wondered "why am I the only one not invited?"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Have achievements but still feel "not enough"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Are tired of trying so hard to belong</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-6">
              <strong>Listen to Hindia.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Not because he'll solve your problems.<br />
              But because he's saying: <strong>"I've been there too."</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And sometimes, that's enough.
            </p>

            <blockquote className="my-8 py-6 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm text-center">
              <p className="text-[#000000] leading-relaxed mb-4">
                You don't have to be the main character in someone else's film.<br />
                <strong>You can be the director of your own.</strong>
              </p>
              <p className="text-[#000000] leading-relaxed italic">
                Even if it's indie.<br />
                Even if it's not viral.<br />
                Even if you're the only one who watches it.<br />
                <strong>At least it's yours.</strong>
              </p>
            </blockquote>

            {/* Closing */}
            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6 border-t-2 border-[#000000] pt-8">
              We're All Debugging Lives Without Documentation
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I don't know who needed to read this.
            </p>

            <p className="text-[#000000] leading-relaxed mb-4">
              But if you're the person who:
            </p>

            <ul className="space-y-2 mb-6 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Sits quietly in meetings, observing but rarely speaking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Has an impressive resume but impostor syndrome that won't quit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Codes competently but questions if you're "technical enough"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Wonders if you'll ever find where you belong</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              <strong>You're not alone.</strong>
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              Hindia's been there.<br />
              I've been there.<br />
              <strong>We're all trying to debug lives that don't come with documentation.</strong>
            </p>

            <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 my-8">
              <p className="text-[#000000] leading-relaxed mb-4">
                And maybe that's the point.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4">
                Maybe the code was never meant to compile perfectly.<br />
                Maybe "home" was never a fixed location.<br />
                Maybe belonging is something you build, not something you find.
              </p>
              <p className="text-[#000000] leading-relaxed mb-4 italic">
                Maybe we're all just <em>figurans</em> in each other's films, hoping someone will notice us long enough to write us into a scene.
              </p>
              <p className="text-[#000000] leading-relaxed font-medium">
                Or maybe—<br />
                We stop waiting to be written in.<br />
                <strong>And start directing our own stories.</strong>
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 pt-8 border-t border-[#D1D1D1] text-center">
              <p className="text-[#666666] italic">
                Still debugging. Still searching. Still hoping the code will compile someday.
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
