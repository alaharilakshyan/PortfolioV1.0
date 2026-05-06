import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

const items = ["React", "TypeScript", "Three.js", "Node.js", "Tailwind", "Framer Motion", "Firebase", "MongoDB", "Vue", "Next.js"];

export default function MarqueeStrip() {
  return (
    <div className="bg-secondary text-secondary-foreground py-6 border-y border-foreground/10 -rotate-1 my-8">
      <Marquee speed={50} gradient={false}>
        {[...items, ...items].map((it, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-6 font-display text-3xl md:text-5xl font-bold uppercase">
            {it}
            <Star size={22} className="text-primary fill-primary" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
