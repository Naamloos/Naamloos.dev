import { Link } from '@inertiajs/react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { IOptions, RecursivePartial } from '@tsparticles/engine';
import Masonry from 'react-layout-masonry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCoins, faIdCard } from '@fortawesome/free-solid-svg-icons';

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
    particles:
    {
        number: {
            value: 35,
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
            type: "circle",
        },
        opacity: {
            value: 0.10,
        },
        size: {
            value: {min: 15, max: 40},
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 3,
            direction: "top",
            random: false,
            straight: false,
            attract: {
                enable: false,
            }
        }
    }
}
