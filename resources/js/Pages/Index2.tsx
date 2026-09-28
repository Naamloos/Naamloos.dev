import { Head, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
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
import me from "../../images/me.jpg";
import dsharpplus from "../../images/projects/dsp.png";
import obsidian from "../../images/projects/obs.png";
import modcore from "../../images/projects/mcore.png";
import foobar from "../../images/projects/foobar.png";
import axolotl2d from "../../images/projects/axolotl2d.png";
import "../../css/index2.css";

const skills = [
    { name: "Android", icon: AndroidPlain },
    { name: "ASP.NET Core", icon: DotnetcorePlain },
    { name: "C#", icon: CsharpPlain },
    { name: "C(++)", icon: CplusplusPlain },
    { name: "Docker", icon: DockerPlain },
    { name: "Git", icon: GitPlain },
    { name: "Java", icon: JavaPlain },
    { name: "JavaScript", icon: JavascriptPlain },
    { name: "Kotlin", icon: KotlinPlain },
    { name: "Laravel", icon: LaravelOriginal },
    { name: "Linux", icon: LinuxPlain },
    { name: "PHP", icon: PhpPlain },
    { name: "Python", icon: PythonPlain },
    { name: "React", icon: ReactOriginal },
    { name: "Sass", icon: SassOriginal },
    { name: "TypeScript", icon: TypescriptPlain },
    { name: "Unity", icon: UnityPlain },
    { name: "Vue3", icon: VuejsPlain },
    { name: "Windows", icon: Windows11Original },
];

const projects = [
    {
        name: "DSharpPlus",
        description:
            "DSharpPlus is a .NET Standard library for making bots using the Discord API. It started of as a continuation of DiscordSharp, but has since become much better than its predecessor.",
        link: "https://github.com/dsharpplus/dsharpplus",
        techStack: ".NET, C#",
        image: dsharpplus,
    },
    {
        name: "Obsidian",
        description:
            "Obsidian is a minecraft server fully written from scratch, trying to replicate what the official minecraft server does, but more efficiently in C#.",
        link: "https://github.com/ObsidianMC/Obsidian",
        techStack: ".NET, C#, Minecraft",
        image: obsidian,
    },
    {
        name: "ModCore",
        description:
            "ModCore is a powerful moderation bot for Discord. Originally developed for my personal server, it has since gone public and is currently serving over 150 discord servers.",
        link: "https://github.com/naamloos/modcore",
        techStack: "C#, .NET, Discord API, PostgreSQL, Docker",
        image: modcore,
    },
    {
        name: "foo_discord",
        description:
            "Foo_discord is a foobar2000 addon adding Discord rich presence support. It is my first popular C++ project.",
        link: "https://github.com/naamloos/foo_discord",
        techStack: "C++, WinAPI, Discord RPC, foobar2000 SDK",
        image: foobar,
    },
    {
        name: "Axolotl2D",
        description:
            "Axolotl2D is a small lightweight 2D game engine based on Silk.NET. It was built as a personal practice project, intended for smaller indie games. It makes heavy use of Microsoft's hosting extensions and thus supports and makes heavy use of dependency injection.",
        link: "https://github.com/naamloos/axolotl2d",
        techStack: ".NET, C#, Silk.NET, OpenGL",
        image: axolotl2d,
    },
];

function GridBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        let frame = 0;
        let width = 0;
        let height = 0;
        let distance = 0;
        let previousTime: number | undefined;

        function draw() {
            context!.clearRect(0, 0, width, height);
            for (const [size, x, y, color] of [
                [64, distance % 64, 0, "rgba(128, 170, 255, 0.143)"],
                [128, 0, -(distance % 128), "rgba(75, 125, 230, 0.092)"],
            ] as const) {
                context!.fillStyle = color;
                // Fractional coordinates preserve subpixel coverage between frames.
                for (let left = x - size; left < width; left += size)
                    context!.fillRect(left, 0, 2, height);
                for (let top = y - size; top < height; top += size)
                    context!.fillRect(0, top, width, 2);
            }
        }

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            const ratio = window.devicePixelRatio || 1;
            canvas!.width = Math.round(width * ratio);
            canvas!.height = Math.round(height * ratio);
            context!.setTransform(ratio, 0, 0, ratio, 0, 0);
            draw();
        }

        function animate(time: number) {
            if (previousTime !== undefined)
                distance += Math.min(time - previousTime, 50) * 0.008;
            previousTime = time;
            draw();
            frame = requestAnimationFrame(animate);
        }

        function updateMotion() {
            cancelAnimationFrame(frame);
            previousTime = undefined;
            draw();
            if (!reducedMotion.matches && !document.hidden)
                frame = requestAnimationFrame(animate);
        }

        resize();
        updateMotion();
        window.addEventListener("resize", resize);
        reducedMotion.addEventListener("change", updateMotion);
        document.addEventListener("visibilitychange", updateMotion);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            reducedMotion.removeEventListener("change", updateMotion);
            document.removeEventListener("visibilitychange", updateMotion);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="naamloos-grid" aria-hidden="true" />
    );
}

