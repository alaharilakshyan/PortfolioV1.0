import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Full Stack Web Development Intern",
    issuer: "InternsElite Pvt. Ltd",
    date: "August 2024",
    description: "Completed intensive training in full stack web development covering HTML, CSS, JavaScript, React, Node.js, and MongoDB with hands-on projects.",
    link: "https://www.linkedin.com/in/alaharilakshyan/details/certifications/",
  },
  {
    title: "Frontend Development Intern",
    issuer: "Unified Mentor Pvt. Ltd",
    date: "November 2025",
    description: "Mastered advanced frontend concepts including React hooks, state management, performance optimization, and responsive design patterns.",
    link: "https://www.linkedin.com/in/alaharilakshyan/details/certifications/",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "December 2023",
    description: "Earned certification for completing responsive web design challenges including HTML, CSS, and JavaScript with strong problem-solving skills.",
    link: "https://www.freecodecamp.org/certification/fcc39f5ac83-56e6-4fd3-96d2-e453f9650889/responsive-web-design",
  },
  {
    title: "Deep Learning (NPTEL)",
    issuer: "NPTEL — IIT",
    date: "April 2025",
    description: "Completed deep learning coursework covering neural networks, natural language processing, and modern ML architectures.",
    link: "https://www.linkedin.com/in/alaharilakshyan/details/certifications/",
  },
  {
    title: "Java Programming",
    issuer: "LPU",
    date: "April 2025",
    description: "Earned certification for Java programming covering object-oriented programming, data structures, and problem-solving techniques.",
    link: "https://www.linkedin.com/in/alaharilakshyan/details/certifications/",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-36">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none uppercase">
            Certi<span className="serif font-normal lowercase text-accent">ficates</span>
          </h2>
          <p className="font-mono text-sm uppercase tracking-wider text-foreground/50 max-w-xs">
            // Professional certifications & achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group paper-card p-7 hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Award size={22} />
                </div>
                <div className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                  <ExternalLink size={16} />
                </div>
              </div>

              <h3 className="font-display font-bold text-xl mb-2">{cert.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">{cert.issuer}</span>
                <span className="text-foreground/30">·</span>
                <span className="font-mono text-xs text-foreground/50">{cert.date}</span>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed flex-1">{cert.description}</p>

              <div className="mt-6 pt-4 border-t border-foreground/10">
                <span className="font-mono text-xs uppercase tracking-wider text-foreground/40 group-hover:text-accent transition-colors flex items-center gap-2">
                  View certificate <ExternalLink size={12} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
