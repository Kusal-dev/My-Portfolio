"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalData = void 0;
exports.personalData = {
    name: "Wijayawardena D.K.I.",
    title: "Cyber Security Undergradute",
    aboutMe: "A Motivated Cyber Security Undergraduate who is technically skilled in Python, Java,\nand C programming languages. Proven capability in Defensive Security with hands-on\nexperience in detecting phishing URLs and extensive research in OSINT. Skilled in\noperating Ubuntu Linux environment and conducting forensic analysis on network with\nWireshark and SIEM tools. Passionate creative problem solver.",
    contact: {
        phone: "+94 783648861",
        email: "indeewara04@gmail.com",
        linkedin: "https://www.linkedin.com/in/kusal-indeewara-wijayawardena-4a0a752b5",
        github: "https://github.com/wijayawardena-dki",
        resumeUrl: "/resume.pdf",
    },
    skills: [
        {
            category: "Low-level Systems",
            skills: [
                { name: "C" },
                { name: "pthreads" },
                { name: "fork (IPC)" },
            ]
        },
        {
            category: "Software & Web",
            skills: [
                { name: "Java" },
                { name: "Python" },
                { name: "Pandas" },
                { name: "Gradio" },
            ]
        },
        {
            category: "Security/Networking",
            skills: [
                { name: "Sockets" },
                { name: "HMAC" },
                { name: "Linux" },
                { name: "AWS Academy" },
            ]
        }
    ],
    projects: [
        {
            title: "Concurrent Server Architecture",
            description: "A low-level C concurrent server utilizing pthreads and POSIX sockets to handle multiple simultaneous clients safely and securely.",
            longDescription: "Developed a robust multi-threaded server application in C. Handled concurrency by implementing a dynamic thread-pool using `pthreads` to avoid the overhead of process creation. Established secure connection sockets and optimized socket descriptor recycling to handle up to 1000+ concurrent clients with thread synchronization (mutexes, condition variables) preventing race conditions and resource leaks.",
            technologies: ["C", "pthreads", "Sockets", "Linux", "POSIX"],
            role: "Lead Systems Developer",
            impact: "Reduced processing latency by 40% under simulation of high concurrency."
        },
        {
            title: "Financial Carbon Recommendation Tool",
            description: "A Python data application powered by Pandas and Gradio, providing investment optimization based on historical carbon outputs.",
            longDescription: "Designed an analytics dashboard for measuring and forecasting investment carbon footprints. Built using Pandas for rapid calculation of weighted emissions scores from transaction datasets and created a clean web UI using Gradio to recommend green investment alternatives dynamically.",
            technologies: ["Python", "Pandas", "Gradio", "NumPy", "Matplotlib"],
            role: "Data & Interface Engineer",
            impact: "Allowed simulated carbon footprint reductions of up to 35% across test portfolios."
        },
        {
            title: "Secure Cryptographic Handshake",
            description: "A Python network handshake implementation implementing cryptographic verification using HMAC and secure socket connections.",
            longDescription: "Implemented a custom challenge-response authentication handshake over TCP sockets. Ensured integrity and anti-replay resistance by signing key exchanges with Hash-based Message Authentication Codes (HMAC) and encrypting session payloads to prevent MITM (Man-in-the-Middle) sniffing.",
            technologies: ["Python", "Sockets", "HMAC", "Cryptography", "Security Protocols"],
            role: "Security Engineer",
            impact: "Ensured authentication validation times under 15ms with 100% security coverage of data-in-transit."
        }
    ]
};
