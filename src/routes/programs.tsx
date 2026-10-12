import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";
import { StageTabs, TabsContent, type StageTab } from "@/components/stage-tabs";

import { seoPage } from "@/lib/seo";

export const Route = createFileRoute("/programs")({
  head: () =>
    seoPage({
      title: "Programs & Curriculum — Ages 6 Months to 10 Years | Shine and Glow",
      description:
        "Explore Shine and Glow Montessori Model School's Infant, Nursery, Preschool and Primary programs at Community 25, Tema, Ghana — Montessori learning for children aged 6 months to 10 years.",
      path: "/programs",
    }),
  component: Programs,
});

const stages = [
  [
    "Infant",
    "Gentle beginnings · from 6 months",
    [
      "Warm, attentive care",
      "Sensory play and discovery",
      "Music, rhymes, and movement",
      "Outdoor air and gentle routines",
    ],
  ],
  [
    "Nursery",
    "Confident little explorers",
    [
      "Phonics and early language",
      "Numbers through play",
      "Art, colour, and creativity",
      "Sharing, manners, and independence",
    ],
  ],
  [
    "Preschool",
    "Ready for primary school",
    [
      "Reading and writing readiness",
      "Early mathematics",
      "Nature and the world around us",
      "Confidence, focus, and school habits",
    ],
  ],
  [
    "Primary",
    "Strong foundations · up to 10 years",
    [
      "English and Mathematics foundations",
      "Science and ICT discovery",
      "Reading fluency and good study habits",
      "Leadership, service and good character",
    ],
  ],
];

function Programs() {
  return (
    <main>
      <PageHero
        eyebrow="Programs & curriculum"
        title="Learning that grows with your child."
        intro="Shine and Glow Montessori Model School gives children aged 6 months to 10 years a bright start — hands-on Montessori learning, strong foundations in language and number, and the values of life and the fear of God."
      />
      <Section eyebrow="Learning pathways" title="A gentle journey from 6 months to 10 years.">
        <StageTabs
          tabs={
            [
              { value: "infant", label: "Infant" },
              { value: "nursery", label: "Nursery" },
              { value: "preschool", label: "Preschool" },
              { value: "primary", label: "Primary" },
            ] satisfies Array<StageTab>
          }
        >
          {[
            { value: "infant", indexes: [0] },
            { value: "nursery", indexes: [1] },
            { value: "preschool", indexes: [2] },
            { value: "primary", indexes: [3] },
          ].map((group) => (
            <TabsContent key={group.value} value={group.value} className="mt-8">
              <div className="grid gap-5 md:grid-cols-2">
                {group.indexes.map((i) => {
                  const [name, ages, items] = stages[i];
                  return (
                    <article
                      key={name as string}
                      className="rounded-lg border border-ink/10 bg-surface p-6"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-action">
                        {name as string}
                      </p>
                      <h2 className="mt-2 text-2xl font-black">{ages as string}</h2>
                      <ul className="mt-5 grid gap-2 text-sm text-ink-soft">
                        {(items as string[]).map((item) => (
                          <li key={item}>→ {item}</li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </StageTabs>
      </Section>
      <Section eyebrow="Our curriculum" title="Montessori foundations, Ghanaian heart.">
        <p className="max-w-3xl leading-relaxed text-ink-soft">
          In Infant, Nursery and Preschool, children learn through practical life, sensorial work,
          language and mathematics — every step through play and discovery, wrapped in the values of
          life and the fear of God.
        </p>
        <h3 className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-action">
          What children learn
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["Practical life", "Care of self and environment, grace and courtesy."],
            ["Sensorial & culture", "Exploring the senses, nature and the world."],
            ["Language & number", "Phonics, reading readiness and early mathematics."],
          ].map(([name, text], i) => (
            <article key={name} className="rounded-lg border border-ink/10 bg-surface p-6">
              <p className="text-3xl font-black text-trust">{i + 1}</p>
              <h4 className="mt-3 text-lg font-extrabold">{name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-action">
          Character & faith
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            [
              "Values for life",
              "Manners, kindness, sharing, and respect — caught as much as taught.",
            ],
            [
              "Fear of God",
              "Simple Bible truths, prayer, and gratitude woven into every school day.",
            ],
          ].map(([name, text], i) => (
            <article key={name} className="rounded-lg border border-ink/10 bg-surface p-6">
              <p className="text-3xl font-black text-trust">{i + 4}</p>
              <h4 className="mt-3 text-lg font-extrabold">{name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section dark eyebrow="Beyond lessons" title="Every child needs more than one way to shine.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Create", "Art, music, dance, storytelling, and creative play."],
            ["Play", "Sports, clubs, movement, and joyful exercise."],
            ["Grow", "Manners, leadership, service, and kind habits."],
          ].map(([h, p]) => (
            <article key={h} className="rounded-lg border border-paper/15 bg-paper/10 p-6">
              <h3 className="text-xl font-black">{h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{p}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
