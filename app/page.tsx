import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F5F1E8] flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl">

        {/* Main Headline */}
        <div className="mb-8">
          <h2 className="text-6xl md:text-7xl font-bold text-[#2B2B2B] leading-tight font-serif">
            code '25
          </h2>
          <h2 className="text-6xl md:text-7xl font-bold text-[#2B2B2B] leading-tight font-serif">
            on blank canvas
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-[#2B2B2B] mb-8 opacity-60">
          a showcase by noufah • compsci student
        </p>

        {/* Quote */}
        <blockquote className="text-xl text-[#2B2B2B] leading-relaxed mb-12 max-w-2xl">
          "There's room to express grief, hope, memory and the restless
          feeling of being caught between worlds. Except here, those
          worlds are data and dreams, accessibility and algorithms."
        </blockquote>

        {/* Scroll Indicator */}
        <p className="text-sm text-[#2B2B2B] opacity-40">
          scroll down
        </p>
      </div>
    </main>
    </>
  );
}