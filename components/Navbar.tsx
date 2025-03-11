'use client';

export default function Navbar() {
    if (typeof window !== 'undefined') {
        window.onscroll = () => {
            const navbar = document.getElementById('navbar');
            const navbarBackdrop = document.getElementById('navbar-backdrop');
            if (navbar) {
                const fixedNav = navbar.offsetTop;
                if (window.pageYOffset > fixedNav) {
                    navbar.classList.remove('navbar-absolute');
                    navbar.classList.add('navbar-fixed');
                    if (navbarBackdrop?.classList.contains('backdrop-is-active')) {
                        navbarBackdrop.classList.remove('hidden');
                    }
                } else {
                    navbar.classList.remove('navbar-fixed');
                    navbar.classList.add('navbar-absolute');
                    if (navbarBackdrop?.classList.contains('backdrop-is-active')) {
                        navbarBackdrop.classList.add('hidden');
                    }
                }
            }
        };
    }

    const toggleHamburger = () => {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navbar-menu');
        hamburger?.classList.toggle('hamburger-active');
        navMenu?.classList.toggle('navbar-mobile-menu-active');
    };

    return (
        <div className="w-full">
            <div id="navbar" className="w-full navbar-absolute py-4 top-0 left-0 z-50 backdrop-blur-sm">
                <div className="w-11/12 sm:w-5/6 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="order-2 sm:order-1">
                            <div className="w-20 sm:w-28 relative z-50">
                                <a href="#" className="text-white text-4xl font-black tracking-tightest select-none">
                                    AYY.
                                </a>
                            </div>
                        </div>
                        <div className="order-1 sm:order-2 sm:w-full">
                            <div className="hidden sm:block">
                                <div className="flex justify-end items-center text-sm font-semibold">
                                    <a
                                        href="#about-me"
                                        className="mx-4 cursor-pointer text-custom-black-300 hover:text-white"
                                    >
                                        About Me
                                    </a>
                                    <a
                                        href="#skills"
                                        className="mx-4 cursor-pointer text-custom-black-300 hover:text-white"
                                    >
                                        Skills
                                    </a>
                                    <a
                                        href="#tools"
                                        className="mx-4 cursor-pointer text-custom-black-300 hover:text-white"
                                    >
                                        Tools
                                    </a>
                                    <a
                                        href="#my-journey"
                                        className="mx-4 cursor-pointer text-custom-black-300 hover:text-white"
                                    >
                                        My Journey
                                    </a>
                                    <a
                                        href="#projects"
                                        className="mx-4 cursor-pointer text-custom-black-300 hover:text-white"
                                    >
                                        Projects
                                    </a>
                                </div>
                            </div>
                            <div className="sm:hidden">
                                <button
                                    id="hamburger"
                                    name="hamburger"
                                    aria-label="hamburger"
                                    className="block relative z-50"
                                    type="button"
                                    onClick={toggleHamburger}
                                >
                                    <div className="w-9 h-1 rounded-full bg-custom-black-300 origin-top-left transition duration-300 ease-in-out"></div>
                                    <div className="w-9 h-1 rounded-full my-2 bg-custom-black-300 transition duration-300 ease-in-out"></div>
                                    <div className="w-9 h-1 rounded-full bg-custom-black-300 origin-bottom-left transition duration-300 ease-in-out"></div>
                                </button>
                                <div
                                    id="navbar-menu"
                                    className="fixed py-4 px-4 bg-custom-black-900 border-b border-white/10 -top-[350px] shadow-lg mt-2 w-full left-0 transition duration-300 ease-out"
                                >
                                    <ul className="pt-20 text-custom-black-300 text-center text-base font-bold">
                                        <li className="py-2">
                                            <a href="#about-me" onClick={toggleHamburger}>
                                                About Me
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="#skills" onClick={toggleHamburger}>
                                                Skills
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="#tools" onClick={toggleHamburger}>
                                                Tools
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="#my-journey" onClick={toggleHamburger}>
                                                My Journey
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="#projects" onClick={toggleHamburger}>
                                                Projects
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
