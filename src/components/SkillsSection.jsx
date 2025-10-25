const SkillCategory = ({ title, skills, isBright }) => (
    <div className="mb-12">
        <h4 className={`text-xl font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-5 text-center sm:text-left`}>
            {title}
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-6 gap-x-4">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`group relative p-2 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center rounded-lg ${isBright ? 'hover:bg-horizon-card/50 hover:shadow-lg hover:shadow-horizon-accent/30' : 'hover:bg-midnight-card/50 hover:shadow-lg hover:shadow-midnight-accent/30'}`}
                >
                    <i 
                        className={`${skill.icon} text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 ${isBright ? 'text-horizon-accent' : 'text-midnight-accent'}`}
                    />
                    <div className={`text-xs font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} transition-colors duration-300`}>{skill.name}</div>
                </div>
            ))}
        </div>
    </div>
);


export default function SkillsSection({ isBright, skillsData }) {
    return (
        <section className={`min-h-screen py-24 px-4 sm:px-6 lg:px-8 ${isBright ? 'bg-gradient-to-b from-horizon-bg via-horizon-card to-horizon-bg' : 'bg-gradient-to-b from-midnight-bg to-midnight-card/30'}`}>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-5">
                    <h2 className={`text-4xl sm:text-5xl font-bold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-4`}>
                        Skills & <span className={`bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>Technologies</span>
                    </h2>
                    <div className={`w-32 h-1.5 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} mx-auto rounded-full`}></div>
                </div>              
                <p className={`${isBright ? 'text-horizon-text' : 'text-midnight-text'} text-center mb-8 text-lg`}>
                    A collection of the languages, frameworks, and tools I use to bring ideas to life.
                </p>
                <div className="animate-slide-up">
                    <div className={`${isBright ? 'bg-gradient-to-br from-horizon-card to-horizon-bg border-horizon-accent/30' : 'bg-gradient-to-br from-midnight-card to-midnight-bg border-midnight-accent/20'} backdrop-blur-sm rounded-2xl p-8 border shadow-xl`}>
                        <SkillCategory title="Programming Languages" skills={skillsData.programmingLanguages} isBright={isBright} />
                        <SkillCategory title="Frameworks & Technologies" skills={skillsData.frameworks} isBright={isBright} />
                        <SkillCategory title="Tools & Software" skills={skillsData.tools} isBright={isBright} />
                        <SkillCategory title="Other Skills" skills={skillsData.other} isBright={isBright} />
                    </div>
                </div>
            </div>
        </section>
    );
}

