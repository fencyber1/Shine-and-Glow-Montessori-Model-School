import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";

import { seoPage } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seoPage({
      title: "About Shine and Glow Montessori Model School in Tema, Ghana",
      description:
        "Meet the mission and values behind Shine and Glow Montessori Model School — a school (6 months to 10 years) at Community 25, Tema, Ghana where children grow in the values of life and the fear of God.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="A school should know your child — not just their name."
        intro="Shine and Glow Montessori Model School is a preschool at Community 25, HFC Estate on Wellington Link. You are setting your child's path bright by bringing him or her to Shine and Glow."
      />
      <Section
        eyebrow="Our motto"
        title="Child care specialists that unleash your child's full potential."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="font-serif text-2xl leading-relaxed">
            We believe children do their best learning when they feel secure enough to ask difficult
            questions, supported enough to try again, and inspired enough to care about the world
            beyond themselves.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Belonging before achievement",
              "Curiosity with discipline",
              "Character through service",
              "Opportunity for every learner",
            ].map((x) => (
              <div key={x} className="border-l-4 border-action bg-surface p-5 font-bold">
                {x}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section dark eyebrow="Our story" title="Rooted in community. Ready for the future.">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-paper/70">
              Shine and Glow Montessori Model School is a preschool at Community 25, HFC Estate on
              Wellington Link, Tema. Our priority is to impact the values of life and the fear of
              God into children as they grow — a warm community where every child is known, loved,
              and guided to shine.
            </p>
          </div>
          <div className="rounded-lg border border-paper/15 bg-paper/10 p-7">
            <p className="font-serif text-2xl">
              “Our promise is simple: high expectations, human warmth, and a place where every child
              can make meaningful progress.”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div
                className="grid size-16 shrink-0 place-items-center rounded-full bg-action text-xl font-black text-action-foreground"
                role="img"
                aria-label="Co-founder, Shine and Glow Montessori Model School"
              >
                C
              </div>
              <div>
                <p className="font-bold">Rev. Mrs Charity Addae</p>
                <p className="text-sm text-paper/60">
                  Co-Founder · Shine and Glow Montessori Model School
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
