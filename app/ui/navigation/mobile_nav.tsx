'use client'

import NavLinks from './nav_links';
import Image from 'next/image'
import Button from '@/app/ui/button/button';
import { useState } from 'react';

export default function MobileNavigation() {
    const [showMenu, setShowMenu] = useState(false);
    const onClick = () => setShowMenu(state => !state)

    return (
        <>
            <div className='md:hidden flex w-full justify-between items-center px-12 '>
                <Image src="/logo.svg" width={150} height={80} alt='' />
                <button className='text-4xl font-bold text-gray' onClick={onClick}>☰</button>
            </div>
            {showMenu && <div className='md:hidden block p-8 w-4/5 bg-dark-violet text-center mt-4 rounded-lg m-auto'>
                <NavLinks className='*:font-bold *:text-xl *:text-white *:mb-6' />
                <div className='relative before:absolute before:content-[""] before:w-full before:h-[1px] before:left-1/2 before:-translate-x-1/2 before:bg-gray flex flex-col'>
                    <Button theme='secondary' className='text-xl text-white my-4'>Login</Button>
                    <Button className='rounded-full text-xl'>Sign Up</Button>
                </div>
            </div>}
        </>)
}