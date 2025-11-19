import Image from 'next/image';
import Profile from '../image/profile.jpg';

export default function Hero() {
    return (
        <section className="text-center py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">WebCraft Lab</h1>
            <p className="mt-2 text-lg text-gray-600">Exploring Design & Code</p>
            <button
                className="mt-6 px-6 py-2 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition cursor-pointer"
                onClick={() => {
                    const works = document.getElementById('works');
                    if (works) {
                        works.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                View Works
            </button>
        </section>
    );
}
