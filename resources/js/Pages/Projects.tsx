import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BaseLayout from '@/Layouts/BaseLayout';
import Box from '@/Components/Box';
import temp from '../../images/temp.jpg'
import TextLayoutBox from '@/Components/TextLayoutBox';

import dsharpplus from '../../images/projects/dsp.png'
import obsidian from '../../images/projects/obs.png'
import modcore from '../../images/projects/mcore.png'
import foobar from '../../images/projects/foobar.png'
import basedcord from '../../images/projects/basedcord.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import MainLayout from '@/Layouts/MainLayout';

export default function Projects({ auth, laravelVersion, phpVersion, currentYear }: PageProps) {
    return (
        <>
            <MainLayout>
                <Head title='About Me' />

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        <img src={dsharpplus} className='inline-block w-12 mx-2'/>
                        DSharpPlus
                    </h1>
                    <p>
                        DSharpPlus is a .NET Standard library for making bots using the Discord API. It started of as a continuation of DiscordSharp, but has since become much better than its predecessor.
                    </p>
                    <p className='pt-2'>
                        I am the lead developer of DSharpPlus, and have been working on it since 2016. It is currently one of the most popular Discord API wrappers for .NET.
                    </p>
                    <p className='pt-2'>
                        <span className='text-xs'>More: </span>
                        <a href='https://github.com/dsharpplus/dsharpplus' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://discord.gg/dsharpplus' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                        <a href='https://dsharpplus.github.io' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGlobe}/>
                        </a>
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        <img src={basedcord} className='inline-block w-8 mx-2'/>
                        BasedCord
                    </h1>
                    <p>
                        BasedCord is a new C# API Wrapper for Discord. Originally known as ModCore.Common.Discord.
                    </p>
                    <p className='py-2'>
                        This project started as the internal API wrapper for ModCore, but has since been split off into it's own project. It is not meant to replace DSharpPlus, but rather to be a more lightweight alternative.
                    </p>
                    <p className='pt-2'>
                        <span className='text-xs'>More: </span>
                        <a href='https://github.com/naamloos/basedcord' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://github.com/Naamloos/foo_discord' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        <img src={modcore} className='inline-block w-8 mx-2'/>
                        ModCore
                    </h1>
                    <p>
                        ModCore is a powerful moderation bot for Discord. Originally developed for my personal server, it has since gone public and is currently serving over 150 discord servers.
                    </p>
                    <p className='py-2'>
                        Currently I am going through a full rewrite of ModCore, to make it more efficient and easier to use. It is currently in a closed beta, but will be released when it is ready for general use.
                    </p>
                    <p className='pt-2'>
                        <span className='text-xs'>More: </span>
                        <a href='https://github.com/naamloos/modcore' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://github.com/Naamloos/foo_discord' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        <img src={obsidian} className='inline-block w-8 mx-2'/>
                        Obsidian
                    </h1>
                    <p>
                        Obsidian is a minecraft server fully written from scratch, trying to replicate what the official minecraft server does, but more efficiently in C#.
                    </p>
                    <p className='py-2'>
                        I am the lead developer of Obsidian, and have been working on it since february of 2019. It is currently one of the most popular C# minecraft servers.
                        It is currently not yet feature complete, but is already being used by a few people.
                    </p>
                    <p className='pt-2'>
                        <span className='text-xs'>More: </span>
                        <a href='https://github.com/ObsidianMC/Obsidian' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://discord.gg/gQBtqyXChu' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        <img src={foobar} className='inline-block w-8 mx-2'/>
                        foo_discord
                    </h1>
                    <p>
                        Foo_discord is a foobar2000 addon adding Discord rich presence support. It is my first popular C++ project.
                    </p>
                    <p>
                        I have since stopped maintaining this project, but it is still being used by a few people since it still functions well enough.
                    </p>
                    <p className='pt-2'>
                        <span className='text-xs'>More: </span>
                        <a href='https://github.com/naamloos/foo_discord' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://github.com/Naamloos/foo_discord' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        TopCenterStart11
                    </h1>
                    <p>
                        TopCenterStart11 is small utility that moves the start menu and Taskbar to the top-center of the screen in Windows 11, without registry hacks or OS patches.
                    </p>
                    <p className='pt-2'>
                        <span className='text-xs'>More: </span>
                        <a href='https://github.com/naamloos/topcenterstart11' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://github.com/Naamloos/foo_discord' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        ConBingos
                    </h1>
                    <p>
                        Small project hosting bingo lists for conventions and events. It is a simple webapp written in PHP.
                    </p>
                    <p className='pt-2'>
                        I made this project as a fun little project to host bingo lists for conventions and events. It is currently being used by a few people.
                    </p>
                    <p className='pt-2'>
                        <span className='text-xs'>More: </span>
                        <a href='https://github.com/naamloos/conbingos' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href='https://bingo.naamloos.dev' target='_blank' className='hover:opacity-50 mx-1'>
                            <FontAwesomeIcon icon={faGlobe}/>
                        </a>
                    </p>
                </TextLayoutBox>

            </MainLayout>
        </>
    );
}
