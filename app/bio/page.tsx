"use client";
import Header from "../components/Header";

export default function Bio() {
  return (
    <>
      <Header />

      {/* BIO PAGE */}
      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* CHAPTER I: THE ARCHIVE */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-sm text-[#666666] mb-2 tracking-widest">CHAPTER I</p>
              <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-8">
                The Archive
              </h1>
              <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto"></div>
            </div>

            {/* Two Column: Photo Left, Info Right */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

              {/* LEFT: Photo */}
              <div className="mx-auto">
                <div className="bg-white p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="w-64 h-80 bg-[#D1D1D1]/30 flex items-center justify-center">
                    {/* Placeholder for your photo */}
                    <p className="text-[#666666] italic text-sm">Your photo here</p>
                  </div>
                  <p className="text-center mt-3 font-serif italic text-[#666666]">Noufah ♡</p>
                </div>
              </div>

              {/* RIGHT: Info Cards */}
              <div className="space-y-6">
                <div className="border-l-3 border-[#000000] pl-6">
                  <p className="text-sm text-[#666666] mb-1">FULL NAME</p>
                  <p className="text-2xl font-bold text-[#000000]">Noufah Binti Abdullah Hajibilang</p>
                </div>

                <div className="border-l-3 border-[#000000] pl-6">
                  <p className="text-sm text-[#666666] mb-1">CURRENT STATUS</p>
                  <p className="text-lg text-[#000000]">Final semester CS110 student transitioning to HR Management</p>
                </div>

                <div className="border-l-3 border-[#000000] pl-6">
                  <p className="text-sm text-[#666666] mb-1">LOCATION</p>
                  <p className="text-lg text-[#000000]">Perlis, Malaysia</p>
                </div>

                <div className="border-l-3 border-[#000000] pl-6">
                  <p className="text-sm text-[#666666] mb-1">PRONOUNS</p>
                  <p className="text-lg text-[#000000]">she/her</p>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER II: THE STORY */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-sm text-[#666666] mb-2 tracking-widest">CHAPTER II</p>
              <h2 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-8">
                The Story
              </h2>
              <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto"></div>
            </div>

            {/* Timeline */}
            <div className="space-y-12 max-w-3xl mx-auto">

              {/* 2018: The Beginning */}
              <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                <p className="text-sm text-[#666666] mb-2">2018</p>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                  Gold in India, age 14
                </h3>
                <p className="text-[#000000] leading-relaxed">
                  Everything felt possible. GITC 2018 Best Award winner. The world opened up.
                  Code was poetry. Problems had solutions. I believed I could build anything.
                </p>
              </div>

              {/* 2019-2022: The Struggle */}
              <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#535353]"></div>
                <p className="text-sm text-[#666666] mb-2">2019—2022</p>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                  CS at UiTM Perlis
                </h3>
                <p className="text-[#000000] leading-relaxed mb-4">
                  The struggle nobody talks about. Not every gold medalist finds university easy.
                  Not every ENFP thrives in pure logic. I learned that loving technology doesn't
                  mean you have to marry code.
                </p>
                <p className="text-[#000000] leading-relaxed italic">
                  "I started asking: what if my gift isn't writing perfect algorithms,
                  but understanding the people who use them?"
                </p>
              </div>

              {/* 2023: Heartbreak */}
              <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#666666]"></div>
                <p className="text-sm text-[#666666] mb-2">2023</p>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                  When code stopped making sense
                </h3>
                <p className="text-[#000000] leading-relaxed">
                  2023 taught me that not all bugs can be fixed with better code. Some require
                  stepping away from the screen entirely. Heartbreak broke my relationship with
                  programming. For months, opening VS Code felt like reopening a wound.
                </p>
              </div>

              {/* 2024: Rediscovery */}
              <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#666666]"></div>
                <p className="text-sm text-[#666666] mb-2">2024</p>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                  Finding meaning in service
                </h3>
                <p className="text-[#000000] leading-relaxed">
                  Slowly, carefully, I found my way back. Not to pure code, but to what code
                  could serve: people. I built InventStor during internship—14,460 lines asking
                  one question: "How do we serve people better?"
                </p>
              </div>

              {/* 2025: Transition */}
              <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
                <p className="text-sm text-[#666666] mb-2">2025</p>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                  Coding humans, not just computers
                </h3>
                <p className="text-[#000000] leading-relaxed mb-4">
                  Final semester. Transitioning to HR Management. People ask why I'm leaving
                  Computer Science. I tell them I'm not leaving—I'm expanding.
                </p>
                <p className="text-[#000000] leading-relaxed italic">
                  "ENFP. People-focused. I realized my strength isn't debugging code—it's
                  debugging team dynamics. My passion isn't optimizing algorithms—it's
                  optimizing human potential."
                </p>
              </div>
            </div>
          </section>

          {/* CHAPTER III: ACHIEVEMENTS THAT MATTER */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-sm text-[#666666] mb-2 tracking-widest">CHAPTER III</p>
              <h2 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-8">
                Achievements That Matter
              </h2>
              <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto"></div>
            </div>

            {/* Achievement Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* GITC Award */}
              <div className="bg-white/60 backdrop-blur-sm p-8 border border-[#D1D1D1]/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-3">
                  GITC 2018 Best Award
                </h3>
                <p className="text-[#666666] mb-2">India • Age 14</p>
                <p className="text-[#000000] leading-relaxed">
                  International recognition that opened doors and showed me what was possible.
                </p>
              </div>

              {/* Leadership */}
              <div className="bg-white/60 backdrop-blur-sm p-8 border border-[#D1D1D1]/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-3">
                  Leadership Roles
                </h3>
                <ul className="text-[#000000] leading-relaxed space-y-1">
                  <li>• Secretary General, Sekretariat Rakan Muda</li>
                  <li>• Head of Information Unit, Student Parliament</li>
                  <li>• Duke of Edinburgh Bronze Award</li>
                </ul>
              </div>

              {/* State Championships */}
              <div className="bg-white/60 backdrop-blur-sm p-8 border border-[#D1D1D1]/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🥇</div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-3">
                  State-Level Championships
                </h3>
                <p className="text-[#000000] leading-relaxed">
                  Multiple state-level victories that built confidence and competitive spirit.
                </p>
              </div>

              {/* Advocacy */}
              <div className="bg-white/60 backdrop-blur-sm p-8 border border-[#D1D1D1]/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">♿</div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-3">
                  Mahasiswa OKU
                </h3>
                <p className="text-[#000000] leading-relaxed">
                  Disability advocacy and accessibility champion. Building tech that serves everyone.
                </p>
              </div>

              {/* University Honors */}
              <div className="bg-white/60 backdrop-blur-sm p-8 border border-[#D1D1D1]/30 hover:shadow-lg transition-all duration-300 md:col-span-2">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold font-serif text-[#000000] mb-3">
                  University Honors
                </h3>
                <p className="text-[#000000] leading-relaxed">
                  Academic recognition throughout CS110 journey at UiTM Perlis, balancing
                  technical excellence with human-centered values.
                </p>
              </div>
            </div>
          </section>

          {/* CHAPTER IV: WHAT DRIVES YOU */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-sm text-[#666666] mb-2 tracking-widest">CHAPTER IV</p>
              <h2 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-8">
                What Drives Me
              </h2>
              <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto"></div>
            </div>

            {/* Manifesto */}
            <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-12 border border-[#D1D1D1]/30">
              <div className="space-y-6 text-lg text-[#000000] leading-relaxed">
                <p>
                  <strong>I believe in technology that remembers we're human.</strong>
                </p>
                <p>
                  I believe in accessible design because not everyone experiences the web
                  the same way I do.
                </p>
                <p>
                  I believe the best interfaces anticipate needs before users have to ask.
                </p>
                <p>
                  I believe code is poetry, but <em>compassion is the rhythm</em>.
                </p>
                <p className="pt-6 border-t border-[#D1D1D1]">
                  <strong>The intersection of tech + humanity.</strong> That's where I live.
                  That's where I build. That's where I believe the future is.
                </p>
              </div>
            </div>
          </section>

          {/* CHAPTER V: BEYOND CODE */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-sm text-[#666666] mb-2 tracking-widest">CHAPTER V</p>
              <h2 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-8">
                Off The Record
              </h2>
              <div className="w-32 h-[1px] bg-[#D1D1D1] mx-auto"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">

              {/* Interests */}
              <div>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                  Things that make me, me
                </h3>
                <ul className="space-y-3 text-[#000000] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>Indie music enthusiast (Hindia's "Doves, '25 on Blank Canvas" is my current obsession)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>Vintage aesthetics and Y2K culture collector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>"Vibe coding" philosopher (yes, the playlist matters)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>Raised by grandparents, shaped by old-soul wisdom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#666666]">•</span>
                    <span>Believer in accessibility, advocate for inclusion</span>
                  </li>
                </ul>
              </div>

              {/* Philosophy */}
              <div className="bg-[#535353] text-white p-8">
                <p className="text-xl italic leading-relaxed">
                  "Code is poetry that computers can understand, but it should be
                  poetry that humans can feel."
                </p>
                <p className="text-sm text-[#D1D1D1] mt-4">— Noufah, 2025</p>
              </div>

              {/* Current Rotation */}
              <div>
                <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                  Current rotation
                </h3>
                <div className="space-y-2 text-[#000000]">
                  <p><span className="text-[#666666]">Listening:</span> Hindia, indie Indonesian artists</p>
                  <p><span className="text-[#666666]">Learning:</span> HR psychology, people management, team dynamics</p>
                  <p><span className="text-[#666666]">Building:</span> This portfolio, my transition story, my future</p>
                </div>
              </div>
            </div>
          </section>

          {/* CLOSING */}
          <div className="text-center pt-12 border-t border-[#D1D1D1]">
            <p className="text-[#000000] text-lg mb-4">
              That's me. The human behind the code.
            </p>
            <p className="text-[#666666] italic mb-8">
              Still writing the story. Still debugging myself. Still learning.
            </p>

            {/* Links to Credibility Pages */}
            <div className="mt-8 mb-8">
              <p className="text-sm text-[#666666] mb-4">
                Curious how this site was built?
              </p>
              <div className="flex gap-4 justify-center text-sm flex-wrap">
                <a href="/how-i-built-this" className="text-[#000000] underline hover:text-[#3A4F5B] transition-colors">
                  How I Built This
                </a>
                <span className="text-[#666666]">•</span>
                <a href="/changelog" className="text-[#000000] underline hover:text-[#3A4F5B] transition-colors">
                  Changelog
                </a>
              </div>
            </div>

            <p className="text-sm text-[#666666] mt-8 font-serif">
              inkfangs • 2025
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
