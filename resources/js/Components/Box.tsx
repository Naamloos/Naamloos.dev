import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export default function Box({ children, ...props } : PropsWithChildren) {
    return (
        <div className='overflow-hidden w-80 m-3'>
            {children}
        </div>
    );
}
