import { ReactNode, useState } from 'react';

interface DropdownMenuProps {
    links: Array<{
        url: string;
        name: string;
    }>;
    className: string;
    children: ReactNode;
}

export default function DropdownMenu({
    links,
    className,
    children,
}: DropdownMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative px-2 py-1 mt-6 sm:mt-0 sm:ml-2">
            <button
                className={className}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {children}
            </button>
            <div
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } mt-2 w-48 static mx-auto sm:absolute sm:mx-0 z-20 right-0 flex-col py-2 bg-white text-gray-800 text-lg sm:text-xl xl:text-2xl rounded-lg overflow-hidden shadow-lg`}
            >
                {links.map((link, index) => {
                    return (
                        <a
                            href={`${link.url}`}
                            className="px-8 py-2 bg-white hover:bg-gray-600 hover:text-white"
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
