import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, ShieldCheck, Users } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ContactForm, Section } from "@/components/school-shared";
import { JsonLd, seoPage, schoolSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoPage({
      title: "Shine and Glow Montessori Model School, Tema | Ages 6 Months to 6 Years",
      description:
        "Shine and Glow Montessori Model School, Community 25, Tema — Infant, Nursery and Preschool. Montessori learning for children aged 6 months to 6 years.",
      path: "/",
    }),
  component: Index,
});

const HERO_VERBS = ["Soar", "Lead", "Thrive", "Shine"] as const;

function RotatingHeroVerb() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_VERBS.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <span className="sr-only">Soar</span>
      <span key={HERO_VERBS[index]} aria-hidden="true" className="animate-word-in">
        {HERO_VERBS[index]}
      </span>
    </>
  );
}

function Index() {
  return (
    <main>
      <JsonLd data={schoolSchema} />
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute -left-24 -top-24 size-96 rounded-full bg-trust/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:py-40">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-paper/90">
            <span className="h-px w-10 bg-action" /> Montessori Preschool in Ghana · Community 25 ·
            Tema
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
            Learn. Grow.{" "}
            <span className="font-serif font-medium italic text-soar [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
              <RotatingHeroVerb /> together.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">
            At Shine and Glow, we set your child&apos;s path bright. Our priority is to impact the
            values of life and the fear of God into children as they grow — child care specialists
            that unleash your child&apos;s full potential.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-11 rounded-none bg-action text-action-foreground hover:bg-action/90"
            >
              <Link to="/contact">
                Contact Admissions <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-none border-paper/20 bg-paper/10 text-paper hover:bg-paper/20 hover:text-paper"
            >
              <Link to="/programs">Explore programs</Link>
            </Button>
          </div>
        </div>
      </section>
      <Section
        eyebrow="Why Shine and Glow"
        title="The confidence parents look for. The opportunity children deserve."
      >
        <div className="grid gap-5 md:grid-cols-4">
          {[
            [
              BookOpen,
              "Ambitious learning",
              "A curriculum that builds mastery, curiosity, and independent thought.",
            ],
            [
              Users,
              "Known personally",
              "Small classes and attentive teachers help every child feel seen.",
            ],
            [
              ShieldCheck,
              "Safe & supported",
              "Pastoral care and clear safeguarding shape every school day.",
            ],
            [
              Award,
              "Beyond the classroom",
              "Arts, sport, leadership, and service reveal new strengths.",
            ],
          ].map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof BookOpen;
            return (
              <article
                key={String(title)}
                className="rounded-lg border border-ink/10 bg-surface p-6"
              >
                <ItemIcon className="size-6 text-action" />
                <h3 className="mt-4 text-lg font-extrabold">{String(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{String(text)}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 border-l-4 border-action bg-surface p-6 sm:p-8">
          <h3 className="text-xl font-black sm:text-2xl">
            Child care specialists that unleash your child&apos;s full potential
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">
            At Shine and Glow Montessori Model School, our promise shapes every school day — from a
            child&apos;s first steps as an infant to graduation day in Preschool.
          </p>
        </div>
      </Section>
      <Section
        eyebrow="Montessori education in Ghana"
        title="What a great preschool in Tema looks like."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-ink-soft">
            <p>
              Choosing a school in Ghana is one of the most important decisions a family makes. The
              years from 6 months to 6 years shape how a child learns, relates to others, and sees
              themselves. At Shine and Glow Montessori Model School, we walk that whole journey with
              your child.
            </p>
            <p>
              Our school follows the Montessori approach — practical life, sensorial learning, and
              self-directed discovery — building strong foundations in language and number, and
              character rooted in the values of life and the fear of God.
            </p>
            <p>
              With a warm and homely environment at Community 25, Tema, and teachers who genuinely
              care, Shine and Glow gives your child the strongest possible start — and gives you
              complete peace of mind.
            </p>
            <Button asChild variant="link" className="mt-2 px-0 text-trust">
              <Link to="/programs">
                Explore our programs <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Montessori learning through play",
              "Small, attentive classes",
              "Community 25, Tema",
              "Safe & homely environment",
            ].map((x) => (
              <div key={x} className="border-l-4 border-action bg-surface p-5 font-bold">
                {x}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section eyebrow="Academic programs" title="Three stages, one promise: children who thrive.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Infant",
              "Gentle beginnings",
              "Warm care, sensory play, music, and gentle routines for our youngest.",
            ],
            [
              "Nursery",
              "Confident little explorers",
              "Phonics, numbers through play, art, and growing independence.",
            ],
            [
              "Preschool",
              "Ready for primary school",
              "Reading and writing readiness, early mathematics, and sound moral training.",
            ],
          ].map(([name, ages, text]) => (
            <article
              key={name}
              className="relative overflow-hidden rounded-lg border border-ink/10 bg-surface p-6"
            >
              <div className="absolute -right-10 -top-10 size-28 -skew-x-12 bg-trust/10" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-trust">{name}</p>
              <h3 className="mt-3 text-xl font-black">{ages}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </div>
        <Button asChild variant="link" className="mt-5 px-0 text-trust">
          <Link to="/programs">
            View full curriculum <ArrowRight />
          </Link>
        </Button>
      </Section>
      <Section dark eyebrow="Campus life" title="A campus that feels like home, built for growth.">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="skew-x-3 overflow-hidden rounded-xl border border-paper/20 bg-paper/10 p-2">
            <div className="grid aspect-[4/3] w-full place-items-center bg-paper/5 text-center">
              <p className="max-w-xs text-sm text-paper/60">
                Campus photo coming soon — add your Shine and Glow pictures to the gallery.
              </p>
            </div>
          </div>
          <div>
            <Button asChild className="mt-6 rounded-none bg-action text-action-foreground">
              <Link to="/campus">
                Explore campus <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      <section className="relative overflow-hidden bg-ink py-16 text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-action">Admissions</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Ready to picture your child at Shine and Glow?
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-paper/70">
              Tell us what matters to your family. An admissions adviser will help you understand
              the next step.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-paper/75">
              <li>✓ Personal campus tour</li>
              <li>✓ Clear application guidance</li>
              <li>✓ Fee and support conversation</li>
            </ul>
          </div>
          <ContactForm compact />
        </div>
      </section>
    </main>
  );
}
