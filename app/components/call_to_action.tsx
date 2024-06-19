import Button from '@/app/ui/button/button';

export default function CallToAction() {
    return <div className="bg-[url('/bg-boost-desktop.svg')] bg-no-repeat bg-cover w-full bg-dark-violet text-center py-8">
        <h1 className='text-white text-3xl font-semibold mb-4'>Boost your links today</h1>
        <Button className='rounded-full'>Get Started</Button>
    </div>
}