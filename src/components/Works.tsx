
import Image from 'next/image';
import styles from './Works.module.scss';
import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Works() {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalSrc, setModalSrc] = useState('');
const projects = [
	{
		title: "文章作成支援ツール(SP向け)",
		desc: "v0を使って実装",
		github: "https://github.com/sora03pt/cosplay-recruitment",
		demo: "https://sora03pt.github.io/cosplay-recruitment/",
        image: '/portfolio/image/works/01.jpg',
	},
	{
		title: "Project Two",
		desc: "insore adan canarst",
		github: "https://github.com/example/project-two",
		demo: "https://example.com/project-two",
        image: '/portfolio/image/works/02.jpg',
	},
	{
		title: "Project Three",
		desc: "Madhedwclleedine",
		github: "https://github.com/example/project-three",
		demo: "https://example.com/project-three",
        image: '/portfolio/image/works/03.jpg',
	},
];

const photos = [
	{
		image: '/portfolio/image/works/photo/01.jpg',
		alt: '',
	},
	{
		image: '/portfolio/image/works/photo/02.jpg',
		alt: '',
	},
	{
		image: '/portfolio/image/works/photo/03.jpg',
		alt: '',
	},
	{
		image: '/portfolio/image/works/photo/05.jpg',
		alt: '',
	},
];

return (
<section id="works" className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-2xl font-semibold mb-8">Works</h2>
    <h3 className="text-1xl font-semibold mb-4">Web</h3>
    <div className="grid md:grid-cols-3 gap-6 mb-16">
        {projects.map((p, i) => (
		<div
			key={i}
			className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm transition ${styles.card}`}
		>
            <div className="h-32 rounded-xl mb-4">
				<Image
					src={p.image}
					alt="Project Image"
					width={128}
					height={128}
					className="object-contain w-full h-full rounded-xl"
				/>
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
            <div className="flex gap-2 mt-4">
                <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                    GitHub
                </a>
                <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                    Demo
                </a>
            </div>
        </div>
        ))}
    </div>
		<h3 className="text-1xl font-semibold mb-4">Photo</h3>
		<div className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm ${styles.images}`}>
		{photos.map((photo, i) => (
			<button
				key={i}
				type='button'
				className={styles.button}
				onClick={() => {
				  setModalSrc(photo.image);
				  setModalOpen(true);
				}}
			>
				<img
					src={photo.image}
					alt={photo.alt}
					height={360}
					className={styles.item}
				/>
			</button>
		))}
		<ImageModal src={modalSrc} open={modalOpen} onClose={() => setModalOpen(false)} />
		</div>
</section>
);
}