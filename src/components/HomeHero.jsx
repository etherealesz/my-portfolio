import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import HeroScene from './Scene';
import formalPhoto from '../assets/foto_formal.png';

export default function HomeHero({ isBright, scrollProgress, heroRef, onNavigate }) {
    return (
        <div ref={heroRef} className="min-h-[200vh]">
            <section className="relative h-screen flex items-center justify-center overflow-hidden sticky top-0">
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]} gl={{ antialias: true }}>
                        <HeroScene scrollProgress={scrollProgress} isBright={isBright} />
                    </Canvas>
                </div>

                <div className={`absolute inset-0 ${isBright ? 'bg-gradient-to-b from-transparent via-horizon-card/40 to-horizon-bg/80' : 'bg-gradient-to-b from-transparent via-midnight-accent/20 to-midnight-bg/80'} z-5 pointer-events-none`}></div>

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center md:justify-end order-2 md:order-1">
                            <div className="relative group">
                                {/* Outer glow effect */}
                                <div className={`absolute inset-0 rounded-full ${isBright ? 'bg-gradient-to-r from-horizon-accent via-horizon-accent to-horizon-accentHover' : 'bg-gradient-to-r from-midnight-accent via-midnight-accent to-midnight-accentHover'} blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-300 animate-glow will-change-transform will-change-opacity`}></div>

                                {/* Inner spinning glow */}
                                <div className={`absolute -inset-4 rounded-full ${isBright ? 'bg-gradient-to-r from-horizon-accent to-horizon-accentHover' : 'bg-gradient-to-r from-midnight-accent to-midnight-accentHover'} blur-xl opacity-40 animate-spin-slow will-change-transform`}></div>

                                {/* Main circle container */}
                                <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${isBright ? 'border-horizon-accent/50 shadow-horizon-accent/40' : 'border-midnight-accent/50 shadow-midnight-accent/40'} shadow-2xl group-hover:scale-105 transition-all duration-500 ease-in-out`}>
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 ${isBright ? 'bg-gradient-to-br from-horizon-accent/15 to-horizon-accentHover/20' : 'bg-gradient-to-br from-midnight-accent/15 to-midnight-accentHover/20'} animate-pulse-slow will-change-opacity`}></div>

                                    {/* Content container */}
                                    <div className={`w-full h-full ${isBright ? 'bg-gradient-to-br from-horizon-card to-horizon-card/90' : 'bg-gradient-to-br from-midnight-card to-midnight-bg'} flex items-center justify-center`}>
                                        <img
                                            src={formalPhoto}
                                            alt="Enardo Stefanus"
                                            className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Floating particles */}
                                <div className={`absolute -top-4 -left-4 w-3 h-3 ${isBright ? 'bg-horizon-accent' : 'bg-midnight-accent'} rounded-full animate-float opacity-80 will-change-transform`}></div>
                                <div className={`absolute -bottom-4 -right-4 w-4 h-4 ${isBright ? 'bg-horizon-accentHover' : 'bg-midnight-accentHover'} rounded-full animate-float-delayed opacity-80 will-change-transform`}></div>
                                <div className={`absolute top-1/2 -right-8 w-2 h-2 ${isBright ? 'bg-horizon-accent' : 'bg-midnight-accent'} rounded-full animate-float opacity-80 will-change-transform`}></div>
                            </div>
                        </div>

                        <div className="text-center md:text-left space-y-6 order-1 md:order-2">
                            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${isBright ? 'text-horizon-accent' : 'text-midnight-text'} mb-6 animate-fade-in`}>
                                <span className={`bg-gradient-to-r ${isBright ? 'from-horizon-accent via-horizon-accent to-horizon-accent' : 'from-midnight-accentHover via-midnight-accentHover to-midnight-accentHover'} bg-clip-text text-transparent`}>
                                    Enardo Stefanus
                                </span>
                            </h1>
                            <p className={`text-2xl sm:text-3xl lg:text-4xl ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-8 font-semibold`}>
                                Full-Stack Developer
                            </p>
                            <p className={`text-lg sm:text-xl ${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'} mb-12 leading-relaxed`}>
                                Specializing in <span className={`${isBright ? 'text-horizon-accent' : 'text-midnight-accent'} font-semibold`}>.NET</span>, <span className={`${isBright ? 'text-horizon-accentHover' : 'text-midnight-accentHover'} font-semibold`}>Flutter</span>, and <span className={`${isBright ? 'text-horizon-success' : 'text-midnight-success'} font-semibold`}>Python</span> development with expertise in educational technology and mobile applications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() => onNavigate('projects')}
                                    className={`${isBright ? 'bg-gradient-to-r from-horizon-accent to-horizon-accentHover hover:from-horizon-accentHover hover:to-horizon-accent shadow-horizon-accent/40' : 'bg-gradient-to-r from-midnight-accent to-midnight-accentHover hover:from-midnight-accentHover hover:to-midnight-accent shadow-midnight-accent/50'} text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg`}
                                >
                                    View My Work
                                </button>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className={`${isBright ? 'bg-horizon-bg/70 hover:bg-horizon-bg/80 border-2 border-horizon-accent/70 text-horizon-text' : 'bg-midnight-card/50 hover:bg-midnight-card/70 border-2 border-midnight-accent/50 text-midnight-text'} backdrop-blur-sm font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105`}
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


