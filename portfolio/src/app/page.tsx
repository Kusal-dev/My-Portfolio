'use client';

import React, { useState, useRef, useEffect } from 'react';
import { personalData, Project, SkillCategory } from './data';
import {
  Terminal as TerminalIcon,
  Cpu,
  Shield,
  Code,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Server,
  Layers,
  Sparkles,
  BookOpen,
  Send,
  Eye,
  Download,
} from 'lucide-react';

// Custom inline SVG icons for GitHub & LinkedIn due to removal in Lucide v1.x
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// SVG Logos for Technologies
const CLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
    <path d="M116.3 90.7c-9.6 15.6-26 25.3-44.5 25.3-30 0-54.3-24.3-54.3-54.3s24.3-54.3 54.3-54.3c17.5 0 33.1 8.5 42.8 22.5l21.2-15.9C119.5 13 97 1 71.8 1 31.6 1 0 32.6 0 72.8S31.6 144.6 71.8 144.6c27 0 50.7-14.1 63.8-35.9l-19.3-18z" />
  </svg>
);

const PthreadsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
    <circle cx="8" cy="6" r="2.5" fill="currentColor" />
    <circle cx="16" cy="12" r="2.5" fill="currentColor" />
    <circle cx="10" cy="18" r="2.5" fill="currentColor" />
  </svg>
);

const ForkLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="19" r="2.5" />
    <path d="M12 7.5v5c0 1.5-1.5 2.5-3 3.5M12 12.5c0 1.5 1.5 2.5 3 3.5" />
  </svg>
);

const JavaLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 10h10v5c0 2-2 4-5 4H9c-3 0-5-2-5-4v-5z" />
    <path d="M16 12h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
    <path d="M9 3c.5 1-.5 2 0 3M13 3c.5 1-.5 2 0 3" />
    <path d="M3 21h16" />
  </svg>
);

const PythonLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.93 2C6.96 2 7.15 4.15 7.15 4.15l.01 2.21h4.86v.69H5.16S2 7.37 2 12.33c0 4.96 2.76 4.77 2.76 4.77h1.64v-2.31c0 0-.08-2.77 2.74-2.77h4.84s2.69-.09 2.69-2.61V6.2s.22-4.2-4.74-4.2zm-2.29 1.48c.4 0 .72.32.72.73 0 .4-.32.73-.72.73s-.73-.33-.73-.73.33-.73.73-.73zM12.07 22c4.97 0 4.78-2.15 4.78-2.15l-.01-2.21h-4.86v-.69h6.86s3.16.32 3.16-4.64c0-4.96-2.76-4.77-2.76-4.77h-1.64v2.31s.08 2.77-2.74 2.77h-4.84s-2.69.09-2.69 2.61v3.21s-.22 4.2 4.74 4.2zm2.29-1.48c-.4 0-.72-.32-.72-.73 0-.4.32-.73.72-.73.41 0 .73.33.73.73s-.32.73-.73.73z" />
  </svg>
);

const PandasLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21a8 8 0 0 0 8-8c0-3.3-2.7-6-6-6H10c-3.3 0-6 2.7-6 6a8 8 0 0 0 8 8z" />
    <path d="M6.5 7c-1.5 0-2.5-1-2.5-2.5S5 2 6.5 2 9 3 9 4.5" />
    <path d="M17.5 7c1.5 0 2.5-1 2.5-2.5S19 2 17.5 2 15 3 15 4.5" />
    <circle cx="9" cy="13" r="1" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
    <path d="M12 16h.01" strokeWidth="3" />
  </svg>
);

const GradioLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14h6v7H4zm0-9h6v7H4zm10 9h6v7h-6zm0-9h6v7h-6z" />
  </svg>
);

const SocketsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="3" width="14" height="12" rx="2" />
    <path d="M9 15v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4" />
    <path d="M9 7h2M13 7h2" />
  </svg>
);

const HmacLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="3" />
    <path d="M12 8v6M8 11h8" />
  </svg>
);

const LinuxLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c-2.8 0-5 2.2-5 5v3c0 .8.2 1.5.5 2.2C5.6 13.5 4 15.8 4 18.5 4 20.4 5.6 22 7.5 22h9c1.9 0 3.5-1.6 3.5-3.5 0-2.7-1.6-5-3.5-6.3.3-.7.5-1.4.5-2.2V7c0-2.8-2.2-5-5-5z" />
    <circle cx="10" cy="8" r="0.75" fill="currentColor" />
    <circle cx="14" cy="8" r="0.75" fill="currentColor" />
    <path d="M11 11h2l-1 0.75z" fill="currentColor" />
  </svg>
);

const WiresharkLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2s-8 6-8 12c0 4.4 3.6 8 8 8s8-3.6 8-8c0-6-8-12-8-12z" />
    <path d="M12 6v12M8 12h8" />
  </svg>
);

const AwsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a3 3 0 0 1 0 6h-.5" />
    <path d="M8 18c4 2 8 0 8 0" />
    <path d="M14 16.5l2 1.5-2 1.5" />
  </svg>
);

