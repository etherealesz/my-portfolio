import React from 'react';

export default function AboutSection({ isBright, skills }) {
    return (
        <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className={`absolute inset-0 ${isBright ? 'bg-gradient-to-b from-horizon-card/60 to-transparent' : 'bg-gradient-to-b from-midnight-card/50 to-transparent'}`}></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className={`text-4xl sm:text-5xl font-bold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-4`}>
                        About <span className={`bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>Me</span>
                    </h2>
                    <div className={`w-32 h-1.5 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} mx-auto rounded-full`}></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="animate-slide-up">
                        <div className={`${isBright ? 'bg-gradient-to-br from-horizon-card to-horizon-bg border-horizon-accent/30' : 'bg-gradient-to-br from-midnight-card to-midnight-bg border-midnight-accent/20'} backdrop-blur-sm rounded-2xl p-8 border shadow-xl`}>
                            <h3 className={`text-3xl font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-6 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>
                                Professional Background
                            </h3>
                            <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'} mb-4 leading-relaxed`}>
                                I am a passionate Full-Stack Developer and Assistant Lecturer at FTI Tarumanagara University,
                                where I combine technical expertise with educational excellence. With experience in developing
                                complex applications using .NET, Flutter, and Python, I specialize in creating innovative
                                solutions for educational technology and mobile applications.
                            </p>
                            <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'} leading-relaxed`}>
                                My work spans from developing Single Page Applications for Outcome-Based Education systems
                                to teaching 250+ undergraduate students across multiple programming disciplines. I have
                                successfully architected full-stack mobile ecosystems and contributed to significant
                                organizational initiatives, demonstrating both technical proficiency and leadership skills.
                            </p>
                            <div className="mt-6 flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">🎓</span>
                                    <span className={`text-sm ${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'}`}>GPA: 3.98/4.00</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">👨‍🏫</span>
                                    <span className={`text-sm ${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'}`}>250+ Students</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate-slide-up">
                        <h3 className={`text-3xl font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-8 text-center`}>
                            Skills & <span className={`bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>Technologies</span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`${isBright ? 'from-horizon-card to-horizon-bg border-horizon-accent/30 hover:border-horizon-accent/60 hover:shadow-horizon-accent/40' : 'from-midnight-card to-midnight-bg border-midnight-accent/20 hover:border-midnight-accent/50 hover:shadow-midnight-accent/30'} group relative bg-gradient-to-br backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 border shadow-lg`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                                    <div className={`text-sm font-semibold ${isBright ? 'text-horizon-text group-hover:text-horizon-text' : 'text-midnight-text group-hover:text-midnight-text'} transition-colors duration-300`}>{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


