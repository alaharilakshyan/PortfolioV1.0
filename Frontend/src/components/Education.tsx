import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    year: "2023 — 2027",
    degree: "B.Tech Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    score: "CGPA: 7.50",
  },
  {
    year: "2021 — 2023",
    degree: "Intermediate (MPC)",
    institution: "Narayana Intermediate College",
    location: "Nellore, Andhra Pradesh",
    score: "Percentage: 67.2%",
  },
  {
    year: "2020 — 2021",
    degree: "Secondary School (SSC)",
    institution: "Narayana High School",
    location: "Nellore, Andhra Pradesh",
    score: "CGPA: 10.0",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-36 bg-secondary text-secondary-foreground rounded-[2.5rem] mx-4 md:mx-8">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none uppercase">
            Edu<span className="serif font-normal lowercase text-primary">cation</span>
          </h2>
          <p className="font-mono text-sm uppercase tracking-wider text-secondary-foreground/50 max-w-xs">
            // Academic journey & milestones
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-16 border-l border-secondary-foreground/20">
          {education.map((ed, i) => (
            <motion.div
              key={ed.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative pb-14 last:pb-0 group"
            >
              <span className="absolute -left-[2.35rem] md:-left-[4.35rem] top-1 w-4 h-4 rounded-full bg-secondary-foreground group-hover:bg-primary group-hover:scale-150 transition-all flex items-center justify-center">
                <GraduationCap size={0} className="group-hover:hidden" />
              </span>
              <div className="flex flex-wrap justify-between gap-4 items-start mb-3">
                <div>
                  <h4 className="font-display font-bold text-2xl md:text-3xl">{ed.degree}</h4>
                  <p className="text-secondary-foreground/60 mt-1">{ed.institution}</p>
                  <p className="text-secondary-foreground/40 text-sm mt-0.5">{ed.location}</p>
                </div>
                <span className="font-display font-black text-2xl md:text-3xl text-primary">{ed.year}</span>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary-foreground/20 text-xs font-mono uppercase tracking-wider">
                <GraduationCap size={14} />
                {ed.score}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
