import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/HomeHero';
import AboutSection from './components/AboutSection';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';
import AppFooter from './components/AppFooter';
import { projects } from './data/projects';
import { skills } from './data/skills';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isBright, setIsBright] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current && currentPage === 'home') {
                const rect = heroRef.current.getBoundingClientRect();
                const scrolled = Math.max(0, -rect.top);
                const height = rect.height;
                const progress = Math.min(scrolled / height, 1);
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentPage]);

    const navigateTo = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={`${isBright ? 'min-h-screen bg-gradient-to-br from-white via-sky-50 to-white text-gray-900' : 'min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100'}`}>
            {/* Navigation */}
            <NavBar
                isBright={isBright}
                currentPage={currentPage}
                onNavigate={navigateTo}
                onToggleTheme={() => setIsBright(!isBright)}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />

            {/* Home Page */}
            {currentPage === 'home' && (
                <HomeHero isBright={isBright} scrollProgress={scrollProgress} heroRef={heroRef} onNavigate={navigateTo} />
            )}

            {/* About Page */}
            {currentPage === 'about' && (
                <AboutSection isBright={isBright} skills={skills} />
            )}

            {/* Projects Page */}
            {currentPage === 'projects' && (
                <ProjectsGrid isBright={isBright} projects={projects} />
            )}

            {/* Contact Page */}
            {currentPage === 'contact' && (
                <ContactSection
                    isBright={isBright}
                    formData={formData}
                    onInputChange={handleInputChange}
                    onSubmit={handleFormSubmit}
                />
            )}

            {/* Footer */}
            <AppFooter isBright={isBright} />


        </div>
    );
}

export default App;