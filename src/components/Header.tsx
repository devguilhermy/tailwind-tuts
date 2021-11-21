import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import logoLight from '../assets/images/logo-light.png';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    return (
        <header className="bg-gray-900 px-4 py-3 sm:flex z-10 sm:items-center sm:justify-between ">
            <div className="flex items-center justify-between">
                <div>
                    <img src={logoLight} alt="Homy logo" className="h-12" />
                </div>
                <div className="sm:hidden">
                    <button
                        type="button"
                        className="text-gray-100 focus:text-gray-300 hover:text-gray-300 transition focus:outline-none focus:ring"
                        onClick={() =>
                            setIsMobileMenuActive(!isMobileMenuActive)
                        }
                    >
                        {isMobileMenuActive ? (
                            <IoClose className="w-10 h-10" />
                        ) : (
                            <FiMenu className="w-10 h-10" />
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`pt-6 pb-4 px-1 text-white text-center transition text-3xl ${
                    isMobileMenuActive ? 'block' : 'hidden'
                } sm:flex sm:items-center sm:justify-between sm:text-xl`}
            >
                <a
                    href="/"
                    className="block hover:bg-gray-700 rounded-lg py-1 px-2 focus:bg-gray-700 sm:mt-0 sm:rounded-full transition"
                >
                    Listings
                </a>
                <a
                    href="/"
                    className="mt-6  block hover:bg-gray-700 rounded-lg py-1 px-2 focus:bg-gray-700 sm:mt-0 sm:ml-2 sm:rounded-full transition"
                >
                    My properties
                </a>
                <a
                    href="/"
                    className="mt-6  block hover:bg-gray-700 rounded-lg py-1 px-2 focus:bg-gray-700 sm:mt-0 sm:ml-2 sm:rounded-full transition"
                >
                    Support
                </a>
                <a
                    href="/"
                    className="mt-6  block hover:bg-gray-700 rounded-lg py-1 px-2 focus:bg-gray-700 sm:mt-0 sm:ml-2 sm:rounded-full transition"
                >
                    About
                </a>
            </div>
        </header>
    );
}
