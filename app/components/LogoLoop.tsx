"use client";
import { useRef, useEffect, ReactNode } from "react";

interface Logo {
  name: string;
  icon?: ReactNode;
  color?: string;
  textColor?: string;
  label?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: "left" | "right";
}

export default function LogoLoop({
  logos,
  speed = 30,
  direction = "left"
}: LogoLoopProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerInner = scroller.querySelector(".scroller-inner") as HTMLElement;

    if (!scrollerInner) return;

    // Clone items for seamless loop
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });

    // Add animation
    scroller.setAttribute("data-animated", "true");
  }, []);

  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      ref={scrollerRef}
      className="scroller overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      data-direction={direction}
    >
      <div
        className="scroller-inner flex gap-8 py-4 w-max items-center"
        style={{
          animation: `scroll ${speed}s linear infinite`,
          animationDirection: animationDirection,
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 px-2"
          >
            <div
              className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              title={logo.name}
            >
              {logo.icon ? (
                logo.icon
              ) : (
                <div
                  className="w-full h-full rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: logo.color || "#333" }}
                >
                  <span
                    className="font-bold text-sm"
                    style={{ color: logo.textColor || "#FFFFFF" }}
                  >
                    {logo.name}
                  </span>
                </div>
              )}
            </div>
            {logo.label && (
              <span className="text-xs text-[#666666] whitespace-nowrap">
                {logo.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 16px));
          }
        }

        .scroller[data-animated="true"] .scroller-inner {
          animation: scroll ${speed}s linear infinite;
          animation-direction: ${animationDirection};
        }

        .scroller:hover .scroller-inner {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
