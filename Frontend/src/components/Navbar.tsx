import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#what", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#career", label: "Career" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all`}
    >
      <nav
        className={`flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all border border-foreground/15 ${
          scrolled ? "bg-background/85 backdrop-blur-xl shadow-lg" : "bg-background/60 backdrop-blur"
        }`}
      >
        <a href="#home" className="font-display font-bold text-base tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Lakshyan<span className="serif text-foreground/50">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-wider font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:alahari.lakshyan@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm font-mono text-foreground/70 hover:text-accent transition-colors"
        >
          alahari.lakshyan@gmail.com
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-1" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 paper-card p-6 bg-background/95 backdrop-blur-xl"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-foreground hover:text-accent uppercase text-sm tracking-wider">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
