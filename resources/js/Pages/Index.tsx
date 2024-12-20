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
    GitPlain,
    KotlinPlain,
    AndroidPlain,
    LaravelOriginal,
    LaravelLine,
    LinuxPlain,
    VuejsPlain,
    Windows11Original

} from "devicons-react";
import { useEffect, useState } from "react";
// @ts-ignore
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const skills = [
    { name: "Android", iconUrl: AndroidPlain },
    { name: "ASP.NET Core", iconUrl: DotnetcorePlain },
    { name: "C#", iconUrl: CsharpPlain },
    { name: "C(++)", iconUrl: CplusplusPlain },
    { name: "Docker", iconUrl: DockerPlain },
    { name: "Git", iconUrl: GitPlain },
    { name: "Java", iconUrl: JavaPlain },
    { name: "JavaScript", iconUrl: JavascriptPlain },
    { name: "Kotlin", iconUrl: KotlinPlain },
    { name: "Laravel", iconUrl: ({size, color} : {size: number, color: string}) => <>
        <svg viewBox="0 0 128 128" style={{
            width: size + "px",
            height: size + "px",
        }}>
            <path fill={color} d="M27.271.11c-.2.078-5.82 3.28-12.487 7.112-8.078 4.644-12.227 7.09-12.449 7.32-.19.225-.34.482-.438.76-.167.564-.179 82.985-.01 83.578.061.23.26.568.44.754.436.46 48.664 28.19 49.25 28.324.272.065.577.054.88-.03.658-.165 48.76-27.834 49.188-28.286.175-.195.375-.532.44-.761.084-.273.115-4.58.115-13.655v-13.26l11.726-6.735c11.056-6.357 11.733-6.755 12.017-7.191l.29-.47V43.287c0-15.548.03-14.673-.585-15.235-.165-.146-5.798-3.433-12.53-7.31L100.89 13.71h-1.359l-11.963 6.87c-6.586 3.788-12.184 7.027-12.457 7.203-.272.18-.597.512-.73.753l-.242.417-.054 13.455-.048 13.46-9.879 5.69c-5.434 3.124-9.957 5.71-10.053 5.734-.175.049-.187-1.232-.187-25.966V15.293l-.26-.447c-.326-.545 1.136.324-13.544-8.114C27.803-.348 28.098-.2 27.27.11zm11.317 10.307c5.15 2.955 9.364 5.4 9.364 5.43 0 .031-4.516 2.641-10.035 5.813l-10.041 5.765-10.023-5.764c-5.507-3.173-10.02-5.783-10.02-5.814 0-.03 4.505-2.64 10.013-5.805l9.999-5.752.69.376c3.357 1.907 6.708 3.824 10.053 5.751zm71.668 13.261c5.422 3.122 9.908 5.702 9.95 5.744.114.103-19.774 11.535-20.046 11.523-.272-.008-19.915-11.335-19.907-11.473.01-.157 19.773-11.527 19.973-11.496.091.022 4.607 2.59 10.03 5.702zM16.3 25.328l9.558 5.503.055 27.247.05 27.252.233.368c.122.194.352.459.52.581.158.115 5.477 3.146 11.818 6.724l11.52 6.506v11.527c0 6.326-.043 11.516-.097 11.516-.041 0-10-5.699-22.124-12.676L5.793 97.201l-.03-38.966-.019-38.954.49.271c.283.15 4.807 2.748 10.065 5.775zm33.754 19.18v25.109l-.387.253c-.525.332-19.667 11.335-19.732 11.335-.03 0-.054-11.336-.054-25.193l.012-25.182 10-5.752c5.499-3.165 10.034-5.733 10.088-5.714.039.024.073 11.34.073 25.144zm38.15-5.775 10.023 5.763V55.92c0 10.838-.011 11.42-.176 11.357-.107-.041-4.642-2.64-10.083-5.774l-9.91-5.69v-11.42c0-6.287.032-11.424.062-11.424.043 0 4.577 2.592 10.084 5.764zm34.164 5.587c0 6.254-.042 11.412-.084 11.462-.072.115-19.896 11.538-20.022 11.538-.031 0-.062-5.135-.062-11.423v-11.42l10-5.756c5.507-3.16 10.042-5.752 10.084-5.752.053 0 .084 5.105.084 11.351zM95.993 70.933 52.005 96.04 32.056 84.693S76 59.277 76.176 59.343zm2.215 14.827-.034 11.442-22.028 12.676c-12.12 6.976-22.082 12.675-22.132 12.675-.053 0-.095-4.658-.095-11.516V99.51l22.08-12.592c12.132-6.923 22.101-12.59 22.154-12.602.043 0 .062 5.148.054 11.443z"></path>
        </svg>
    </>  },
    { name: "Linux", iconUrl: LinuxPlain },
    { name: "PHP", iconUrl: PhpPlain },
    { name: "Python", iconUrl: PythonPlain },
    { name: "React", iconUrl: ({size, color} : {size: number, color: string}) => <>
        <svg viewBox="0 0 128 128" style={{
            width: size + "px",
            height: size + "px",
        }}>
            <g fill={color}><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
        </svg>
    </> },
    { name: "Sass", iconUrl: ({size, color} : {size: number, color: string}) => <>
        <svg viewBox="0 0 128 128" style={{
            width: size + "px",
            height: size + "px",
        }}>
            <path fill-rule="evenodd" clip-rule="evenodd" fill={color} d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"></path>
        </svg>
    </>
    },
    { name: "TypeScript", iconUrl: TypescriptPlain },
    { name: "Unity", iconUrl: UnityPlain },
    { name: "Vue3", iconUrl: VuejsPlain },
    { name: "Windows", iconUrl: ({size, color} : {size: number, color: string}) => <>
        <svg viewBox="0 0 128 128" style={{
            width: size + "px",
            height: size + "px",
        }}>
            <path fill={color} d="M67.328 67.331h60.669V128H67.328zm-67.325 0h60.669V128H.003zM67.328 0h60.669v60.669H67.328zM.003 0h60.669v60.669H.003z"></path>
        </svg>
    </>
    },
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

    const [isListView, setIsListView] = useState(false);

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
                                <div className="md:w-1/2 mb-10 md:mb-0 bg-gray-900 bg-opacity-30 rounded-lg shadow-lg p-8">
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
                                            className="bg-opacity-80 cursor-pointer bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 hover:shadow-lg transition-all duration-300 text-center"
                                        >
                                            Contact Me
                                        </Link>
                                        <Link
                                            to="projects"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className="bg-opacity-80 cursor-pointer bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 hover:shadow-lg transition-all duration-300 text-center"
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
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer animate-bounce"
                                >
                                    <FontAwesomeIcon icon={faArrowDown} size="2x" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Technologies Section */}
                    <section className="py-12 bg-gray-800 bg-opacity-40 m-6 rounded-lg relative" id="skills">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-4">
                                Skills
                            </h2>
                            <div className="text-center mb-6">
                                <button
                                    onClick={() => setIsListView(!isListView)}
                                    className="bg-opacity-80 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg hover:bg-gray-600 transition-colors hidden sm:inline-block"
                                >
                                    Toggle List View
                                </button>
                            </div>
                            <div className={`whitespace-nowrap py-4 ${isListView ? 'block' : 'sm:hidden'}`}>
                                <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="p-1 flex flex-col items-center"
                                        >
                                            <div className="mb-1">
                                                {skill.iconUrl({ size: 48, color: "#fff" })}
                                            </div>
                                            <h3 className="text-xs font-semibold text-center">
                                                {skill.name}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`whitespace-nowrap py-4 overflow-x-auto scrollbar-hide ${isListView ? 'hidden' : 'hidden sm:block'}`}>
                                <div className="inline-flex animate-scroll">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="p-4 flex flex-col items-center w-52"
                                        >
                                            <div className="mb-4">
                                                {skill.iconUrl({ size: 60, color: "#fff" })}
                                            </div>
                                            <h3 className="text-lg font-semibold text-center">
                                                {skill.name}
                                            </h3>
                                        </div>
                                    ))}
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="p-4 flex flex-col items-center w-52"
                                        >
                                            <div className="mb-4">
                                                {skill.iconUrl({ size: 60, color: "#fff" })}
                                            </div>
                                            <h3 className="text-lg font-semibold text-center">
                                                {skill.name}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* @ts-ignore */}
                    <style jsx>{`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll {
                            animation: scroll 30s linear infinite;
                        }
                    `}</style>

                    {/* Projects Section */}
                    <section className="py-12 my-10 bg-gray-800 bg-opacity-40 m-6  rounded-lg" id="projects">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project) => (
                                    <div
                                        key={project.name}
                                        className="p-6 bg-gray-700 bg-opacity-45 rounded-lg grid grid-rows-[auto,25px] gap-4"
                                    >
                                        <div>
                                            <img
                                                src={project.iconUrl}
                                                alt={`${project.name} logo`}
                                                className="w-20 h-20 mb-4 float-right m-1"
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
                    <section className="py-12 my-10 bg-gray-800 bg-opacity-40 m-6  rounded-lg" id="contact">
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
                                        className="w-full px-4 py-2 bg-opacity-45 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                                        className="w-full px-4 py-2 bg-opacity-45 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                                        className="w-full px-4 py-2 bg-opacity-45 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                                        className="w-full px-4 py-2 bg-opacity-45 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
