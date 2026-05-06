import { motion } from "framer-motion";

const items = [
  { year: "2025", role: "Frontend Developer Intern", company: "Unified Mentor Pvt. Ltd", desc: "Implementing responsive designs and integrating Firebase across production-grade dashboards." },
  { year: "2024", role: "Full Stack Web Developer Intern", company: "InternsElite Pvt. Ltd", desc: "Built responsive websites end-to-end and gained hands-on experience across the stack." },
  { year: "2023", role: "Junior Web Developer", company: "Leaders Of Today", desc: "Supporting website development and shipping new features for the community platform." },
];

export default function Career() {
  return (
    <section id="career" className="py-24 md:py-36">
      <div className="container max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-5xl md:text-7xl leading-[1.05] tracking-tight mb-16"
        >
          My career <span className="serif text-accent">&</span><br /> experience
        </motion.h2>

        <div className="relative pl-8 md:pl-16 border-l border-foreground/20">
          {items.map((it, i) => (
            <motion.div
              key={it.year + i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pb-12 last:pb-0 group"
            >
              <span className="absolute -left-[2.35rem] md:-left-[4.35rem] top-1 w-4 h-4 rounded-full bg-foreground group-hover:bg-accent group-hover:scale-150 transition-all" />
              <div className="flex flex-wrap justify-between gap-4 items-start mb-3">
                <div>
                  <h4 className="font-display font-bold text-2xl md:text-3xl">{it.role}</h4>
                  <p className="text-foreground/60 mt-1">{it.company}</p>
                </div>
                <span className="font-display font-black text-3xl md:text-4xl text-accent">{it.year}</span>
              </div>
              <p className="text-foreground/70 max-w-2xl">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
