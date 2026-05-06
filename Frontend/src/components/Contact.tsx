import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "UMj55DorNyy-sC8Tk";
const EMAILJS_SERVICE_ID = "service_p4k8tjw";
const EMAILJS_TEMPLATE_ID = "template_t0q0h77";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: result.data.name,
        reply_to: result.data.email,
        from_email: result.data.email,
        subject: result.data.subject,
        message: result.data.message,
        name: result.data.name,
        email: result.data.email,
        to_email: "alahari.lakshyan@gmail.com",
      });

      console.log("EmailJS response:", response);
      toast.success("Message received! I'll be in touch soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      const errObj = err as Record<string, unknown>;
      const msg = errObj?.text ? String(errObj.text) : err instanceof Error ? err.message : "Please try again.";
      toast.error(`Couldn't send: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-secondary text-secondary-foreground rounded-t-[2.5rem] mx-4 md:mx-8">
      <div className="container max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase mb-16"
        >
          Let's <span className="serif font-normal lowercase text-primary">create</span><br />something.
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider opacity-50 mb-2">Email</p>
              <a href="mailto:alahari.lakshyan@gmail.com" className="text-xl hover:text-primary transition-colors">
                alahari.lakshyan@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider opacity-50 mb-2">Phone</p>
              <a href="tel:+919959620900" className="text-xl hover:text-primary transition-colors">+91 9959 620 900</a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider opacity-50 mb-2">Location</p>
              <p className="text-xl">Nellore, India</p>
            </div>
            <div className="flex gap-3 pt-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/alaharilakshyan" },
                { icon: Github, href: "https://github.com/alaharilakshyan" },
                { icon: Twitter, href: "https://twitter.com/AlahariLakshyan" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-secondary-foreground/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="md:col-span-3 space-y-4">
            {(["name", "email", "subject"] as const).map((f) => (
              <div key={f}>
                <input
                  type={f === "email" ? "email" : "text"}
                  value={form[f]}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  placeholder={f === "name" ? "Your name" : f === "email" ? "your@email.com" : "Subject"}
                  maxLength={f === "subject" ? 150 : 255}
                  className={`w-full bg-transparent border-b py-4 text-lg placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors ${errors[f] ? "border-destructive" : "border-secondary-foreground/30"}`}
                />
                {errors[f] && <p className="text-xs text-destructive mt-1">{errors[f]}</p>}
              </div>
            ))}
            <div>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={4}
                maxLength={1000}
                className={`w-full bg-transparent border-b py-4 text-lg placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none ${errors.message ? "border-destructive" : "border-secondary-foreground/30"}`}
              />
              <div className="flex justify-between text-xs">
                <span className="text-destructive">{errors.message}</span>
                <span className="opacity-50 font-mono">{form.message.length}/1000</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 mt-6 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-lg hover:gap-5 transition-all disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
