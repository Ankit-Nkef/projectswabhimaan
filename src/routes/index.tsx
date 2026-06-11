import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen, HeartPulse, ShieldCheck, Sun, Users, Sparkles, GraduationCap,
  Stethoscope, Baby, Apple, Building2, HandHeart, Flame, Droplets,
  Wind, MapPin, Mail, Phone, ArrowRight, Play, Quote, ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/hero-learning.jpg";
import classroomImg from "@/assets/classroom.jpg";
import kilnImg from "@/assets/brick-kiln.jpg";
import childReadingImg from "@/assets/child-reading.jpg";
import healthImg from "@/assets/health-camp.jpg";
import coolingImg from "@/assets/cooling-centre.jpg";
import internImg from "@/assets/intern.jpg";
import motherImg from "@/assets/mother.jpg";
import childrenGroupImg from "@/assets/children-group.jpg";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Project Swabhimaan — Bricks to Books" },
      { name: "description", content: "Transforming brick kilns into spaces of learning, dignity and opportunity. A flagship initiative of District Administration Sheikhpura, implemented by Neev Ki Eent Foundation." },
      { property: "og:title", content: "Project Swabhimaan — Bricks to Books" },
      { property: "og:description", content: "Education, health, climate resilience and dignity at the doorstep of migrant brick kiln families." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */
function useInView<T extends Element>(opts: IntersectionObserverInit = { threshold: 0.25 }) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSeen(true); }, opts);
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref}>{n.toLocaleString("en-IN")}{suffix}</span>;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- sections ---------- */
const heroImages = [heroImg, classroomImg, childrenGroupImg, communityImg];

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % heroImages.length), 5500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--navy-deep)]">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/70 via-[var(--navy-deep)]/40 to-[var(--navy-deep)]/85" />
      <div className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white/90">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--gold)] text-[var(--navy-deep)] font-display text-lg font-bold">स</div>
            <div className="leading-tight">
              <div className="font-display text-base tracking-wide">Project Swabhimaan</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Sheikhpura · Bihar</div>
            </div>
          </div>
          <div className="hidden gap-8 text-sm md:flex">
            {["Impact", "Story", "Learning", "Convergence", "Resilience", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="opacity-80 transition hover:opacity-100">{l}</a>
            ))}
          </div>
        </nav>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 text-white">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            An initiative of District Administration Sheikhpura
          </div>
          <h1 className="font-display text-6xl leading-[0.95] tracking-tight text-balance md:text-[8.5rem]">
            Bricks <span className="italic font-light text-[var(--gold-soft)]">to</span> Books
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-white/85 md:text-2xl">
            Transforming brick kilns into spaces of learning, dignity and opportunity.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#impact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-medium text-[var(--navy-deep)] transition hover:bg-[var(--gold-soft)]">
              Explore Impact <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#story" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/15">
              <Play className="h-4 w-4" /> Watch the Story
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] text-white/55">
            <span>Government of Bihar</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>District Administration Sheikhpura</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Neev Ki Eent Foundation</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll</div>
    </section>
  );
}

const stats = [
  { n: 55, s: "", label: "Brick Kilns Covered" },
  { n: 55, s: "", label: "Akshar Learning Centres" },
  { n: 3000, s: "+", label: "Children Identified" },
  { n: 2000, s: "+", label: "Children Learning Daily" },
  { n: 4411, s: "", label: "Individuals Documented" },
  { n: 879, s: "", label: "Families Surveyed" },
  { n: 55, s: "", label: "CM Pratigya Interns" },
  { n: 90, s: "%", label: "Attendance" },
];

function Impact() {
  return (
    <section id="impact" className="relative bg-[var(--navy-deep)] py-28 text-white md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-20 max-w-3xl">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Impact in Numbers</div>
            <h2 className="font-display text-5xl md:text-7xl text-balance">
              A district-led model, <span className="italic text-[var(--gold-soft)]">measured in lives.</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="bg-[var(--navy-deep)] p-8 md:p-10">
                <div className="font-display text-5xl md:text-6xl tracking-tight">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-3 text-sm text-white/65">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative bg-[var(--cream)] py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-2xl">
              <img src={kilnImg} alt="Brick kiln at dawn" loading="lazy" className="h-[28rem] w-full object-cover grayscale" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src={classroomImg} alt="Akshar Learning Centre" loading="lazy" className="h-[28rem] w-full object-cover" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="flex h-full flex-col justify-center">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--orange)]">The Story</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance">
              From labour sites <br /> to <span className="italic text-[var(--navy)]">learning spaces.</span>
            </h2>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Project Swabhimaan brings education, health, social protection and dignity directly to migrant families living and working at brick kilns across Sheikhpura.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Education", "Health", "Social Protection", "Climate Resilience"].map((t) => (
                <span key={t} className="rounded-full border border-[var(--navy)]/15 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--navy)]">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const akshars = [
  { icon: BookOpen, title: "Foundational Literacy" },
  { icon: GraduationCap, title: "School Readiness" },
  { icon: Sparkles, title: "Learning Through Play" },
  { icon: BookOpen, title: "Mini Libraries" },
  { icon: Building2, title: "BALA Classrooms" },
  { icon: ShieldCheck, title: "NIPUN Bihar Aligned" },
];