const skillLogos: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
  "C": CLogo,
  "pthreads": PthreadsLogo,
  "fork (IPC)": ForkLogo,
  "Java": JavaLogo,
  "Python": PythonLogo,
  "Pandas": PandasLogo,
  "Gradio": GradioLogo,
  "Sockets": SocketsLogo,
  "HMAC": HmacLogo,
  "Linux": LinuxLogo,
  "Wireshark": WiresharkLogo,
  "AWS Academy": AwsLogo,
};

export default function Home() {
  const [imgError, setImgError] = useState(false);
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'whoami',
      output: (
        <div className="text-slate-300">
          <p className="font-semibold text-emerald-400">{personalData.name}</p>
          <p className="text-sm">{personalData.title}</p>
          <p className="text-xs text-slate-400 mt-1">Sri Lanka Institute of Information Technology (SLIIT)</p>
        </div>
      )
    },
    {
      cmd: 'systeminfo',
      output: (
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-400 max-w-sm">
          <div>OS Name:</div><div className="text-emerald-400">Windows Developer Environment</div>
          <div>Academic Year:</div><div>2nd Year (SLIIT)</div>
          <div>Specialization:</div><div>Systems & Cyber Security</div>
          <div>Active Kernels:</div><div>POSIX, pthreads, raw sockets</div>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [cliHistory]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    preventDefault();
    const cleanCmd = cliInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="text-slate-400 text-xs space-y-1">
            <p className="text-emerald-400 font-semibold mb-1">Available Commands:</p>
            <p><span className="text-emerald-300 font-mono w-24 inline-block">about</span>- Display Wijayawardena&apos;s background info</p>
            <p><span className="text-emerald-300 font-mono w-24 inline-block">skills</span>- List skills across core domains</p>
            <p><span className="text-emerald-300 font-mono w-24 inline-block">projects</span>- Display summary of system/crypto projects</p>
            <p><span className="text-emerald-300 font-mono w-24 inline-block">contact</span>- Show verified contact paths</p>
            <p><span className="text-emerald-300 font-mono w-24 inline-block">systeminfo</span>- Display mocked environment status</p>
            <p><span className="text-emerald-300 font-mono w-24 inline-block">clear</span>- Clear terminal screen log</p>
          </div>
        );
        break;
      case 'about':
        output = (
          <div className="text-slate-300 text-xs leading-relaxed max-w-xl">
            <p>{personalData.aboutMe}</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-sm font-bold text-emerald-400 mb-2 tracking-wide">Technical Expertise</p>
            {personalData.skills.map((cat, i) => (
              <div key={i} className="text-slate-300">
                <p className="text-emerald-400 font-semibold">{cat.category}:</p>
                <p className="text-slate-400 font-mono">{cat.skills.map(s => s.name).join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-3 text-xs max-w-xl">
            {personalData.projects.map((proj, i) => (
              <div key={i} className="border-l border-emerald-500/40 pl-2">
                <p className="font-semibold text-emerald-400">{proj.title} <span className="text-[10px] text-slate-500">[{proj.role}]</span></p>
                <p className="text-slate-300 mt-1">{proj.description}</p>
                <p className="text-slate-400 mt-1"><span className="text-emerald-500/80">Tech:</span> {proj.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p><span className="text-slate-400">Email:</span> {personalData.contact.email}</p>
            <p><span className="text-slate-400">Phone:</span> {personalData.contact.phone}</p>
            <p><span className="text-slate-400">LinkedIn:</span> <a href={personalData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">wijayawardena-dki</a></p>
          </div>
        );
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        output = (
          <span className="text-red-400">
            &apos;{cleanCmd}&apos; is not recognized as an internal or external command. Type &apos;help&apos; for suggestions.
          </span>
        );
    }

    setCliHistory(prev => [...prev, { cmd: cliInput, output }]);
    setCliInput('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),rgba(255,255,255,0))]" />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 md:py-16 flex flex-col gap-12 relative z-10">
        {/* Visual Hero Header */}
        <section id="identity" className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/5 flex-shrink-0 flex items-center justify-center bg-slate-950">
              {!imgError ? (
                <img
                  src="/images/profile.jpg"
                  alt={personalData.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <Shield className="w-10 h-10 text-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-500 font-mono mt-1 tracking-wider uppercase">SECURE</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none" />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                {personalData.name}
              </h1>
              <p className="text-lg text-slate-300 font-medium font-mono leading-relaxed">
                {personalData.title}
              </p>
              <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
                {personalData.aboutMe}
              </p>
            </div>
          </div>

          <div id="contact" className="flex md:flex-col gap-3 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 w-full md:w-auto items-center justify-around md:justify-center">
            <a href={`mailto:${personalData.contact.email}`} className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 hover:text-emerald-400 transition-all duration-300 text-slate-400 shadow-sm" title="Email Contact">
              <Mail className="w-5 h-5" />
            </a>
            <a href={`tel:${personalData.contact.phone}`} className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 hover:text-emerald-400 transition-all duration-300 text-slate-400 shadow-sm" title="Call Phone">
              <Phone className="w-5 h-5" />
            </a>
            <a href={personalData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 hover:text-emerald-400 transition-all duration-300 text-slate-400 shadow-sm" title="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={personalData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 hover:text-emerald-400 transition-all duration-300 text-slate-400 shadow-sm" title="GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalData.contact.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30 transition-all shadow-[0_0_15px_rgba(16,185,129,0.05)]">
              <Eye size={14} />
              view_resume
            </a>
          </div>
        </section>

        {/* Live Interactive Command Prompt */}
        <section className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold">
              Developer Terminal
            </div>
            <div className="w-12" />
          </div>

          <div className="p-5 font-mono text-sm min-h-[220px] max-h-[350px] overflow-y-auto flex flex-col gap-4 bg-slate-950/95 scrollbar-thin scrollbar-thumb-slate-800">
            <div className="text-slate-500 text-xs">
              <p>Microsoft Windows [Version 10.0.22631.3527]</p>
              <p>(c) Microsoft Corporation. All rights reserved.</p>
              <p className="mt-1">Initial socket and system checks: OK. Loaded data.ts configurations.</p>
              <p className="text-emerald-500/80 mt-1">Type &quot;help&quot; to list available command APIs.</p>
            </div>

            {cliHistory.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="text-emerald-500/70">C:\Users\dev\portfolio&gt;</span>
                  <span className="text-slate-200">{item.cmd}</span>
                </div>
                <div className="pl-4 text-slate-300">{item.output}</div>
              </div>
            ))}

            <div ref={terminalEndRef} />

            <form onSubmit={handleCommandSubmit} className="flex items-center gap-1.5 mt-auto pt-2 border-t border-slate-900">
              <span className="text-emerald-500 text-sm font-semibold">C:\Users\dev\portfolio&gt;</span>
              <input
                type="text"
                value={cliInput}
                onChange={e => setCliInput(e.target.value)}
                placeholder="type a command (e.g., help, about, skills, projects)..."
                className="flex-1 bg-transparent text-emerald-400 border-none outline-none focus:ring-0 p-0 font-mono text-sm placeholder-slate-700"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
              />
              <button type="submit" className="text-emerald-500 hover:text-emerald-400 p-1">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>

        {/* Grid: Core Metrics & Skills */}
        <section id="protocols" className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold tracking-tight uppercase font-mono text-slate-200">
              Technical Skills & Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalData.skills.map((category: SkillCategory, i: number) => {
              let Icon = Code;
              if (category.category.toLowerCase().includes('systems')) Icon = Server;
              if (category.category.toLowerCase().includes('security')) Icon = Shield;
              if (category.category.toLowerCase().includes('networking')) Icon = Shield;

              return (
                <div key={i} className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/35 transition-all duration-300 flex flex-col gap-4 backdrop-blur-sm group">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                    <Icon className="w-5 h-5 text-emerald-400 group-hover:rotate-6 transition-transform duration-300" />
                    <h3 className="font-semibold font-mono text-sm text-emerald-300 uppercase tracking-wide">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill, sIdx) => {
                      const LogoComponent = skillLogos[skill.name];
                      return (
                        <div key={sIdx} className="flex items-center bg-slate-950/40 border border-slate-800/60 rounded-xl p-3 hover:border-emerald-500/40 hover:bg-slate-900/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-300 group/skill">
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 border border-slate-800/60 flex items-center justify-center group-hover/skill:scale-110 group-hover/skill:border-emerald-500/20 transition-all duration-300">
                              {LogoComponent ? (
                                <LogoComponent className="w-4 h-4 transition-transform duration-300" />
                              ) : (
                                <Code className="w-4 h-4 text-emerald-400" />
                              )}
                            </div>
                            <span className="text-xs font-mono text-slate-300 group-hover/skill:text-slate-100 transition-colors duration-200">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Technical Engineering Projects */}
        <section id="deployments" className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold tracking-tight uppercase font-mono text-slate-200">
              Technical Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalData.projects.map((proj: Project, idx: number) => (
              <div key={idx} className="flex flex-col justify-between bg-slate-900/30 border border-slate-800/80 hover:border-emerald-500/40 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/[0.02] backdrop-blur-sm group border-l-4 border-l-emerald-500/60">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-emerald-300 transition-colors duration-200 leading-tight">
                      {proj.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <span className="text-emerald-400">Role:</span>
                    <span>{proj.role}</span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {proj.longDescription}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Impact: {proj.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800/80 text-[10px] font-mono text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Styled Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-8 relative z-10">
        <div className="max-w-6xl w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} Wijayawardena D.K.I. All rights reserved.</p>
            <p className="text-[10px] text-slate-600 mt-0.5">SLIIT Academic Portfolio // Group 01.001</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] text-slate-400">Secure Environment Enabled</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}