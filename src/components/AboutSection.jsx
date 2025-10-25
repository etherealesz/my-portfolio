
export default function AboutSection({ isBright }) {
    return (
        <section className={`min-h-screen py-24 px-4 sm:px-6 lg:px-8 ${isBright ? 'bg-gradient-to-b from-horizon-bg via-horizon-card to-horizon-bg' : 'bg-gradient-to-b from-midnight-bg to-midnight-card/30'}`}>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-18">
                    <h2 className={`text-4xl sm:text-5xl font-bold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-4`}>
                        About <span className={`bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>Me</span>
                    </h2>
                    <div className={`w-32 h-1.5 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} mx-auto rounded-full mb-8`}></div>
                    <p className={`${isBright ? 'text-horizon-text' : 'text-midnight-text'} text-center mb-5 text-lg`}>
                        My journey in technology, driven by a passion for creating and problem-solving.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Professional Background Card */}
                    <div className="animate-slide-up mb-20">
                        <div className={`${isBright ? 'bg-gradient-to-br from-horizon-card to-horizon-bg border-horizon-accent/30' : 'bg-gradient-to-br from-midnight-card to-midnight-bg border-midnight-accent/20'} backdrop-blur-sm rounded-2xl p-8 border shadow-xl`}>
                            <h3 className={`text-3xl font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-6 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>
                                Professional Background
                            </h3>
                            <p className={`${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-4 leading-relaxed text-justify`}>
                                I am a passionate Full-Stack Developer and Assistant Lecturer at FTI Tarumanagara University,
                                where I combine technical expertise with educational excellence. With experience in developing
                                complex applications using .NET, Flutter, and Python, I specialize in creating innovative
                                solutions for educational technology and mobile applications.
                            </p>
                            <p className={`${isBright ? 'text-horizon-text' : 'text-midnight-text'} leading-relaxed text-justify`}>
                                My work spans from developing Single Page Applications for Outcome-Based Education systems
                                to teaching 250+ undergraduate students across multiple programming disciplines. I have
                                successfully architected full-stack mobile ecosystems and contributed to significant
                                organizational initiatives, demonstrating both technical proficiency and leadership .
                            </p>
                            <div className="mt-6 flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">🎓</span>
                                    <span className={`text-sm ${isBright ? 'text-horizon-text' : 'text-midnight-text'}`}>GPA: 3.98/4.00</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">👨‍🏫</span>
                                    <span className={`text-sm ${isBright ? 'text-horizon-text' : 'text-midnight-text'}`}>280+ Students</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

