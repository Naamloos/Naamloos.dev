import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BaseLayout from '@/Layouts/BaseLayout';
import Box from '@/Components/Box';
import temp from '../../images/temp.jpg'
import TextLayoutBox from '@/Components/TextLayoutBox';

export default function Donate({ auth, laravelVersion, phpVersion, currentYear }: PageProps) {
    return (
        <>
            <BaseLayout year={currentYear}>
                <Head title='About Me' />

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        Cash
                    </h1>
                    <p>
                        Donate with cash? I've linked a couple of sites that might help you with that.
                    </p>
                    <p className='pt-4'>
                        <a href='https://paypal.me/naamloosdt' className='hover:opacity-50 underline'>Paypal</a>
                    </p>
                    <p className='pt-4'>
                        <a href='https://ko-fi.com/naamloos' className='hover:opacity-50 underline'>Ko-fi</a>
                    </p>
                </TextLayoutBox>

                <TextLayoutBox>
                    <h1 className='text-3xl pb-2'>
                        Crypto
                    </h1>
                    <p className='pb-3'>
                        Donate with crypto? These are my addresses:
                    </p>
                    <p className='text-sm'>
                        eth: <br/><small>0x0C2bDec2B1EA25dE7d3203D84B77476E0D0C12Cf</small>
                    </p>
                    <p className='text-sm'>
                        btc: <br/><small>3L1bUFeEMvne64N3Gc677rMzxSXZmRvPo9</small>
                    </p>
                </TextLayoutBox>

            </BaseLayout>
        </>
    );
}
