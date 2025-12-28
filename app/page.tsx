"use client";
import Header from "./components/Header";
import Lanyard3D from "./components/Lanyard3D";
import TypingQuotes from "./components/TypingQuotes";
import GuestbookSimple from "./components/GuestbookSimple";
import ViewSource from "./components/ViewSource";

export default function Home() {
  return (
    <>
      <Header />
      
    {/* SECTION 1: LANDING */}
<section id="index" className="relative min-h-screen bg-[#F5F5F5] flex items-center justify-center px-6 pt-24">
  <div className="max-w-7xl w-full">
    {/* Two Column Layout: Text Left, Lanyard Right */}
    <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">

      {/* LEFT: Content */}
      <div>
        {/* Main Headline */}
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-bold text-[#000000] leading-tight animate-fadeInUp">
            <span className="font-[family-name:var(--font-space-mono)]">code</span>
            <span className="font-serif"> '25</span>
          </h2>
          <h2 className="text-6xl md:text-8xl font-bold text-[#000000] leading-tight font-serif animate-fadeInScale delay-300">
            on blank page
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-[#666666] mb-8 italic animate-fadeIn delay-600">
          a showcase by noufah • building questions, not just systems
        </p>

        {/* Typing Quote */}
        <TypingQuotes />

        {/* Scroll Indicator */}
        <button
          onClick={() => {
            document.getElementById('thoughts')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="inline-flex items-center gap-2 text-sm text-[#666666] opacity-30 hover:opacity-100 transition-all duration-300 cursor-pointer group"
        >
          <span>scroll down</span>
          <svg
            className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* RIGHT: Empty column for lanyard positioning */}
      <div className="relative">
        {/* View Source - centered under lanyard */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden md:block">
          <ViewSource
            file="app/components/Lanyard3D.tsx"
            text="view source"
          />
        </div>
      </div>
    </div>
  </div>

  {/* 3D Lanyard - Only visible in landing section */}
  <div className="hidden md:block">
    <Lanyard3D />
  </div>
</section>

      {/* SECTION 2: DEVELOPER TIMES (THOUGHTS) */}
      <section id="thoughts" className="min-h-screen bg-[#F5F5F5] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Newspaper Masthead */}
          <header className="text-center pb-6 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-[#000000] mb-2">
              THE DEVELOPER TIMES
            </h1>
            <p className="text-sm text-[#666666] italic mb-6">
              where code meets conscience thoughts written in functions, feelings rendered in pixels
            </p>
            {/* Full-width border line */}
            <div className="w-full h-[1px] bg-[#D1D1D1]"></div>
          </header>

          {/* Two Column Layout: Article + Sidebar */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            
            {/* LEFT COLUMN: Main Article */}
            <div className="md:pr-8 md:border-r md:border-[#D1D1D1]">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#000000] mb-6">
                "I hope this doesn't happen to you"
              </h2>
              
              <p className="text-sm text-[#666666] mb-8 italic">
                by inkfangs
              </p>

              <div className="space-y-6">
                <p className="text-[#000000] leading-relaxed text-lg">
                  There's a vulnerability in writing code that people don't talk about. 
                  Every function you write, every database you design, every interaction 
                  you craft it's a confession of how you see the world working, or how you wish it would work.
                </p>

                <p className="text-[#000000] leading-relaxed text-lg">
                  I'm entering my final semester of Diploma in Computer Science at UiTM, 
                  and I've learned that the most beautiful programs aren't just efficient they're empathetic. They remember that behind 
                  every user interaction is a person with their own story, their own struggles, their own way of seeing.
                </p>
              </div>

              {/* Read More Button */}
              <a href="/thoughts/i-hope-this-doesnt-happen-to-you" className="mt-8 inline-block px-6 py-3 bg-[#D1D1D1]/40 text-[#666666] font-medium hover:bg-[#3A4F5B] hover:text-white transition-all duration-300">
                Read More →
              </a>
            </div>

            {/* RIGHT COLUMN: Sidebar Boxes */}
            <div className="space-y-0 md:pl-8 md:-mt-4">
              
              {/* Current Status Box */}
              <div className="pb-8">
                <h3 className="text-2xl font-serif font-bold text-[#000000] mb-4">
                  Current status
                </h3>
                <p className="text-[#000000] leading-relaxed text-sm">
                  Final semester CS110 student at UiTM Perlis, actively seeking 
                  internship opportunities in web development and accessible design.
                </p>
              </div>

              {/* Technical Skills Box */}
              <div className="border-t-[1px] border-[#D1D1D1] pt-6 pb-8">
                <h3 className="text-2xl font-serif font-bold text-[#000000] mb-4">
                  Technical skills
                </h3>
                <p className="text-[#000000] leading-relaxed text-sm">
                  HTML/CSS, JavaScript, PHP, MySQL, responsive design, accessibility 
                  principles, CRUD operations, database design.
                </p>
              </div>

              {/* Philosophy Box */}
              <div className="border-t-[1px] border-[#D1D1D1] pt-6">
                <h3 className="text-2xl font-serif font-bold text-[#000000] mb-4">
                  Philosophy
                </h3>
                <p className="text-[#000000] leading-relaxed text-sm italic">
                  "Code is poetry that computers can understand, but it should be 
                  poetry that humans can feel."
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: BUILDS */}
      <section id="builds" className="min-h-screen bg-[#F5F5F5] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <header className="text-center pb-6 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-[#000000] mb-2">
              BUILDS
            </h1>
            <p className="text-sm text-[#666666] italic mb-6">
              code confessions • technical diary entries
            </p>
            {/* Shortened border line */}
            <div className="w-1/2 h-[1px] bg-[#D1D1D1] mx-auto"></div>
          </header>

          {/* Featured Project Card - InventStor */}
          <div className="max-w-3xl mx-auto">
            <article className="border border-[#D1D1D1]/30 p-12 bg-[#FFFFFF]/60 backdrop-blur-md shadow-lg rounded-lg transition-all duration-500 hover:shadow-2xl hover:bg-[#FFFFFF]/80 hover:-translate-y-2 hover:scale-[1.02]">
              
              {/* Project Title */}
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#000000] mb-6 text-center">
                InventStor
              </h2>

              {/* Question-based Tagline */}
              <blockquote className="text-2xl text-[#000000] leading-relaxed mb-8 text-center italic">
                "14,460 lines to ask one question: How do we serve people better?"
              </blockquote>

              {/* Project Description */}
              <p className="text-[#000000] leading-relaxed text-lg mb-6 text-center">
                Government inventory management system built during final internship. 
                A comprehensive solution for tracking assets, managing stock, and serving 
                public offices with dignity.
              </p>

              {/* Tech Stack */}
              <div className="text-center mb-8">
                <p className="text-sm text-[#666666] mb-2">
                  TECHNICAL STACK
                </p>
                <p className="text-[#000000] font-medium">
                  PHP • MySQL • Bootstrap • JavaScript
                </p>
                <p className="text-sm text-[#666666] mt-2">
                  90+ files • 7-table database • Real-time tracking • In active use
                </p>
              </div>

              {/* Divider */}
              <div className="w-24 h-[1px] bg-[#D1D1D1] mx-auto mb-8"></div>

              {/* CTA Button */}
              <div className="text-center">
                <a href="/thoughts/14460-lines-to-ask-one-question" className="inline-block px-8 py-3 bg-[#D1D1D1]/40 text-[#666666] font-medium hover:bg-[#3A4F5B] hover:text-white transition-all duration-300">
                  Read the Full Story →
                </a>
              </div>

            </article>
          </div>

        </div>
      </section>

      {/* SECTION 4: GUESTBOOK */}
      <section id="contact" className="min-h-screen bg-[#F5F5F5] px-6 py-24">
        <GuestbookSimple />
      </section>
    </>
  );
}