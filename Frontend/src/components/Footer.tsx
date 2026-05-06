export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary-foreground/10 mx-4 md:mx-8 rounded-b-[2.5rem]">
      <div className="container py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-wider opacity-60">
          © {new Date().getFullYear()} Lakshyan Alahari — All rights reserved
        </p>
        <p className="font-mono text-xs uppercase tracking-wider opacity-60">
          Crafted with <span className="serif text-primary">care</span> in India
        </p>
      </div>
    </footer>
  );
}
