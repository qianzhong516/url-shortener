import Link from 'next/link';

const navLinks = [
    { text: 'Features', href: '/features' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'Resources', href: '/resources' },
]

export default function NavLinks({ className }: { className?: string }) {
    return <ul className={className}>
        {navLinks.map(({ text, href }, i) => <li key={i}><Link href={href} className='font-semibold md:text-gray md:hover:text-black'>{text}</Link></li>)}
    </ul>
}