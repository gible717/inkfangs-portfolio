"use client";
import Header from "../components/Header";
import Link from "next/link";

export default function Thoughts() {
  const articles = [
    {
      slug: "when-the-vc-called-me-daughter-of-the-university",
      title: "When the VC Called Me \"Daughter of the University\"",
      date: "February 20, 2025",
      readTime: "9 min read",
      excerpt: "I walked in as a student, but I walked out feeling like a daughter of the university. This is the story of what happens when you stop waiting for permission to advocate for change.",
      category: "Advocacy • Leadership",
      featured: true
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
      title: "14,460 Lines to Ask One Question",
      date: "February 12, 2025",
      readTime: "8 min read",
      excerpt: "InventStor wasn't just about inventory management. It was about asking: How do we serve people better? Every line of code was part of that conversation.",
      category: "Technical Deep Dive",
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
            <p className="text-sm text-[#666666]">
              thoughts written in functions, feelings rendered in pixels
            </p>
            <div className="w-full h-[2px] bg-[#D1D1D1] mt-8"></div>
            <div className="w-full h-[1px] bg-[#D1D1D1] mt-1"></div>
          </header>

          {/* Featured Articles Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
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
              {otherArticles.map((article) => (
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
                New editions published monthly
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
