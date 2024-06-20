import Card from '@/app/ui/card/card';
import clsx from 'clsx';
import './styles.css';

const cards = [
    {
        title: "Brand Recognition",
        content: "boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        icon: "/icon-brand-recognition.svg",
    },
    {
        title: "Detailed Records",
        content: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps Inform better decisions.",
        icon: "/icon-detailed-records.svg",
    },
    {
        title: "Fully Customizable",
        content: "Improve brand awareness and content aiscoveraibility through customizable links, supercnarging audience engagement.",
        icon: "/icon-fully-customizable.svg",
    },
]

export default function StatsSection() {
    return <section className="flex grow flex-col justify-center items-center w-full bg-light-gray">
        <div className='max-w-lg px-12 md:px-0 pb-48'>
            <div className="mt-12 mb-20 text-center">
                <h1 className="text-4xl font-semibold mb-2">Advanced Statistics</h1>
                <p className="text-lg text-gray-violet">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap md:gap-x-8 gap-y-12 justify-center items-center">
                {cards.map((props, i) => <Card key={i} className={clsx(i === 1 && 'card', i === 1 && 'md:translate-y-8', i === 2 && 'md:translate-y-16')} {...props} />)}
            </div>
        </div>

    </section>
}