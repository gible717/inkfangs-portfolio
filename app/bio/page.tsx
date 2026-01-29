"use client";
import { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

type FileType = "README.md" | "story.txt" | "achievements.json" | "manifesto.md" | "vibes.yaml";

export default function Bio() {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false); // Grid of files visible
  const [isExplorerOpen, setIsExplorerOpen] = useState(false); // Full browser visible

  const handleFolderClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsFolderOpen(true);
      setIsOpening(false);
    }, 400);
  };

  const handleFileClick = (fileType: FileType) => {
    if (!isExplorerOpen) {
      // First click on file - open full browser
      setIsOpening(true);
      setTimeout(() => {
        setSelectedFile(fileType);
        setIsExplorerOpen(true);
        setIsOpening(false);
      }, 400);
    } else if (fileType !== selectedFile) {
      // Switching between files
      setIsOpening(true);
      setTimeout(() => {
        setSelectedFile(fileType);
        setIsOpening(false);
      }, 300);
    }
  };

  const handleClose = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsExplorerOpen(false);
      setIsFolderOpen(false);
      setSelectedFile(null);
      setIsOpening(false);
    }, 300);
  };

  const files = [
    { name: "README.md", icon: "📄", type: "README.md" as FileType },
    { name: "story.txt", icon: "📄", type: "story.txt" as FileType },
    { name: "achievements.json", icon: "📄", type: "achievements.json" as FileType },
    { name: "manifesto.md", icon: "📄", type: "manifesto.md" as FileType },
    { name: "vibes.yaml", icon: "📄", type: "vibes.yaml" as FileType },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-6">
              The Human Behind the Code
            </h1>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
          </header>

          {/* Dynamic instruction text */}
          <p className="text-[#666666] italic text-center mb-8">
            {isExplorerOpen ? 'Currently viewing' : isFolderOpen ? 'Click a file to explore my story' : 'Click to open'}
          </p>

          {/* STATE 1: FOLDER ICON - Initial State */}
          {!isFolderOpen && !isExplorerOpen && (
            <div className={`flex justify-center items-center min-h-[350px] transition-all duration-400 ${isOpening ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <button
                onClick={handleFolderClick}
                disabled={isOpening}
                className="group flex flex-col items-center gap-6 p-12 hover:bg-white/40 rounded-2xl transition-all duration-300"
              >
                <span className="text-[120px] group-hover:scale-110 transition-transform duration-300">
                  📁
                </span>
                <span className="text-lg font-mono text-[#666666] group-hover:text-[#000000] transition-colors">
                  noufah/
                </span>
              </button>
            </div>
          )}

          {/* STATE 2: FILE ICONS GRID - After folder click */}
          {isFolderOpen && !isExplorerOpen && (
            <div className={`transition-all duration-400 ${isOpening ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
                {files.map((file) => (
                  <button
                    key={file.name}
                    onClick={() => handleFileClick(file.type)}
                    disabled={isOpening}
                    className="group flex flex-col items-center gap-3 p-6 hover:bg-white/60 rounded-lg transition-all duration-300"
                  >
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {file.icon}
                    </span>
                    <span className="text-sm font-mono text-[#000000] text-center">
                      {file.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STATE 3: FILE BROWSER - After file click */}
          {isExplorerOpen && (
            <div className={`transition-all duration-400 ${isOpening ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>

          <div className="grid md:grid-cols-[300px_1fr] gap-8">

            {/* LEFT: File Tree Sidebar */}
            <aside className="bg-white/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-6 rounded-lg h-fit">
              <div className="mb-4">
                <p className="text-xs text-[#666666] mb-3 font-mono">noufah/</p>
              </div>

              <div className="space-y-2">
                {files.map((file) => (
                  <button
                    key={file.name}
                    onClick={() => handleFileClick(file.type)}
                    disabled={isOpening}
                    className={`w-full text-left px-3 py-2 rounded transition-all duration-300 flex items-center gap-2 ${
                      selectedFile === file.type
                        ? 'bg-[#000000] text-white'
                        : 'hover:bg-[#F5F5F5] text-[#000000]'
                    } ${isOpening ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
                  >
                    <span className="text-sm">{file.icon}</span>
                    <span className="text-sm font-mono">{file.name}</span>
                    {selectedFile === file.type && (
                      <span className="ml-auto text-xs">✦</span>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#D1D1D1]">
                <p className="text-xs text-[#666666] font-mono">
                  {files.length} files
                </p>
              </div>
            </aside>

            {/* RIGHT: File Content */}
            <main className={`bg-white/60 backdrop-blur-sm border border-[#D1D1D1]/30 rounded-lg overflow-hidden transition-all duration-300 relative ${
              isOpening ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'
            }`}>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-lg text-[#666666] hover:text-[#000000] hover:bg-[#E5E5E5] rounded transition-colors"
                title="Close explorer"
              >
                ✕
              </button>

              {/* File Header */}
              <div className={`bg-[#FFFFFF] border-b border-[#D1D1D1] px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
                isOpening ? 'opacity-0' : 'opacity-100'
              }`}>
                <span className="text-2xl">
                  {files.find(f => f.type === selectedFile)?.icon}
                </span>
                <div>
                  <p className="font-mono text-sm text-[#000000] font-bold">
                    {selectedFile}
                  </p>
                  <p className="text-xs text-[#666666]">
                    Last modified: February 2025
                  </p>
                </div>
              </div>

              {/* File Content */}
              <div className={`p-8 transition-all duration-300 ${
                isOpening ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                {selectedFile === "README.md" && <ReadmeContent />}
                {selectedFile === "story.txt" && <StoryContent />}
                {selectedFile === "achievements.json" && <AchievementsContent />}
                {selectedFile === "manifesto.md" && <ManifestoContent />}
                {selectedFile === "vibes.yaml" && <VibesContent />}
              </div>
            </main>

          </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-16">
            <div className="mt-8 mb-8">
              <p className="text-sm text-[#666666] mb-4">
                Curious how this site was built?
              </p>
              <div className="flex gap-4 justify-center text-sm flex-wrap">
                <Link href="/how-i-built-this" className="text-[#000000] underline hover:text-[#3A4F5B] transition-colors">
                  How I Built This
                </Link>
                <span className="text-[#666666]">•</span>
                <Link href="/changelog" className="text-[#000000] underline hover:text-[#3A4F5B] transition-colors">
                  Changelog
                </Link>
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

// FILE CONTENT COMPONENTS

function ReadmeContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-serif text-[#000000] mb-4">
          # Noufah Binti Abdullah Hajibilang
        </h1>
        <p className="text-lg text-[#666666] italic">
          Final semester CS110 student → HR Management
        </p>
      </div>

      <div className="space-y-6 text-[#000000]">
        <section>
          <h2 className="text-2xl font-bold font-serif mb-3">## Quick Facts</h2>
          <ul className="space-y-2">
            <li><strong>Pronouns:</strong> she/her</li>
            <li><strong>Current Status:</strong> Transitioning from code to people</li>
            <li><strong>Personality:</strong> ENFP • People-focused • Old soul</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-serif mb-3">## What I Believe</h2>
          <p className="leading-relaxed">
            Technology should remember we're human. I build at the intersection of tech and humanity,
            where accessibility meets empathy, where code becomes poetry, and where systems serve people—not the other way around.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-serif mb-3">## Navigation</h2>
          <div className="bg-[#F5F5F5] p-4 rounded font-mono text-sm">
            <p className="text-[#666666]">// Explore other files to learn more:</p>
            <p>→ <span className="text-[#000000]">story.txt</span> - My journey from gold to heartbreak to purpose</p>
            <p>→ <span className="text-[#000000]">achievements.json</span> - Awards and recognition</p>
            <p>→ <span className="text-[#000000]">manifesto.md</span> - What drives me</p>
            <p>→ <span className="text-[#000000]">vibes.yaml</span> - The personal stuff</p>
          </div>
        </section>

        <div className="mt-8 p-6 bg-[#535353] text-white rounded">
          <p className="text-xl italic leading-relaxed">
            "Code is poetry that computers can understand, but it should be poetry that humans can feel."
          </p>
          <p className="text-sm text-[#D1D1D1] mt-3">— Noufah, 2025</p>
        </div>
      </div>
    </div>
  );
}

function StoryContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold font-serif text-[#000000] mb-8">
        My Story: From Gold to Purpose
      </h1>

      {/* Timeline */}
      <div className="space-y-12">

        {/* 2018 */}
        <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
          <p className="text-sm text-[#666666] mb-2 font-mono">2018</p>
          <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
            Gold in India, age 14
          </h3>
          <p className="text-[#000000] leading-relaxed">
            Everything felt possible. GITC 2018 Best Award winner. The world opened up.
            Code was poetry. Problems had solutions. I believed I could build anything.
          </p>
        </div>

        {/* 2019-2022 */}
        <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#535353]"></div>
          <p className="text-sm text-[#666666] mb-2 font-mono">2022-2026</p>
          <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
            CS110 at UiTM Perlis
          </h3>
          <p className="text-[#000000] leading-relaxed mb-4">
            The struggle nobody talks about. Not every gold medalist finds university easy.
            Not every ENFP thrives in pure logic. I learned that loving technology doesn't
            mean you have to marry code.
          </p>
          <p className="text-[#000000] leading-relaxed italic">
            I started asking: "What if my gift isn't writing perfect algorithms,
            but understanding the people who use them?"
          </p>
        </div>

        {/* 2023 */}
        <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#666666]"></div>
          <p className="text-sm text-[#666666] mb-2 font-mono">2023</p>
          <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
            When code stopped making sense
          </h3>
          <p className="text-[#000000] leading-relaxed">
            2023 taught me that not all bugs can be fixed with better code. Some require
            stepping away from the screen entirely. Heartbreak broke my relationship with
            programming. For months, opening VS Code felt like reopening a wound.
          </p>
        </div>

        {/* 2024 */}
        <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#666666]"></div>
          <p className="text-sm text-[#666666] mb-2 font-mono">2025</p>
          <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
            Finding meaning in service
          </h3>
          <p className="text-[#000000] leading-relaxed">
            Slowly, carefully, I found my way back. Not to pure code, but to what code
            could serve... people. I built InventStor during internship, 18,000+ lines asking
            one question: "How do we serve people better?"
          </p>
        </div>

        {/* 2025 */}
        <div className="relative pl-12 border-l-2 border-[#D1D1D1]">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#000000]"></div>
          <p className="text-sm text-[#666666] mb-2 font-mono">Present</p>
          <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
            Coding humans, not just computers
          </h3>
          <p className="text-[#000000] leading-relaxed mb-4">
            Final semester. Transitioning to HR Management. People ask why I'm leaving
            Computer Science. I tell them I'm not leaving, I'm expanding.
          </p>
          <p className="text-[#000000] leading-relaxed italic">
            "ENFP. People-focused. I realized my strength isn't debugging code, it's
            debugging team dynamics. My passion isn't optimizing algorithms, it's
            optimizing human potential."
          </p>
        </div>
      </div>
    </div>
  );
}

function AchievementsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold font-serif text-[#000000] mb-4">
        achievements.json
      </h1>
      <p className="text-[#666666] mb-8 font-mono text-sm">// Structured data format</p>

      <div className="bg-[#1A1A1A] text-[#E0E0E0] p-6 rounded font-mono text-sm overflow-x-auto">
        <pre>{`{
  "honors_and_awards": [
    {
      "title": "Anugerah Gangsa - Kategori Mahasiswa OKU Harapan",
      "english": "Bronze Award - Student of Promise",
      "issuer": "Bahagian Perkhidmatan & Pembangunan OKU (U-DserveD), UiTM",
      "date": "Dec 2025",
      "description": "Top 3 'Student of Promise' across all 35 UiTM campuses nationwide",
      "criteria": [
        "Holistic excellence in academics, leadership & community",
        "Exceptional resilience and positive attitude despite disability",
        "Active involvement in building inclusive campus communities"
      ],
      "presented_by": "Vice-Chancellor Professor Datuk Ts. Dr. Shahrin Sahib"
    },
    {
      "title": "Global IT Challenge for Youth with Disabilities (GITC)",
      "category": "e-Content Best Award",
      "location": "New Delhi, India",
      "date": "2018",
      "age_at_award": 14,
      "impact": "International recognition that opened doors"
    },
    {
      "title": "Bronze Award - The Duke of Edinburgh's International Award",
      "issuer": "The Duke of Edinburgh's International Award Malaysia",
      "date": "Nov 2024",
      "description": "Recognized for commitment to service, skills, and adventurous journey"
    }
  ],
  "certifications": [
    {
      "title": "Cognitive Behavioral Therapy (CBT) Coach Certification",
      "issuer": "PEKA Academy",
      "date": "Oct 2023",
      "description": "Certified coaching training in CBT techniques"
    },
    {
      "title": "Kayak Bintang Satu Certification",
      "issuer": "Malaysia Board of Canoe Education (MBOCE)",
      "date": "Dec 2024",
      "description": "Certified basic kayaking training"
    }
  ],
  "advocacy": {
    "role": "Mahasiswa OKU",
    "focus": "Disability advocacy and accessibility",
    "mission": "Building tech that serves everyone"
  }
}`}</pre>
      </div>
    </div>
  );
}

function ManifestoContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold font-serif text-[#000000] mb-8">
        # What Drives Me
      </h1>

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

      <div className="mt-12 p-8 bg-[#F5F5F5] rounded">
        <h2 className="text-2xl font-bold font-serif text-[#000000] mb-4">
          ## Core Values
        </h2>
        <ul className="space-y-3 text-[#000000]">
          <li className="flex items-start gap-3">
            <span className="text-[#666666]">•</span>
            <span><strong>Empathy over efficiency</strong> - but both when possible</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#666666]">•</span>
            <span><strong>Accessibility as default</strong> - not an afterthought</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#666666]">•</span>
            <span><strong>Community over competition</strong> - rising tides lift all boats</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#666666]">•</span>
            <span><strong>Code as craft</strong> - poetry that serves</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function VibesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold font-serif text-[#000000] mb-4">
        vibes.yaml
      </h1>
      <p className="text-[#666666] mb-8 font-mono text-sm"># The personal stuff, off the record</p>

      {/* Enhanced YAML block with syntax highlighting and line numbers */}
      <div className="bg-[#1A1A1A] text-[#E0E0E0] p-6 rounded font-mono text-sm overflow-x-auto mb-2 relative">
        <pre className="grid" style={{ gridTemplateColumns: 'auto 1fr' }}>
          {/* Line numbers */}
          <span className="text-[#666666] select-none pr-4 text-right">1{'\n'}2{'\n'}3{'\n'}4{'\n'}5{'\n'}6{'\n'}7{'\n'}8{'\n'}9{'\n'}10{'\n'}11{'\n'}12{'\n'}13{'\n'}14{'\n'}15{'\n'}16{'\n'}17{'\n'}18{'\n'}19{'\n'}20{'\n'}21{'\n'}22{'\n'}23{'\n'}24{'\n'}25{'\n'}26{'\n'}27{'\n'}28{'\n'}29{'\n'}30{'\n'}31{'\n'}32{'\n'}33{'\n'}34{'\n'}35{'\n'}36{'\n'}37{'\n'}38{'\n'}39{'\n'}40{'\n'}41{'\n'}42</span>

          {/* YAML content with syntax highlighting */}
          <code>
            <span className="text-[#569CD6]">operating_system</span>:{'\n'}
            {'  '}<span className="text-[#9CDCFE]">runs_on</span>: <span className="text-[#CE9178]">"curiosity and midnight deadlines"</span>{'\n'}
            {'  '}<span className="text-[#9CDCFE]">powered_by</span>: <span className="text-[#CE9178]">"old soul wisdom + ENFP energy"</span>{'\n'}
            {'\n'}
            <span className="text-[#569CD6]">contradictions</span>:{'\n'}
            {'  '}- <span className="text-[#CE9178]">"CS student → HR management"</span>{'\n'}
            {'  '}- <span className="text-[#CE9178]">"loves code, but loves people more"</span>{'\n'}
            {'  '}- <span className="text-[#CE9178]">"builds tech that remembers we're human"</span>{'\n'}
            {'  '}- <span className="text-[#CE9178]">"debugging team dynamics {'>'} debugging code"</span>{'\n'}
            {'\n'}
            <span className="text-[#569CD6]">current_rotation</span>:{'\n'}
            {'  '}<span className="text-[#4EC9B0]">listening</span>:{'\n'}
            {'    '}- Hindia{'\n'}
            {'    '}- <span className="text-[#CE9178]">"Doves, '25 on Blank Canvas"</span>{'\n'}
            {'    '}- Indonesian indie artists{'\n'}
            {'  '}<span className="text-[#4EC9B0]">learning</span>:{'\n'}
            {'    '}- <span className="text-[#CE9178]">"navigating final semester CS110"</span>{'\n'}
            {'    '}- <span className="text-[#CE9178]">"building bridges to HR psychology"</span>{'\n'}
            {'    '}- team dynamics & people management{'\n'}
            {'  '}<span className="text-[#4EC9B0]">building</span>:{'\n'}
            {'    '}- <span className="text-[#CE9178]">"this portfolio (with hidden easter eggs)"</span>{'\n'}
            {'    '}- my transition narrative{'\n'}
            {'    '}- bridges between tech & humanity{'\n'}
            {'\n'}
            <span className="text-[#569CD6]">then_vs_now</span>:{'\n'}
            {'  '}<span className="text-[#9CDCFE]">then</span>: <span className="text-[#CE9178]">"believed code was the answer"</span>{'\n'}
            {'  '}<span className="text-[#9CDCFE]">now</span>: <span className="text-[#CE9178]">"know that people are the question"</span>{'\n'}
            {'\n'}
            <span className="text-[#569CD6]">learning_in_progress</span>:{'\n'}
            {'  '}- <span className="text-[#CE9178]">"how to translate empathy into systems"</span>{'\n'}
            {'  '}- <span className="text-[#CE9178]">"that leaving isn't failure, it's expansion"</span>{'\n'}
            {'  '}- <span className="text-[#CE9178]">"building arcades, not leaderboards"</span>{'\n'}
            {'\n'}
            <span className="text-[#569CD6]">interests</span>:{'\n'}
            {'  '}- indie music enthusiast{'\n'}
            {'  '}- vintage aesthetics collector{'\n'}
            {'  '}- Y2K culture{'\n'}
            {'  '}- accessibility advocate{'\n'}
            {'  '}- <span className="text-[#CE9178]">"yes, the playlist matters"</span>{'\n'}
            {'\n'}
            <span className="text-[#569CD6]">philosophy</span>:{'\n'}
            {'  '}<span className="text-[#9CDCFE]">core</span>: <span className="text-[#CE9178]">"Code is poetry that computers understand, but should be poetry humans feel"</span>
            <span className="animate-pulse text-[#FFFFFF]">▋</span>
          </code>
        </pre>
      </div>

      {/* Last updated timestamp */}
      <p className="text-xs text-[#999999] font-mono mb-8 text-right">
        Last updated: February 2025
      </p>

      {/* Things that make me, ME - Bento Grid */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold font-serif text-[#000000] mb-6">
            Things that make me, ME
          </h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[120px]">

            {/* Featured: Accessibility Advocate - Large card spanning 2x2 */}
            <a
              href="/thoughts/the-voice-that-codes-gitc-2018-and-jaws"
              className="col-span-2 row-span-2 bg-[#3A3A3A] text-white p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div>
                <span className="text-3xl mb-3 block">♿</span>
                <h3 className="text-xl font-bold font-serif mb-2">Accessibility Advocate</h3>
                <p className="text-sm text-[#BBBBBB] leading-relaxed">
                  The voice that codes.
                </p>
              </div>
              <span className="text-xs text-[#888888] group-hover:text-white transition-colors">Read my story →</span>
            </a>

            {/* Melomaniac - Tall card */}
            <a
              href="/thoughts/im-a-melomaniac-why-i-listen-to-coldplay-and-tool-in-the-same-playlist"
              className="col-span-1 row-span-2 bg-gradient-to-b from-[#E8E4DF] to-[#D4CFC8] p-5 rounded-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl mb-2 block">🎧</span>
                <h3 className="font-bold text-[#000000] text-sm mb-1">Melomaniac</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Why my playlist makes no sense—and perfect sense.
                </p>
              </div>
              <span className="text-xs text-[#999999] group-hover:text-[#000000] transition-colors">Read more →</span>
            </a>

            {/* Learns from Chefs - Tall card */}
            <a
              href="/thoughts/why-i-learn-from-chefs-not-just-coders"
              className="col-span-1 row-span-2 bg-gradient-to-b from-[#F0EDE8] to-[#E5E0D8] p-5 rounded-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl mb-2 block">👨‍🍳</span>
                <h3 className="font-bold text-[#000000] text-sm mb-1">Learns from Chefs</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  What Korean cooking shows taught me about code.
                </p>
              </div>
              <span className="text-xs text-[#999999] group-hover:text-[#000000] transition-colors">Read more →</span>
            </a>

            {/* Arcade Builder - Wide card */}
            <a
              href="/thoughts/the-arcade-principle"
              className="col-span-2 row-span-1 bg-white/80 backdrop-blur-sm border border-[#D1D1D1]/30 p-4 rounded-xl hover:scale-[1.02] hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
            >
              <span className="text-2xl">🕹️</span>
              <div className="flex-1">
                <h3 className="font-bold text-[#000000] text-sm mb-1">Arcade Builder</h3>
                <p className="text-xs text-[#666666]">Not a leaderboard climber.</p>
              </div>
              <span className="text-xs text-[#999999] group-hover:text-[#000000] transition-colors">→</span>
            </a>

            {/* Old Soul - Standard card */}
            <div className="col-span-1 row-span-1 bg-white/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-4 rounded-xl hover:scale-[1.02] hover:shadow-md transition-all duration-300">
              <span className="text-xl mb-2 block">🌿</span>
              <h3 className="font-bold text-[#000000] text-sm mb-1">Old Soul</h3>
              <p className="text-xs text-[#666666]">Shaped by grandparents' stories</p>
            </div>

            {/* ENFP Energy - Standard card */}
            <a
              href="/thoughts/enfp-in-a-codebase-why-culture-fit-almost-kept-me-out"
              className="col-span-1 row-span-1 bg-white/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-4 rounded-xl hover:scale-[1.02] hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-xl mb-2 block">✨</span>
              <h3 className="font-bold text-[#000000] text-sm mb-1">ENFP in Tech</h3>
              <p className="text-xs text-[#666666]">Why "culture fit" almost kept me out</p>
            </a>

          </div>
        </section>
      </div>
    </div>
  );
} 
