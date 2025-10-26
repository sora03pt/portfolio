

import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Works from '../src/components/Works';
import Contact from '../src/components/Contact';

export default function Home() {
    return (
    <main className="relative min-h-screen bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl mx-4 my-8 p-2 bg-linear-to-b from-gray-50 text-gray-800 font-sans">
        <Hero />
        <About />
        <Works />
        <Contact />
    </main>
    );
}
