'use client';
import { TypeAnimation } from 'react-type-animation';

export default function TypingQuotes() {
  return (
    <blockquote className="text-xl text-[#666666] leading-relaxed mb-12 max-w-3xl min-h-[120px] font-bold italic">
      <TypeAnimation
        sequence={[
          // Quote 1
          "There's room to express grief, hope, memory and the restless feeling of being caught between worlds. Except here, those worlds are data and dreams, accessibility and algorithms.",
          6000, // Pause for 6 seconds

          // Quote 2
          "Every function is a confession. Every database, a declaration. Every interface, an invitation to be seen.",
          6000,

          // Quote 3
          "Technology should serve people, not gatekeep them. Code that excludes isn't innovative, it's incomplete.",
          6000,

          // Quote 4
          "I learned to build systems. Now I want to build spaces where people especially the overlooked, can thrive.",
          6000,

          // Quote 5
          "Algorithms can't feel grief. But they can honor it. That's the difference between code and care.",
          6000,

          // Quote 6
          "Code is poetry computers understand. But it should be poetry humans can feel.",
          6000,
        ]}
        wrapper="span"
        speed={50} // Typing speed (1-99, higher is faster)
        deletionSpeed={70} // Deletion speed
        style={{ display: 'inline-block' }}
        repeat={Infinity}
        cursor={true}
        omitDeletionAnimation={false}
      />
    </blockquote>
  );
}
