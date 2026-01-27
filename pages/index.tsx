
import Head from 'next/head';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Works from '../src/components/Works';
import Contact from '../src/components/Contact';

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>ポートフォリオ | WebCraft Lab</title>
                <meta name="description" content="ポートフォリオサイト - Web制作とデザインの実例" />

                <link rel="icon" type="image/svg+xml" href="/portfolio/favicon.svg" />
                <link rel="apple-touch-icon" href="/portfolio/favicon.svg" />
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
