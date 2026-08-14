import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Menu,
  X,
  Cloud,
  Database,
  Zap,
  Package,
  GraduationCap,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
  MessageSquare,
  Braces,
  Download,
  Sparkles,
} from "lucide-react";


const Tokens = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');

    :root{
      --bg: #0A0E14;
      --bg-alt: #0D1219;
      --surface: #141B24;
      --surface-hi: #1B2430;
      --border: #26303D;
      --text: #F3F6FA;
      --text-dim: #9AA6B8;
      --muted: #616E80;
      --accent: #5B8DEF;
      --accent-2: #22D3EE;
      --gold: #F5B942;
      --ok: #34D399;
      --font-display: 'Sora', sans-serif;
      --font-body: 'Inter', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
    .rg-root{ background: var(--bg); color: var(--text); font-family: var(--font-body); -webkit-font-smoothing:antialiased; }
    .rg-display{ font-family: var(--font-display); letter-spacing:-0.02em; }
    .rg-mono{ font-family: var(--font-mono); }
    .rg-grad-text{ background: linear-gradient(90deg, var(--accent), var(--accent-2)); -webkit-background-clip:text; background-clip:text; color:transparent; }
    .rg-focus:focus-visible{ outline:2px solid var(--accent-2); outline-offset:3px; }
    .rg-glow{ position:absolute; width:560px; height:560px; border-radius:50%; background: radial-gradient(circle, rgba(91,141,239,0.22), transparent 70%); filter: blur(10px); pointer-events:none; }
    .rg-card{ background: var(--surface); border:1px solid var(--border); transition: border-color .2s ease, transform .2s ease, background .2s ease, box-shadow .2s ease; }
    .rg-card:hover{ border-color: var(--accent); transform: translateY(-4px); background: var(--surface-hi); box-shadow: 0 12px 32px -12px rgba(91,141,239,0.35); }
    .rg-chip{ font-family:var(--font-mono); font-size:11px; letter-spacing:.03em; color: var(--text-dim); background: var(--bg-alt); border:1px solid var(--border); padding:3px 9px; border-radius:4px; }
    .rg-rise{ opacity:0; transform:translateY(20px); animation: rg-rise .6s cubic-bezier(.2,.7,.3,1) forwards; }
    @keyframes rg-rise{ to{opacity:1; transform:translateY(0);} }
    .rg-underline{ position:relative; text-decoration:none; }
    .rg-underline::after{ content:""; position:absolute; left:0; right:0; bottom:-3px; height:2px; background: linear-gradient(90deg, var(--accent), var(--accent-2)); transform: scaleX(0); transform-origin:left; transition: transform .25s ease; }
    .rg-underline:hover::after{ transform: scaleX(1); }
    .rg-skillpill{
      display:flex; align-items:center; gap:8px; padding:8px 14px 8px 10px; border-radius:999px;
      background: var(--surface); border:1px solid var(--border); transition: all .2s ease;
    }
    .rg-skillpill:hover{ border-color: var(--accent-2); transform: translateY(-2px); }
    .rg-topbar{ height:3px; background: linear-gradient(90deg, var(--accent), var(--accent-2)); border-radius:3px 3px 0 0; opacity:.85; }
    .rg-skillcard{ background: var(--surface); border:1px solid var(--border); border-top:3px solid var(--card-accent, var(--accent)); transition: transform .2s ease, background .2s ease; }
    .rg-skillcard:hover{ transform: translateY(-3px); background: var(--surface-hi); }
    .rg-dot{ width:5px; height:5px; border-radius:50%; background: var(--card-accent, var(--accent)); display:inline-block; margin-right:7px; flex-shrink:0; }
    .rg-livebtn{ display:inline-flex; align-items:center; gap:6px; font-family:var(--font-mono); font-size:11px; font-weight:600; letter-spacing:.03em; color: #fff; background: var(--accent); padding:7px 12px; border-radius:7px; transition: background .2s ease, transform .2s ease; }
    .rg-card:hover .rg-livebtn{ background: var(--accent-2); transform: translateX(2px); }
    ::selection{ background: var(--accent); color: #fff; }
    @media (prefers-reduced-motion: reduce){ .rg-rise{ animation:none; opacity:1; transform:none; } }
  `}</style>
);

function Reveal({ children, delay = 0, className = "" }) {
  const ref = React.useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={shown ? `rg-rise ${className}` : `opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}


function IconGithub({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 1.9 5.4 2.2 5.4 2.2a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 8.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}
function IconLinkedin({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V13a2 2 0 0 1 4 0v3.5M12 12.7v3.8" />
    </svg>
  );
}


function IconReact({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="3.4" fill={color} />
      <g stroke={color} strokeWidth="1.8">
        <ellipse cx="20" cy="20" rx="16" ry="6.4" />
        <ellipse cx="20" cy="20" rx="16" ry="6.4" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6.4" transform="rotate(120 20 20)" />
      </g>
    </svg>
  );
}
function IconNode({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
      <path d="M20 4 L34 12 V28 L20 36 L6 28 V12 Z" stroke={color} strokeWidth="2" fill="none" />
      <path d="M20 13 V27 M14 17 L26 23 M14 23 L26 17" stroke={color} strokeWidth="1.6" opacity="0.7" />
    </svg>
  );
}
function IconPython({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
      <path d="M20 5c-8 0-8 4-8 4v5h9v1.5H9s-4.5.5-4.5 9.5S9 34 9 34h4v-5.5s0-4.5 5-4.5h9s4.5 0 4.5-4.5v-9S32 5 20 5Z" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M20 35c8 0 8-4 8-4v-5h-9v-1.5h12s4.5-.5 4.5-9.5S31 6 31 6h-4v5.5s0 4.5-5 4.5h-9S8.5 16 8.5 20.5v9S8 35 20 35Z" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" opacity="0.55" />
      <circle cx="15" cy="10" r="1.4" fill={color} />
      <circle cx="25" cy="30" r="1.4" fill={color} opacity="0.55" />
    </svg>
  );
}
function IconMySQL({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="10" rx="13" ry="5" stroke={color} strokeWidth="1.8" />
      <path d="M7 10v20c0 2.8 5.8 5 13 5s13-2.2 13-5V10" stroke={color} strokeWidth="1.8" />
      <path d="M7 20c0 2.8 5.8 5 13 5s13-2.2 13-5" stroke={color} strokeWidth="1.8" opacity="0.6" />
    </svg>
  );
}
function IconAWS({ color }) {
  return <Cloud size={20} color={color} strokeWidth={1.8} />;
}
function IconFastAPI({ color }) {
  return <Zap size={20} color={color} strokeWidth={1.8} />;
}
function IconGenAI({ color }) {
  return <Sparkles size={20} color={color} strokeWidth={1.8} />;
}

const CORE_STACK = [
  { label: "Python", Icon: IconPython, color: "var(--gold)" },
  { label: "Node.js", Icon: IconNode, color: "var(--ok)" },
  { label: "React", Icon: IconReact, color: "var(--accent-2)" },
  { label: "FastAPI", Icon: IconFastAPI, color: "var(--accent)" },
  { label: "AWS", Icon: IconAWS, color: "var(--accent-2)" },
  { label: "GenAI", Icon: IconGenAI, color: "var(--accent)" },
  { label: "SQL", Icon: IconMySQL, color: "var(--accent)" },
];


const NAV = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const PROJECTS = [
  {
    name: "Purchase Order Management",
    client: "IJCP",
    year: "2026",
    stack: ["FastAPI", "React", "MySQL"],
    desc: "A full-stack web app with AI-powered invoice parsing that auto-fills billing details from uploaded files; implements role-based hierarchical access control and manages purchase orders, budgets, per-PO billing ",
    Icon: FileText,
    color: "var(--accent)",
    link: "https://accounts.ijcpgroup.com/",
  },
  {
    name: "Gurukool Hub",
    client: "Novartis",
    year: "2025",
    stack: ["Node.js", "React", "MySQL"],
    desc: "SaaS platform where admins assign and audit cases via a master login, while users fill auto-saving forms tracked on a live dashboard.",
    Icon: LayoutDashboard,
    color: "var(--accent-2)",
    link: "https://gurukooltraining.com/",
  },
  {
    name: "AutoCompare",
    client: "Personal project",
    year: "2026",
    stack: ["FastAPI", "LangGraph", "LangChain", "React", "Playwright"],
    desc: "A multi-step AI agent that turns natural-language queries into live, ranked car price comparisons scraped across three auto sites, with a resilient scraping pipeline and real-time agent progress in the UI.",
    Icon: Car,
    color: "var(--gold)",
    link: "https://autocompare-app.vercel.app/",
  },
  {
    name: "Warranty Claim System",
    client: "Tata Motors",
    year: "2026",
    stack: ["FastAPI", "React", "MySQL"],
    desc: "An ETL pipeline that ingests raw warranty Excel data, transforms and loads it into SQL, then generates meaningful claim reports and emails them directly to Tata Motors.",
    Icon: Workflow,
    color: "var(--ok)",
    link: "https://warrantyclaim.capac.co.in/",
  },
  {
    name: "Inovace",
    client: "",
    year: "2025",
    stack: ["Node.js", "React", "MySQL"],
    desc: "A contract management system for tracking contracts end-to-end, adding per-contract billing details and generating invoices directly from the app.",
    Icon: ShieldCheck,
    color: "var(--gold)",
    link: "https://inovace-llc.com/",
  },
  {
    name: "BI-Migrator",
    client: "",
    year: "2024",
    stack: ["Python", "React", "AWS", "PostgreSQL"],
    desc: "A SaaS platform that lets clients migrate their Tableau workbooks and dashboards to Power BI, handling the data migration programmatically end-to-end.",
    Icon: Database,
    color: "var(--accent)",
    link: "https://bimigrator.com/",
  },
  {
    name: "AI Chat Application",
    client: "Personal project",
    year: "",
    stack: ["Python", "Ollama", "Streamlit"],
    desc: "A local-first chat app running via Ollama, answering user queries through a clean Streamlit interface.",
    Icon: MessageSquare,
    color: "var(--accent-2)",
    link: "",
  },
];

const SKILLS = [
  { group: "Backend", color: "var(--accent)", items: ["Python", "Node.js", "FastAPI", "Express", "Flask", "REST API", "OOP"] },
  { group: "Frontend", color: "var(--accent-2)", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML"] },
  { group: "AI", color: "var(--gold)", items: ["OpenAI", "Claude", "LangChain", "RAG", "Chroma", "Agents", "Prompt Engineering"] },
  { group: "Cloud & Data", color: "var(--ok)", items: ["AWS", "Docker", "MySQL", "PostgreSQL", "MongoDB", "Linux", "Git / CI-CD"] },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    org: "Vega6 Webware Technologies",
    date: "Jun 2025 — Now",
    active: true,
    points: [
      "Developed and deployed full-stack applications for multiple clients, including AI-integrated accounting systems, ETL pipelines, and SaaS platforms.",
      "Built with Python, Node.js, React and MySQL; managed server deployments on Linux end to end.",
    ],
  },
  {
    role: "Full Stack Developer Trainee",
    org: "DAM Studioz",
    date: "Mar 2025 — Jun 2025",
    points: ["Built frontend and backend features on a production React, Node.js, and MongoDB stack."],
  },
  {
    role: "Software Developer Trainee",
    org: "Vaidhya Megha Pvt. Ltd. (Samyama.ai)",
    date: "Jan 2024 — Nov 2024",
    points: [
      "Built and optimized BI-Migrator, a full-stack app integrating AWS services (S3, DynamoDB, Lambda, Amplify).",
      "Created reporting dashboards in Tableau and Power BI for internal analytics.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Nijomee Technologies Pvt. Ltd.",
    date: "Oct 2023 — Jan 2024",
    points: ["Worked on backend development with Python and PostgreSQL."],
  },
];

const EDUCATION = [
  {
    degree: "MCA — Artificial Intelligence & Machine Learning",
    org: "Amity University Online, Noida",
    date: "Jun 2024 — Jun 2026",
    note: "Coursework spanning ML fundamentals, applied AI, and software engineering.",
  },
  {
    degree: "MSc — Biotechnology",
    org: "Thapar Institute of Engineering & Technology, Patiala",
    date: "Sep 2021 — Sep 2023",
    note: "Built a foundation in analytical, research-driven thinking in Bioinformatics.",
  },
];

const CERTS = [
  "Getting Started with Node.js — Simplilearn",
  "Basics of SQL — HackerRank",
  "Introduction to Python — GUVI, IITM",
];


function Nav() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <header className="sticky top-0 z-30 backdrop-blur" style={{ background: "rgba(10,14,20,0.85)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("top")} className="rg-display rg-focus font-bold text-lg">
          Rahul <span style={{ color: "var(--accent)" }}>Gupta</span>
        </button>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="rg-focus rg-underline" style={{ color: "var(--text-dim)" }}>{n.label}</button>
          ))}
          <button onClick={() => scrollTo("contact")} className="rg-focus text-sm font-semibold px-4 py-2 rounded-md" style={{ background: "var(--accent)", color: "#fff" }}>
            Hire me
          </button>
        </nav>
        <button className="sm:hidden rg-focus" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="sm:hidden flex flex-col px-5 pb-4 gap-3 text-sm">
          {NAV.map((n) => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left rg-focus" style={{ color: "var(--text-dim)" }}>{n.label}</button>)}
          <button onClick={() => scrollTo("contact")} className="text-left rg-focus font-semibold" style={{ color: "var(--accent)" }}>Hire me</button>
        </nav>
      )}
    </header>
  );
}


function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="rg-glow" style={{ top: "-180px", right: "-140px" }} />
      <div className="rg-glow" style={{ bottom: "-220px", left: "-160px", background: "radial-gradient(circle, rgba(34,211,238,0.14), transparent 70%)" }} />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-16 sm:pb-20 relative">
        <div className="flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "var(--ok)" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--ok)" }} />
          Open to new opportunities
        </div>
        <h1 className="rg-display font-extrabold leading-[1.02] text-2xl sm:text-3xl md:text-4xl max-w-3xl">
          Hi I'm <span className="rg-grad-text">Rahul Gupta</span>, a Full-stack developer building AI-powered products.
        </h1>
        <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-dim)" }}>
          I design and develop production systems for teams at IJCP, Tata Motors, and Novartis — from AI-powered Purchase Order Management System to ETL pipeline and SaaS platforms
          like Gurukool Hub and BI-Migrator.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {CORE_STACK.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="rg-skillpill">
                <s.Icon color={s.color} />
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="/resume.pdf" download
            className="rg-focus text-sm font-semibold px-6 py-3.5 rounded-lg inline-flex items-center gap-2" style={{ background: "var(--accent)", color: "#fff" }}>
            Resume <Download size={16} />
          </a>
          <a href="mailto:rahulrggupta50@gmail.com" className="rg-focus text-sm font-semibold px-6 py-3.5 rounded-lg inline-flex items-center gap-2 border" style={{ borderColor: "var(--border)" }}>
            <Mail size={16} /> Contact me
          </a>
          <div className="flex items-center gap-4 ml-2">
            <a href="https://www.linkedin.com/in/rahul-gupta-4b6289188/" className="rg-focus" style={{ color: "var(--text-dim)" }} aria-label="LinkedIn"><IconLinkedin size={20} /></a>
            <a href="https://github.com/rg10rahul" className="rg-focus" style={{ color: "var(--text-dim)" }} aria-label="GitHub"><IconGithub size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}


