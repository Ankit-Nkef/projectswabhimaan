import { createFileRoute } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  BookOpen, HeartPulse, ShieldCheck, Sun, Users, Sparkles, GraduationCap,
  Stethoscope, Baby, Apple, Building2, HandHeart, Flame, Droplets,
  Wind, MapPin, Mail, Phone, ArrowRight, Play, Quote, ChevronRight, Languages,
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
import biharLogo from "@/assets/bihar-govt-logo.png.asset.json";
import neevLogo from "@/assets/neev-ki-eent-logo.png.asset.json";

/* ---------- i18n ---------- */
type Lang = "en" | "hi";
const dict = {
  en: {
    brand: "Project Swabhimaan",
    location: "Sheikhpura · Bihar",
    neevShort: "Neev Ki Eent",
    foundation: "Foundation",
    nav: { impact: "Impact", story: "Story", learning: "Akshar Learning Center", convergence: "Convergence", resilience: "Resilience", contact: "Contact" },
    initiative: "An initiative of District Administration Sheikhpura",
    heroTitle1: "Bricks", heroTitleTo: "to", heroTitle2: "Books",
    heroSub: "Transforming brick kilns into spaces of learning, dignity and opportunity.",
    exploreImpact: "Explore Impact",
    watchStory: "Watch the Story",
    govBihar: "Government of Bihar",
    daSheik: "District Administration Sheikhpura",
    neevFull: "Neev Ki Eent Foundation",
    scroll: "Scroll",
    impactKicker: "Impact in Numbers",
    impactTitle1: "A district-led model,", impactTitle2: "measured in lives.",
    stats: ["Brick Kilns Covered", "Akshar Learning Centres", "Children Identified", "Children Learning Daily", "Individuals Documented", "Families Surveyed", "CM Pratigya Interns", "Attendance"],
    storyKicker: "The Story",
    storyTitle1: "From labour sites", storyTitle2: "to", storyTitle3: "learning spaces.",
    storyPara: "Project Swabhimaan brings education, health, social protection and dignity directly to migrant families living and working at brick kilns across Sheikhpura.",
    pillars: ["Education", "Health", "Social Protection", "Climate Resilience"],
    akshar: ["Foundational Literacy", "School Readiness", "Learning Through Play", "Mini Libraries", "BALA Classrooms", "NIPUN Bihar Aligned"],
    aksharKicker: "Akshar Learning Centres",
    aksharTitle1: "Where bricks", aksharTitle2: "become books.",
    aksharSub: "55 Akshar Learning Centres creating pathways to education at the heart of every kiln.",
    departments: ["Education Department", "Health Department", "ICDS", "Labour Department", "Social Welfare", "SC/ST Welfare", "Disaster Management", "District Administration", "Neev Ki Eent Foundation"],
    convKicker: "Government at the Doorstep",
    convTitle1: "Bringing government", convTitle2: "to the", convTitle3: "brick kiln.",
    convPara: "A unique convergence model ensuring that government services reach the most marginalised migrant communities — together, in one place.",
    convCore: "Convergence Core",
    health: ["Health Screening", "Immunisation", "Maternal Care", "Nutrition Support", "Anaemia Screening", "Referral Services"],
    healthKicker: "Health & Nutrition",
    healthTitle1: "Health", healthTitle2: "at the doorstep.",
    healthCardSub: "Delivered on-site, at the kiln.",
    resilience: ["Heat Wave Protection", "Emergency Preparedness", "Cooling Centres", "Safe Learning Spaces", "Climate Resilience"],
    resKicker: "Disaster Risk Resilience",
    resTitle1: "Building resilience", resTitle2: "in", resTitle3: "extreme heat.",
    resPara: "Protecting children and families from climate risks at brick kilns — cooling centres, shade, water and child-safe spaces.",
    resBadge: "One of India's most innovative brick kiln resilience models",
    neevPillars: ["Community Mobilisation", "Education", "Health", "Government Convergence", "Data Systems", "Climate Innovation", "Youth Leadership"],
    neevKicker: "Implementation Partner",
    neevTitle1: "Neev Ki Eent", neevTitle2: "Foundation.",
    neevPara: "Driving on-ground implementation, community mobilisation, government convergence, learning centres, social protection, climate resilience and stakeholder coordination across every brick kiln site.",
    internKicker: "CM Pratigya Interns",
    internTitle1: "Youth driving", internTitle2: "change.",
    internPara: "55 local youth serving as change-makers across brick kiln communities — bridging families, schools and the state.",
    internStats: ["Interns", "Kilns", "Children"],
    voicesKicker: "Voices of Change",
    voicesTitle1: "In their own", voicesTitle2: "words.",
    voices: [
      { q: "What used to be just a worksite is now where my children learn. That changes everything.", n: "A mother at the kiln", r: "Sheikhpura" },
      { q: "When the government walks to the family, dignity follows. Swabhimaan is that walk.", n: "District Magistrate", r: "Sheikhpura" },
      { q: "Standing here, teaching these children, I understand what my district can become.", n: "CM Pratigya Intern", r: "Akshar Centre 14" },
    ],
    prev: "Prev", next: "Next",
    journeyKicker: "Photo Journey",
    journeyTitle1: "A field of", journeyTitle2: "moments.",
    galleryTags: ["Learning", "Health", "Community", "Climate Resilience", "Children", "Children", "Government Visits", "Learning"],
    filterTags: ["Learning", "Health", "Community", "Climate", "Children"],
    roadmapKicker: "Future Roadmap",
    roadmapTitle1: "The road", roadmapTitle2: "ahead.",
    roadmap: [
      { t: "Expand Services", d: "Deepen convergence across more kilns and migrant routes." },
      { t: "Model ALC", d: "Model Akshar Learning Center at all 55 kilns with digital classrooms and content." },
      { t: "Scale Across Bihar", d: "Replicate the Sheikhpura model in priority districts." },
    ],
    closingTitle1: "Every child deserves a classroom,", closingTitle2: "not a worksite.",
    closingTag: "Bricks to Books",
    closingSub: "Restoring dignity. Building futures.",
    footerPara: "A flagship initiative of District Administration Sheikhpura, Government of Bihar — implemented by Neev Ki Eent Foundation.",
    contact: "Contact", connect: "Connect",
    address: "Collectorate, Sheikhpura, Bihar — 811105",
    copyright: "Project Swabhimaan · District Administration Sheikhpura",
    implementedBy: "Implemented by Neev Ki Eent Foundation",
  },
  hi: {
    brand: "परियोजना स्वाभिमान",
    location: "शेखपुरा · बिहार",
    neevShort: "नींव की ईंट",
    foundation: "फाउंडेशन",
    nav: { impact: "प्रभाव", story: "कहानी", learning: "अक्षर शिक्षण केंद्र", convergence: "अभिसरण", resilience: "सहनशीलता", contact: "संपर्क" },
    initiative: "जिला प्रशासन शेखपुरा की एक पहल",
    heroTitle1: "ईंट", heroTitleTo: "से", heroTitle2: "किताब",
    heroSub: "ईंट भट्ठों को शिक्षा, सम्मान और अवसर के स्थानों में बदलना।",
    exploreImpact: "प्रभाव देखें",
    watchStory: "कहानी देखें",
    govBihar: "बिहार सरकार",
    daSheik: "जिला प्रशासन शेखपुरा",
    neevFull: "नींव की ईंट फाउंडेशन",
    scroll: "स्क्रॉल",
    impactKicker: "संख्याओं में प्रभाव",
    impactTitle1: "जीवन में मापा गया,", impactTitle2: "जिला-नेतृत्व वाला मॉडल।",
    stats: ["शामिल ईंट भट्ठे", "अक्षर शिक्षण केंद्र", "चिह्नित बच्चे", "रोज़ पढ़ने वाले बच्चे", "दस्तावेज़ीकृत व्यक्ति", "सर्वेक्षित परिवार", "सीएम प्रतिज्ञा इंटर्न", "उपस्थिति"],
    storyKicker: "कहानी",
    storyTitle1: "श्रम स्थलों", storyTitle2: "से", storyTitle3: "शिक्षा स्थलों तक।",
    storyPara: "परियोजना स्वाभिमान शेखपुरा के ईंट भट्ठों पर रह रहे प्रवासी परिवारों के द्वार तक शिक्षा, स्वास्थ्य, सामाजिक सुरक्षा और सम्मान पहुँचाती है।",
    pillars: ["शिक्षा", "स्वास्थ्य", "सामाजिक सुरक्षा", "जलवायु सहनशीलता"],
    akshar: ["मूलभूत साक्षरता", "विद्यालय तत्परता", "खेल से शिक्षा", "मिनी पुस्तकालय", "BALA कक्षाएँ", "निपुण बिहार से जुड़ा"],
    aksharKicker: "अक्षर शिक्षण केंद्र",
    aksharTitle1: "जहाँ ईंटें", aksharTitle2: "किताबें बन जाती हैं।",
    aksharSub: "हर भट्ठे के केंद्र में शिक्षा के मार्ग बनाते 55 अक्षर शिक्षण केंद्र।",
    departments: ["शिक्षा विभाग", "स्वास्थ्य विभाग", "आईसीडीएस", "श्रम विभाग", "समाज कल्याण", "अजा/अजजा कल्याण", "आपदा प्रबंधन", "जिला प्रशासन", "नींव की ईंट फाउंडेशन"],
    convKicker: "द्वार पर सरकार",
    convTitle1: "सरकार को", convTitle2: "पहुँचाना", convTitle3: "ईंट भट्ठे तक।",
    convPara: "एक अनूठा अभिसरण मॉडल जो सुनिश्चित करता है कि सरकारी सेवाएँ सबसे वंचित प्रवासी समुदायों तक एक साथ, एक ही स्थान पर पहुँचें।",
    convCore: "अभिसरण केंद्र",
    health: ["स्वास्थ्य जाँच", "टीकाकरण", "मातृ देखभाल", "पोषण सहायता", "एनीमिया जाँच", "रेफ़रल सेवाएँ"],
    healthKicker: "स्वास्थ्य एवं पोषण",
    healthTitle1: "स्वास्थ्य", healthTitle2: "द्वार पर।",
    healthCardSub: "भट्ठे पर ही उपलब्ध।",
    resilience: ["लू से सुरक्षा", "आपातकालीन तैयारी", "कूलिंग केंद्र", "सुरक्षित शिक्षण स्थल", "जलवायु सहनशीलता"],
    resKicker: "आपदा जोखिम सहनशीलता",
    resTitle1: "सहनशीलता का निर्माण", resTitle2: "", resTitle3: "भीषण गर्मी में।",
    resPara: "ईंट भट्ठों पर बच्चों और परिवारों को जलवायु जोखिमों से बचाना — कूलिंग केंद्र, छाया, पानी और बाल-सुरक्षित स्थल।",
    resBadge: "भारत के सबसे नवाचारी ईंट भट्ठा सहनशीलता मॉडलों में से एक",
    neevPillars: ["सामुदायिक संगठन", "शिक्षा", "स्वास्थ्य", "सरकारी अभिसरण", "डेटा प्रणालियाँ", "जलवायु नवाचार", "युवा नेतृत्व"],
    neevKicker: "क्रियान्वयन साझेदार",
    neevTitle1: "नींव की ईंट", neevTitle2: "फाउंडेशन।",
    neevPara: "हर ईंट भट्ठा स्थल पर ज़मीनी क्रियान्वयन, सामुदायिक संगठन, सरकारी अभिसरण, शिक्षण केंद्र, सामाजिक सुरक्षा, जलवायु सहनशीलता और हितधारक समन्वय का संचालन।",
    internKicker: "सीएम प्रतिज्ञा इंटर्न",
    internTitle1: "परिवर्तन लाते", internTitle2: "युवा।",
    internPara: "55 स्थानीय युवा ईंट भट्ठा समुदायों में परिवर्तन-निर्माता बनकर परिवारों, विद्यालयों और राज्य के बीच सेतु बन रहे हैं।",
    internStats: ["इंटर्न", "भट्ठे", "बच्चे"],
    voicesKicker: "परिवर्तन की आवाज़ें",
    voicesTitle1: "उनके अपने", voicesTitle2: "शब्दों में।",
    voices: [
      { q: "जो कभी सिर्फ़ कार्यस्थल था, वहाँ अब मेरे बच्चे पढ़ते हैं। यह सब कुछ बदल देता है।", n: "भट्ठे की एक माँ", r: "शेखपुरा" },
      { q: "जब सरकार परिवार तक चलकर आती है, तो सम्मान साथ चलता है। स्वाभिमान वही चलना है।", n: "जिलाधिकारी", r: "शेखपुरा" },
      { q: "यहाँ खड़े होकर इन बच्चों को पढ़ाते हुए, मैं समझता हूँ मेरा ज़िला क्या बन सकता है।", n: "सीएम प्रतिज्ञा इंटर्न", r: "अक्षर केंद्र 14" },
    ],
    prev: "पिछला", next: "अगला",
    journeyKicker: "फ़ोटो यात्रा",
    journeyTitle1: "क्षणों का", journeyTitle2: "संसार।",
    galleryTags: ["शिक्षा", "स्वास्थ्य", "समुदाय", "जलवायु सहनशीलता", "बच्चे", "बच्चे", "सरकारी दौरे", "शिक्षा"],
    filterTags: ["शिक्षा", "स्वास्थ्य", "समुदाय", "जलवायु", "बच्चे"],
    roadmapKicker: "भावी रोडमैप",
    roadmapTitle1: "आगे का", roadmapTitle2: "मार्ग।",
    roadmap: [
      { t: "सेवा विस्तार", d: "अधिक भट्ठों और प्रवासी मार्गों में अभिसरण को गहरा करें।" },
      { t: "मॉडल ALC", d: "सभी 55 भट्ठों पर डिजिटल कक्षाओं और सामग्री के साथ मॉडल अक्षर शिक्षण केंद्र।" },
      { t: "बिहार भर में विस्तार", d: "शेखपुरा मॉडल को प्राथमिकता वाले ज़िलों में दोहराएँ।" },
    ],
    closingTitle1: "हर बच्चा कक्षा का हक़दार है,", closingTitle2: "कार्यस्थल का नहीं।",
    closingTag: "ईंट से किताब तक",
    closingSub: "सम्मान बहाल। भविष्य का निर्माण।",
    footerPara: "बिहार सरकार के जिला प्रशासन शेखपुरा की एक प्रमुख पहल — नींव की ईंट फाउंडेशन द्वारा क्रियान्वित।",
    contact: "संपर्क", connect: "जुड़ें",
    address: "समाहरणालय, शेखपुरा, बिहार — 811105",
    copyright: "परियोजना स्वाभिमान · जिला प्रशासन शेखपुरा",
    implementedBy: "नींव की ईंट फाउंडेशन द्वारा क्रियान्वित",
  },
};

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: typeof dict.en }>({
  lang: "en", setLang: () => {}, t: dict.en,
});
const useT = () => useContext(LangCtx);

