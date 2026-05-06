import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    name: "Frontend",
    color: "from-primary to-cyan-300",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Angular", "Tailwind", "TypeScript"],
  },
  {
    name: "Backend & DB",
    color: "from-secondary to-pink-300",
    skills: ["Node.js", "PHP", "MySQL", "MongoDB", "REST APIs", "Express"],
  },
  {
    name: "Tools",
    color: "from-accent to-yellow-200",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Vite", "Responsive Design"],
  },
  {
    name: "Emerging",
    color: "from-primary via-secondary to-accent",
    skills: ["WebGL", "Three.js", "GSAP", "Firebase", "Framer Motion"],
  },
];

export default function Skills() {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...categories.map((c) => c.name)];
  const visible = active === "All" ? categories : categories.filter((c) => c.name === active);

  return (
    <section id="skills" className="py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary mb-3">// 02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            My <span className="text-gradient-accent">technical toolkit</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "glass hover:border-primary/50 text-muted-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((cat, i) => (
            <motion.div
              key={cat.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass-strong rounded-2xl p-6 hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${cat.color} mb-5`}>
                <h3 className="font-display font-bold text-background text-sm">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, idx) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground/90 hover:border-primary hover:text-primary hover:scale-105 transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
