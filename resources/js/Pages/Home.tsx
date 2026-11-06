import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState, type ReactNode } from "react";
import {
    AndroidPlain,
    CplusplusPlain,
    CsharpPlain,
    DockerPlain,
    DotnetcorePlain,
    GitPlain,
    JavaPlain,
    JavascriptPlain,
    KotlinPlain,
    LaravelOriginal,
    LinuxPlain,
    PhpPlain,
    PythonPlain,
    ReactOriginal,
    SassOriginal,
    TypescriptPlain,
    UnityPlain,
    VuejsPlain,
    Windows11Original,
} from "devicons-react";
import me from "../../images/me-desk.png";
import dsharpplus from "../../images/projects/dsp.png";
import obsidian from "../../images/projects/obs.png";
import modcore from "../../images/projects/mcore.png";
import foobar from "../../images/projects/foobar.png";
import axolotl2d from "../../images/projects/axolotl2d.png";
import "../../css/home.css";

const skillGroups = [
    {
        name: "Languages",
        items: [
            { name: "C#", icon: CsharpPlain },
            { name: "C(++)", icon: CplusplusPlain },
            { name: "TypeScript", icon: TypescriptPlain },
            { name: "JavaScript", icon: JavascriptPlain },
            { name: "PHP", icon: PhpPlain },
            { name: "Python", icon: PythonPlain },
            { name: "Java", icon: JavaPlain },
            { name: "Kotlin", icon: KotlinPlain },
        ],
    },
    {
        name: "Frameworks",
        items: [
            { name: "ASP.NET Core", icon: DotnetcorePlain },
            { name: "Laravel", icon: LaravelOriginal },
            { name: "React", icon: ReactOriginal },
            { name: "Vue3", icon: VuejsPlain },
            { name: "Sass", icon: SassOriginal },
            { name: "Unity", icon: UnityPlain },
        ],
    },
    {
        name: "Platforms & tools",
        items: [
            { name: "Docker", icon: DockerPlain },
            { name: "Git", icon: GitPlain },
            { name: "Linux", icon: LinuxPlain },
            { name: "Windows", icon: Windows11Original },
            { name: "Android", icon: AndroidPlain },
        ],
    },
];

const projects = [
    {
        name: "DSharpPlus",
        description:
            "A .NET library for building bots on the Discord API. It started as a continuation of DiscordSharp and has since grown well beyond its predecessor.",
        link: "https://github.com/dsharpplus/dsharpplus",
        techStack: ".NET, C#",
        image: dsharpplus,
        featured: true,
    },
    {
        name: "Obsidian",
        description:
            "A Minecraft server written from scratch in C#, replicating what the official server does, but more efficiently.",
        link: "https://github.com/ObsidianMC/Obsidian",
        techStack: ".NET, C#, Minecraft",
        image: obsidian,
        featured: true,
    },
    {
        name: "ModCore",
        description:
            "A moderation bot for Discord. Built for my own server, then made public; it now serves over 150 Discord servers.",
        link: "https://github.com/naamloos/modcore",
        techStack: "C#, .NET, Discord API, PostgreSQL, Docker",
        image: modcore,
        featured: false,
    },
    {
        name: "foo_discord",
        description:
            "A foobar2000 add-on that adds Discord rich presence support. My first popular C++ project.",
        link: "https://github.com/naamloos/foo_discord",
        techStack: "C++, WinAPI, Discord RPC, foobar2000 SDK",
        image: foobar,
        featured: false,
    },
    {
        name: "Axolotl2D",
        description:
            "A lightweight 2D game engine on Silk.NET for small indie games, built around Microsoft's hosting extensions and dependency injection.",
        link: "https://github.com/naamloos/axolotl2d",
        techStack: ".NET, C#, Silk.NET, OpenGL",
        image: axolotl2d,
        featured: false,
    },
];

