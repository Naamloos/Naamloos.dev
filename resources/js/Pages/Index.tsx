import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import Box from "@/Components/Box";
import TextLayoutBox from "@/Components/TextLayoutBox";
import ImageBox from "@/Components/ImageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faGithub,
    faInstagram,
    faLinkedin,
    faSteam,
    faTwitter,
    faMastodon,
    faPage4,
} from "@fortawesome/free-brands-svg-icons";
import me from "../../images/me.jpg";
import MainLayout from "@/Layouts/MainLayout";
import { faArrowDown, faGlobe, faLink, faSitemap } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "@/Components/SocialIcons";

import dsharpplus from '../../images/projects/dsp.png'
import obsidian from '../../images/projects/obs.png'
import modcore from '../../images/projects/mcore.png'
import foobar from '../../images/projects/foobar.png'
import basedcord from '../../images/projects/basedcord.png'
import axolotl2d from '../../images/projects/axolotl2d.png'
import
{
    JavascriptPlain,
    TypescriptPlain,
    ReactOriginal,
    CsharpPlain,
    PhpPlain,
    DockerPlain,
    DotnetcorePlain,
    UnityPlain,
    CplusplusPlain,
    JavaPlain,
    PythonPlain,
    GitPlain

} from "devicons-react";
import { useEffect, useState } from "react";
// @ts-ignore
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const skills = [
    { name: "JavaScript", iconUrl: JavascriptPlain },
    { name: "TypeScript", iconUrl: TypescriptPlain },
    { name: "React", iconUrl: ({size, color} : {size: number, color: string}) => <>

        <svg viewBox="0 0 128 128" style={{
            width: size + "px",
            height: size + "px",
        }}>
            <g fill={color}><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
        </svg>

    </> },
    { name: "C#", iconUrl: CsharpPlain },
    { name: "PHP (Laravel)", iconUrl: PhpPlain },
    { name: "Docker", iconUrl: DockerPlain },
    { name: "ASP.NET Core", iconUrl: DotnetcorePlain },
    { name: "Unity", iconUrl: UnityPlain },
    { name: "C(++)", iconUrl: CplusplusPlain },
    { name: "Java", iconUrl: JavaPlain },
    { name: "Python", iconUrl: PythonPlain },
    { name: "Git", iconUrl: GitPlain }
];

const projects = [
    {
        name: "DSharpPlus",
        description: "DSharpPlus is a .NET Standard library for making bots using the Discord API. It started of as a continuation of DiscordSharp, but has since become much better than its predecessor.",
        link: "https://github.com/dsharpplus/dsharpplus",
        techStack: ".NET, C#",
        iconUrl: dsharpplus,
    },
    {
        name: "Obsidian",
        description: "Obsidian is a minecraft server fully written from scratch, trying to replicate what the official minecraft server does, but more efficiently in C#.",
        link: "https://github.com/ObsidianMC/Obsidian",
        techStack: ".NET, C#, Minecraft",
        iconUrl: obsidian,
    },
    {
        name: "ModCore",
        description: "ModCore is a powerful moderation bot for Discord. Originally developed for my personal server, it has since gone public and is currently serving over 150 discord servers.",
        link: "https://github.com/naamloos/modcore",
        techStack: "C#, .NET, Discord API, PostgreSQL, Docker",
        iconUrl: modcore,
    },
    {
        name: "foo_discord",
        description: "Foo_discord is a foobar2000 addon adding Discord rich presence support. It is my first popular C++ project.",
        link: "https://github.com/naamloos/foo_discord",
        techStack: "C++, WinAPI, Discord RPC, foobar2000 SDK",
        iconUrl: foobar,
    },
    {
        name: "BasedCord",
        description: "BasedCord is a new C# API Wrapper for Discord. Originally known as ModCore.Common.Discord. Admittedly it was created as a bit of a joke, but it has since become a serious project.",
        link: "https://github.com/naamloos/basedcord",
        techStack: ".NET, C#, Discord API",
        iconUrl: basedcord,
    },
    {
        name: "Axolotl2D",
        description: "Axolotl2D is a small lightweight 2D game engine based on Silk.NET. It was build as a personal practice project, intended for smaller indie games. It makes heavy use of Microsoft's hosting extensions and thus supports and makes heavy use of dependency injection.",
        link: "https://github.com/naamloos/axolotl2d",
        techStack: ".NET, C#, Silk.NET, OpenGL",
        iconUrl: axolotl2d,
    }
];

