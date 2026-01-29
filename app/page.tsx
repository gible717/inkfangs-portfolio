"use client";
import { useState } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import TypingQuotes from "./components/TypingQuotes";
import GuestbookSimple from "./components/GuestbookSimple";
import BlurText from "./components/BlurText";
import { motion } from "framer-motion";

export default function Home() {
  const [showSubtitle1, setShowSubtitle1] = useState(false);
  const [showSubtitle2, setShowSubtitle2] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

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
          <h2 className="text-6xl md:text-8xl font-bold text-[#000000] leading-tight">
            <span className="font-[family-name:var(--font-space-mono)]">
              <BlurText
                text="code"
                animateBy="letters"
                delay={120}
                stepDuration={0.7}
                direction="top"
                blur="12px"
              />
            </span>
            <span className="font-serif">
              <BlurText
                text=" '25"
                animateBy="letters"
                delay={120}
                stepDuration={0.7}
                direction="top"
                blur="12px"
                startDelay={0.6}
              />
            </span>
          </h2>
          <h2 className="text-6xl md:text-8xl font-bold text-[#000000] leading-tight font-serif">
            <BlurText
              text="on blank page"
              animateBy="words"
              delay={200}
              stepDuration={0.8}
              direction="bottom"
              blur="14px"
              startDelay={1.4}
              onAnimationComplete={() => {
                // Step 4: Show "a showcase by noufah"
                setShowSubtitle1(true);
              }}
            />
          </h2>
        </div>

        {/* Subtitle - same line with bullet separator */}
        <p className="text-lg text-[#666666] mb-8 italic">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={showSubtitle1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            onAnimationComplete={() => {
              if (showSubtitle1) {
                // Step 5: Show "building questions..."
                setTimeout(() => setShowSubtitle2(true), 200);
              }
            }}
            className="inline-block"
          >
            a showcase by noufah
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={showSubtitle2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block mx-2"
          >
            •
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={showSubtitle2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            onAnimationComplete={() => {
              if (showSubtitle2) {
                // Step 6: Start typing quotes
                setTimeout(() => setShowTyping(true), 300);
              }
            }}
            className="inline-block"
          >
            building questions, not just systems
          </motion.span>
        </p>

        {/* Typing Quote - waits for subtitle animation */}
        <TypingQuotes
          waitForTrigger
          shouldStart={showTyping}
          onFirstCharTyped={() => {
            // Step 7: Show scroll indicator after typing starts
            setTimeout(() => setShowScroll(true), 500);
          }}
        />

        {/* Scroll Indicator - appears last */}
        <motion.button
          onClick={() => {
            document.getElementById('thoughts')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="inline-flex items-center gap-2 text-sm text-[#666666] hover:opacity-100 transition-all duration-300 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={showScroll ? { opacity: 0.3 } : { opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
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
        </motion.button>
      </div>

      {/* RIGHT: ProfileCard */}
      <div className="relative flex items-center justify-center">
        <ProfileCard
          name="Noufah"
          title="Tech Meets Humanity"
          handle="inkfangs"
          status="CS Student • UiTM Perlis"
          contactText="Say Hello"
          avatarUrl="/assets/noufah-avatar.png"
          iconUrl="/assets/code-pattern.svg"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => {
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}
          behindGlowEnabled={true}
          behindGlowColor="rgba(58, 79, 91, 0.6)"
          innerGradient="linear-gradient(145deg, #1a1a1a 0%, #3A4F5B44 100%)"
        />
      </div>
    </div>
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
            {/* Border line - longer than text but not full width */}
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
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
            {/* Border line - longer than text but not full width */}
            <div className="w-5/6 h-[1px] bg-[#D1D1D1] mx-auto"></div>
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
                "~18,000+ lines to ask one question: How do we serve people better?"
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
                  98 PHP files • 8-table database • 116 commits • 100% complete
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