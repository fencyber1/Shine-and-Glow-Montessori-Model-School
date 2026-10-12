export const SITE_URL = "https://sims-international.vercel.app";
export const SITE_NAME = "Shine and Glow Montessori Model School";
export const OG_IMAGE = `${SITE_URL}/og-image.jpeg`;
export const OG_IMAGE_WIDTH = 1280;
export const OG_IMAGE_HEIGHT = 672;
export const PHONE_MAIN = "+233246563922";
export const PHONE_DISPLAY = "024 656 3922";
export const PHONE_SECONDARY = "+233244109060";
export const PHONE_SECONDARY_DISPLAY = "024 410 9060";
export const WHATSAPP_URL = "https://wa.me/233246563922";
export const SITE_EMAIL = "info@shineandglowmontessori.site";
export const INSTAGRAM_URL = "https://www.instagram.com/shine_glow_montessori/";
export const MOTTO = "Child care specialists that unleash your child's full potential";
export const ADDRESS_SHORT =
  "HFC Estate, Community 25 (INST/C25/H/2 Nana Otu Road), Tema, Greater Accra Region, Ghana";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Shine+and+Glow+Montessori+Model+School+Tema";
export const HOURS_SHORT = "Mon–Fri · 6:00am–5:00pm · Sat–Sun Closed";

export function pageUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function seoPage(opts: { title: string; description: string; path: string }) {
  const url = pageUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
      { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "Shine and Glow Montessori Model School" },
      { property: "og:locale", content: "en_GH" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "theme-color", content: "#c21f3c" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SITE_NAME,
  slogan: MOTTO,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  email: SITE_EMAIL,
  telephone: PHONE_MAIN,
  address: {
    "@type": "PostalAddress",
    streetAddress: "HFC Estate, Community 25 (INST/C25/H/2 Nana Otu Road)",
    addressLocality: "Tema",
    addressRegion: "Greater Accra Region",
    addressCountry: "GH",
  },
  location: [
    {
      "@type": "Place",
      name: "Shine and Glow Montessori Model School — Community 25, Tema",
      address: {
        "@type": "PostalAddress",
        streetAddress: "HFC Estate, Community 25 (INST/C25/H/2 Nana Otu Road)",
        addressLocality: "Tema",
        addressRegion: "Greater Accra Region",
        addressCountry: "GH",
      },
      telephone: PHONE_MAIN,
    },
  ],
  openingHours: "Mo-Fr 06:00-17:00",
  sameAs: [INSTAGRAM_URL],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What ages does Shine and Glow Montessori Model School accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We welcome children from 6 months to 6 years — Infant, Nursery and Preschool — call 024 656 3922 and we will help with class placement.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for admission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admission forms are picked up from the school premises. Submit the completed form with your child's birth certificate and health/immunization cards, then book a school visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I tour the campus before enrolling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Appointments may be booked by phone — call 024 656 3922 — and we will arrange a weekday visit.",
      },
    },
    {
      "@type": "Question",
      name: "What are the school hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "School runs Monday to Friday, 6:00 a.m. to 5:00 p.m. Saturday and Sunday are closed.",
      },
    },
    {
      "@type": "Question",
      name: "How are fees structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registration is paid once per child, and tuition is charged each term. The school year has three terms. Contact the administrator for the current fee schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Shine and Glow Montessori Model School located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are at HFC Estate, Community 25 (INST/C25/H/2 Nana Otu Road), Tema, Greater Accra Region, Ghana.",
      },
    },
  ],
};

const breadcrumbLabels: Record<string, string> = {
  "/about": "About",
  "/programs": "Programs & Curriculum",
  "/admissions": "Admissions",
  "/campus": "Campus & Facilities",
  "/team": "Meet the Team",
  "/gallery": "Photo Gallery",
  "/tour": "School Tour",
  "/contact": "Contact Admissions",
};

export function breadcrumbSchema(pathname: string) {
  const label = breadcrumbLabels[pathname];
  if (!label) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
      { "@type": "ListItem", position: 2, name: label, item: pageUrl(pathname) },
    ],
  };
}
