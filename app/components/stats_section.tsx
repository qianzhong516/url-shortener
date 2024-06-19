import Card from '@/app/ui/card/card';

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
    return <section className="w-full bg-light-gray flex flex-col items-center py-24">
        <div className="mt-8 my-24 text-center">
            <h1 className="text-3xl font-semibold">Advanced Statistics</h1>
            <p className="text-gray-violet">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="flex flex-wrap md:gap-x-8 gap-y-12 justify-center items-center">
            {cards.map((props, i) => <Card key={i} {...props} />)}
        </div>
    </section>
}