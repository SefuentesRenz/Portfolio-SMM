import React from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

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
  { src: "/assets/short-form-videos/Steak Video Edit.mp4", title: "Steak Video Edit" },
  { src: "/assets/short-form-videos/Skincare Video Edit.mp4", title: "Skincare Video Edit" },
  { src: "/assets/short-form-videos/Camera.mp4", title: "Camera Video Edit" },
];

const contentCalendarSlides = [
  "/assets/content-calendar/Content Calendar.png",
  "/assets/content-calendar/Content Calendar 2.png",
];

// ── Animation helpers ─────────────────────────────────────────────────────────

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
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
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

// ── Contact Form ──────────────────────────────────────────────────────────────

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
          className="w-full rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-center text-sm font-medium text-green-400">✓ Message sent! I&apos;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-center text-sm font-medium text-red-400">Something went wrong. Try emailing me directly.</p>
        )}
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [contentCalendarIndex, setContentCalendarIndex] = React.useState(0);

  const nextContentCalendarSlide = () => {
    setContentCalendarIndex((i) => (i + 1) % contentCalendarSlides.length);
  };

  return (
    <main className="min-h-screen bg-[#fffdfd] text-slate-900">
      <style>{revealStyles}</style>

      {/* HEADER */}
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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-red-50 bg-gradient-to-br from-white via-white to-red-50">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-100/70 blur-3xl" />
        <div className="absolute left-0 top-24 h-56 w-56 rounded-full bg-red-200/40 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-15">
          <RevealDiv delay="0ms" className="relative py-20 z-10 max-w-3xl">
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
              <a href="#projects" className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">View Case Studies</a>
              <a href="#services" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-700">Explore Services</a>
            </div>
          </RevealDiv>
          <RevealDiv delay="150ms" className="relative z-10">
            <div className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-[0_24px_80px_rgba(220,38,38,0.12)]">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-red-300">Snapshot</p>
                <div className="mt-6 space-y-5">
                  <div><p className="text-sm text-slate-300">Specialty</p><p className="mt-1 text-xl font-semibold">Social Media Management</p></div>
                  <div><p className="text-sm text-slate-300">Focus</p><p className="mt-1 text-xl font-semibold">Strategy, growth, and storytelling</p></div>
                  <div><p className="text-sm text-slate-300">Style</p><p className="mt-1 text-xl font-semibold">Clean, creative, and conversion-aware</p></div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">{skill}</div>
                ))}
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ABOUT */}
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
                  Hey there! I&apos;m Renz, a Social Media Manager focused on premium content, brand clarity, and measurable growth.
                  My mission is not just to help brands exist online, but to help them grow, stay relevant, and succeed.
                  I create and manage content strategies that increase visibility, build audience trust, and turn followers into loyal supporters.
                </p>
                <div className="mt-[55px] rounded-[1.75rem] border border-red-100 bg-white p-6 shadow-sm">
                  <p className="text-xl font-bold uppercase tracking-[0.28em] text-red-600">How I Help Brands Grow</p>
                  <p className="mt-4 text-xl leading-8 text-slate-700">
                    I don&apos;t just post content, I build strategic, results-driven marketing plans that work.
                    From crafting compelling content to analyzing trends and optimizing engagement, I make sure your brand stands out with consistency and purpose.
                  </p>
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* SERVICES */}
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
              <article className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg font-semibold">
                <p className="text-2xl font-semibold text-red-600">{service.title}</p>
                <p className="mt-3 text-xl leading-7 text-slate-950">{service.description}</p>
              </article>
            </RevealDiv>
          ))}
        </div>
        <RevealDiv delay="0ms" className="mt-8">
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Tools I use</h2>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6 md:grid-cols-9 items-center">
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

      {/* SAMPLE PROJECTS */}
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
                    <button type="button" onClick={nextContentCalendarSlide} aria-label="Show the next content calendar slide" className="absolute right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-3xl font-light text-red-600 shadow-lg transition hover:scale-105 hover:bg-white">&gt;</button>
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

      {/* CASE STUDIES */}
      <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <RevealDiv delay="0ms">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Selected work</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-950">Portfolio sections that show results, not just pretty posts.</h3>
          </div>
        </RevealDiv>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <RevealDiv key={project.title} delay={`${i * 100}ms`}>
              <article className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-red-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">Case study</p>
                    <h4 className="mt-1 text-lg font-semibold text-slate-950">{project.title}</h4>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{project.result}</p>
              </article>
            </RevealDiv>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-red-50 bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">

          <RevealDiv delay="0ms">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Contact</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Let&apos;s build something great together.</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Reach out through the form or any of the channels below — I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </RevealDiv>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">

            {/* Left: contact info */}
            <RevealDiv delay="0ms">
              <div className="space-y-4">
                <a href="mailto:sefuentesrenz31@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white text-lg">✉</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Email</p>
                    <p className="mt-0.5 text-sm font-medium text-white">sefuentesrenz31@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/639629560979" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white text-lg">💬</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">WhatsApp</p>
                    <p className="mt-0.5 text-sm font-medium text-white">+63 962 956 0979</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/renz-angelo-sefuentes-805428354/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white text-lg font-bold">in</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">LinkedIn</p>
                    <p className="mt-0.5 text-sm font-medium text-white">Renz Angelo Sefuentes</p>
                  </div>
                </a>
              </div>
            </RevealDiv>

            {/* Right: form */}
            <RevealDiv delay="150ms">
              <ContactForm />
            </RevealDiv>

          </div>
        </div>
      </section>

    </main>
  );
}