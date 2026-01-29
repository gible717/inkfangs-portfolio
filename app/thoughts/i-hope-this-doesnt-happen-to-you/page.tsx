"use client";
import { useState } from "react";
import Link from "next/link";

export default function Article() {
  const [isAlternateVersion, setIsAlternateVersion] = useState(false);

  return (
    <>
      {/* Custom Header with Dark Mode Support */}
      <header className={`fixed top-0 left-0 right-0 py-6 px-4 z-50 border-b transition-colors duration-700 ${isAlternateVersion ? 'bg-[#1A1A1A] border-[#333333]/30' : 'bg-[#F5F5F5] border-[#D1D1D1]/30'}`}>
        <nav className="flex items-center w-full relative">
          <a href="/" className={`text-2xl font-bold font-serif transition-colors duration-700 ${isAlternateVersion ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>
            inkfangs
          </a>
          <ul className="flex gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
            <li>
              <a href="/" className={`nav-link transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999] hover:text-[#FFFFFF]' : ''}`}>
                index
              </a>
            </li>
            <li>
              <a href="/bio" className={`nav-link transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999] hover:text-[#FFFFFF]' : ''}`}>
                bio
              </a>
            </li>
            <li>
              <a href="/builds" className={`nav-link transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999] hover:text-[#FFFFFF]' : ''}`}>
                builds
              </a>
            </li>
            <li>
              <a href="/thoughts" className={`nav-link active transition-colors duration-700 ${isAlternateVersion ? 'text-[#FFFFFF]' : ''}`}>
                thoughts
              </a>
            </li>
            <li>
              <a href="/working" className={`nav-link transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999] hover:text-[#FFFFFF]' : ''}`}>
                worklog
              </a>
            </li>
            <li>
              <a href="/community" className={`nav-link transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999] hover:text-[#FFFFFF]' : ''}`}>
                community
              </a>
            </li>
            <li>
              <a href="/contact" className={`nav-link transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999] hover:text-[#FFFFFF]' : ''}`}>
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={`min-h-screen pt-32 pb-24 px-6 transition-colors duration-700 ${isAlternateVersion ? 'bg-[#1A1A1A]' : 'bg-[#F5F5F5]'}`}>
        <article className="max-w-4xl mx-auto">

          {/* Article Header */}
          <header className="mb-12 pb-8">
            <div className={`text-xs mb-4 uppercase tracking-widest transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999]' : 'text-[#666666]'}`}>
              {isAlternateVersion ? 'Alternate Universe' : 'Vulnerability'}
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight transition-colors duration-700 ${isAlternateVersion ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>
              I Hope This Doesn't Happen to You
            </h1>
            <div className={`flex gap-4 text-sm mb-6 transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999]' : 'text-[#666666]'}`}>
              <span>February 10, 2025</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>by inkfangs</span>
              {/* Easter Egg Toggle - Hidden in plain sight */}
              <button
                onClick={() => setIsAlternateVersion(!isAlternateVersion)}
                className={`transition-all duration-300 ${isAlternateVersion ? 'text-[#666666] hover:text-[#FFFFFF]' : 'text-[#999999] hover:text-[#000000]'}`}
                title={isAlternateVersion ? 'Return to original' : 'View alternate universe'}
              >
                {isAlternateVersion ? '← return' : '✦'}
              </button>
            </div>
            {/* Border line - longer than text but not full width */}
            <div className={`w-5/6 h-[1px] mx-auto transition-colors duration-700 ${isAlternateVersion ? 'bg-[#333333]' : 'bg-[#D1D1D1]'}`}></div>
          </header>

          {/* Article Content */}
          {!isAlternateVersion ? (
            <div className="prose prose-lg max-w-none">

            {/* Opening */}
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              There's a vulnerability in writing code that people don't talk about.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Every function you write, every database you design, every interaction you craft—it's a confession of how you see the world working, or how you wish it would work. When you build something, you're not just arranging logic and syntax. You're embedding your assumptions, your values, your understanding of people into lines that will execute without question.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And that means every bug, every edge case you missed, every user who gets frustrated—it's personal in a way that's hard to explain to people who don't write code.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "Code is poetry that computers can understand, but it should be poetry that humans can feel."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Weight of a Single Line
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I remember the first time someone told me my code didn't work the way they expected. It wasn't angry. It wasn't even critical. Just… confused. "I thought clicking here would do this, but it did that instead."
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Such a small thing. A misalignment between what I imagined and what they needed. But it hit differently because I had spent hours on that feature, thinking through the logic, making sure the syntax was clean, the queries optimized.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              I had built it with care. And somehow, that made the gap between my intention and their experience feel wider.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              When Code Becomes Personal
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              Here's the thing about being a developer who cares: you can't stop at "it works." You start asking harder questions.
            </p>

            <ul className="space-y-3 mb-8 text-[#000000]">
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Does it work for everyone, or just for people who think like me?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Is it accessible to someone using a screen reader?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Does the error message help, or does it just blame the user?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#666666] mt-1">•</span>
                <span>Am I building this because it's easy for me, or because it's right for them?</span>
              </li>
            </ul>

            <p className="text-[#000000] leading-relaxed mb-8">
              Those questions don't have clean answers. And that's the vulnerability—realizing that good code isn't just about efficiency or elegance. It's about empathy. And empathy is messy.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 py-8 border-l-4 border-[#000000] pl-8 bg-[#FFFFFF]/60 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-serif italic text-[#000000] leading-relaxed">
                "The most beautiful programs aren't just efficient—they're empathetic."
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              The Confession in the Console
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              I used to think the terminal was a neutral space. Just errors and outputs, objective and impersonal. But the longer I code, the more I see it differently.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              Every <code className="bg-[#D1D1D1]/30 px-2 py-1 rounded text-sm">console.log()</code> I write is a conversation with my future self. Every comment is a note to someone I'll never meet. Every function name is a promise about what this piece of the system will do.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              And when those promises break? When the logic fails in a way I didn't anticipate? It's not just a bug. It's a reminder that I'm building something bigger than my own understanding.
            </p>

            <h2 className="text-3xl font-bold font-serif text-[#000000] mt-12 mb-6">
              I Hope This Doesn't Happen to You
            </h2>

            <p className="text-[#000000] leading-relaxed mb-6">
              But if it does—if you write something with care and watch it fail, if you build something beautiful and see it misunderstood, if you pour yourself into code only to realize it doesn't serve the people you meant it for—I hope you don't walk away.
            </p>

            <p className="text-[#000000] leading-relaxed mb-6">
              I hope you take the feedback. I hope you refactor. I hope you learn to see the gap not as failure, but as information. Because the vulnerability of writing code that matters is also the gift.
            </p>

            <p className="text-[#000000] leading-relaxed mb-8">
              It means you care enough to get it wrong. And caring enough to get it wrong is the first step to getting it right.
            </p>

              {/* Closing Statement */}
                <p className="text-center text-[#666666] italic">
                  Still learning. Still debugging. Still building.
                </p>
              </div>
          ) : (
            <div className="prose prose-lg max-w-none">

              {/* Alternate Version - Indonesian */}
              <p className="text-[#E0E0E0] leading-relaxed mb-8">
                Dulu gue nulis kode buat seseorang yang gak pernah baca. Bukan karena dia sibuk. Tapi karena dia emang gak peduli kalau gue nulis. Dia sibuk sama kode orang lain, ketawa sama developer lain, bangun sistem sama tim yang gak ada tempat gue. Gue? Tetep aja di situ. Nunggu dia liat commit gue. Berharap dia notice Pull Request gue. Tapi compiler gak bohong: 
              </p>

              <div className="my-8 space-y-2">
                <code className="bg-[#333333]/50 px-2 py-1 rounded text-sm text-[#FF6B6B]">Fatal: Cannot build relationship - missing dependencies</code>.
              </div>

              <p className="text-[#E0E0E0] leading-relaxed mb-8">
                ~18,000+ baris kemudian, gue belajar sesuatu, lo gak bisa <code className="bg-[#333333]/50 px-2 py-1 rounded text-sm">git push</code> perasaan ke orang yang gak punya repository buat nyimpan. Gak bisa merge sama orang yang terus reject Pull Request lo. Gak bisa debug hubungan di mana cuma lo doang yang ngeliat ada bug.
              </p>

              {/* Pull Quote - Dark Version */}
              <blockquote className="my-12 py-8 border-l-4 border-[#FFFFFF] pl-8 bg-[#2A2A2A]/60 backdrop-blur-sm">
                <p className="text-2xl md:text-3xl font-serif italic text-[#FFFFFF] leading-relaxed">
                  "Lo gak bisa git push perasaan ke orang yang gak punya repository buat nyimpan."
                </p>
              </blockquote>

              <p className="text-[#E0E0E0] leading-relaxed mb-8">
                Jadi gue berhenti nulis buat dia. Gak dengan marah. Gak dengan dendam. Cuma... capek aja.
              </p>

              <div className="my-8 space-y-2">
                <p className="text-3xl font-bold text-[#FFFFFF]">Capek jelasin,</p>
                <p className="text-3xl font-bold text-[#FFFFFF]">Capek pembenaran,</p>
                <p className="text-3xl font-bold text-[#FFFFFF]">Capek nunggu orang yang emang gak bakal dateng.</p>
              </div>

              <p className="text-[#E0E0E0] leading-relaxed mb-8">
                Sekarang gue nulis kode buat sistem yang melayani orang—orang yang gak bakal gue tinggalin kalau mereka butuh bantuan, orang yang gak bakal gue ignore kalau mereka raise issue, orang yang layak di-deploy dengan bermartabat.
              </p>

              <p className="text-[#E0E0E0] leading-relaxed mb-8">
                Ini bukan revenge arc. Cuma arc yang baru. Arc di mana main character bukan lagi "kita" tapi "gue". Dan gue bangga sama character development ini. Makasih udah ngajarin gue apa itu <code className="bg-[#FF6B6B]/50 px-2 py-1 rounded text-sm">git blame</code>. Makasih udah ngajarin tentang breaking changes. Makasih udah ngajarin apa itu deprecated function, yang masih bisa jalan tapi udah gak relevan lagi, yang masih ada di codebase tapi udah gak dipanggil lagi, kayak perasaan lo sama gue.
              </p>

              <p className="text-[#E0E0E0] leading-relaxed mb-8">
                Gue gak maafin lo karena gue udah move on. Gue maafin lo karena gue capek bawa technical debt dari hubungan yang udah deprecated. 
              </p>

              <div className="my-8 space-y-2">
                <p className="text-m text-[#FFFFFF]">Lo tetep di CS, gue pindah HR.</p>
                <p className="text-m text-[#FFFFFF]">Lo sama temen-temen lo, gue sama visi baru gue.</p>
                <p className="text-m text-[#FFFFFF]">Lo build aplikasi, gue build ruang aman buat orang yang terluka. Dan itu gak apa-apa.</p>
                <p className="text-m text-bold text-[#FFFFFF]">Dan itu gak apa-apa.</p>
              </div>

              <p className="text-[#E0E0E0] leading-relaxed mb-8">
                Karena gue belajar dari hubungan yang gagal, bahwa sistem yang paling canggih sekalipun tetep butuh empati buat berfungsi. Bahwa <code className="bg-[#333333]/50 px-2 py-1 rounded text-sm">if-else</code> bisa handle logika tapi gak bisa handle perasaan orang yang lo tinggal di group chat. Bahwa <code className="bg-[#333333]/50 px-2 py-1 rounded text-sm">while loop</code> bisa bikin program jalan terus tapi gak bisa bikin orang mau stay kalau mereka gak dihargai.
              </p>

              {/* Pull Quote - Dark Version */}
              <blockquote className="my-12 py-8 border-l-4 border-[#FFFFFF] pl-8 bg-[#2A2A2A]/60 backdrop-blur-sm">
                <p className="text-2xl md:text-3xl font-serif italic text-[#FFFFFF] leading-relaxed">
                  "Sistem yang paling canggih sekalipun tetep butuh empati buat berfungsi."
                </p>
              </blockquote>

              <p className="text-[#E0E0E0] leading-relaxed mb-8">
                Jadi selamat jalan. Semoga lo nemuin team yang cocok sama coding style lo. Gue? Gue udah deploy version baru, version di mana lead developer gue sendiri, tech stack yang gue pilih sendiri, dan main feature: <code className="bg-[#333333]/50 px-2 py-1 rounded text-sm text-[#6BCF7F]">self-respect.js</code>.
              </p>

            </div>
          )}

          {/* Related Articles */}
          <div className={`mt-16 pt-8 border-t transition-colors duration-700 ${isAlternateVersion ? 'border-[#333333]' : 'border-[#D1D1D1]'}`}>
            <h3 className={`text-2xl font-bold font-serif mb-8 transition-colors duration-700 ${isAlternateVersion ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>
              Continue Reading
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Article 1 */}
              <Link href="/thoughts/women-who-built-programming-then-disappeared" className="group">
                <article className={`backdrop-blur-sm border p-6 hover:shadow-md transition-all duration-300 ${isAlternateVersion ? 'bg-[#2A2A2A]/40 border-[#333333]/20 hover:bg-[#2A2A2A]/60' : 'bg-white/40 border-[#D1D1D1]/20 hover:bg-white/60'}`}>
                  <div className={`text-xs mb-2 uppercase tracking-widest transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999]' : 'text-[#666666]'}`}>
                    History • Gender
                  </div>
                  <h4 className={`text-xl font-bold font-serif mb-3 transition-colors ${isAlternateVersion ? 'text-[#FFFFFF] group-hover:text-[#CCCCCC]' : 'text-[#000000] group-hover:text-[#3A4F5B]'}`}>
                    Women Who Built Programming, Then Disappeared
                  </h4>
                  <p className={`text-sm transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999]' : 'text-[#666666]'}`}>
                    On the six women who invented modern programming, the industry that erased them, and why their story matters.
                  </p>
                </article>
              </Link>

              {/* Article 2 */}
              <Link href="/thoughts/enfp-in-a-codebase-why-culture-fit-almost-kept-me-out" className="group">
                <article className={`backdrop-blur-sm border p-6 hover:shadow-md transition-all duration-300 ${isAlternateVersion ? 'bg-[#2A2A2A]/40 border-[#333333]/20 hover:bg-[#2A2A2A]/60' : 'bg-white/40 border-[#D1D1D1]/20 hover:bg-white/60'}`}>
                  <div className={`text-xs mb-2 uppercase tracking-widest transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999]' : 'text-[#666666]'}`}>
                    Identity • Tech Culture
                  </div>
                  <h4 className={`text-xl font-bold font-serif mb-3 transition-colors ${isAlternateVersion ? 'text-[#FFFFFF] group-hover:text-[#CCCCCC]' : 'text-[#000000] group-hover:text-[#3A4F5B]'}`}>
                    ENFP in a Codebase: Why "Culture Fit" Almost Kept Me Out
                  </h4>
                  <p className={`text-sm transition-colors duration-700 ${isAlternateVersion ? 'text-[#999999]' : 'text-[#666666]'}`}>
                    I don't fit the developer stereotype. I almost let that stop me from building something that mattered.
                  </p>
                </article>
              </Link>
            </div>
          </div>

          {/* Back to Archive */}
          <div className="mt-12 text-center">
            <Link href="/thoughts" className={`inline-block transition-colors ${isAlternateVersion ? 'text-[#999999] hover:text-[#FFFFFF]' : 'text-[#666666] hover:text-[#000000]'}`}>
              ← Back to all articles
            </Link>
          </div>

        </article>
      </main>
    </>
  );
}
