import NavLinks from './nav_links';
import Image from 'next/image'
import Button from '@/app/ui/button/button';

export default function Navigation() {
    return <div className='flex items-center justify-between p-3'>
        <div className='flex items-center gap-10'>
            <Image src="/logo.svg" width={150} height={80} alt='' />
            <NavLinks />
        </div>
        <div className='flex items-center gap-5'>
            <Button>Login</Button>
            <Button>Sign Up</Button>
        </div>
    </div>;
}