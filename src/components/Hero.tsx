import housesImg from '../assets/images/houses2.jpg';
import logoDark from '../assets/images/logo-dark.png';

// import logoLight from './assets/images/logo-light.png';

export default function Hero() {
    return (
        <div className="flex bg-gray-100">
            <div className="p-8 max-w-md mx-auto sm:max-w-xl lg:py-24 lg:px-12 lg:max-w-full lg:w-1/2">
                <div className="xl:max-w-lg xl:ml-auto">
                    {/* <img src={logoDark} alt="Homy logo" className="h-16" /> */}
                    <img
                        src={housesImg}
                        alt="Houses"
                        className="mt-8 rounded-lg sm:h-64 sm:w-full  sm:object-cover sm:object-center lg:hidden"
                    />
                    <h1 className="mt-4 text-3xl font-bold text-gray-800 leading-tight tracking-tighter sm:text-4xl sm:mt-8">
                        Your next home is waiting.
                        <br />
                        <span className="text-brand">Find it now!</span>
                    </h1>
                    <p className="mt-2 text-lg text-gray-500 sm:text-xl sm:mt-4">
                        Homy helps you find your next nome, to rent or to be
                        called your own!
                    </p>
                    <div className="mt-4 sm:mt-6">
                        <a
                            href="/helou"
                            className="btn btn-primary shadow-lg sm:text-lg"
                        >
                            See listings
                        </a>
                        <a
                            href="/helou"
                            className="ml-2 btn btn-secondary shadow-lg sm:text-lg"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 lg:relative">
                <img
                    src={housesImg}
                    alt="Houses"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            </div>
        </div>
    );
}
