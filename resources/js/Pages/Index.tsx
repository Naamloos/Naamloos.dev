import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BaseLayout from '@/Layouts/BaseLayout';
import Box from '@/Components/Box';
import TextLayoutBox from '@/Components/TextLayoutBox';
import ImageBox from '@/Components/ImageBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram, faLinkedin, faSteam, faTwitter, faMastodon } from '@fortawesome/free-brands-svg-icons';
import me from '../../images/me.jpg';

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

                <ImageBox src={me} />

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
                            Where can you find me?
                        </h1>
                        <p className='py-2'>
                            You can find me on the following platforms. Feel free to reach out to me on any of them.
                        </p>
                        <p className='text-center py-2'>
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
                            <a href="https://beef.moe/@naamloos" target="_blank" className='px-1 hover:opacity-50'>
                                <FontAwesomeIcon icon={faMastodon} />
                            </a>
                        </p>
                        <p className='pt-2'>
                            Currently not looking for a new job, but feel free to reach out to me if you think you can convince me otherwise.
                        </p>
                </TextLayoutBox>

            </BaseLayout>
        </>
    );
}
