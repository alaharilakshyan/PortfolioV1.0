import { motion } from "framer-motion";
import { Code2, Palette } from "lucide-react";

const blocks = [
  {
    icon: Code2,
    title: "Develop",
    description: "End-to-end web apps with attention to performance, accessibility and clean architecture.",
    tools: ["React", "TypeScript", "Node.js", "Three.js", "Tailwind", "Next.js", "MongoDB", "PHP"],
  },
  {
    icon: Palette,
    title: "Design",
    description: "Editorial layouts, motion-rich interfaces and design systems that translate cleanly to code.",
    tools: ["Figma", "Framer Motion", "GSAP", "UI Systems", "Prototyping", "Design Tokens"],
  },
];

export default function WhatIDo() {
  return (
    <section id="what" className="py-24 md:py-36 bg-secondary text-secondary-foreground rounded-[2.5rem] mx-4 md:mx-8">
      <div className="container max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-none uppercase mb-16"
        >
          W<span className="serif font-normal lowercase">hat</span>
          <br />
          I <span className="text-primary">Do</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-secondary-foreground/15 rounded-3xl p-8 group hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <b.icon size={28} />
                <span className="font-mono text-xs opacity-50">0{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-4xl mb-4 uppercase">{b.title}</h3>
              <p className="text-secondary-foreground/70 group-hover:text-primary-foreground/80 mb-8 max-w-md">
                {b.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {b.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full border border-secondary-foreground/20 group-hover:border-primary-foreground/30 text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
