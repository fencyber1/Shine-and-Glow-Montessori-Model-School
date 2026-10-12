import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/school-shared";
import { seoPage } from "@/lib/seo";
export const Route = createFileRoute("/team")({
  head: () =>
    seoPage({
      title: "Meet the Team — Shine and Glow Montessori Model School, Tema",
      description:
        "Meet Shine and Glow Montessori Model School's leadership and teaching team — dedicated Montessori educators at Community 25, Tema, Ghana.",
      path: "/team",
    }),
  component: Team,
});
function Team() {
  return (
    <main>
      <PageHero
        eyebrow="Meet the team"
        title="Trust begins with the people who show up every day."
        intro="Shine and Glow is led by co-founder Rev. Mrs Charity Addae, supported by caring trained teachers for ages 6 months to 6 years."
      />
      <Section eyebrow="Leadership" title="Led with experience.">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="Head of School, Shine and Glow — photo coming soon"
            >
              S
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Head of School</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Principal
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Our head leads Shine and Glow with a passion for Montessori education and the Ghana
                curriculum — guiding children from their first day as infants to graduation day in
                Preschool.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="Rev. Mrs Charity Addae, Co-Founder of Shine and Glow — photo coming soon"
            >
              C
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Rev. Mrs Charity Addae</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Co-Founder
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Rev. Mrs Charity Addae co-founded Shine and Glow with a simple vision — a school
                where every child is known, loved, and guided to shine, growing in the values of
                life and the fear of God.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="Shine and Glow teaching team — photo coming soon"
            >
              S
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Teaching Team</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Early-years educators
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Caring teachers in every class — from infant caregivers to preschool guides — who
                notice the whole child.
              </p>
            </div>
          </article>
        </div>
      </Section>
      <Section dark eyebrow="Our standard" title="Great teaching is personal.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Subject expertise that brings learning alive",
            "Pastoral attention that notices the whole child",
            "Ongoing development, reflection, and collaboration",
          ].map((x) => (
            <div key={x} className="rounded-lg border border-paper/15 bg-paper/10 p-6 font-bold">
              {x}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