function ProjectCard({ p, i }) {
  const hasLink = Boolean(p.link);

  const CardInner = (
    <div className="rg-card h-full flex flex-col rounded-xl overflow-hidden">
      <div className="rg-topbar" style={{ background: p.color }} />
      <div className="flex flex-col flex-1 p-6">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
          <p.Icon size={18} color={p.color} />
        </div>
        <h3 className="rg-display text-[17px] font-bold leading-snug mb-1">{p.name}</h3>
        {(p.client || p.year) && (
          <div className="rg-mono text-[11px] mb-3" style={{ color: p.color }}>
            {p.client}{p.client && p.year ? " · " : ""}{p.year}
          </div>
        )}
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-dim)" }}>{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {p.stack.map((s, j) => <span key={j} className="rg-chip">{s}</span>)}
        </div>
        {hasLink && (
          <span className="rg-livebtn self-start">
            View Live <ArrowUpRight size={13} />
          </span>
        )}
      </div>
    </div>
  );

  return (
    <Reveal delay={(i % 3) * 90}>
      {hasLink ? (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rg-focus block h-full"
          aria-label={`View live project: ${p.name}`}
        >
          {CardInner}
        </a>
      ) : (
        CardInner
      )}
    </Reveal>
  );
}

function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <p className="rg-mono text-xs mb-2" style={{ color: "var(--accent-2)" }}>SELECTED WORK</p>
        <h2 className="rg-display text-3xl sm:text-4xl font-bold mb-10">Projects I have Delivered</h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>
    </section>
  );
}


