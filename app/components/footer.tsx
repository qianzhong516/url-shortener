import Link from 'next/link';
import { Facebook, Instagram, Twitter, Pinterest, Logo } from '@/app/ui/icon/index'


const links = [
    {
        title: 'Features',
        content: [{
            text: 'Link Shortening',
            href: '/'
        }, {
            text: 'Branded Links',
            href: '/'
        }, {
            text: 'Analytics',
            href: '/'
        }]
    },
    {
        title: 'Resources',
        content: [{
            text: 'Blog',
            href: '/'
        }, {
            text: 'Developers',
            href: '/'
        }, {
            text: 'Support',
            href: '/'
        }]
    },
    {
        title: 'Company',
        content: [{
            text: 'About',
            href: '/'
        }, {
            text: 'Our Team',
            href: '/'
        }, {
            text: 'Careers',
            href: '/'
        }, {
            text: 'Contact',
            href: '/'
        }]
    },
];


const socialMedia = [
    {
        Icon: Facebook,
        href: '/'
    },
    {
        Icon: Twitter,
        href: '/'
    },
    {
        Icon: Pinterest,
        href: '/'
    },
    {
        Icon: Instagram,
        href: '/'
    },
]

export default function Footer() {
    return <footer className='flex flex-col items-center bg-darker-violet w-full pb-4'>
        <div className='max-w-lg flex flex-wrap justify-between w-full p-12 mb-4'>
            <div className='flex-1'>
                <Logo width={180} height={90} className='fill-white' />
            </div>
            <div className='flex flex-3 flex-wrap gap-4 grow text-white justify-between'>
                {links.map((link, i) => <div key={i}>
                    <h4 className='font-bold mb-4'>{link.title}</h4>
                    <ul>
                        {link.content.map(({ text, href }, j) => <li key={`${i}${j}`} className='mb-2 text-gray hover:text-cyan'><Link href={href}>{text}</Link></li>)}
                    </ul>
                </div>)}
                <div>
                    <ul className='flex gap-x-4 items-center'>
                        {socialMedia.map(({ Icon, href }, i) => <li key={i}>
                            <Link href={href}><Icon className='fill-white hover:fill-cyan' /></Link>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
        <p className='text-gray text-sm'>Developed by Janice Zhong &copy;2024</p>
    </footer>
}