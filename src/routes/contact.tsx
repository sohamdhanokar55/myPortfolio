import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Check, Github, Instagram, Linkedin, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { AuroraBackground, CursorGlow, Reveal, ScrollProgress, SmoothScroll } from "@/components/effects";
import { Footer } from "@/components/Footer";
import { CURSOR, SOCIALS } from "@/constants/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Soham Dhanokar | Full Stack Developer" },
      {
        name: "description",
        content:
          "Get in touch with Soham Dhanokar for full-stack development work, internships, collaborations and speaking invitations.",
      },
      { property: "og:title", content: "Contact — Soham Dhanokar" },
      {
        property: "og:description",
        content: "Reach out for web development projects, collaborations and speaking invitations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const FIELDS = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "company", label: "Company", type: "text", required: false },
  { id: "subject", label: "Subject", type: "text", required: true },
] as const;

function ContactPage() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const validate = () => {
    const e: Errors = {};
    if (!values['name']?.trim()) e.name = "Please tell me your name";
    if (!values['email']?.trim()) e.email = "An email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values['email'])) e.email = "That email doesn't look right";
    if (!values['subject']?.trim()) e.subject = "Add a short subject";
    if (!values['message']?.trim() || values['message'].trim().length < 10)
      e.message = "Tell me a bit more (10+ characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setState("sending");
    setTimeout(() => setState("sent"), 1200);
  };

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <main className="relative min-h-screen overflow-hidden pt-28">
        <AuroraBackground dense />
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Back to portfolio
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.4em] text-primary">Contact</p>
                <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
                  Let's start a <span className="gradient-text">conversation.</span>
                </h1>
                <p className="mt-6 max-w-md text-muted-foreground">
                  Whether it's a product build, an internship opportunity, a research collaboration or
                  a speaking invite — I usually reply within a day.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-10 space-y-4">
                  {[
                    { Icon: Mail, label: "Email", value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
                    { Icon: Phone, label: "Phone", value: SOCIALS.phone, href: `tel:${SOCIALS.phone}` },
                    { Icon: MapPin, label: "Location", value: SOCIALS.location, href: undefined },
                    { Icon: Linkedin, label: "LinkedIn", value: "in/soham-dhanokar", href: SOCIALS.linkedin },
                    { Icon: Github, label: "GitHub", value: "@sohamdhanokar", href: SOCIALS.github },
                    { Icon: Instagram, label: "Instagram", value: "@soham.dhanokar", href: SOCIALS.instagram },
                  ].map(({ Icon, label, value, href }) => (
                    <li key={label}>
                      <a
                        href={href ?? "#"}
                        {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                        data-cursor={CURSOR.social}
                        className="glass-card flex items-center gap-4 p-4"
                      >
                        <span className="flex size-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/10">
                          <Icon className="size-4 text-primary" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                            {label}
                          </span>
                          <span className="block text-sm">{value}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="glass-card relative p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  {state === "sent" ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 14 }}
                        className="flex size-20 items-center justify-center rounded-full"
                        style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
                      >
                        <Check className="size-9 text-primary-foreground" />
                      </motion.span>
                      <h2 className="mt-8 font-display text-2xl font-bold">Message sent</h2>
                      <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                        Thanks for reaching out — I'll get back to you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setValues({});
                          setState("idle");
                        }}
                        className="mt-8 rounded-full border border-border px-6 py-2.5 text-sm transition-colors hover:text-primary"
                      >
                        Send another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={onSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      {FIELDS.map((f) => (
                        <div key={f.id}>
                          <label htmlFor={f.id} className="text-xs uppercase tracking-widest text-muted-foreground">
                            {f.label}
                            {f.required && <span className="text-primary"> *</span>}
                          </label>
                          <input
                            id={f.id}
                            name={f.id}
                            type={f.type}
                            value={values[f.id] ?? ""}
                            aria-invalid={Boolean(errors[f.id as keyof Errors])}
                            aria-describedby={errors[f.id as keyof Errors] ? `${f.id}-error` : undefined}
                            onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
                            className="mt-2 w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-ring/40"
                          />
                          {errors[f.id as keyof Errors] && (
                            <motion.p
                              id={`${f.id}-error`}
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-1.5 text-xs text-destructive"
                            >
                              {errors[f.id as keyof Errors]}
                            </motion.p>
                          )}
                        </div>
                      ))}

                      <div>
                        <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                          Message<span className="text-primary"> *</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={values['message'] ?? ""}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                          className="mt-2 w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-ring/40"
                        />
                        {errors.message && (
                          <motion.p
                            id="message-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-xs text-destructive"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={state === "sending"}
                        data-cursor={CURSOR.contact}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
                        style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
                      >
                        {state === "sending" ? (
                          <>
                            <Loader2 className="size-4 animate-spin" /> Sending
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