function Akshar() {
  return (
    <section id="learning" className="relative bg-[var(--navy-deep)] text-white">
      <div className="relative h-[70svh] min-h-[420px] w-full overflow-hidden">
        <img src={classroomImg} alt="Akshar Learning Centre" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Akshar Learning Centres</div>
            <h2 className="mt-4 font-display text-5xl md:text-8xl leading-[0.95] text-balance">
              Where bricks <span className="italic text-[var(--gold-soft)]">become books.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">55 Akshar Learning Centres creating pathways to education at the heart of every kiln.</p>
          </Reveal>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
          {akshars.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="group bg-[var(--navy-deep)] p-8 transition hover:bg-[var(--navy)]">
                <Icon className="h-8 w-8 text-[var(--gold)]" />
                <div className="mt-8 font-display text-2xl">{title}</div>
                <ChevronRight className="mt-6 h-4 w-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-[var(--gold)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const departments = [
  "Education Department", "Health Department", "ICDS", "Labour Department",
  "Social Welfare", "SC/ST Welfare", "Disaster Management", "District Administration",
  "Neev Ki Eent Foundation",
];

function Convergence() {
  return (
    <section id="convergence" className="relative overflow-hidden bg-[var(--cream)] py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--orange)]">Government at the Doorstep</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance">
              Bringing government <br /> to the <span className="italic text-[var(--navy)]">brick kiln.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              A unique convergence model ensuring that government services reach the most marginalised migrant communities — together, in one place.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[18%] grid place-items-center rounded-full bg-[var(--navy-deep)] text-center text-white shadow-2xl shadow-[var(--navy-deep)]/30">
              <div>
                <div className="font-display text-2xl leading-tight">Project<br/>Swabhimaan</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">Convergence Core</div>
              </div>
            </div>
            <div className="absolute inset-0 animate-orbit-slow">
              {departments.map((d, i) => {
                const angle = (i / departments.length) * Math.PI * 2;
                const r = 46;
                const x = 50 + Math.cos(angle) * r;
                const y = 50 + Math.sin(angle) * r;
                return (
                  <div
                    key={d}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="rounded-full border border-[var(--navy)]/15 bg-white px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-[var(--navy)] shadow-sm md:text-xs"
                      style={{ animation: "orbit 40s linear infinite reverse" }}>
                      {d}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pointer-events-none absolute inset-[18%] rounded-full border border-dashed border-[var(--gold)]/40" />
            <div className="pointer-events-none absolute inset-[5%] rounded-full border border-dashed border-[var(--navy)]/15" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const health = [
  { icon: Stethoscope, title: "Health Screening" },
  { icon: ShieldCheck, title: "Immunisation" },
  { icon: Baby, title: "Maternal Care" },
  { icon: Apple, title: "Nutrition Support" },
  { icon: HeartPulse, title: "Anaemia Screening" },
  { icon: HandHeart, title: "Referral Services" },
];

function Health() {
  return (
    <section className="relative bg-white">
      <div className="relative h-[60svh] min-h-[380px] w-full overflow-hidden">
        <img src={healthImg} alt="Health camp at brick kiln" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/80 via-[var(--navy-deep)]/40 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6">
          <Reveal>
            <div className="max-w-xl text-white">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Health & Nutrition</div>
              <h2 className="mt-4 font-display text-5xl md:text-7xl text-balance">Health <span className="italic text-[var(--gold-soft)]">at the doorstep.</span></h2>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-5 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {health.map(({ icon: Icon, title }, i) => (
          <Reveal key={title} delay={i * 60}>
            <div className="group flex items-start gap-5 rounded-2xl border border-[var(--navy)]/10 bg-white p-7 transition hover:border-[var(--teal)]/40 hover:shadow-[0_30px_60px_-30px_rgba(15,139,141,0.35)]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--teal)]/10 text-[var(--teal)]">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-xl text-[var(--navy)]">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground">Delivered on-site, at the kiln.</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const resilience = [
  { icon: Flame, title: "Heat Wave Protection" },
  { icon: ShieldCheck, title: "Emergency Preparedness" },
  { icon: Wind, title: "Cooling Centres" },
  { icon: Building2, title: "Safe Learning Spaces" },
  { icon: Droplets, title: "Climate Resilience" },
];

function Resilience() {
  return (
    <section className="relative overflow-hidden bg-[#1a0f08] text-white">
      <img src={coolingImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(245,124,0,0.35), transparent 60%), linear-gradient(180deg, rgba(20,12,6,0.85), rgba(20,12,6,0.95))" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.22em]">
              <Sun className="h-3.5 w-3.5 text-[var(--gold)]" /> Disaster Risk Resilience
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Building resilience <br /> in <span className="italic text-[var(--gold-soft)]">extreme heat.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Protecting children and families from climate risks at brick kilns — cooling centres, shade, water and child-safe spaces.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {resilience.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="h-full rounded-2xl glass p-6">
                <Icon className="h-7 w-7 text-[var(--gold)]" />
                <div className="mt-8 font-display text-xl">{title}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-5 py-2.5 text-sm text-[var(--gold-soft)]">
            <Sparkles className="h-4 w-4" />
            One of India's most innovative brick kiln resilience models
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const neevPillars = [
  { icon: Users, title: "Community Mobilisation" },
  { icon: BookOpen, title: "Education" },
  { icon: HeartPulse, title: "Health" },
  { icon: Building2, title: "Government Convergence" },
  { icon: Sparkles, title: "Data Systems" },
  { icon: Wind, title: "Climate Innovation" },
  { icon: GraduationCap, title: "Youth Leadership" },
];

function Neev() {
  return (
    <section className="relative bg-[var(--cream)] py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--orange)]">Implementation Partner</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            Neev Ki Eent <br /><span className="italic text-[var(--navy)]">Foundation.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Driving on-ground implementation, community mobilisation, government convergence, learning centres, social protection, climate resilience and stakeholder coordination across every brick kiln site.
          </p>
        </Reveal>
        <Reveal delay={150} className="md:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl sm:col-span-2">
              <img src={communityImg} alt="Community mobilisation" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src={motherImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src={childReadingImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {neevPillars.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 50}>
              <div className="rounded-2xl border border-[var(--navy)]/10 bg-white p-5 text-center transition hover:border-[var(--gold)] hover:shadow-sm">
                <Icon className="mx-auto h-6 w-6 text-[var(--navy)]" />
                <div className="mt-3 text-sm font-medium text-[var(--navy)]">{title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Interns() {
  return (
    <section className="relative bg-[var(--navy-deep)] py-28 text-white md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <img src={internImg} alt="CM Pratigya Intern" loading="lazy" className="h-[34rem] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">CM Pratigya Interns</div>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Youth driving <span className="italic text-[var(--gold-soft)]">change.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg text-white/75">
              55 local youth serving as change-makers across brick kiln communities — bridging families, schools and the state.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { n: 55, l: "Interns" },
                { n: 55, l: "Kilns" },
                { n: 2000, l: "Children" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl glass p-5">
                  <div className="font-display text-3xl text-[var(--gold)]"><Counter to={s.n} /></div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const voices = [
  { q: "What used to be just a worksite is now where my children learn. That changes everything.", n: "A mother at the kiln", r: "Sheikhpura", img: motherImg },
  { q: "When the government walks to the family, dignity follows. Swabhimaan is that walk.", n: "District Magistrate", r: "Sheikhpura", img: communityImg },
  { q: "Standing here, teaching these children, I understand what my district can become.", n: "CM Pratigya Intern", r: "Akshar Centre 14", img: internImg },
];

function Voices() {
  const [i, setI] = useState(0);
  return (
    <section className="relative bg-white py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--orange)]">Voices of Change</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">In their own <span className="italic text-[var(--navy)]">words.</span></h2>
            </div>
            <div className="hidden gap-2 md:flex">
              {voices.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-1.5 w-10 rounded-full transition ${k === i ? "bg-[var(--navy)]" : "bg-[var(--navy)]/15"}`} aria-label={`Voice ${k+1}`} />
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            {voices.map((v, k) => (
              <img key={k} src={v.img} alt={v.n} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
                style={{ opacity: k === i ? 1 : 0 }} />
            ))}
          </div>
          <div>
            <Quote className="h-10 w-10 text-[var(--gold)]" />
            <blockquote key={i} className="mt-6 font-display text-3xl md:text-4xl leading-[1.2] text-[var(--navy)] animate-rise">
              "{voices[i].q}"
            </blockquote>
            <div className="mt-8 text-sm">
              <div className="font-semibold text-[var(--navy)]">{voices[i].n}</div>
              <div className="text-muted-foreground">{voices[i].r}</div>
            </div>
            <div className="mt-10 flex gap-2">
              <button onClick={() => setI((i - 1 + voices.length) % voices.length)} className="rounded-full border border-[var(--navy)]/15 px-4 py-2 text-sm text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white">Prev</button>
              <button onClick={() => setI((i + 1) % voices.length)} className="rounded-full border border-[var(--navy)]/15 px-4 py-2 text-sm text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { img: classroomImg, span: "row-span-2", tag: "Learning" },
  { img: healthImg, span: "", tag: "Health" },
  { img: communityImg, span: "", tag: "Community" },
  { img: coolingImg, span: "col-span-2", tag: "Climate Resilience" },
  { img: motherImg, span: "row-span-2", tag: "Children" },
  { img: childrenGroupImg, span: "col-span-2", tag: "Children" },
  { img: internImg, span: "", tag: "Government Visits" },
  { img: childReadingImg, span: "", tag: "Learning" },
];

function Journey() {
  return (
    <section className="relative bg-[var(--cream)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--orange)]">Photo Journey</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">A field of <span className="italic text-[var(--navy)]">moments.</span></h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-[var(--navy)]/70">
              {["Learning", "Health", "Community", "Climate", "Children"].map((t) => (
                <span key={t} className="rounded-full border border-[var(--navy)]/15 px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 60} className={`${g.span} group relative overflow-hidden rounded-2xl`}>
              <div className="relative h-full w-full">
                <img src={g.img} alt={g.tag} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy-deep)]/80 to-transparent p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/85">{g.tag}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const roadmap = [
  { y: "2026", t: "Expand Services", d: "Deepen convergence across more kilns and migrant routes." },
  { y: "2027", t: "Model ALC", d: "Model Akshar Learning Center at all 55 kilns with digital classrooms and content." },
  { y: "2028+", t: "Scale Across Bihar", d: "Replicate the Sheikhpura model in priority districts." },
];

function Roadmap() {
  return (
    <section className="relative bg-[var(--navy-deep)] py-28 text-white md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Future Roadmap</div>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">The road <span className="italic text-[var(--gold-soft)]">ahead.</span></h2>
          </div>
        </Reveal>
        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent md:block" />
          {roadmap.map((r, i) => (
            <Reveal key={r.y} delay={i * 120}>
              <div className="relative">
                <div className="relative z-10 mb-6 grid h-24 w-24 place-items-center rounded-full border border-[var(--gold)]/30 bg-[var(--navy-deep)]">
                  <div className="font-display text-2xl text-[var(--gold)]">{r.y}</div>
                </div>
                <h3 className="font-display text-3xl">{r.t}</h3>
                <p className="mt-3 max-w-sm text-white/70">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <img src={childrenGroupImg} alt="" className="absolute inset-0 h-full w-full object-cover animate-kenburns" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/40 via-[var(--navy-deep)]/55 to-[var(--navy-deep)]/90" />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
        <Reveal>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.98] text-balance">
            Every child deserves a classroom, <span className="italic text-[var(--gold-soft)]">not a worksite.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10 text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Bricks to Books</div>
          <p className="mt-3 text-lg text-white/85">Restoring dignity. Building futures.</p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-medium text-[var(--navy-deep)] transition hover:bg-[var(--gold-soft)]">Partner With Us</a>
            <a href="#contact" className="rounded-full glass px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/15">Download Project Profile</a>
            <a href="#contact" className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">Contact Us</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#0a1430] py-20 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--gold)] text-[var(--navy-deep)] font-display text-lg font-bold">स</div>
            <div className="font-display text-xl text-white">Project Swabhimaan</div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
            A flagship initiative of District Administration Sheikhpura, Government of Bihar — implemented by Neev Ki Eent Foundation.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-white/50" /> Collectorate, Sheikhpura, Bihar — 811105</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-white/50" /> info@projectswabhimaan.in</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-white/50" /> +91 06341 22 2222</li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">Connect</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Twitter / X</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 pt-8 text-xs text-white/50">
        <div>© {new Date().getFullYear()} Project Swabhimaan · District Administration Sheikhpura</div>
        <div>Implemented by Neev Ki Eent Foundation</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-[var(--cream)] text-[var(--ink)]">
      <Hero />
      <Impact />
      <Story />
      <Akshar />
      <Convergence />
      <Health />
      <Resilience />
      <Neev />
      <Interns />
      <Voices />
      <Journey />
      <Roadmap />
      <Closing />
      <Footer />
    </main>
  );
}
