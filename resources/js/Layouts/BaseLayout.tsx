import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import Masonry from 'react-layout-masonry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCoins, faIdCard } from '@fortawesome/free-solid-svg-icons';
import Konami from 'react-konami-code';

const KonamiComponent = (Konami as typeof Konami & { default?: typeof Konami }).default ?? Konami;

export default function BaseLayout({ children, year }: PropsWithChildren<any>) {
    return (
        <>
            <div id='siteContent'>

                <KonamiComponent action={() => {
                    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                }} />

                <nav className='w-full h-12 bg-black/25 text-center flex items-center justify-center'>
                    <span className='text-white inline-block mx-3'>
                        <Link className='hover:opacity-50'>
                            <FontAwesomeIcon icon={faIdCard} /> About Me
                        </Link>
                    </span>
                    <span className='text-white inline-block mx-3'>
                        <Link className='hover:opacity-50'>
                            <FontAwesomeIcon icon={faCode} />  Projects
                        </Link>
                    </span>
                    <span className='text-white inline-block mx-3'>
                        <Link className='hover:opacity-50'>
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
                    <Link>&copy;</Link> Ryan de Jonge {year}.
                </footer>
            </div>
        </>
    );
}
