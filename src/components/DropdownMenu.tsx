import { ReactNode, useEffect, useState } from 'react';

interface DropdownMenuProps {
    links: Array<{
        url: string;
        name: string;
    }>;
    buttonClasses: string;
    children: ReactNode;
}

export default function DropdownMenu({
    links,
    buttonClasses,
    children,
}: DropdownMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const escEvent = (e: KeyboardEvent) => {
            if (e.key === 'Esc' || e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', escEvent);

        return () => document.removeEventListener('keydown', escEvent);
    }, []);

    // const paddingTrickery = (index: number) => {
    //     if (index === 0) {
    //         return 'pt-4';
    //     } else if (index === links.length - 1) {
    //         return 'pb-4';
    //     }
    //     return '';
    // };

    return (
        <div className="relative px-2 py-1 mt-6 sm:mt-0 sm:ml-2">
            <button
                className={`relative z-30 ${buttonClasses}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {children}
            </button>
            <button
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } fixed inset-0 z-20 w-full h-full bg-black opacity-50 cursor-default`}
                onClick={() => {
                    setIsMenuOpen(false);
                }}
                tabIndex={-1}
            ></button>
            <div
                className={`${
                    isMenuOpen && 'sm:block'
                } hidden mt-2 py-2 w-48 static mx-auto sm:absolute sm:mx-0 z-30 right-0 bg-white text-gray-800 text-lg sm:text-xl rounded-lg overflow-hidden shadow-lg`}
            >
                {links.map((link, index) => {
                    return (
                        <a
                            href={`${link.url}`}
                            className={`block px-8 py-2 bg-white hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-gray-600 focus:text-white active:bg-gray-700 `}
                            key={index}
                        >
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
