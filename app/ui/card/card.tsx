import Image from 'next/image';

export default function Card({ title, content, icon, className }: { title: string, content: string, icon: string, className?: string }) {
    return <div className={`relative bg-white w-full max-w-[400px] p-8 ${className}`}>
        <div className='absolute top-0 left-4 -translate-y-1/2 bg-darker-violet rounded-full flex justify-center items-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] p-5'>
            <Image src={icon} alt='' width={100} height={100} />
        </div>
        <div className='mt-6'>
            <h3 className='mb-4 text-lg font-bold'>{title}</h3>
            <p className='text-gray-violet'>{content}</p>
        </div>
    </div>
}