function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <Reveal>
          <p className="rg-mono text-xs mb-2" style={{ color: "var(--accent-2)" }}>TOOLKIT</p>
          <h2 className="rg-display text-3xl sm:text-4xl font-bold mb-12">Skills</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((g, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="rg-skillcard rounded-xl p-6 h-full" style={{ "--card-accent": g.color }}>
                <h3 className="rg-display text-base font-bold mb-4" style={{ color: g.color }}>{g.group}</h3>
                <ul className="space-y-2.5">
                  {g.items.map((it, j) => (
                    <li key={j} className="text-sm flex items-center" style={{ color: "var(--text-dim)", "--card-accent": g.color }}>
                      <span className="rg-dot" />{it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <p className="rg-mono text-xs mb-2" style={{ color: "var(--accent-2)" }}>CAREER</p>
        <h2 className="rg-display text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
      </Reveal>
      <div className="space-y-5">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="rg-card rounded-xl p-6 sm:p-7" style={{ borderLeft: e.active ? "3px solid var(--ok)" : "1px solid var(--border)" }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="rg-display text-lg font-bold">{e.role}</h3>
                  {e.active && (
                    <span className="rg-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(52,211,153,0.12)", color: "var(--ok)", border: "1px solid rgba(52,211,153,0.3)" }}>
                      CURRENT
                    </span>
                  )}
                </div>
                <span className="rg-mono text-xs" style={{ color: "var(--muted)" }}>{e.date}</span>
              </div>
              <p className="text-sm font-medium mb-4" style={{ color: "var(--accent-2)" }}>{e.org}</p>
              <ul className="space-y-2">
                {e.points.map((pt, j) => (
                  <li key={j} className="text-sm leading-relaxed flex gap-2.5" style={{ color: "var(--text-dim)" }}>
                    <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--muted)" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


function Education() {
  return (
    <section id="education" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <Reveal>
          <p className="rg-mono text-xs mb-2" style={{ color: "var(--accent-2)" }}>BACKGROUND</p>
          <h2 className="rg-display text-3xl sm:text-4xl font-bold mb-12">Education</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {EDUCATION.map((e, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="rg-card rounded-xl p-6 sm:p-7 h-full">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
                  <GraduationCap size={18} color="var(--accent)" />
                </div>
                <h3 className="rg-display text-lg font-bold leading-snug mb-1">{e.degree}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--accent-2)" }}>{e.org}</p>
                <p className="rg-mono text-[11px] mb-4" style={{ color: "var(--muted)" }}>{e.date}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{e.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180}>
          <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text)" }}>Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {CERTS.map((c, i) => (
              <span key={i} className="rg-chip py-2 px-4 text-xs">{c}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="rg-glow" style={{ top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 relative text-center">
        <Reveal>
          <p className="rg-mono text-xs mb-4" style={{ color: "var(--accent-2)" }}>GET IN TOUCH</p>
          <h2 className="rg-display font-extrabold text-4xl sm:text-5xl max-w-2xl mx-auto leading-[1.05]">
            Let's build something worth shipping.
          </h2>
          <p className="mt-5 max-w-md mx-auto" style={{ color: "var(--text-dim)" }}>
            Open to full-stack and AI-integration roles. I usually reply within a day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="mailto:rahulrggupta50@gmail.com" className="rg-focus text-sm font-semibold px-6 py-4 rounded-lg inline-flex items-center gap-2" style={{ background: "var(--accent)", color: "#fff" }}>
              <Mail size={16} /> rahulrggupta50@gmail.com
            </a>
            <a href="tel:+918447608605" className="rg-focus text-sm font-semibold px-6 py-4 rounded-lg inline-flex items-center gap-2 border" style={{ borderColor: "var(--border)" }}>
              <Phone size={16} /> +91 84476 08605
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/rahul-gupta-4b6289188/" className="rg-focus flex items-center gap-2 text-sm rg-underline" style={{ color: "var(--text-dim)" }}><IconLinkedin size={16} /> LinkedIn</a>
            <a href="https://github.com/rg10rahul" className="rg-focus flex items-center gap-2 text-sm rg-underline" style={{ color: "var(--text-dim)" }}><IconGithub size={16} /> GitHub</a>
          </div>
        </Reveal>
        <div className="mt-24 text-xs" style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} Rahul Gupta — India</div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="rg-root min-h-screen">
      <Tokens />
      <Nav />
      <Hero />
      <Work />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}