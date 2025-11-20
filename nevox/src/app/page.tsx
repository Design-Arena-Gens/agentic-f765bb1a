const services = [
  {
    title: "Content Creation",
    description:
      "Signature content systems engineered to dominate feeds and stay top-of-mind.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent">
        <path
          d="M3 5h18M7 3v4M17 3v4M5 9h14l-1 11H6L5 9Zm7 3v6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Script Writing",
    description:
      "Authority-first narratives crafted to keep viewers locked in until the final CTA.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent">
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3H18a2 2 0 0 1 2 2v14l-4-3-4 3-4-3-4 3V5.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Video Editing",
    description:
      "Cinematic editing suites with pace, polish, and premium animation cues.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent">
        <path
          d="M4 7h12v10H4zM16 9l4-2v10l-4-2"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Thumbnail Design",
    description:
      "Scroll-stopping creative that translates authority into instant clicks.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent">
        <path
          d="M4 5h16v14H4zM8 5v14M4 11h16"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Faceless Content",
    description:
      "High-retention faceless pillars built to scale channels without personal exposure.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent">
        <path
          d="M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm6 12.5c0-2.485-2.686-4.5-6-4.5s-6 2.015-6 4.5"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Strategy & Distribution",
    description:
      "Campaign architecture and placement that amplifies every asset across platforms.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent">
        <path
          d="M4 12h16M12 4v16M5 5l14 14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "YouTuber · Finance & Wealth",
    quote:
      "Nevox rebuilt our long-form flow from the ground up. Retention jumped 41% and we now close sponsorships in half the time.",
    metric: "41% retention lift",
  },
  {
    name: "Diya Kapoor",
    title: "Founder · Scaling Souls Coaching",
    quote:
      "Their scripts sound exactly like me—only sharper. We booked 123 high-ticket consults in 6 weeks with the new content system.",
    metric: "123 consults in 6 weeks",
  },
  {
    name: "Rohan Sethi",
    title: "Host · Product POV Podcast",
    quote:
      "Every thumbnail, hook, and edit feels like a Netflix trailer. Episode downloads have doubled and brand pitches now seek us out.",
    metric: "2x downloads",
  },
  {
    name: "Ishita Rao",
    title: "Creator · Luxury Lifestyle YouTube",
    quote:
      "They understood the aesthetic on day one. Our reels consistently break 1M plays and sponsors cite the polish every time.",
    metric: "1M+ plays per reel",
  },
  {
    name: "Kabir Malhotra",
    title: "CEO · Atlas Growth Partners",
    quote:
      "Nevox gave us a media presence that finally matches the calibre of our clients. Board inquiries increased 62% quarter over quarter.",
    metric: "62% more board inquiries",
  },
  {
    name: "Saanvi Kulkarni",
    title: "Founder · Faceless SaaS Channel",
    quote:
      "Their faceless workflow is unmatched. We scaled to 250k subs without ever appearing on camera—and CPMs keep climbing.",
    metric: "250k subs",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(199,176,139,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(242,236,223,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.75)_0%,rgba(5,5,5,0.92)_55%,rgba(5,5,5,1)_100%)]" />
      </div>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-32 pt-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-cream/30 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cream/70">
                Nevox Media
              </div>
            </div>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-cream/20 px-6 py-2 text-sm font-medium tracking-wide text-cream/80 transition hover:border-accent/60 hover:text-cream lg:flex"
            >
              Book a Call
            </a>
          </div>

          <section className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-end">
            <div className="flex flex-col gap-8">
              <span className="text-sm uppercase tracking-[0.6em] text-cream/50">
                Authority That Converts
              </span>
              <h1 className="font-display text-5xl leading-tight text-cream sm:text-6xl lg:text-7xl">
                We build media empires for category leaders and the creators
                they become.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-cream/70">
                From narrative architecture to high-velocity distribution, Nevox
                Media transforms your expertise into a luxury content ecosystem
    that commands attention, trust, and conversions across every touchpoint.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-cream px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-base transition hover:bg-white"
                >
                  Book a Call
                </a>
                <a
                  href="#work"
                  className="rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream transition hover:border-accent/60"
                >
                  View Work
                </a>
              </div>
            </div>
            <div className="grid gap-6 rounded-3xl border border-cream/10 bg-soft/50 p-8 backdrop-blur">
              <div className="flex items-center justify-between border-b border-cream/10 pb-4">
                <span className="text-sm uppercase tracking-[0.4em] text-cream/60">
                  Scale Signals
                </span>
                <span className="text-xs text-cream/40">Updated weekly</span>
              </div>
              <div className="grid gap-4 text-cream/80">
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.35em]">
                    52M+
                  </span>
                  <span className="text-xs text-cream/50">
                    Monthly impressions managed
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.35em]">
                    18
                  </span>
                  <span className="text-xs text-cream/50">
                    Active creator brands
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.35em]">
                    7.4x
                  </span>
                  <span className="text-xs text-cream/50">
                    Average ROI across launches
                  </span>
                </div>
              </div>
            </div>
          </section>
        </header>

        <section id="services" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.6em] text-cream/50">
              Core Disciplines
            </span>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-4xl text-cream lg:text-5xl">
                Full-stack content operations built for modern dominance.
              </h2>
              <p className="hidden max-w-md text-sm leading-relaxed text-cream/60 lg:block">
                We partner as your embedded media division—engineering every
                asset to heighten trust, influence and measurable acquisition.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex h-full flex-col gap-6 rounded-3xl border border-cream/10 bg-soft/60 p-7 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_60px_-40px_rgba(199,176,139,0.65)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 ring-1 ring-cream/20">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl text-cream">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream/70">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-cream/40">
                  <span>Learn More</span>
                  <span className="inline-block h-px w-10 bg-cream/30 transition group-hover:w-16 group-hover:bg-accent/80" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="grid gap-12 rounded-[44px] border border-cream/10 bg-soft/40 px-8 py-12 backdrop-blur md:px-12 lg:px-16"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.6em] text-cream/50">
                Trusted Signals
              </span>
              <h2 className="font-display text-4xl text-cream lg:text-5xl">
                The creators who refuse to look average, trust Nevox.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cream/60">
              Strategic storytelling, conversion-first visuals, and distribution
              engines tuned for authority—no filler, only outcomes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex h-full flex-col gap-6 rounded-3xl border border-cream/10 bg-base/60 p-8 transition hover:border-accent/50 hover:bg-base/40"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold text-cream">
                    {testimonial.name}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-cream/50">
                    {testimonial.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-cream/75">
                  “{testimonial.quote}”
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.35em] text-accent/80">
                    {testimonial.metric}
                  </span>
                  <span className="h-px w-16 bg-cream/20" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[44px] border border-cream/10 bg-gradient-to-r from-cream/10 via-cream/5 to-transparent px-8 py-12 backdrop-blur"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-[0.6em] text-cream/50">
                Engagement
              </span>
              <h3 className="font-display text-3xl text-cream lg:text-4xl">
                Ready for content that commands the room before you enter?
              </h3>
              <p className="text-sm leading-relaxed text-cream/65">
                For founders, creators, and comms teams ready to lead. Share the
                mandate, we’ll build the roadmap.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@nevox.media"
                className="rounded-full bg-cream px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-base transition hover:bg-white"
              >
                hello@nevox.media
              </a>
              <a
                href="#"
                className="text-center text-xs uppercase tracking-[0.4em] text-cream/50 hover:text-accent/80"
              >
                Download Capabilities Deck
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
