const resumeData = {
    name: "Alex Chen",
    title: "Full Stack Developer & Security Researcher",
    email: "alex.chen@hacker.terminal",
    phone: "+86 138-****-****",
    location: "Beijing, China",
    github: "github.com/alexchen",
    website: "alexchen.dev",
    
    summary: "Passionate developer with 5+ years of experience in web development and cybersecurity. Specialized in building secure, scalable applications and penetration testing.",
    
    skills: [
        "JavaScript", "Python", "Node.js", "React", "Vue.js",
        "Docker", "Kubernetes", "AWS", "Linux", "Bash",
        "SQL", "MongoDB", "Redis", "Git", "CI/CD",
        "Penetration Testing", "OWASP", "Cryptography"
    ],
    
    experience: [
        {
            company: "TechCorp Security",
            position: "Senior Security Engineer",
            period: "2021 - Present",
            description: "Lead security audits, implement secure coding practices, and develop internal security tools. Reduced vulnerabilities by 60%."
        },
        {
            company: "StartupXYZ",
            position: "Full Stack Developer",
            period: "2019 - 2021",
            description: "Built scalable web applications using React and Node.js. Implemented microservices architecture serving 100K+ users."
        },
        {
            company: "Freelance",
            position: "Web Developer",
            period: "2017 - 2019",
            description: "Developed custom web solutions for various clients. Specialized in e-commerce and CMS platforms."
        }
    ],
    
    education: [
        {
            school: "Beijing University of Technology",
            degree: "Bachelor of Computer Science",
            period: "2013 - 2017"
        }
    ],
    
    projects: [
        {
            name: "SecureAuth System",
            description: "Multi-factor authentication system with biometric support",
            tech: "Node.js, React, PostgreSQL, Redis"
        },
        {
            name: "PenTest Framework",
            description: "Automated penetration testing toolkit",
            tech: "Python, Flask, Docker"
        },
        {
            name: "Blockchain Explorer",
            description: "Real-time blockchain transaction explorer",
            tech: "Vue.js, WebSocket, Node.js"
        }
    ],
    
    certifications: [
        "CEH (Certified Ethical Hacker)",
        "AWS Certified Solutions Architect",
        "CISSP (In Progress)"
    ]
};

function typeWriter(text, element, speed = 30) {
    return new Promise((resolve) => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                resolve();
            }
        }, speed);
    });
}

function formatResume() {
    let content = "";
    
    content += `╔═══════════════════════════════════════════════════════╗\n`;
    content += `║                    RESUME.TXT                        ║\n`;
    content += `╚═══════════════════════════════════════════════════════╝\n\n`;
    
    content += `[PERSONAL INFO]\n`;
    content += `Name: ${resumeData.name}\n`;
    content += `Title: ${resumeData.title}\n`;
    content += `Email: ${resumeData.email}\n`;
    content += `Phone: ${resumeData.phone}\n`;
    content += `Location: ${resumeData.location}\n`;
    content += `GitHub: ${resumeData.github}\n`;
    content += `Website: ${resumeData.website}\n\n`;
    
    content += `[SUMMARY]\n`;
    content += `${resumeData.summary}\n\n`;
    
    content += `[SKILLS]\n`;
    resumeData.skills.forEach(skill => {
        content += `  • ${skill}\n`;
    });
    content += `\n`;
    
    content += `[EXPERIENCE]\n`;
    resumeData.experience.forEach(exp => {
        content += `  ${exp.position} @ ${exp.company}\n`;
        content += `  Period: ${exp.period}\n`;
        content += `  ${exp.description}\n\n`;
    });
    
    content += `[EDUCATION]\n`;
    resumeData.education.forEach(edu => {
        content += `  ${edu.degree}\n`;
        content += `  ${edu.school} (${edu.period})\n\n`;
    });
    
    content += `[PROJECTS]\n`;
    resumeData.projects.forEach(proj => {
        content += `  ${proj.name}\n`;
        content += `  ${proj.description}\n`;
        content += `  Tech: ${proj.tech}\n\n`;
    });
    
    content += `[CERTIFICATIONS]\n`;
    resumeData.certifications.forEach(cert => {
        content += `  ✓ ${cert}\n`;
    });
    content += `\n`;
    
    content += `[END OF FILE]\n`;
    content += `Press Ctrl+C to exit...\n`;
    
    return content;
}

async function displayResume() {
    const output = document.getElementById('output');
    const content = formatResume();
    
    output.textContent = '';
    await typeWriter(content, output, 10);
    
    // Add glitch effect randomly
    setInterval(() => {
        if (Math.random() > 0.95) {
            output.classList.add('glitch');
            setTimeout(() => {
                output.classList.remove('glitch');
            }, 300);
        }
    }, 2000);
}

// Start typing effect when page loads
function init() {
    const output = document.getElementById('output');
    if (output) {
        setTimeout(() => {
            displayResume();
        }, 500);
    } else {
        // Retry if DOM not ready
        setTimeout(init, 100);
    }
}

// Try both DOMContentLoaded and load events
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

