import Box from './Box';

export default function ImageBox({ src } : { src: string }) {
    return (
        <Box>
            <img src={src} className='w-full rounded-full opacity-100 pointer-events-none'/>
        </Box>
    );
}