function SkillButton({ skill }: { skill: (typeof skills)[number] }) {
    const Icon = skill.icon;
    return (
        <span className="naamloos-button skill-button">
            <Icon size={20} color="#fff" aria-hidden="true" />
            <span>{skill.name}</span>
        </span>
    );
}

export default function Index2({
    messageSent = false,
    currentYear,
}: {
    messageSent?: boolean;
    currentYear?: number | string;
}) {
    const [sent, setSent] = useState(messageSent);
    const form = useForm({ name: "", email: "", phone: "", message: "" });

    return (
        <div className="naamloos-site" id="top">
            <Head title="Ryan de Jonge" />
            <a className="naamloos-skip" href="#main">
                skip to content
            </a>
            <GridBackground />

            <main id="main">
                <section
                    className="naamloos-intro"
                    id="about"
                    aria-labelledby="intro-title"
                >
                    <div className="naamloos-avatar">
                        <img src={me} alt="Ryan de Jonge" />
                    </div>
                    <div className="naamloos-intro-copy">
                        <h2 id="intro-title">Ryan de Jonge</h2>
                        <p>
                            Full Stack Software Engineer with an interest in
                            Open-Source development and a love for code.
                            Passionate about creating efficient and scalable
                            software solutions.
                        </p>
                        <p>
                            Experienced in a variety of programming languages
                            and frameworks, and always willing to learn and
                            contribute to the developer community.
                        </p>
                        <div className="naamloos-links">
                            <a
                                href="https://github.com/Naamloos"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github ↗
                            </a>
                            <a
                                href="https://www.linkedin.com/in/naamloos/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                linkedin ↗
                            </a>
                            <a
                                href="https://discord.gg/hMRWUTa"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                discord ↗
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    className="naamloos-section"
                    id="projects"
                    aria-labelledby="projects-title"
                >
                    <div className="naamloos-rule" />
                    <h2 id="projects-title">things i've made</h2>
                    <div className="naamloos-project-list">
                        {projects.map((project, index) => (
                            <article
                                className="naamloos-project"
                                key={project.name}
                            >
                                <a
                                    className={`naamloos-button project-button project-color-${index % 4}`}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.name} on GitHub`}
                                >
                                    <img
                                        src={project.image}
                                        alt=""
                                        loading="lazy"
                                    />
                                    <span>{project.name}</span>
                                </a>
                                <div className="naamloos-project-copy">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <small>{project.techStack}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="naamloos-section"
                    id="skills"
                    aria-labelledby="skills-title"
                >
                    <div className="naamloos-rule" />
                    <h2 id="skills-title">things i use</h2>
                    <div className="naamloos-skill-list">
                        {skills.map((skill) => (
                            <SkillButton key={skill.name} skill={skill} />
                        ))}
                    </div>
                </section>

                <section
                    className="naamloos-section"
                    id="contact"
                    aria-labelledby="contact-title"
                >
                    <div className="naamloos-rule" />
                    <h2 id="contact-title">things i should know</h2>
                    <form
                        className="naamloos-form"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setSent(false);
                            form.post(route("contact"), {
                                onSuccess: () => {
                                    form.reset();
                                    setSent(true);
                                },
                            });
                        }}
                    >
                        <label htmlFor="name">
                            name <span>*</span>
                        </label>
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
                            placeholder="what do your friends call you?"
                            aria-invalid={Boolean(form.errors.name)}
                        />
                        <small role="alert">{form.errors.name}</small>
                        <label htmlFor="email">
                            email <span>*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={form.data.email}
                            onChange={(event) =>
                                form.setData("email", event.target.value)
                            }
                            placeholder="you@example.com"
                            aria-invalid={Boolean(form.errors.email)}
                        />
                        <small role="alert">{form.errors.email}</small>
                        <label htmlFor="phone">
                            phone <span>(optional)</span>
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            maxLength={20}
                            value={form.data.phone}
                            onChange={(event) =>
                                form.setData("phone", event.target.value)
                            }
                            placeholder="only if you want"
                            aria-invalid={Boolean(form.errors.phone)}
                        />
                        <small role="alert">{form.errors.phone}</small>
                        <label htmlFor="message">
                            message <span>*</span>
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            required
                            maxLength={1000}
                            value={form.data.message}
                            onChange={(event) =>
                                form.setData("message", event.target.value)
                            }
                            placeholder="type something nice..."
                            aria-invalid={Boolean(form.errors.message)}
                        />
                        <small role="alert">{form.errors.message}</small>
                        <button
                            className="naamloos-button button-blue-mid"
                            type="submit"
                            disabled={form.processing}
                        >
                            {form.processing ? "sending..." : "send message ↗"}
                        </button>
                        {sent && (
                            <p className="naamloos-success" role="status">
                                got it! thanks for writing. i'll get back to you
                                soon.
                            </p>
                        )}
                    </form>
                </section>
            </main>

            <footer className="naamloos-footer">
                <a
                    className="naamloos-button button-blue"
                    href="https://github.com/Naamloos"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github ↗
                </a>
                <span>
                    © {currentYear ?? new Date().getFullYear()} Ryan de Jonge
                </span>
                <a href="#top">back up ↑</a>
            </footer>
        </div>
    );
}