function LangToggle() {
  const { lang, setLang } = useT();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      className="inline-flex items-center gap-1.5 rounded-full glass border border-white/30 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/15"
      aria-label="Toggle language"
    >
      <Languages className="h-3.5 w-3.5" />
      <span className={lang === "en" ? "text-[var(--gold)]" : "text-white/60"}>EN</span>
      <span className="text-white/30">/</span>
      <span className={lang === "hi" ? "text-[var(--gold)]" : "text-white/60"}>हिं</span>
    </button>
  );
}

function Tag({ n }: { n: number }) {
  return (
    <span className="absolute left-3 top-3 z-30 rounded-md bg-black/70 px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-lg ring-1 ring-white/20">
      IMG #{n}
    </span>
  );
}

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
const statsNums = [{ n: 55, s: "" }, { n: 55, s: "" }, { n: 3000, s: "+" }, { n: 2000, s: "+" }, { n: 4411, s: "" }, { n: 879, s: "" }, { n: 55, s: "" }, { n: 90, s: "%" }];
const aksharIcons = [BookOpen, GraduationCap, Sparkles, BookOpen, Building2, ShieldCheck];
const healthIcons = [Stethoscope, ShieldCheck, Baby, Apple, HeartPulse, HandHeart];
const resilienceIcons = [Flame, ShieldCheck, Wind, Building2, Droplets];
const neevPillarIcons = [Users, BookOpen, HeartPulse, Building2, Sparkles, Wind, GraduationCap];
const voiceImgs = [motherImg, communityImg, internImg];
const galleryItems = [
  { img: classroomImg, span: "row-span-2" },
  { img: healthImg, span: "" },
  { img: communityImg, span: "" },
  { img: coolingImg, span: "col-span-2" },
  { img: motherImg, span: "row-span-2" },
  { img: childrenGroupImg, span: "col-span-2" },
  { img: internImg, span: "" },
  { img: childReadingImg, span: "" },
];
const roadmapYears = ["2026", "2027", "2028+"];

