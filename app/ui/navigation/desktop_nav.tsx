import NavLinks from './nav_links';
import Image from 'next/image'
import Button from '@/app/ui/button/button';

export default function DesktopNavigation() {
    return <div className='flex justify-center mt-6'>
        <div className='hidden md:flex w-full max-w-lg justify-between items-center px-12'>
            <div className='flex items-center gap-10'>
                <Image src="/logo.svg" width={150} height={80} alt='' />
                <NavLinks className='flex gap-5' />
            </div>
            <div className='flex items-center'>
                <Button theme='secondary'>Login</Button>
                <Button className='rounded-full'>Sign Up</Button>
            </div>
        </div>
    </div>
}