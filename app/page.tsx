import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Journey from './components/Journey';
import Projects from './components/Projects';

export default function Home() {
    return (
        <>
            <div className="w-full min-h-screen bg-custom-black-900">
                <div className="w-full sm:w-5/6 sm:mx-auto">
                    <Navbar />
                    <Hero />
                    <AboutMe />
                    <Skills />
                    <Tools />
                    <Journey />
                    <Projects />
                </div>
            </div>
            <div className="w-full bg-custom-black-600 pb-10 pt-8 border-t border-gray-700">
                <div className="w-full sm:w-5/6 sm:mx-auto">
                    <Footer />
                </div>
            </div>
        </>
    );
}
