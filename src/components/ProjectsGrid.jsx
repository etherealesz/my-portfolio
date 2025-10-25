export default function ProjectsGrid({ isBright, projects }) {
    return (
        <section className={`min-h-screen py-24 px-4 sm:px-6 lg:px-8 ${isBright ? 'bg-gradient-to-b from-horizon-bg via-horizon-card to-horizon-bg' : 'bg-gradient-to-b from-midnight-bg to-midnight-card/30'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl sm:text-5xl font-bold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-4`}>
                        My <span className={`bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>Projects</span>
                    </h2>
                    <div className={`w-32 h-1.5 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} mx-auto rounded-full`}></div>
                    <p className={`${isBright ? 'text-horizon-text' : 'text-midnight-text'} mt-4 text-lg`}>Building innovative solutions that make a difference</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${isBright ? 'border-horizon-card hover:border-horizon-accent' : 'border-midnight-card/20 hover:border-midnight-accent/40'} rounded-2xl overflow-hidden transition-all duration-300 border shadow-lg group relative h-96`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                            
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className={`${isBright ? 'bg-horizon-accent/90' : 'bg-midnight-accent/90'} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white w-fit mb-3`}>
                                    {project.highlight}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-200 mb-4 text-sm line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-black text-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gray-100"
                                    >
                                        {project.linkText || 'View Project'}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}