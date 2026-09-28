import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import Box from './Box';

export default function TextLayoutBox({ children, ...props } : PropsWithChildren) {
    return (
        <Box>
            <div className='bg-black/20 rounded-lg p-8'>
                {children}
            </div>
        </Box>
    );
}
