import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BaseLayout from '@/Layouts/BaseLayout';
import Box from '@/Components/Box';
import temp from '../../images/temp.jpg'
import TextLayoutBox from '@/Components/TextLayoutBox';

export default function Projects({ auth, laravelVersion, phpVersion, currentYear }: PageProps) {
    return (
        <>
            <BaseLayout year={currentYear}>
                <Head title='About Me' />

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        DSharpPlus
                    </h1>
                    <p>
                        DSharpPlus is a .NET Standard library for making bots using the Discord API. It started of as a continuation of DiscordSharp, but has since become much better than it's predecessor.
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        BasedCord
                    </h1>
                    <p>
                        BasedCord is a new C# API Wrapper for Discord. Originally known as ModCore.Common.Discord, made available for everyone to use.
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        ModCore
                    </h1>
                    <p>
                        ModCore is a powerful moderation bot for Discord. Originally developed for my personal server, it has since gone public and is currently serving over 150 discord servers.
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        Obsidian
                    </h1>
                    <p>
                        Obsidian is a minecraft server fully written from scratch, trying to replicate what the official minecraft server does, but more efficiently in C#.
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        foo_discord
                    </h1>
                    <p>
                        Foo_discord is a foobar2000 addon adding Discord rich presence support. It is my first popular C++ project.
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        TopCenterStart11
                    </h1>
                    <p>
                        TopCenterStart11 is small utility that moves the start menu and Taskbar to the top-center of the screen in Windows 11, without registry hacks or OS patches.
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        ConBingos
                    </h1>
                    <p>
                        Small project hosting bingo lists for conventions and events. It is a simple webapp written in PHP.
                    </p>
                </TextLayoutBox>

            </BaseLayout>
        </>
    );
}
