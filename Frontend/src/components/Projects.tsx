import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "El Shack Orders",
    category: "Food Ordering",
    tools: "React · TypeScript · Tailwind · Vite",
    color: "bg-[#d4ff3a]",
    live: "https://el-shack.vercel.app/",
    github: "https://github.com/alaharilakshyan/el-shack-orders",
  },
  {
    num: "02",
    title: "Posture AI",
    category: "Computer Vision",
    tools: "HTML · CSS · JavaScript · AI/ML",
    color: "bg-[#ff6b3a]",
    live: "https://alaharilakshyan.github.io/Posture_AI/",
    github: "https://github.com/alaharilakshyan/Posture_AI",
  },
  {
    num: "03",
    title: "Talk Time",
    category: "Realtime Chat",
    tools: "React · Node.js · MongoDB · Socket.io",
    color: "bg-[#f5e6d3]",
    live: "https://talk-time-app.vercel.app/",
    github: "https://github.com/alaharilakshyan/talk-time-app",
  },
  {
    num: "04",
    title: "Vibrance Beats",
    category: "Music Streaming",
    tools: "React · Node.js · MongoDB",
    color: "bg-[#e8c5ff]",
    live: "https://vibrance-beats.vercel.app/",
    github: "https://github.com/alaharilakshyan/vibrance-beats",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          <h2 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
            My <span className="serif font-normal lowercase text-accent">work</span>
          </h2>
          <p className="font-mono text-sm uppercase tracking-wider text-foreground/50 max-w-xs">
            // Selected projects from the past two years
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="group block paper-card overflow-hidden hover:-translate-y-2 transition-transform duration-500"
            >
              <a href={p.live} target="_blank" rel="noreferrer">
                <div className={`relative h-72 ${p.color} overflow-hidden flex items-center justify-center`}>
                  <span className="font-display font-black text-[10rem] text-foreground/10 leading-none select-none group-hover:scale-110 transition-transform duration-700">
                    {p.num}
                  </span>
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>
              <div className="p-7 flex justify-between items-start gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground/50 mb-2">{p.category}</p>
                  <h3 className="font-display font-bold text-3xl">{p.title}</h3>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">Tools</p>
                  <p className="text-sm text-right">{p.tools}</p>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground/60 hover:text-accent transition-colors mt-1"
                  >
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
