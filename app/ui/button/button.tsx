import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: 'primary' | 'secondary',
    children: React.ReactNode,
    onClick?: () => void,
    className?: string
}

export default function Button({ theme = 'primary', children, onClick, className, ...props }: ButtonProps) {
    const color = clsx(theme === 'primary' && 'text-white', theme === 'secondary' && 'text-gray');
    const bg = clsx(theme === 'primary' && 'bg-cyan');
    const hoverBg = clsx(theme === 'primary' && 'hover:opacity-75');
    return <button className={`${color} ${bg} ${hoverBg} px-6 py-2 disabled:bg-gray ${className} font-semibold`} onClick={onClick} {...props}>
        {children}
    </button>
}