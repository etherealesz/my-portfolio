import React from 'react';

export default function NavBar({ isBright, currentPage, onNavigate, onToggleTheme, isMenuOpen, setIsMenuOpen }) {
    return (
        <nav className={`fixed top-0 w-full z-50 ${isBright ? 'bg-horizon-bg/70 border-horizon-card/40' : 'bg-midnight-bg/70 border-midnight-card/20'} backdrop-blur-lg border-b`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
                        <span className={`text-2xl font-bold bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>
                            ENARDO S
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => onNavigate(item)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentPage === item
                                        ? `${isBright ? 'text-white bg-gradient-to-r from-horizon-accent to-horizon-accentHover shadow-lg shadow-horizon-accent/40' : 'text-white bg-gradient-to-r from-midnight-accent to-midnight-accentHover shadow-lg shadow-midnight-accent/50'}`
                                        : `${isBright ? 'text-horizon-textSecondary hover:text-horizon-text hover:bg-horizon-card/70' : 'text-midnight-textSecondary hover:text-midnight-text hover:bg-midnight-card/50'}`
                                        }`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            ))}
                            <button
                                onClick={onToggleTheme}
                                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${isBright ? 'bg-horizon-card text-horizon-bg hover:bg-horizon-textSecondary bg-horizon-card' : 'bg-midnight-text/10 text-midnight-text hover:bg-midnight-text/20 bg-horizon-text'} border ${isBright ? 'border-horizon-card/40' : 'border-midnight-text/20'}`}
                                aria-label="Toggle theme"
                                title={isBright ? 'Switch to Dark' : 'Switch to Bright'}
                            >
                                {isBright ? (
                                    <span className="text-lg">🌙</span>
                                ) : (
                                    <span className="text-lg">☀️</span>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`${isBright ? 'text-horizon-textSecondary hover:text-horizon-text' : 'text-midnight-textSecondary hover:text-midnight-text'} focus:outline-none`}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className={`${isBright ? 'bg-horizon-bg/95' : 'bg-midnight-bg/95'} px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg`}>
                        {['home', 'about', 'projects', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => onNavigate(item)}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${currentPage === item
                                    ? `${isBright ? 'text-white bg-gradient-to-r from-horizon-accent to-horizon-accentHover' : 'text-white bg-gradient-to-r from-midnight-accent to-midnight-accentHover'}`
                                    : `${isBright ? 'text-horizon-textSecondary hover:text-horizon-text hover:bg-horizon-card' : 'text-midnight-textSecondary hover:text-midnight-text hover:bg-midnight-card'}`
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                        <button
                            onClick={onToggleTheme}
                            className={`mt-2 w-12 h-12 flex items-center justify-center rounded-full ${isBright ? 'bg-horizon-text text-horizon-bg' : 'bg-midnight-text/10 text-midnight-text'} border ${isBright ? 'border-horizon-card/40' : 'border-midnight-text/20'}`}
                            aria-label="Toggle theme"
                            title={isBright ? 'Switch to Dark' : 'Switch to Bright'}
                        >
                            {isBright ? <span className="text-xl">🌙</span> : <span className="text-xl">☀️</span>}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}