const socials = [
    { name: "GitHub", href: "https://github.com/Naamloos" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/naamloos/" },
    { name: "Discord", href: "https://discord.gg/hMRWUTa" },
];

const sections = [
    ["about", "About"],
    ["projects", "Projects"],
    ["skills", "Skills"],
    ["contact", "Contact"],
] as const;

type Theme = "system" | "light" | "dark";

function useTheme(): [Theme, (theme: Theme) => void] {
    const [theme, setThemeState] = useState<Theme>("system");

    useEffect(() => {
        try {
            const stored = localStorage.getItem("theme");
            if (stored === "light" || stored === "dark") setThemeState(stored);
        } catch {
            // Storage unavailable: stay on system.
        }
    }, []);

    function setTheme(next: Theme) {
        setThemeState(next);
        const root = document.documentElement;
        try {
            if (next === "system") localStorage.removeItem("theme");
            else localStorage.setItem("theme", next);
        } catch {
            // Storage unavailable: apply for this visit only.
        }
        if (next === "system") delete root.dataset.theme;
        else root.dataset.theme = next;
    }

    return [theme, setTheme];
}

const themeOrder: Theme[] = ["system", "light", "dark"];
const themeIcons: Record<Theme, ReactNode> = {
    system: (
        <>
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M8 20h8M12 16v4" />
        </>
    ),
    light: (
        <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
    ),
    dark: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
};

function ThemeButton({
    className,
    theme,
    onChange,
}: {
    className?: string;
    theme: Theme;
    onChange: (theme: Theme) => void;
}) {
    const next = themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length];
    const label = `Theme: ${theme}. Switch to ${next}.`;
    return (
        <button
            type="button"
            className={`nl-theme-btn${className ? ` ${className}` : ""}`}
            onClick={() => onChange(next)}
            aria-label={label}
            title={label}
        >
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {themeIcons[theme]}
            </svg>
        </button>
    );
}

function ArrowIcon() {
    return (
        <svg
            className="nl-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 17 17 7M8 7h9v9" />
        </svg>
    );
}