function Hero() {
  const { t } = useT();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % heroImages.length), 5500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--navy-deep)]">
      {heroImages.map((src, i) => (
        <div key={src} className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out" style={{ opacity: i === idx ? 1 : 0 }}>
          <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
          <Tag n={i + 1} />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/70 via-[var(--navy-deep)]/40 to-[var(--navy-deep)]/85" />
      <div className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white/90">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white p-1.5 shadow-md">
              <img src={biharLogo.url} alt="Government of Bihar" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base tracking-wide">{t.brand}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">{t.location}</div>
            </div>
          </div>
          <div className="hidden gap-8 text-sm md:flex">
            <a href="#impact" className="opacity-80 transition hover:opacity-100">{t.nav.impact}</a>
            <a href="#story" className="opacity-80 transition hover:opacity-100">{t.nav.story}</a>
            <a href="#learning" className="opacity-80 transition hover:opacity-100">{t.nav.learning}</a>
            <a href="#convergence" className="opacity-80 transition hover:opacity-100">{t.nav.convergence}</a>
            <a href="#resilience" className="opacity-80 transition hover:opacity-100">{t.nav.resilience}</a>
            <a href="#contact" className="opacity-80 transition hover:opacity-100">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-3">
            <LangToggle />
            <div className="leading-tight text-right hidden sm:block">
              <div className="font-display text-xs tracking-wide">{t.neevShort}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">{t.foundation}</div>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white p-1 shadow-md">
              <img src={neevLogo.url} alt="Neev Ki Eent Foundation" className="h-full w-full object-contain" />
            </div>
          </div>
        </nav>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 text-white">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            {t.initiative}
          </div>
          <h1 className="font-display text-6xl leading-[0.95] tracking-tight text-balance md:text-[8.5rem]">
            {t.heroTitle1} <span className="italic font-light text-[var(--gold-soft)]">{t.heroTitleTo}</span> {t.heroTitle2}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-white/85 md:text-2xl">{t.heroSub}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#impact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-medium text-[var(--navy-deep)] transition hover:bg-[var(--gold-soft)]">
              {t.exploreImpact} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#story" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/15">
              <Play className="h-4 w-4" /> {t.watchStory}
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] text-white/55">
            <span>{t.govBihar}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>{t.daSheik}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>{t.neevFull}</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/60">{t.scroll}</div>
    </section>
  );
}

