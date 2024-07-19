import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BaseLayout from '@/Layouts/BaseLayout';
import Box from '@/Components/Box';
import temp from '../../images/temp.jpg'
import TextLayoutBox from '@/Components/TextLayoutBox';
import ImageBox from '@/Components/ImageBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram, faLastfm, faLinkedin, faSteam, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Index({ auth, laravelVersion, phpVersion, currentYear }: PageProps) {
    return (
        <>
            <BaseLayout year={currentYear}>
                <Head title='About Me' />

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        Who am I?
                    </h1>
                    <p className='pt-2'>
                        Hello, my name is Ryan. I'm a Fullstack Software Engineer working at Provrex B.V., and an Open-Source enthusiast.
                    </p>
                </TextLayoutBox>

                <ImageBox src={temp} />

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        Languages
                    </h1>
                    <p className='py-2'>
                        Listed here are the languages I speak, with an indicator of how fluent I am in them.
                    </p>
                    <p>
                        🇳🇱 Dutch: Native Speaker <br/>
                        🇬🇧 English: Professional Fluency<br/>
                        🇩🇪 German: Beginner<br/>
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                        <h1 className='text-3xl pb-2'>
                            Contact
                        </h1>
                        <p className='py-2'>
                            You can contact me through the following methods:
                        </p>
                        <p>
                            <a href='mailto:ryandejonge@outlook.com' className='hover:opacity-50 underline'>Email</a>
                        </p>
                        <p>
                            <a href='https://discordapp.com/users/127408598010560513' className='hover:opacity-50 underline'>Discord</a>
                        </p>
                        <p>
                            <a href='https://beef.moe/@Naamloos' className='hover:opacity-50 underline'>Mastodon</a>
                        </p>
                </TextLayoutBox>

                <Box>
                    <div className='bg-black bg-opacity-20 rounded-lg p-8'>
                        <h1 className='text-3xl pb-2'>
                            Where can you find me?
                        </h1>
                        <p className='py-2'>
                            You can find me on the following platforms:
                        </p>
                        <p>
                            <a href="https://www.twitter.com/naamloser" target="_blank" className='px-1 hover:opacity-50'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.discord.gg/hMRWUTa" target="_blank" className='px-1 hover:opacity-50'>
                                <FontAwesomeIcon icon={faDiscord} />
                            </a>
                            <a href="https://www.github.com/Naamloos" target="_blank" className='px-1 hover:opacity-50'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.instagram.com/naamloos_nl" target="_blank" className='px-1 hover:opacity-50'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://steamcommunity.com/id/naamloos_nl" target="_blank" className='px-1 hover:opacity-50'>
                                <FontAwesomeIcon icon={faSteam} />
                            </a>
                            <a href="https://www.linkedin.com/in/ryan-de-jonge-624217162/" target="_blank" className='px-1 hover:opacity-50'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                    </div>
                </Box>

            </BaseLayout>
        </>
    );
}
