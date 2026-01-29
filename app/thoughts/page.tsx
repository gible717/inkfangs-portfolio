"use client";
import Header from "../components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Thoughts() {
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledFeatured, setShuffledFeatured] = useState<typeof articles>([]);
  const [shuffledOther, setShuffledOther] = useState<typeof articles>([]);

  const articles = [
    {
      slug: "im-a-melomaniac-why-i-listen-to-coldplay-and-tool-in-the-same-playlist",
      title: "I'm a Melomaniac: Why I Listen to Coldplay and Tool in the Same Playlist",
      date: "January 2026",
      readTime: "12 min read",
      excerpt: "From Slipknot to Chase Atlantic through $400 headphones. My music taste doesn't make sense to anyone but me—and that's exactly the point. My playlist is my life philosophy: you don't have to fit in one box.",
      category: "Music • Personal • Reflection",
      featured: true
    },
    {
      slug: "enfp-in-a-codebase-why-culture-fit-almost-kept-me-out",
      title: "ENFP in a Codebase: Why \"Culture Fit\" Almost Kept Me Out of Tech",
      date: "January 2026",
      readTime: "11 min read",
      excerpt: "I can code. I've built production systems. But ask me where I'd rather be on a Friday night—I'd choose a noisy coffee shop with friends over a quiet room with my code editor. And according to tech culture, that makes me \"not technical enough.\"",
      category: "Personality • Belonging • Culture",
      featured: true
    },
    {
      slug: "why-im-terrified-to-push-to-production",
      title: "Why I'm Terrified to Push to Production (And Do It Anyway)",
      date: "January 2026",
      readTime: "9 min read",
      excerpt: "InventStor is complete. 100% done. Ready for deployment. And I still don't believe I built it. Not in a humble way. In a \"this can't be real\" way.",
      category: "Impostor Syndrome • Production • Reality",
      featured: true
    },
    {
      slug: "women-who-built-programming-then-disappeared",
      title: "Women Who Built Programming, Then Disappeared from the Story",
      date: "January 2026",
      readTime: "12 min read",
      excerpt: "Programming was invented by women. Not 'contributed to by women.' Invented. By women. And then—carefully, systematically, thoroughly—they were written out of the story.",
      category: "History • Gender • Tech",
      featured: true
    },
    {
      slug: "the-voice-that-codes-gitc-2018-and-jaws",
      title: "The Voice That Codes: What I Learned Watching a Blind Competitor at GITC 2018",
      date: "January 2026",
      readTime: "10 min read",
      excerpt: "I was 14 when the phone rang asking if I needed JAWS support. I said no. But someone else said yes. And watching them code changed everything I thought I knew about accessibility.",
      category: "Accessibility • Perspective • GITC 2018",
      featured: true
    },
    {
      slug: "listening-to-hindia-feels-like-code-that-never-compiled",
      title: "Listening to Hindia Feels Like Reading Code That Never Compiled",
      date: "February 2025",
      readTime: "15 min read",
      excerpt: "He writes songs like someone who has sat alone at a desk, staring at a screen, wondering: 'Why does everything I build feel... incomplete?' His lyrics read like error logs. Stack Overflow for emotional bugs.",
      category: "Music • Code • Loneliness",
      featured: true
    },
    {
      slug: "why-i-learn-from-chefs-not-just-coders",
      title: "Why I Learn From Chefs, Not Just Coders",
      date: "February 2025",
      readTime: "12 min read",
      excerpt: "When you think of a chef, people only seem to picture an already successful one. The process is hidden. But what actually decides the success is the process. Three Korean chefs taught me more about coding than most programmers ever could.",
      category: "Philosophy • Craft",
      featured: true
    },
    {
      slug: "the-arcade-principle",
      title: "The Arcade Principle",
      date: "February 20, 2025",
      readTime: "7 min read",
      excerpt: "I was three years old the first time I understood that technology could feel like magic. But looking back now, I see the pattern I missed: none of those memories were solo.",
      category: "Origin Story",
      featured: true
    },
    {
      slug: "when-the-vc-called-me-daughter-of-the-university",
      title: "When the VC Called Me \"Daughter of the University\"",
      date: "February 20, 2025",
      readTime: "9 min read",
      excerpt: "I walked in as a student, but I walked out feeling like a daughter of the university. This is the story of what happens when you stop waiting for permission to advocate for change.",
      category: "Advocacy • Leadership",
      featured: false
    },
    {
      slug: "i-hope-this-doesnt-happen-to-you",
      title: "I Hope This Doesn't Happen to You",
      date: "February 10, 2025",
      readTime: "5 min read",
      excerpt: "There's a vulnerability in writing code that people don't talk about. Every function you write, every database you design, every interaction you craft—it's a confession of how you see the world working, or how you wish it would work.",
      category: "Vulnerability",
      featured: true
    },
    {
      slug: "14460-lines-to-ask-one-question",
      title: "~18,000+ Lines to Ask One Question",
      date: "February 12, 2025",
      readTime: "8 min read",
      excerpt: "InventStor wasn't just about inventory management. It was about asking: How do we serve people better? ~18,000+ lines of code, 8 database tables, 116 commits—every line was part of that conversation.",
      category: "Technical Deep Dive",
      featured: false
    },
    {
      slug: "when-gaming-taught-me-about-workplace-manipulation",
      title: "When Gaming Taught Me About Workplace Manipulation",
      date: "January 12, 2026",
      readTime: "8 min read",
      excerpt: "I thought I was special. Turns out, I was just next in line. What online gaming taught me about recognizing manipulation patterns—and why it matters for HR.",
      category: "Professional Growth",
      featured: false
    },
    {
      slug: "from-syntax-to-empathy",
      title: "From Syntax to Empathy: Why I'm Choosing HR",
      date: "February 15, 2025",
      readTime: "6 min read",
      excerpt: "I'm good at code. That's why I'm leaving it. This is the story of how InventStor showed me what I actually love—and it's not the syntax.",
      category: "Personal Journey",
      featured: false
    },
    {
      slug: "accessibility-isnt-optional",
      title: "Accessibility Isn't Optional",
      date: "February 18, 2025",
      readTime: "7 min read",
      excerpt: "As Mahasiswa OKU, I've experienced firsthand what happens when developers treat accessibility as an afterthought. Here's why it should always come first.",
      category: "Advocacy",
      featured: false
    }
  ];

  const featuredArticles = articles.filter(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  // Shuffle articles on mount (client-side only)
  useEffect(() => {
    setShuffledFeatured(shuffleArray(featuredArticles));
    setShuffledOther(shuffleArray(otherArticles));
    setIsShuffled(true);
  }, []);

  // Use shuffled arrays when ready, otherwise use original order
  const displayFeatured = isShuffled ? shuffledFeatured : featuredArticles;
  const displayOther = isShuffled ? shuffledOther : otherArticles;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Newspaper Masthead */}
          <header className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold font-serif text-[#000000] mb-4">
              THE DEVELOPER TIMES
            </h1>
            <p className="text-lg text-[#666666] italic mb-2">
              where code meets conscience
            </p>
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto mt-8"></div>
          </header>

          {/* Featured Articles Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {displayFeatured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/thoughts/${article.slug}`}
                  className="group"
                >
                  <article className="bg-white/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8 hover:shadow-lg transition-all duration-300 h-full">
                    {/* Category Badge */}
                    <div className="text-xs text-[#666666] mb-3 uppercase tracking-widest">
                      {article.category}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#000000] mb-4 group-hover:text-[#3A4F5B] transition-colors">
                      {article.title}
                    </h2>

                    {/* Meta */}
                    <div className="flex gap-4 text-sm text-[#666666] mb-4">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-[#000000] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="text-[#666666] group-hover:text-[#000000] transition-colors">
                      Read the full story →
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#D1D1D1] mb-12"></div>

          {/* Other Articles Section */}
          <section>
            <h2 className="text-3xl font-bold font-serif text-[#000000] mb-8 text-center">
              More Editions
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {displayOther.map((article) => (
                <Link
                  key={article.slug}
                  href={`/thoughts/${article.slug}`}
                  className="group"
                >
                  <article className="bg-white/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-white/60 hover:shadow-md transition-all duration-300">
                    <div className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
                      {article.category}
                    </div>

                    <h3 className="text-xl font-bold font-serif text-[#000000] mb-3 group-hover:text-[#3A4F5B] transition-colors">
                      {article.title}
                    </h3>

                    <div className="flex gap-3 text-xs text-[#666666] mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <p className="text-sm text-[#666666] leading-relaxed">
                      {article.excerpt.substring(0, 120)}...
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* Subscribe/Follow Section */}
          <section className="mt-16 text-center max-w-2xl mx-auto">
            <div className="border-t border-[#D1D1D1] pt-12">
              <h3 className="text-2xl font-bold font-serif text-[#000000] mb-4">
                New editions published actively
              </h3>
              <p className="text-[#666666] mb-6">
                Essays on code, humanity, and the space between.
                Written with honesty, not just syntax.
              </p>
              <p className="text-sm text-[#666666] italic">
                Want to discuss these thoughts?
                <Link href="/contact" className="text-[#000000] underline hover:text-[#3A4F5B] ml-1">
                  Let's talk
                </Link>
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