function Impact() {
  const { t } = useT();
  return (
    <section id="impact" className="relative bg-[var(--navy-deep)] py-28 text-white md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-20 max-w-3xl">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">{t.impactKicker}</div>
            <h2 className="font-display text-5xl md:text-7xl text-balance">
              {t.impactTitle1} <span className="italic text-[var(--gold-soft)]">{t.impactTitle2}</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
          {statsNums.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-[var(--navy-deep)] p-8 md:p-10">
                <div className="font-display text-5xl md:text-6xl tracking-tight">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-3 text-sm text-white/65">{t.stats[i]}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  const { t } = useT();
  return (
    <section id="story" className="relative bg-[var(--cream)] py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-2xl">
              <Tag n={5} />
              <img src={kilnImg} alt="" loading="lazy" className="h-[28rem] w-full object-cover grayscale" />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Tag n={6} />
              <img src={classroomImg} alt="" loading="lazy" className="h-[28rem] w-full object-cover" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="flex h-full flex-col justify-center">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--orange)]">{t.storyKicker}</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance">
              {t.storyTitle1} <br /> {t.storyTitle2} <span className="italic text-[var(--navy)]">{t.storyTitle3}</span>
            </h2>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">{t.storyPara}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {t.pillars.map((p) => (
                <span key={p} className="rounded-full border border-[var(--navy)]/15 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--navy)]">{p}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Akshar() {
  const { t } = useT();
  return (
    <section id="learning" className="relative bg-[var(--navy-deep)] text-white">
      <div className="relative h-[70svh] min-h-[420px] w-full overflow-hidden">
        <img src={classroomImg} alt="" loading="lazy" className="h-full w-full object-cover" />
        <Tag n={7} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">{t.aksharKicker}</div>
            <h2 className="mt-4 font-display text-5xl md:text-8xl leading-[0.95] text-balance">
              {t.aksharTitle1} <span className="italic text-[var(--gold-soft)]">{t.aksharTitle2}</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">{t.aksharSub}</p>
          </Reveal>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
          {aksharIcons.map((Icon, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group bg-[var(--navy-deep)] p-8 transition hover:bg-[var(--navy)]">
                <Icon className="h-8 w-8 text-[var(--gold)]" />
                <div className="mt-8 font-display text-2xl">{t.akshar[i]}</div>
                <ChevronRight className="mt-6 h-4 w-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-[var(--gold)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Convergence() {
  const { t } = useT();
  return (
    <section id="convergence" className="relative overflow-hidden bg-[var(--cream)] py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--orange)]">{t.convKicker}</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance">
              {t.convTitle1} <br /> {t.convTitle2} <span className="italic text-[var(--navy)]">{t.convTitle3}</span>
            </h2>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">{t.convPara}</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[18%] grid place-items-center rounded-full bg-[var(--navy-deep)] text-center text-white shadow-2xl shadow-[var(--navy-deep)]/30">
              <div>
                <div className="font-display text-2xl leading-tight">{t.brand}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">{t.convCore}</div>
              </div>
            </div>
            <div className="absolute inset-0 animate-orbit-slow">
              {t.departments.map((d, i) => {
                const angle = (i / t.departments.length) * Math.PI * 2;
                const r = 46;
                const x = 50 + Math.cos(angle) * r;
                const y = 50 + Math.sin(angle) * r;
                return (
                  <div key={d} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
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

function Health() {
  const { t } = useT();
  return (
    <section className="relative bg-white">
      <div className="relative h-[60svh] min-h-[380px] w-full overflow-hidden">
        <img src={healthImg} alt="" loading="lazy" className="h-full w-full object-cover" />
        <Tag n={8} />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/80 via-[var(--navy-deep)]/40 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6">
          <Reveal>
            <div className="max-w-xl text-white">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">{t.healthKicker}</div>
              <h2 className="mt-4 font-display text-5xl md:text-7xl text-balance">
                {t.healthTitle1} <span className="italic text-[var(--gold-soft)]">{t.healthTitle2}</span>
              </h2>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-5 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {healthIcons.map((Icon, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="group flex items-start gap-5 rounded-2xl border border-[var(--navy)]/10 bg-white p-7 transition hover:border-[var(--teal)]/40 hover:shadow-[0_30px_60px_-30px_rgba(15,139,141,0.35)]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--teal)]/10 text-[var(--teal)]">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-xl text-[var(--navy)]">{t.health[i]}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.healthCardSub}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Resilience() {
  const { t } = useT();
  return (
    <section id="resilience" className="relative overflow-hidden bg-[#1a0f08] text-white">
      <img src={coolingImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <Tag n={9} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(245,124,0,0.35), transparent 60%), linear-gradient(180deg, rgba(20,12,6,0.85), rgba(20,12,6,0.95))" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.22em]">
              <Sun className="h-3.5 w-3.5 text-[var(--gold)]" /> {t.resKicker}
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              {t.resTitle1} <br /> {t.resTitle2} <span className="italic text-[var(--gold-soft)]">{t.resTitle3}</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/75">{t.resPara}</p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {resilienceIcons.map((Icon, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="h-full rounded-2xl glass p-6">
                <Icon className="h-7 w-7 text-[var(--gold)]" />
                <div className="mt-8 font-display text-xl">{t.resilience[i]}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-5 py-2.5 text-sm text-[var(--gold-soft)]">
            <Sparkles className="h-4 w-4" />
            {t.resBadge}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Neev() {
  const { t } = useT();
  return (
    <section className="relative bg-[var(--cream)] py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--orange)]">{t.neevKicker}</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            {t.neevTitle1} <br /><span className="italic text-[var(--navy)]">{t.neevTitle2}</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">{t.neevPara}</p>
        </Reveal>
        <Reveal delay={150} className="md:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl sm:col-span-2">
              <Tag n={10} />
              <img src={communityImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Tag n={11} />
              <img src={motherImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Tag n={12} />
              <img src={childReadingImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {neevPillarIcons.map((Icon, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="rounded-2xl border border-[var(--navy)]/10 bg-white p-5 text-center transition hover:border-[var(--gold)] hover:shadow-sm">
                <Icon className="mx-auto h-6 w-6 text-[var(--navy)]" />
                <div className="mt-3 text-sm font-medium text-[var(--navy)]">{t.neevPillars[i]}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Interns() {
  const { t } = useT();
  return (
    <section className="relative bg-[var(--navy-deep)] py-28 text-white md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <Tag n={13} />
            <img src={internImg} alt="" loading="lazy" className="h-[34rem] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">{t.internKicker}</div>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              {t.internTitle1} <span className="italic text-[var(--gold-soft)]">{t.internTitle2}</span>
            </h2>
            <p className="mt-8 max-w-md text-lg text-white/75">{t.internPara}</p>
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[55, 55, 2000].map((n, i) => (
                <div key={i} className="rounded-2xl glass p-5">
                  <div className="font-display text-3xl text-[var(--gold)]"><Counter to={n} /></div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{t.internStats[i]}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Voices() {
  const { t } = useT();
  const [i, setI] = useState(0);
  return (
    <section className="relative bg-white py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--orange)]">{t.voicesKicker}</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">{t.voicesTitle1} <span className="italic text-[var(--navy)]">{t.voicesTitle2}</span></h2>
            </div>
            <div className="hidden gap-2 md:flex">
              {t.voices.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-1.5 w-10 rounded-full transition ${k === i ? "bg-[var(--navy)]" : "bg-[var(--navy)]/15"}`} aria-label={`Voice ${k+1}`} />
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            {voiceImgs.map((img, k) => (
              <img key={k} src={img} alt="" loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
                style={{ opacity: k === i ? 1 : 0 }} />
            ))}
            <Tag n={14 + i} />
          </div>
          <div>
            <Quote className="h-10 w-10 text-[var(--gold)]" />
            <blockquote key={i} className="mt-6 font-display text-3xl md:text-4xl leading-[1.2] text-[var(--navy)] animate-rise">
              "{t.voices[i].q}"
            </blockquote>
            <div className="mt-8 text-sm">
              <div className="font-semibold text-[var(--navy)]">{t.voices[i].n}</div>
              <div className="text-muted-foreground">{t.voices[i].r}</div>
            </div>
            <div className="mt-10 flex gap-2">
              <button onClick={() => setI((i - 1 + t.voices.length) % t.voices.length)} className="rounded-full border border-[var(--navy)]/15 px-4 py-2 text-sm text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white">{t.prev}</button>
              <button onClick={() => setI((i + 1) % t.voices.length)} className="rounded-full border border-[var(--navy)]/15 px-4 py-2 text-sm text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white">{t.next}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const { t } = useT();
  return (
    <section className="relative bg-[var(--cream)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--orange)]">{t.journeyKicker}</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">{t.journeyTitle1} <span className="italic text-[var(--navy)]">{t.journeyTitle2}</span></h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-[var(--navy)]/70">
              {t.filterTags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--navy)]/15 px-3 py-1.5">{tag}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {galleryItems.map((g, i) => (
            <Reveal key={i} delay={i * 60} className={`${g.span} group relative overflow-hidden rounded-2xl`}>
              <div className="relative h-full w-full">
                <img src={g.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <Tag n={17 + i} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy-deep)]/80 to-transparent p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/85">{t.galleryTags[i]}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const { t } = useT();
  return (
    <section className="relative bg-[var(--navy-deep)] py-28 text-white md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">{t.roadmapKicker}</div>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">{t.roadmapTitle1} <span className="italic text-[var(--gold-soft)]">{t.roadmapTitle2}</span></h2>
          </div>
        </Reveal>
        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent md:block" />
          {t.roadmap.map((r, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="relative">
                <div className="relative z-10 mb-6 grid h-24 w-24 place-items-center rounded-full border border-[var(--gold)]/30 bg-[var(--navy-deep)]">
                  <div className="font-display text-2xl text-[var(--gold)]">{roadmapYears[i]}</div>
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
  const { t } = useT();
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <img src={childrenGroupImg} alt="" className="absolute inset-0 h-full w-full object-cover animate-kenburns" loading="lazy" />
      <Tag n={25} />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/40 via-[var(--navy-deep)]/55 to-[var(--navy-deep)]/90" />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
        <Reveal>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.98] text-balance">
            {t.closingTitle1} <span className="italic text-[var(--gold-soft)]">{t.closingTitle2}</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10 text-xs uppercase tracking-[0.35em] text-[var(--gold)]">{t.closingTag}</div>
          <p className="mt-3 text-lg text-white/85">{t.closingSub}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useT();
  return (
    <footer id="contact" className="bg-[#0a1430] py-20 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white p-1.5">
              <img src={biharLogo.url} alt="Government of Bihar" className="h-full w-full object-contain" />
            </div>
            <div className="font-display text-xl text-white">{t.brand}</div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">{t.footerPara}</p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">{t.contact}</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-white/50" /> {t.address}</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-white/50" /> info@projectswabhimaan.in</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-white/50" /> +91 06341 22 2222</li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">{t.connect}</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Twitter / X</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 pt-8 text-xs text-white/50">
        <div>© {new Date().getFullYear()} {t.copyright}</div>
        <div>{t.implementedBy}</div>
      </div>
    </footer>
  );
}

function Index() {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "hi" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] }}>
      <main className="bg-[var(--cream)] text-[var(--ink)]" lang={lang}>
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
    </LangCtx.Provider>
  );
}
