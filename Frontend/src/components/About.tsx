import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pill mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-5xl"
        >
          I build <span className="serif text-accent">delightful</span> web experiences that feel as fast and clean as they look — from pixel-perfect UI to <span className="serif">robust</span> backends.
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { num: "02+", label: "Years coding for the web" },
            { num: "05+", label: "Shipped projects" },
            { num: "05+", label: "Industry certifications" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="paper-card p-8"
            >
              <div className="font-display font-black text-6xl md:text-7xl tracking-tight">
                {s.num}
              </div>
              <p className="mt-3 text-foreground/60 font-mono text-xs uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