function SocialLinks() {
    return (
        <ul className="nl-socials">
            {socials.map((social) => (
                <li key={social.name}>
                    <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.name}
                        <ArrowIcon />
                        <span className="nl-sr"> (opens in a new tab)</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

function ErrorText({ id, children }: { id?: string; children: string }) {
    return (
        <p className="nl-error" id={id}>
            <span aria-hidden="true">✕ </span>
            {children}
        </p>
    );
}

export default function Home({
    messageSent = false,
    currentYear,
}: {
    messageSent?: boolean;
    currentYear?: number | string;
}) {
    const [theme, setTheme] = useTheme();
    const [sent, setSent] = useState(messageSent);
    const [failed, setFailed] = useState(false);
    const form = useForm({ name: "", email: "", message: "" });

    return (
        <div className="nl-site">
            <Head title="Ryan de Jonge" />
            <a className="nl-skip" href="#main">
                Skip to content
            </a>

            <header className="nl-header">
                <div className="nl-container nl-header-inner">
                    <a className="nl-brand" href="#about">
                        Ryan de Jonge
                    </a>
                    <nav aria-label="Sections" className="nl-nav">
                        <ul>
                            {sections.map(([id, label]) => (
                                <li
                                    key={id}
                                    className={
                                        id === "contact"
                                            ? "nl-nav-contact"
                                            : undefined
                                    }
                                >
                                    <a href={`#${id}`}>{label}</a>
                                </li>
                            ))}
                        </ul>
                        <ThemeButton
                            className="nl-header-theme"
                            theme={theme}
                            onChange={setTheme}
                        />
                    </nav>
                </div>
            </header>

            <main id="main">
                <section
                    className="nl-container nl-hero"
                    id="about"
                    aria-labelledby="hero-title"
                >
                    <div className="nl-hero-copy">
                        <h1 id="hero-title">Ryan de Jonge</h1>
                        <p className="nl-subtitle">Full stack software engineer</p>
                        <p className="nl-lead">
                            I work across the stack, from Discord libraries and
                            game servers to web apps, and I spend a lot of my
                            spare time on open source.
                        </p>
                        <p className="nl-lead">
                            Mostly C# and .NET, with plenty of PHP, TypeScript,
                            and C++ along the way.
                        </p>
                        <SocialLinks />
                    </div>
                    <div className="nl-hero-art">
                        <img src={me} alt="Ryan de Jonge working at a laptop, seen from behind" />
                    </div>
                </section>

                <section
                    className="nl-container nl-section"
                    id="projects"
                    aria-labelledby="projects-title"
                >
                    <h2 id="projects-title">Things I've made</h2>
                    <div className="nl-projects">
                        {projects.map((project, index) => (
                            <article
                                key={project.name}
                                className={`nl-card nl-project nl-project-${index}${project.featured ? " nl-project-featured" : ""}`}
                            >
                                <img src={project.image} alt="" loading="lazy" />
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p className="nl-stack">
                                    <span className="nl-sr">Built with: </span>
                                    {project.techStack}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View repository
                                    <span className="nl-sr">
                                        {" "}
                                        for {project.name} (opens in a new tab)
                                    </span>
                                    <ArrowIcon />
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="nl-container nl-section"
                    id="skills"
                    aria-labelledby="skills-title"
                >
                    <h2 id="skills-title">Things I use</h2>
                    <div className="nl-skills">
                        {skillGroups.map((group) => (
                            <div key={group.name} className="nl-skill-group">
                                <h3>{group.name}</h3>
                                <ul>
                                    {group.items.map((skill) => {
                                        const Icon = skill.icon;
                                        return (
                                            <li key={skill.name}>
                                                <Icon size={22} aria-hidden="true" />
                                                {skill.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    className="nl-container nl-section nl-contact"
                    id="contact"
                    aria-labelledby="contact-title"
                >
                    <div>
                        <h2 id="contact-title">Get in touch</h2>
                        <p className="nl-lead">
                            Got a role, a project, or just a question? Drop me a
                            message or find me on any of these.
                        </p>
                        <SocialLinks />
                    </div>
                    <form
                        className="nl-card nl-form"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setSent(false);
                            setFailed(false);
                            form.post(route("contact"), {
                                preserveScroll: true,
                                onSuccess: () => {
                                    form.reset();
                                    setSent(true);
                                },
                                onError: () => setFailed(true),
                            });
                        }}
                    >
                        <div className="nl-field">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                required
                                maxLength={50}
                                value={form.data.name}
                                onChange={(event) =>
                                    form.setData("name", event.target.value)
                                }
                                aria-invalid={Boolean(form.errors.name)}
                                aria-describedby={
                                    form.errors.name ? "name-error" : undefined
                                }
                            />
                            {form.errors.name && (
                                <ErrorText id="name-error">
                                    {form.errors.name}
                                </ErrorText>
                            )}
                        </div>
                        <div className="nl-field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={form.data.email}
                                onChange={(event) =>
                                    form.setData("email", event.target.value)
                                }
                                aria-invalid={Boolean(form.errors.email)}
                                aria-describedby={
                                    form.errors.email ? "email-error" : undefined
                                }
                            />
                            {form.errors.email && (
                                <ErrorText id="email-error">
                                    {form.errors.email}
                                </ErrorText>
                            )}
                        </div>
                        <div className="nl-field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                required
                                maxLength={1000}
                                value={form.data.message}
                                onChange={(event) =>
                                    form.setData("message", event.target.value)
                                }
                                aria-invalid={Boolean(form.errors.message)}
                                aria-describedby={`message-count${form.errors.message ? " message-error" : ""}`}
                            />
                            <p className="nl-hint" id="message-count">
                                {form.data.message.length}/1000 characters
                            </p>
                            {form.errors.message && (
                                <ErrorText id="message-error">
                                    {form.errors.message}
                                </ErrorText>
                            )}
                        </div>
                        <button
                            className="nl-btn nl-btn-primary"
                            type="submit"
                            disabled={form.processing}
                        >
                            {form.processing ? "Sending…" : "Send message"}
                        </button>
                        <div role="status" aria-live="polite">
                            {sent && (
                                <p className="nl-success">
                                    <span aria-hidden="true">✓ </span>
                                    Got it, thanks for writing. I'll get back to
                                    you soon.
                                </p>
                            )}
                            {failed && (
                                <ErrorText>
                                    Your message wasn't sent. Check the fields
                                    above and try again.
                                </ErrorText>
                            )}
                        </div>
                    </form>
                </section>
            </main>

            <footer className="nl-footer">
                <div className="nl-container nl-footer-inner">
                    <p>© {currentYear ?? new Date().getFullYear()} Ryan de Jonge</p>
                    <SocialLinks />
                    <ThemeButton
                        className="nl-footer-theme"
                        theme={theme}
                        onChange={setTheme}
                    />
                </div>
            </footer>
        </div>
    );
}
