// NavigationBar.js
import React from "react";

const NavigationBar = () => {
    return (
        <nav className="bg-gray-700  p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white font-bold text-xl">
                            Logo
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="/"
                                    className="text-white hover:text-gray-100"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/login"
                                    className="text-white hover:text-gray-100"
                                >
                                    Login
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/signup"
                                    className="text-white hover:text-gray-100"
                                >
                                    Signup
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-white hover:text-gray-100"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
