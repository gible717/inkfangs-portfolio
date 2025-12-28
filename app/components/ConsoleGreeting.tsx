"use client";
import { useEffect } from "react";

export default function ConsoleGreeting() {
  useEffect(() => {
    // Console styling
    const styles = {
      title: "color: #000000; font-size: 24px; font-weight: bold; font-family: Georgia, serif;",
      subtitle: "color: #666666; font-size: 14px; font-style: italic;",
      normal: "color: #000000; font-size: 13px; line-height: 1.6;",
      highlight: "color: #3A4F5B; font-weight: bold;",
      code: "color: #535353; background: #F5F5F5; padding: 2px 6px; border-radius: 3px; font-family: monospace;",
    };

    console.clear();
    console.log("%c👋 Hi there, curious developer!", styles.title);
    console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", styles.subtitle);
    console.log("");
    console.log(
      "%cYou found the secret message! Welcome to my portfolio's console.",
      styles.normal
    );
    console.log("");
    console.log(
      "%cThis entire site was built from scratch by Noufah Abdullah.",
      styles.normal
    );
    console.log("%cNo templates. No WordPress. No Squarespace.", styles.normal);
    console.log("%cJust Next.js, React Three Fiber, TypeScript, and determination.", styles.normal);
    console.log("");
    console.log("%c🛠️ Tech Stack:", styles.highlight);
    console.log("%c  • Next.js 14 (App Router)", styles.normal);
    console.log("%c  • TypeScript", styles.normal);
    console.log("%c  • React Three Fiber + Rapier (for 3D physics)", styles.normal);
    console.log("%c  • Tailwind CSS", styles.normal);
    console.log("%c  • Custom API routes (guestbook)", styles.normal);
    console.log("%c  • react-type-animation", styles.normal);
    console.log("");
    console.log("%c📊 Stats:", styles.highlight);
    console.log("%c  • 3,000+ lines of code written", styles.normal);
    console.log("%c  • 12+ custom components built", styles.normal);
    console.log("%c  • 5 editorial articles published", styles.normal);
    console.log("%c  • 0 templates used", styles.normal);
    console.log("%c  • 100% built by me", styles.normal);
    console.log("");
    console.log("%c🎨 Features I'm Proud Of:", styles.highlight);
    console.log("%c  • 3D interactive lanyard with physics simulation", styles.normal);
    console.log("%c  • Custom guestbook with API routes", styles.normal);
    console.log("%c  • Newspaper-inspired editorial blog", styles.normal);
    console.log("%c  • Accessibility-first design (WCAG AA compliant)", styles.normal);
    console.log("%c  • Responsive across all devices", styles.normal);
    console.log("");
    console.log("%c💡 Inspired by:", styles.highlight);
    console.log("%c  • Hindia's \"Doves '25 on Blank Canvas\" aesthetic", styles.normal);
    console.log("%c  • Contemplative, editorial design", styles.normal);
    console.log("%c  • Question-driven philosophy over feature lists", styles.normal);
    console.log("");
    console.log("%c🔗 Want to see how it's built?", styles.highlight);
    console.log(
      "%c  GitHub: %cgithub.com/inkfangs/portfolio %c(coming soon)",
      styles.normal,
      styles.code,
      styles.subtitle
    );
    console.log("");
    console.log("%c📬 Let's work together:", styles.highlight);
    console.log("%c  Email: noufah.abdullah@example.com", styles.normal);
    console.log("%c  LinkedIn: linkedin.com/in/noufah-abdullah", styles.normal);
    console.log("");
    console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", styles.subtitle);
    console.log(
      "%c\"Code is poetry that computers can understand, but it should be poetry that humans can feel.\"",
      styles.subtitle
    );
    console.log("%c— Noufah, 2025", styles.subtitle);
    console.log("");
  }, []);

  return null; // This component doesn't render anything
}
