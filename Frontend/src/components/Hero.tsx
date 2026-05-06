import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Suspense, lazy } from "react";

const HeroBlob = lazy(() => import("./HeroScene"));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pb-16 pt-32 overflow-hidden grain">
      {/* Floating blob 3D */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] opacity-90 pointer-events-none">
        <Suspense fallback={null}>
          <HeroBlob />
        </Suspense>
      </div>

      {/* Pill top */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <span className="pill bg-background/70 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Available for new projects · 2026
          </span>
        </motion.div>

        <div className="text-center">
          <h2 className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/60 mb-6">
            Hello! I'm
          </h2>
          <h1 className="font-display font-black leading-[0.85] tracking-tight text-[18vw] md:text-[14vw] lg:text-[11rem] uppercase">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              LAKSHYAN
            </motion.div>
            <br />
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="serif inline-block text-stroke"
            >
              alahari
            </motion.span>
          </h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6 items-end"
        >
          <div className="md:col-span-1">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50 mb-2">
              [ A creative ]
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Full Stack <span className="serif text-accent">developer</span> & UI tinkerer.
            </h3>
          </div>

          <div className="md:col-start-3 md:text-right">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-wider">Scroll to explore</span>
              <span className="w-10 h-10 rounded-full border border-foreground/30 group-hover:border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                <ArrowDown size={16} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
