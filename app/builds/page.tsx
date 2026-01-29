"use client";
import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";

// Frame styles: "classic" | "minimal" | "frameless" | "float"
type FrameStyle = "classic" | "minimal" | "frameless" | "float";

// Project data
const projects = [
  {
    id: 1,
    title: "InventStor",
    question: "How do we serve people better?",
    tagline: "~18,000+ lines to ask one question",
    image: null,
    description: "An internal inventory management system built during my final internship. Real-time tracking, searchable database, automated reports—designed for staff who needed things to just work.",
    tech: ["PHP 8.3", "MySQL 8.4", "JavaScript", "Bootstrap 5", "Chart.js"],
    stats: ["~18,000+ lines", "98 PHP files", "8-table database", "116 commits"],
    status: "Deployed",
    year: "2025",
    frameStyle: "classic" as FrameStyle, // Traditional gallery frame
  },
  {
    id: 2,
    title: "This Portfolio",
    question: "Can a portfolio be a conversation?",
    tagline: "The meta-project you're experiencing",
    image: null,
    description: "A portfolio that feels less like a resume and more like an invitation. Built with intention, designed to spark curiosity.",
    tech: ["Next.js 14", "React Three Fiber", "TypeScript", "Tailwind CSS"],
    stats: ["3D elements", "Custom animations", "Mobile-first", "Open source"],
    status: "Live",
    year: "2025",
    frameStyle: "frameless" as FrameStyle, // Modern, no frame
  },
  {
    id: 3,
    title: "Accessibility Toolkit",
    question: "What if accessibility was built-in, not bolted-on?",
    tagline: "Making the web for everyone",
    image: null,
    description: "Web components designed for everyone from day one. Because accessibility shouldn't be an afterthought.",
    tech: ["React", "ARIA", "Web Components", "TypeScript"],
    stats: ["In planning", "Open to collab"],
    status: "Planning",
    year: "2025",
    frameStyle: "float" as FrameStyle, // Floating with shadow
  },
  {
    id: 4,
    title: "HR Analytics Dashboard",
    question: "Can data help us understand people better?",
    tagline: "Where CS meets HR",
    image: null,
    description: "Bringing my Computer Science and Human Resources worlds together. Data visualization that serves humanity, not just metrics.",
    tech: ["Python", "D3.js", "PostgreSQL", "TBD"],
    stats: ["Conceptual", "Cross-discipline"],
    status: "Thinking",
    year: "Future",
    frameStyle: "minimal" as FrameStyle, // Thin minimal border
  },
];

// Canvas component with different frame styles
function ArtworkCanvas({
  project,
  index
}: {
  project: typeof projects[0];
  index: number;
}) {
  const canvasContent = (
    <div className="bg-[#FAFAFA] aspect-[4/3] w-full max-w-lg md:max-w-xl flex items-center justify-center relative overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
          <div className="text-6xl md:text-8xl font-serif text-[#E8E8E8] mb-4">
            {String(index + 1).padStart(2, "0")}
          </div>
          <p className="text-xl md:text-2xl font-serif text-[#CCCCCC] leading-relaxed max-w-sm">
            "{project.question}"
          </p>
        </div>
      )}
    </div>
  );

  switch (project.frameStyle) {
    case "classic":
      // Traditional dark gallery frame
      return (
        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#00000015]" />
          <div className="relative bg-[#1a1a1a] p-3 md:p-4">
            <div className="bg-[#2a2a2a] p-1">
              <div className="bg-[#3a3a3a] p-[2px]">
                {canvasContent}
              </div>
            </div>
          </div>
        </div>
      );

    case "minimal":
      // Thin black border
      return (
        <div className="relative">
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#00000008]" />
          <div className="relative border border-[#1a1a1a]">
            {canvasContent}
          </div>
        </div>
      );

    case "frameless":
      // No frame, just subtle shadow
      return (
        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#00000010] blur-sm" />
          <div className="relative">
            {canvasContent}
          </div>
        </div>
      );

    case "float":
      // Floating effect with deep shadow
      return (
        <div className="relative">
          <div className="absolute inset-0 translate-x-6 translate-y-6 bg-[#00000020] blur-md" />
          <div className="relative bg-white p-2 shadow-lg">
            {canvasContent}
          </div>
        </div>
      );

    default:
      return canvasContent;
  }
}

