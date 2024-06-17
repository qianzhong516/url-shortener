import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: 'primary',
    borderRadius?: 'md' | 'lg',
    children: React.ReactNode,
    onClick?: () => void,
    className?: string
}

export default function Button({ theme = 'primary', borderRadius = 'md', children, onClick, className, ...props }: ButtonProps) {
    const rounded = clsx(borderRadius === 'md' && 'rounded-md', borderRadius === 'lg' && 'rounded-lg');
    const color = clsx(theme === 'primary' && 'text-white');
    return <button className={`${rounded} ${color} bg-cyan px-4 py-2 disabled:bg-gray ${className}`} onClick={onClick} {...props}>
        {children}
    </button>
}