
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Works from '../src/components/Works';
import Contact from '../src/components/Contact';

export default function Home() {
    return (
        <main className="min-h-screen bg-linear-to-b from-gray-50 to-white text-gray-800 font-sans">
            <Hero />
            <About />
            <Works />
            <Contact />
        </main>
    );
}
