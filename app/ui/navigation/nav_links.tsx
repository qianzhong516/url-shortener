import Link from 'next/link';

const navLinks = [
    { text: 'Features', href: '/features' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'Resources', href: '/resources' },
]

export default function NavLinks() {
    return <div className="flex gap-5">
        {navLinks.map(({ text, href }, i) => <Link key={i} href={href} className='font-semibold text-gray hover:text-black'>{text}</Link>)}
    </div>
}