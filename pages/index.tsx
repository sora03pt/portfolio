
import Head from 'next/head';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Works from '../src/components/Works';
import Contact from '../src/components/Contact';

export default function Home() {
    return (
    <>
    <Head>
        <title>ポートフォリオ | WebCraft Lab</title>
        <meta name="description" content="ポートフォリオサイト" />
        <meta property="og:title" content="ポートフォリオ | WebCraft Lab" />
    </Head>
    <main>
        <Hero />
        <About />
        <Works />
        <Contact />
    </main>
    </>
    );
}