export default function Builds() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling) return;
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex, isScrolling]);

  const goToProject = (index: number) => {
    if (containerRef.current) {
      setIsScrolling(true);
      containerRef.current.scrollTo({
        left: index * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentIndex < projects.length - 1) {
        goToProject(currentIndex + 1);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        goToProject(currentIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      <Header />

      <main className="h-screen overflow-hidden bg-[#F5F5F5] pt-20">

        {/* Exhibition Masthead */}
        <div className="fixed top-24 left-0 right-0 z-10 text-center pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#000000] tracking-tight">
            THE EXHIBITION
          </h1>
          <p className="text-sm text-[#666666] italic mt-1">
            building questions, not just systems
          </p>
          <div className="w-5/6 max-w-2xl h-[1px] bg-[#D1D1D1] mx-auto mt-3"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToProject(currentIndex - 1)}
          disabled={currentIndex === 0}
          className={`fixed left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300 ${
            currentIndex === 0
              ? "opacity-0 cursor-default"
              : "opacity-40 hover:opacity-100"
          }`}
          aria-label="Previous project"
        >
          <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => goToProject(currentIndex + 1)}
          disabled={currentIndex === projects.length - 1}
          className={`fixed right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300 ${
            currentIndex === projects.length - 1
              ? "opacity-0 cursor-default"
              : "opacity-40 hover:opacity-100"
          }`}
          aria-label="Next project"
        >
          <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Project Counter */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-1 bg-[#000000]"
                  : "w-2 h-1 bg-[#D1D1D1] hover:bg-[#999999]"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="fixed bottom-8 right-8 z-20 text-xs text-[#999999] tracking-wider">
          <span className="hidden md:inline">← → to navigate</span>
          <span className="md:hidden">swipe to explore</span>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-screen h-full snap-center flex items-center justify-center px-8 md:px-20 pt-24"
            >
              {/* Gallery Room */}
              <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-16 max-w-6xl w-full">

                {/* The Canvas - with custom frame */}
                <div className="flex-1 flex flex-col items-center">
                  <ArtworkCanvas project={project} index={index} />

                  {/* Canvas Label */}
                  <div className="mt-6 text-center">
                    <p className="text-xs tracking-[0.2em] text-[#999999] uppercase">
                      {project.year}
                    </p>
                  </div>
                </div>

                {/* The Plaque */}
                <div className="md:w-72 flex-shrink-0">
                  <div className="bg-white border border-[#E8E8E8] p-6 shadow-sm">
                    <h2 className="text-2xl font-serif text-[#000000] mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#666666] italic mb-4">
                      {project.tagline}
                    </p>
                    <div className="w-12 h-px bg-[#D1D1D1] mb-4" />
                    <p className="text-sm text-[#333333] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs text-[#999999] uppercase tracking-wider mb-2">
                        Medium
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-[#F5F5F5] text-[#666666]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          project.status === "Deployed" || project.status === "Live"
                            ? "bg-green-500"
                            : project.status === "Planning"
                            ? "bg-yellow-500"
                            : "bg-gray-400"
                        }`}
                      />
                      <span className="text-xs text-[#666666]">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {project.stats.length > 0 && (
                    <div className="mt-3 bg-[#FAFAFA] border border-[#E8E8E8] p-4">
                      <p className="text-xs text-[#999999] uppercase tracking-wider mb-2">
                        Notes
                      </p>
                      <div className="space-y-1">
                        {project.stats.map((stat, i) => (
                          <p key={i} className="text-xs text-[#666666]">
                            • {stat}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