export default function Index({
    messageSent
} : { messageSent : boolean }) {

    // inertia form for contact
    const form = useForm({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    useEffect(() =>
    {
        // @ts-ignore
        Events.scrollEvent.register('begin', function(to, element) {
            console.log('begin', arguments);
        });
        // @ts-ignore
        Events.scrollEvent.register('end', function(to, element) {
            console.log('end', arguments);
        });
        scrollSpy.update();
        return () =>
        {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    }, []);

    return (
        <>
            <MainLayout>
                <Head title="Hi, I'm Ryan" />

                <main className="text-white">
                    {/* Hero Section */}
                    <section className="min-h-screen flex items-center justify-center">
                        <div className="container mx-auto px-6 pb-20">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-10 md:mb-0">
                                    <h1 className="text-5xl mb-6">
                                        Hi, I'm&nbsp;
                                        <span className="text-blue-300 font-bold">
                                            Ryan
                                        </span>
                                    </h1>
                                    <p className="text-xl text-gray-400 mb-8">
                                        Full Stack Software Engineer with an interest in Open-Source development and a love for code.
                                        Passionate about creating efficient and scalable software solutions.
                                        Experienced in a variety of programming languages and frameworks, and always willing to learn and contribute to the developer community.
                                    </p>
                                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                        <Link
                                            to="contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className="cursor-pointer bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 hover:shadow-lg transition-all duration-300 text-center"
                                        >
                                            Contact Me
                                        </Link>
                                        <Link
                                            to="projects"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className=" cursor-pointer bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 hover:shadow-lg transition-all duration-300 text-center"
                                        >
                                            View Projects
                                        </Link>
                                        <div className="inline-block py-2 px-6 text-center">
                                            <SocialIcons size="2x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    <img
                                        src={me}
                                        alt="Ryan's profile picture"
                                        className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary"
                                    />
                                </div>
                            </div>
                            <div className="hidden justify-center pt-32 md:flex">
                                <Link
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={faArrowDown} size="2x" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="py-12 my-10 bg-gray-800 rounded-lg" id="skills">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="p-2 flex flex-col items-center"
                                    >
                                        <div className="mb-2">
                                            {skill.iconUrl({ size: 40, color: "#fff" })}
                                        </div>
                                        <h3 className="text-sm font-semibold text-center">
                                            {skill.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section className="py-12 my-10 bg-gray-800 rounded-lg" id="projects">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project) => (
                                    <div
                                        key={project.name}
                                        className="p-6 bg-gray-700 rounded-lg grid grid-rows-[auto,25px] gap-4"
                                    >
                                        <div>
                                            <img
                                                src={project.iconUrl}
                                                alt={`${project.name} logo`}
                                                className="w-20 h-20 mb-4 float-right"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                            <h3 className="text-xl font-semibold">
                                                {project.name}
                                            </h3>
                                            <p className="text-gray-400 pb-2">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.link}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <FontAwesomeIcon
                                                    icon={
                                                        project.link.includes(
                                                            "github.com"
                                                        )
                                                            ? faGithub
                                                            : faGlobe
                                                    }
                                                    size="lg"
                                                />
                                            </a>
                                            <span className="text-gray-400">
                                                {project.techStack ?? ""}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="py-12 my-10 bg-gray-800 rounded-lg" id="contact">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Contact Me
                            </h2>
                            <form className="max-w-lg mx-auto"
                                onSubmit={e => {
                                    e.preventDefault();
                                    form.post(route('contact'), {
                                        onSuccess: () => {
                                            form.reset();
                                            alert('Thank you for your message! I will get back to you as soon as possible.');
                                        }
                                    });
                                }}
                            >
                                <div className="mb-6">
                                    <label
                                        className="block text-gray-400 mb-2"
                                        htmlFor="name"
                                    >
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                        value={form.data.name}
                                        onChange={e => form.setData('name', e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="block text-gray-400 mb-2"
                                        htmlFor="email"
                                    >
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                        value={form.data.email}
                                        onChange={e => form.setData('email', e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="block text-gray-400 mb-2"
                                        htmlFor="phone"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        value={form.data.phone}
                                        onChange={e => form.setData('phone', e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="block text-gray-400 mb-2"
                                        htmlFor="message"
                                    >
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        rows={5}
                                        maxLength={1000}
                                        required
                                        value={form.data.message}
                                        onChange={e => form.setData('message', e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </MainLayout>
        </>
    );
}
