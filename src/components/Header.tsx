import DropdownMenu from './DropdownMenu';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import logoLight from '../assets/images/logo-light.png';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const dropdownLinks = [
        { name: 'Account', url: '/account', icon: '' },
        { name: 'My listings', url: '/my-listings', icon: '' },
        { name: 'Support', url: '/support', icon: '' },
        { name: 'Sign out', url: '/sign-out', icon: '' },
    ];

    return (
        <header className="z-10 bg-gray-900 sm:flex sm:items-center sm:justify-between ">
            <div className="flex items-center justify-between px-4 py-3">
                <div>
                    <img src={logoLight} alt="Homy logo" className="h-12" />
                </div>
                <div className="sm:hidden">
                    <button
                        type="button"
                        className="text-gray-100 transition focus:text-gray-300 hover:text-gray-300 focus:outline-none focus:ring"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <IoClose className="w-10 h-10" />
                        ) : (
                            <FiMenu className="w-10 h-10" />
                        )}
                    </button>
                </div>
            </div>
            <nav
                className={`text-white transition  ${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } sm:block`}
            >
                <div className="px-4 py-3 text-2xl sm:flex sm:items-center sm:justify-between sm:text-xl">
                    <a
                        href="/"
                        className="block px-2 py-1 transition rounded-lg hover:bg-gray-700 focus:bg-gray-700 sm:mt-0 sm:rounded-full"
                    >
                        Listings
                    </a>
                    <a
                        href="/"
                        className="block px-2 py-1 mt-6 transition rounded-lg hover:bg-gray-700 focus:bg-gray-700 sm:mt-0 sm:ml-2 sm:rounded-full"
                    >
                        Add property
                    </a>
                    <a
                        href="/"
                        className="block px-2 py-1 mt-6 transition rounded-lg hover:bg-gray-700 focus:bg-gray-700 sm:mt-0 sm:ml-2 sm:rounded-full"
                    >
                        Contact us
                    </a>
                    <DropdownMenu
                        links={dropdownLinks}
                        buttonClasses="hidden w-10 h-10 overflow-hidden transition border-4 border-gray-600 rounded-full sm:block hover:border-gray-400 focus:outline-none focus:border-white"
                    >
                        <img
                            src={
                                'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                            }
                            alt="Avatar"
                            className="object-cover object-center w-full h-full"
                        />
                    </DropdownMenu>
                </div>
                <div className="px-6 py-6 border-t border-gray-800 sm:mt-0 sm:ml-2 sm:hidden">
                    <div className={`w-full flex items-center `}>
                        <img
                            src={
                                'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                            }
                            alt="Avatar"
                            className="transition border-4 border-gray-600 rounded-full w-14 h-14 hover:border-gray-400 focus:outline-none focus:border-white cover-center"
                        />
                        <span className="ml-3 text-xl font-bold text-white">
                            Marcus Aurelius
                        </span>
                    </div>
                    <div className={`text-xl`}>
                        {dropdownLinks.map((link, index) => {
                            return (
                                <a
                                    href={`${link.url}`}
                                    className={`mt-3 block text-gray-400 hover:text-white transition`}
                                    key={index}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
