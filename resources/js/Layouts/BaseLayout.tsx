import { Link } from '@inertiajs/react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { IOptions, RecursivePartial } from '@tsparticles/engine';
import Masonry from 'react-layout-masonry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCoins, faIdCard } from '@fortawesome/free-solid-svg-icons';
import Konami from 'react-konami-code';

export default function BaseLayout({ children, year }: PropsWithChildren<any>) {

    const [init, setInit] = useState(false)
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true)
        })
    }, []);

    return (
        <>
            <div id='siteContent'>

                <Konami action={() => {
                    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                }} />

                <Particles
                    options={particleOptions}
                />
                <nav className='w-full h-12 bg-black bg-opacity-25 text-center flex items-center justify-center'>
                    <span className='text-white inline-block mx-3'>
                        <Link href={route('index')} className='hover:opacity-50'>
                            <FontAwesomeIcon icon={faIdCard} /> About Me
                        </Link>
                    </span>
                    <span className='text-white inline-block mx-3'>
                        <Link href={route('projects')} className='hover:opacity-50'>
                            <FontAwesomeIcon icon={faCode} />  Projects
                        </Link>
                    </span>
                    <span className='text-white inline-block mx-3'>
                        <Link href={route('donate')} className='hover:opacity-50'>
                            <FontAwesomeIcon icon={faCoins} /> Donate
                        </Link>
                    </span>
                </nav>

                <div className='flex justify-center w-full pt-2'>
                    <Masonry
                        columns={{ 640: 1, 768: 2 }}
                        gap={8}
                    >
                        {children}
                    </Masonry>
                </div>
                <footer className='text-xs text-center pb-5'>
                    <Link href={route('login')}>&copy;</Link> Ryan de Jonge {year}.
                </footer>
            </div>
        </>
    );
}

const particleOptions : RecursivePartial<IOptions> =
{
    fullScreen: {
        enable: true,
        zIndex: -1,

    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "repulse"
            }
        }
    },
    particles:
    {
        number: {
            value: 26,
            density: {
                enable: true,
                width: 800,
                height: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "square",
        },
        opacity: {
            value: 0.05,
        },
        size: {
            value: {min: 25, max: 60},
            animation:
            {
                enable: true,
                speed: 50,
                startValue: 'random',
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 3,
            direction: "top",
            straight: false,
            attract: {
                enable: false,
            },
        }
    }
}
