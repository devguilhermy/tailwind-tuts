import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import logoLight from '../assets/images/logo-light.png';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

    return (
        <header className="z-10 px-4 py-3 bg-gray-900 sm:flex sm:items-center sm:justify-between ">
            <div className="flex items-center justify-between">
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
            <div
                className={`pt-6 pb-4 px-1 text-white text-center transition text-3xl ${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } sm:flex sm:items-center sm:justify-between sm:text-xl`}
            >
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
                    My properties
                </a>
                <a
                    href="/"
                    className="block px-2 py-1 mt-6 transition rounded-lg hover:bg-gray-700 focus:bg-gray-700 sm:mt-0 sm:ml-2 sm:rounded-full"
                >
                    Support
                </a>
                <div className="relative px-2 py-1 mt-6 sm:mt-0 sm:ml-2">
                    <button
                        className="w-10 h-10 overflow-hidden rounded-full"
                        onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
                    >
                        <img
                            src={
                                'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                            }
                            alt="Avatar"
                            className="object-cover object-center w-full h-full"
                        />
                    </button>
                    <div
                        className={`${
                            isAvatarMenuOpen ? 'flex' : 'hidden'
                        } absolute z-20 right-0 flex-col bg-white text-gray-900 rounded-lg overflow-hidden `}
                    >
                        <a
                            href="/tal"
                            className="px-8 py-2 bg-white hover:bg-gray-200"
                        >
                            My account
                        </a>
                        <a
                            href="/tal"
                            className="px-3 py-2 bg-white hover:bg-gray-200"
                        >
                            Settings
                        </a>
                        <a
                            href="/tal"
                            className="px-3 py-2 bg-white hover:bg-gray-200"
                        >
                            Support
                        </a>
                        <a
                            href="/tal"
                            className="px-3 py-2 bg-white hover:bg-gray-200"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
