const btnType = ['primary', 'secondary', 'ghost'] as const;

const btnTypeClasses = {
    primary:
        'w-full py-3 text-center text-sm font-medium text-custom-black-900 rounded-lg bg-white border border-white hover:bg-custom-black-900 hover:text-white transition-all ease-in-out duration-500',
    secondary:
        'w-full py-3 text-center text-sm font-medium text-white rounded-lg bg-custom-black-900 border border-white hover:bg-white hover:text-custom-black-900 transition-all ease-in-out duration-500',
    ghost: 'text-custom-black-300 hover:text-white',
};

type propsType = {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    type?: (typeof btnType)[number];
    className?: string;
    children: Readonly<React.ReactNode>;
};

export default function ExtLinkButton({ href, children, target, type, className }: propsType) {
    return (
        <a
            className={`${btnTypeClasses[type || 'primary']} ${className || ''}`}
            href={href}
            target={target || '_blank'}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
