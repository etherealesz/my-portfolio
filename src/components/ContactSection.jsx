import React from 'react';

export default function ContactSection({ isBright, formData, onInputChange, onSubmit }) {
    return (
        <section className={`min-h-screen py-24 px-4 sm:px-6 lg:px-8 ${isBright ? 'bg-gradient-to-b from-horizon-bg via-horizon-card to-horizon-bg' : 'bg-gradient-to-b from-midnight-bg to-midnight-card/30'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className={`text-4xl sm:text-5xl font-bold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-4`}>
                        Get In <span className={`bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} bg-clip-text text-transparent`}>Touch</span>
                    </h2>
                    <div className={`w-32 h-1.5 bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} mx-auto rounded-full`}></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="animate-slide-up">
                        <h3 className={`text-3xl font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-6`}>
                            Let's Connect
                        </h3>
                        <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'} mb-8 leading-relaxed`}>
                            I'm always interested in new opportunities and collaborations.
                            Whether you have a project in mind or just want to chat about technology,
                            feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className={`w-14 h-14 bg-gradient-to-br ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <span className="text-2xl">📧</span>
                                </div>
                                <div>
                                    <p className={`${isBright ? 'text-horizon-text' : 'text-midnight-text'} font-semibold text-lg`}>Email</p>
                                    <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'}`}>stefanus.enardo05@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className={`w-14 h-14 bg-gradient-to-br ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <span className="text-2xl">📱</span>
                                </div>
                                <div>
                                    <p className={`${isBright ? 'text-horizon-text' : 'text-midnight-text'} font-semibold text-lg`}>Phone</p>
                                    <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'}`}>+62 817-5731-732</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className={`w-14 h-14 bg-gradient-to-br ${isBright ? 'from-horizon-accent to-horizon-accentHover' : 'from-midnight-accent to-midnight-accentHover'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div>
                                    <p className={`${isBright ? 'text-horizon-text' : 'text-midnight-text'} font-semibold text-lg`}>Location</p>
                                    <p className={`${isBright ? 'text-horizon-textSecondary' : 'text-midnight-textSecondary'}`}>Jakarta Barat, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className={`text-xl font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-6`}>Follow Me</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/enardo-dev/" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg ${isBright ? 'bg-gradient-to-br from-horizon-bg to-horizon-card hover:from-horizon-accent hover:to-horizon-accentHover' : 'bg-gradient-to-br from-midnight-bg to-midnight-card hover:from-midnight-accent hover:to-midnight-accentHover'}`}>
                                    <span className="text-xl">💼</span>
                                </a>
                                <a href="https://github.com/etherealesz" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg ${isBright ? 'bg-gradient-to-br from-horizon-bg to-horizon-card hover:from-horizon-accent hover:to-horizon-accentHover' : 'bg-gradient-to-br from-midnight-bg to-midnight-card hover:from-midnight-accent hover:to-midnight-accentHover'}`}>
                                    <span className="text-xl">🐙</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="animate-slide-up">
                        <form onSubmit={onSubmit} className={`${isBright ? 'from-horizon-bg to-horizon-card border-horizon-card/50' : 'from-midnight-bg to-midnight-card/30 border-midnight-card/20'} space-y-6 bg-gradient-to-br backdrop-blur-sm rounded-2xl p-8 border shadow-xl`}>
                            <div>
                                <label htmlFor="name" className={`block text-sm font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-2`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={onInputChange}
                                    required
                                    className={`w-full px-4 py-3 ${isBright ? 'bg-horizon-bg border-horizon-card/50 text-horizon-text placeholder-horizon-textSecondary focus:ring-horizon-accent' : 'bg-midnight-bg/50 border-midnight-card/30 text-midnight-text placeholder-midnight-textSecondary focus:ring-midnight-accent'} border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300`}
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className={`block text-sm font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-2`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={onInputChange}
                                    required
                                    className={`w-full px-4 py-3 ${isBright ? 'bg-horizon-bg border-horizon-card/50 text-horizon-text placeholder-horizon-textSecondary focus:ring-horizon-accent' : 'bg-midnight-bg/50 border-midnight-card/30 text-midnight-text placeholder-midnight-textSecondary focus:ring-midnight-accent'} border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300`}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className={`block text-sm font-semibold ${isBright ? 'text-horizon-text' : 'text-midnight-text'} mb-2`}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={onInputChange}
                                    required
                                    rows={5}
                                    className={`w-full px-4 py-3 ${isBright ? 'bg-horizon-bg border-horizon-card/50 text-horizon-text placeholder-horizon-textSecondary focus:ring-horizon-accent' : 'bg-midnight-bg/50 border-midnight-card/30 text-midnight-text placeholder-midnight-textSecondary focus:ring-midnight-accent'} border rounded-xl focus:ring-2 focus:border-transparent placeholder:transition-all resize-none transition-all duration-300`}
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full bg-gradient-to-r ${isBright ? 'from-horizon-accent to-horizon-accentHover hover:from-horizon-accentHover hover:to-horizon-accent hover:shadow-horizon-accent/40' : 'from-midnight-accent to-midnight-accentHover hover:from-midnight-accentHover hover:to-midnight-accent hover:shadow-midnight-accent/50'} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}


