import Button from '@/app/ui/button/button';
import Image from 'next/image';

export default function heroSection() {
    return <section className='flex flex-wrap items-center px-12 pt-24 pb-36 gap-20 max-w-lg'>
        <div className='flex-1'>
            <h1 className='text-7xl font-bold'>More than just shorter links</h1>
            <p className='text-xl text-gray-violet'>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
            <Button className='text-xl mt-10 px-8 py-4'>Get Started</Button>
        </div>
        <Image className='flex-1' src="/illustration-working.svg" width={300} height={200} alt='' />
    </section>
}