import React from "react";


const services = [
  { title: "Social Media Management", description: "Managing your social accounts to ensure consistent posting, engagement, and brand presence." },
  { title: "Content Planning and Strategy", description: "Developing content plans that align with your goals and resonate with your audience." },
  { title: "Graphic Design", description: "Designing engaging visuals and content that strengthen your brand identity." },
  { title: "Short-Form Video Editing", description: "Creating attention-grabbing short-form videos optimized for TikTok, Reels, and Shorts." },
  { title: "Community Management", description: "Building relationships with your audience through active engagement and communication." },
  { title: "Analytics and Reporting", description: "Tracking key metrics and providing insights to improve content performance." },
];

const skills = [
  "Brand voice development",
  "Facebook, Instagram, TikTok",
  "Copywriting and storytelling",
  "Analytics, insights, and reporting",
];

const projects = [
  { title: "Launch campaign for a lifestyle brand", result: "Built a red-led content system that increased saves, shares, and qualified inquiries." },
  { title: "Community growth for a local business", result: "Turned daily posts into a repeatable funnel with stronger comments and DMs." },
  { title: "Founder-led personal brand", result: "Refined the voice, visuals, and posting rhythm for a more premium presence." },
];

const aboutImage = "/assets/about-portrait.JPG";
const caseStudyRoute = "/case-study";
const caseStudyImage = "/assets/case-study/Analytics - Pixel Pickers.png";

