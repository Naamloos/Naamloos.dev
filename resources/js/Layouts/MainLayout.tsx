import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <>
            <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-20'>
                {children}
            </div>
            <Footer />
        </>
    );
}
