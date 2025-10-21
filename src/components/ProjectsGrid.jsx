import React from 'react';

export default function ProjectsGrid({ isBright, projects }) {
    return (
        <section className={`min-h-screen py-24 px-4 sm:px-6 lg:px-8 ${isBright ? 'bg-gradient-to-b from-horizon-bg via-horizon-card to-horizon-bg' : 'bg-gradient-to-b from-midnight-bg to-midnight-card/30'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl sm:text-5xl font-bold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-4`}>
                        My <span className={`bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>Projects</span>
                    </h2>
                    <div className={`w-32 h-1.5 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} mx-auto rounded-full`}></div>
                    <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'} mt-4`}>Building innovative solutions that make a difference</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${isBright ? 'from-horizon-bg to-horizon-card/40 border-horizon-card hover:border-horizon-accent hover:shadow-horizon-accent/40' : 'from-midnight-bg to-midnight-card/20 border-midnight-card/20 hover:border-midnight-accent/40 hover:shadow-midnight-accent/20'} bg-gradient-to-br backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 border shadow-lg`}
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                                <div className={`${isBright ? 'bg-horizon-accent/90' : 'bg-midnight-accent/90'} absolute top-4 right-4 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white`}>
                                    {project.highlight}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className={`text-xl font-bold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-2`}>{project.title}</h3>
                                <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'} mb-4`}>{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`px-2.5 py-1 bg-gradient-to-r ${isBright ? 'from-horizon-accent/80 to-horizon-accentHover/80 border-horizon-card/50' : 'from-midnight-accent/80 to-midnight-accentHover/80 border-midnight-card/30'} backdrop-blur-sm text-white text-[11px] font-semibold rounded-full border`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-3">
                                    <a
                                        href={project.demo}
                                        className={`flex-1 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover hover:from-horizon-accentHover hover:to-horizon-accent' : 'from-midnight-accent to-midnight-accentHover hover:from-midnight-accentHover hover:to-midnight-accent'} text-white text-center py-2.5 px-4 rounded-xl font-semibold transition-all duration-300`}
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        className={`flex-1 ${isBright ? 'bg-horizon-bg/70 hover:bg-horizon-bg/80 border-horizon-card/50 text-horizon-text' : 'bg-midnight-bg/50 hover:bg-midnight-card/50 border-midnight-card/30 text-midnight-text'} backdrop-blur-sm border text-center py-2.5 px-4 rounded-xl font-semibold transition-all duration-300`}
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