const sampleProjectGroups = [
  {
    id: "restaurant",
    title: "Restaurant",
    description: "Creative graphics for restaurant promotions, offers, and brand visibility.",
    images: [
      "/assets/graphic-designs/restaurant/okay (1).png",
      "/assets/graphic-designs/restaurant/okay (3).png",
      "/assets/graphic-designs/restaurant/okay (4).png",
      "/assets/graphic-designs/restaurant/okay (5).png",
      "/assets/graphic-designs/restaurant/okay.png",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Clean and persuasive visual content for property marketing and lead generation.",
    images: [
      "/assets/graphic-designs/Real-Estate/Buyer & seller consultation.png",
      "/assets/graphic-designs/Real-Estate/Buyer & seller consultation (1).png",
      "/assets/graphic-designs/Real-Estate/Buyer & seller consultation (2).png",
      "/assets/graphic-designs/Real-Estate/Buyer & seller consultation (3).png",
      "/assets/graphic-designs/Real-Estate/Buyer & seller consultation (5).png",
      "/assets/graphic-designs/Real-Estate/Buyer & seller consultation (6).png",
      "/assets/graphic-designs/Real-Estate/realestate1.png",
      "/assets/graphic-designs/Real-Estate/realestate2.png",
      "/assets/graphic-designs/Real-Estate/realestate3.png",
    ],
  },
  {
    id: "skincare",
    title: "Skincare",
    description: "Vibrant, on-brand visuals for skincare promotions and product highlights.",
    images: [
      "/assets/graphic-designs/skincare/6.png",
      "/assets/graphic-designs/skincare/2.png",
      "/assets/graphic-designs/skincare/3.png",
      "/assets/graphic-designs/skincare/4.png",
      "/assets/graphic-designs/skincare/5.png",
    ],
  },
  {
    id: "carousels",
    title: "Carousels",
    description: "Educational carousel designs built for retention, clarity, and engagement.",
    images: [
      "/assets/carousels/RUniversity Carousel/1.png",
      "/assets/carousels/RUniversity Carousel/2.png",
      "/assets/carousels/RUniversity Carousel/3.png",
      "/assets/carousels/RUniversity Carousel/4.png",
      "/assets/carousels/RUniversity Carousel/5.png",
      "/assets/carousels/RUniversity Carousel/6.png",
      "/assets/carousels/RUniversity Carousel/7.png",
      "/assets/carousels/RUniversity Carousel/8.png",
    ],
  },
];

const shortFormVideos = [
  { src: "/assets/short-form-videos/Pizza Edit.mp4", title: "Pizza Edit" },
  { src: "/assets/short-form-videos/Steak-Video-Edit.mp4", title: "Steak Video Edit" },
  { src: "/assets/short-form-videos/Skincare Video Edit.mp4", title: "Skincare Video Edit" },
  { src: "/assets/short-form-videos/Camera.mp4", title: "Camera Video Edit" },
];

const contentCalendarSlides = [
  "/assets/content-calendar/Content Calendar.png",
  "/assets/content-calendar/Content Calendar 2.png",
];

const revealStyles = `
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function useReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function RevealDiv({ children, className = "", delay = "0ms" }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = React.useState({ from_email: "", message: "" });
  const [status, setStatus] = React.useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.from_email || !formData.message) return;

    setStatus("sending");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_t549b5q",
          template_id: "template_7q221ov",
          user_id: "kYtz4Yp8py0p2jiGR",
          template_params: {
            from_email: formData.from_email,
            message: formData.message,
          },
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ from_email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur lg:p-8">
      <p className="text-lg font-semibold text-white">Send me a message</p>
      <p className="mt-1 text-sm text-slate-400">I&apos;ll reply within 24 hours.</p>
      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-400">Your Email</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-400">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={5}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={status === "sending" || !formData.from_email || !formData.message}
          className="w-full rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "success" && <p className="text-center text-sm font-medium text-green-400">✓ Message sent! I&apos;ll get back to you soon.</p>}
        {status === "error" && <p className="text-center text-sm font-medium text-red-400">Something went wrong. Try emailing me directly.</p>}
      </div>
    </div>
  );
}
function CaseStudyPage({ onBack }) {

const galleryVideo1 = "/assets/short-form-videos/Camera.mp4";
  const galleryImage1 = "/assets/case-study/Camera-edit1.jpg";
  const galleryImage2 = "/assets/case-study/Camera-edit2.jpg";
  const galleryImage3 = "/assets/case-study/Camera-edit3.jpg";

    return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.22),transparent_45%)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Experience & Case Study</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">Analytics - Pixel Pickers</h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                A focused look at how a new Facebook page started generating stronger views and engagement through clear creative direction, consistent posting, and performance-aware content.
              </p>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="w-fit rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-red-300 hover:bg-white/10 hover:text-red-200"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Summary */}
      {/* <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <article className="overflow-hidden rounded-[2rem] border grid grid-cols-2 border-white/10 bg-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="grid gap-0 lg:grid-rows-[auto_auto]">
            
            <div className="border-t border-white/10 p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Case Study Summary</p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">A Facebook page that started attracting real attention.</h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
                This page was built to grow visibility, reach the right audience, and turn engagement into momentum. The content direction focused on strong hooks, clear visuals, and consistent posting so the brand could build trust and keep improving performance over time.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  Back to Portfolio
                </button>
                <span className="text-sm text-slate-400">Add metrics and results here when you want to expand this case study.</span>
              </div>
            </div>
          </div>
        </article>
      </section> */}

      {/* CLIENT OVERVIEW */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-4 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Client Overview</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Pixel Pickers</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            "Pixel Pickers" is a camera rental business that provides affordable access to camera equipment for individuals who need it for personal or professional use. The business focuses on making camera rentals simple, accessible, and reliable for customers.
          </p>
        </div>
      </section>

      {/* PROJECT OBJECTIVES */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-4 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Project Objectives</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Goals & Direction</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Increase Pixel Pickers' social media presence.",
              "Improve brand awareness and visibility.",
              "Establish a consistent content strategy.",
              "Increase audience engagement on Facebook.",
              "Promote camera rental services through quality content.",
              "Build trust and credibility for the business.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-4 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Responsibilities</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">What I Handled</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Social Media Management",
                items: [
                  "Managed daily social media activities and page engagement.",
                  "Planned and organized content schedules for consistent posting.",
                  "Maintained consistent brand messaging.",
                ],
              },
              {
                title: "Graphic Design",
                items: [
                  "Designed static posts for promotions and information.",
                  "Created branded visual content for the page.",
                ],
              },
              {
                title: "Video Editing",
                items: [
                  "Produced and edited short-form promotional videos.",
                  "Created engaging reels for social media posting.",
                ],
              },
              {
                title: "Content Writing",
                items: [
                  "Wrote captions for posts and promotions.",
                  "Created clear and engaging call-to-action messages.",
                ],
              },
              {
                title: "Content Planning",
                items: [
                  "Researched trends related to camera rentals.",
                  "Generated content ideas aligned with business goals.",
                  "Organized content calendars for structured posting.",
                ],
              },
            ].map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-red-300">{role.title}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {role.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT TYPES CREATED */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-4 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Content Types Created</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Formats & Deliverables</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                label: "Static Graphics",
                description: "Promotional and informational posts covering camera rental services, equipment highlights, business updates, and general promotional content.",
              },
              {
                label: "Reels / Short Videos",
                description: "Short-form videos designed to capture audience attention, increase reach and visibility, and promote rental services.",
              },
              {
                label: "Stories",
                description: "Daily story content focused on brand updates, quick promotions, audience engagement, and simple tips and announcements.",
              },
            ].map((type) => (
              <div key={type.label} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-base font-bold text-white">{type.label}</p>
                <p className="text-sm leading-7 text-slate-400">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-4 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Portfolio Gallery</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Content Samples</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[
  { type: "video", src: galleryVideo1 },
  { type: "image", src: galleryImage1 },
  { type: "image", src: galleryImage2 },
  { type: "image", src: galleryImage3 },
            ].map((item, i) => (
        <div key={i} className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
    {item.type === "video" ? (
      <video
        src={item.src}
        className="h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img src={item.src} alt={`Gallery item ${i + 1}`} className="h-full w-full object-cover object-center" />
    )}
  </div>
))}
    </div>
  </div>
</section>

      {/* CONCLUSION */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-red-500/20 bg-red-950/20 p-8 backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">Conclusion</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Results & Takeaways</h2>
          <div className="bg-slate-900/40 p-4 sm:p-6">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900 max-w-sm h-64">
                <img src={encodeURI(caseStudyImage)} alt="Analytics case study for Pixel Pickers" className="h-full w-full object-cover object-center" />
              </div>
            </div>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
  Through just one month of consistent content creation, social media management, and visual design, Pixel Pickers was able to improve its online presence and connect better with its audience. The project achieved its monthly goals — increasing visibility, engagement, and brand trust through simple and effective content strategies.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={onBack}
              className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [contentCalendarIndex, setContentCalendarIndex] = React.useState(0);
  const [currentPath, setCurrentPath] = React.useState(() => window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (path === window.location.pathname) return;
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextContentCalendarSlide = () => {
    setContentCalendarIndex((index) => (index + 1) % contentCalendarSlides.length);
  };

  if (currentPath === caseStudyRoute) {
    return <CaseStudyPage onBack={() => navigateTo("/")} />;
  }

  return (
    <main className="min-h-screen bg-[#fffdfd] text-slate-900">
      <style>{revealStyles}</style>

      <header className="border-b border-red-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">Portfolio</p>
            <h1 className="text-lg font-semibold">Social Media Manager</h1>
          </div>
          <a href="#contact" className="rounded-full border border-red-600 px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white">
            Let&apos;s Work
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-red-50 bg-gradient-to-br from-white via-white to-red-50">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-100/70 blur-3xl" />
        <div className="absolute left-0 top-24 h-56 w-56 rounded-full bg-red-200/40 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-15">
          <RevealDiv delay="0ms" className="relative z-10 max-w-3xl py-20">
            <p className="mb-5 inline-flex rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm">
              Creative Social Media Manager for modern brands
            </p>
            <h2 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              I turn attention into <span className="text-red-600">brand growth</span>.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I help businesses build polished social presence, stronger engagement, and content systems that look premium and perform consistently.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#experience-case-study" className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
                View Case Studies
              </a>
              <a href="#services" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-700">
                Explore Services
              </a>
            </div>
          </RevealDiv>

          <RevealDiv delay="150ms" className="relative z-10">
            <div className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-[0_24px_80px_rgba(220,38,38,0.12)]">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-red-300">Snapshot</p>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm text-slate-300">Specialty</p>
                    <p className="mt-1 text-xl font-semibold">Social Media Management</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Focus</p>
                    <p className="mt-1 text-xl font-semibold">Strategy, growth, and storytelling</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Style</p>
                    <p className="mt-1 text-xl font-semibold">Clean, creative, and conversion-aware</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      <section id="about" className="border-y border-red-50 bg-red-50/50">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <RevealDiv delay="0ms">
              <div className="relative overflow-hidden rounded-[2rem] border border-red-100 bg-white p-4 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent" />
                <div className="relative flex h-[580px] w-[440px] items-stretch overflow-hidden rounded-[1.6rem] border border-red-200 bg-[#b91c1c] p-4 shadow-inner shadow-black/5">
                  <div className="absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%)]" />
                  <img src={aboutImage} alt="Portrait for the About Me section" className="relative z-10 h-full w-full rounded-[1.25rem] object-cover object-center shadow-[0_22px_60px_rgba(0,0,0,0.18)]" />
                  <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-red-200/45" />
                </div>
              </div>
            </RevealDiv>
            <RevealDiv delay="150ms">
              <div className="mt-[-10px]">
                <p className="text-3xl font-bold text-red-600">Your Social Media Partner in Growth</p>
                <p className="mt-3 max-w-full text-xl leading-8 text-slate-800">
                  Hey there! I&apos;m Renz, a Social Media Manager focused on premium content, brand clarity, and measurable growth. My mission is not just to help brands exist online, but to help them grow, stay relevant, and succeed. I create and manage content strategies that increase visibility, build audience trust, and turn followers into loyal supporters.
                </p>
                <div className="mt-[55px] rounded-[1.75rem] border border-red-100 bg-white p-6 shadow-sm">
                  <p className="text-xl font-bold uppercase tracking-[0.28em] text-red-600">How I Help Brands Grow</p>
                  <p className="mt-4 text-xl leading-8 text-slate-700">
                    I don&apos;t just post content, I build strategic, results-driven marketing plans that work. From crafting compelling content to analyzing trends and optimizing engagement, I make sure your brand stands out with consistency and purpose.
                  </p>
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <RevealDiv delay="0ms">
          <div className="mb-10 max-w-2xl">
            <p className="text-3xl font-semibold uppercase tracking-[0.3em] text-red-600">What I do</p>
            <h3 className="mt-6 text-3xl font-bold text-slate-950">My Services</h3>
          </div>
        </RevealDiv>
        <div className="mt-[-15px] grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <RevealDiv key={service.title} delay={`${i * 80}ms`}>
              <article className="rounded-3xl border border-red-100 bg-white p-6 font-semibold shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-2xl font-semibold text-red-600">{service.title}</p>
                <p className="mt-3 text-xl leading-7 text-slate-950">{service.description}</p>
              </article>
            </RevealDiv>
          ))}
        </div>
        <RevealDiv delay="0ms" className="mt-8">
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Tools I use</h2>
          <div className="mt-6 grid grid-cols-3 items-center gap-3 sm:grid-cols-6 md:grid-cols-9">
            {[
              "/assets/logos/notion.png",
              "/assets/logos/metricool.png",
              "/assets/logos/metabusinesssuite.png",
              "/assets/logos/capcut.png",
              "/assets/logos/canva.png",
              "/assets/logos/chatgpt.png",
              "/assets/logos/claude.svg",
              "/assets/logos/gemini.jpg",
              "/assets/logos/pinterest.png",
            ].map((src) => (
              <div key={src} className="flex items-center justify-center rounded-xl bg-white p-5 shadow-sm">
                <img src={src} alt="" className="h-14 w-auto object-contain" />
              </div>
            ))}
          </div>
        </RevealDiv>
      </section>

      <section id="sample-projects" className="border-y border-red-50 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <RevealDiv delay="0ms">
            <div className="mb-12 max-w-3xl">
              <p className="text-3xl font-bold uppercase tracking-[0.3em] text-red-600">Sample Projects</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">A curated look at the graphics and content styles I create for brands.</h3>
            </div>
          </RevealDiv>

          <div className="space-y-10">
            {sampleProjectGroups.map((group, groupIndex) => (
              <RevealDiv key={group.id} delay={`${groupIndex * 100}ms`}>
                <article className="rounded-[2rem] border border-red-100 bg-red-50/40 p-6 shadow-sm lg:p-8">
                  <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xl font-bold uppercase tracking-[0.28em] text-red-600">{group.title}</p>
                      <h4 className="mt-2 text-xl font-semibold text-slate-950">{group.description}</h4>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {group.images.map((src, index) => (
                      <div key={src} className="group overflow-hidden rounded-3xl border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                          <img src={encodeURI(src)} alt={`${group.title} sample ${index + 1}`} className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </RevealDiv>
            ))}

            <RevealDiv delay="0ms">
              <article className="rounded-[2rem] border border-red-100 bg-slate-950 p-6 text-white shadow-sm lg:p-8">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xl font-bold uppercase tracking-[0.28em] text-red-300">Short Form Videos</p>
                    <h4 className="mt-2 text-2xl font-bold text-white">Concept direction and edit ideas for high-retention reels.</h4>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {shortFormVideos.map((video) => (
                    <figure key={video.src} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm">
                      <video className="block h-auto w-full bg-black object-contain" controls preload="metadata" playsInline src={encodeURI(video.src)} />
                    </figure>
                  ))}
                </div>
              </article>
            </RevealDiv>

            <RevealDiv delay="0ms">
              <article className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-sm lg:p-8">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xl font-bold uppercase tracking-[0.28em] text-red-600">Content Calendar</p>
                    <h4 className="mt-2 text-2xl font-bold text-slate-950">A comprehensive calendar view for managing and organizing monthly content.</h4>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-slate-600">Tap the arrow on the right to switch between the two calendar layouts.</p>
                </div>
                <div className="mx-auto max-w-6xl">
                  <div className="relative overflow-hidden rounded-[2.25rem] border border-red-100 bg-slate-100 shadow-[0_24px_80px_rgba(220,38,38,0.12)]">
                    <div className="aspect-[16/9] w-full lg:aspect-[21/9]">
                      <img src={encodeURI(contentCalendarSlides[contentCalendarIndex])} alt={`Content calendar slide ${contentCalendarIndex + 1}`} className="h-full w-full object-cover object-center" />
                    </div>
                    <button
                      type="button"
                      onClick={nextContentCalendarSlide}
                      aria-label="Show the next content calendar slide"
                      className="absolute right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-3xl font-light text-red-600 shadow-lg transition hover:scale-105 hover:bg-white"
                    >
                      &gt;
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm">
                      {contentCalendarSlides.map((slide, index) => (
                        <span key={slide} className={index === contentCalendarIndex ? "h-2.5 w-2.5 rounded-full bg-white" : "h-2.5 w-2.5 rounded-full bg-white/40"} />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </RevealDiv>
          </div>
        </div>
      </section>

      <section id="experience-case-study" className="border-b border-red-50  bg-[#fffdfd]">
        
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <RevealDiv delay="0ms">
            <div className="mb-12 max-w-3xl">
              <p className="text-3xl font-bold uppercase tracking-[0.3em] text-red-600">Experience & Case Study</p>
              <h3 className="mt-3 text-xl font-bold text-slate-950">A focused example of growth-driven content and page performance.</h3>
            </div>
          </RevealDiv>

          <RevealDiv delay="100ms">
           <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-sm">
  <div className="flex flex-col lg:flex-row">
    {/* Left column - Image */}
    <div className="border-b border-red-50 bg-slate-50 p-4 sm:p-6 lg:border-b-0 lg:border-r lg:w-1/2">
      <div className="overflow-hidden rounded-[1.75rem] border border-red-100 bg-slate-100 shadow-sm h-full">
        <img
          src={encodeURI(caseStudyImage)}
          alt="Analytics case study for Pixel Pickers"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>

    {/* Right column - Content */}
    <div className="p-6 sm:p-8 lg:p-10 lg:w-1/2 flex flex-col justify-center">
      <p className="text-2xl font-semibold uppercase tracking-[0.3em] text-red-600">Pixel Pickers</p>
      <h4 className="mt-3 text-xl font-bold text-slate-950">
        A new Facebook page that gained stronger views and engagement.
      </h4>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
        This case study highlights how a new Facebook page started building attention with a focused
        content strategy, sharper visual direction, and consistent optimization. The goal was to
        create momentum, improve engagement, and make the brand feel active and credible from the
        start.
      </p>
      <div className="mt-8">
        <button
          type="button"
          onClick={() => navigateTo(caseStudyRoute)}
          className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
        >
          View Case Study
        </button>
      </div>
    </div>
  </div>
</article>
          </RevealDiv>
        </div>
      </section>

      

      <section id="contact" className="border-t border-red-50 bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <RevealDiv delay="0ms">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Contact</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Let&apos;s build something great together.</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Reach out through the form or any of the channels below — I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </RevealDiv>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <RevealDiv delay="0ms">
              <div className="space-y-4">
                <a href="mailto:sefuentesrenz31@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-lg text-white">✉</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Email</p>
                    <p className="mt-0.5 text-sm font-medium text-white">sefuentesrenz31@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/639629560979" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600 text-lg text-white">💬</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">WhatsApp</p>
                    <p className="mt-0.5 text-sm font-medium text-white">+63 962 956 0979</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/renz-angelo-sefuentes-805428354/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">in</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">LinkedIn</p>
                    <p className="mt-0.5 text-sm font-medium text-white">Renz Angelo Sefuentes</p>
                  </div>
                </a>
              </div>
            </RevealDiv>

            <RevealDiv delay="150ms">
              <ContactForm />
            </RevealDiv>
          </div>
        </div>
      </section>
    </main>
  );
}
