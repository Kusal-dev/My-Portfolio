"use client";

import React from "react";
import { Terminal, Shield, FileText, Send, Layers } from "lucide-react";

export default function Navbar() {
    const navItems = [
        { name: "IDENTITY", href: "#identity", icon: <Terminal size={14} /> },
        { name: "PROTOCOLS", href: "#protocols", icon: <Shield size={14} /> },
        { name: "DEPLOYMENTS", href: "#deployments", icon: <Layers size={14} /> },
        { name: "DIGITAL_CV", href: "/resume.pdf", icon: <FileText size={14} />, isExternal: true },
        { name: "HANDSHAKE", href: "#contact", icon: <Send size={14} /> },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
        if (isExternal) return; // Allow normal navigation for the PDF
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-emerald-500/10 bg-black/80 backdrop-blur-md px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Left Side: Logo Branding */}
                <div className="font-mono text-sm tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
                    &lt;KUSAL // WIJAYAWARDENA&gt;
                </div>

                {/* Right Side: Links */}
                <div className="flex items-center gap-6 font-mono text-xs tracking-widest text-slate-400">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target={item.isExternal ? "_blank" : undefined}
                            rel={item.isExternal ? "noopener noreferrer" : undefined}
                            onClick={(e) => handleScroll(e, item.href, item.isExternal)}
                            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors duration-200 uppercase"
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    );
}