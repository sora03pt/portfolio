
import Image from 'next/image';
import styles from './Works.module.scss';
import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Works() {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalSrc, setModalSrc] = useState('');
const projects = [
	{
		title: "文章作成支援ツール",
		desc: "使用ツール：Vercel v0\n言語：TypeScript、HTML、CSS\n時間：2h",
		github: "https://github.com/sora03pt/cosplay-recruitment",
		demo: "https://sora03pt.github.io/cosplay-recruitment/",
        image: '/portfolio/image/works/01.jpg',
	},
];

const designs = [
	{
		image: '/portfolio/image/works/design/03.jpg',
		title: '夏期講習バナー',
		desc: '使用ツール：canva\n時間：2h',
	},
	{
		image: '/portfolio/image/works/design/04.jpg',
		title: 'コーヒーサブスクリプションバナー',
		desc: '使用ツール：canva\n時間：2h',
	},
	{
		image: '/portfolio/image/works/design/05.jpg',
		title: '水道工事会社バナー',
		desc: '使用ツール：canva\n時間：2h',
	},
		{
		image: '/portfolio/image/works/design/01.jpg',
		title: '名刺',
		desc: '使用ツール：Adobe Illustrator\n時間：3h',
	},
	{
		image: '/portfolio/image/works/design/02.jpg',
		title: '英会話スクールバナー',
		desc: '使用ツール：canva\n時間：2h',
	},
];

const photos = [
	{
		image: '/portfolio/image/works/photo/01.jpg',
	},
	{
		image: '/portfolio/image/works/photo/02.jpg',
	},
	{
		image: '/portfolio/image/works/photo/03.jpg',
	},
	{
		image: '/portfolio/image/works/photo/05.jpg',
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
			className={`bg-gray-50 rounded-2xl p-6 border border-gray-600 shadow-sm transition ${styles.card}`}
		>
            <div className="h-32 rounded-xl mb-4">
				<a href={p.demo}>
				<Image
					src={p.image}
					alt="Project Image"
					width={128}
					height={128}
					className="object-contain w-full h-full rounded-xl"
				/>
				</a>
            </div>
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{p.desc}</p>
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
	<h3 className="text-1xl font-semibold mb-4">design</h3>
	<div className="grid md:grid-cols-3 gap-6 mb-16">
		{designs.map((design, i) => (
			<button
				key={i}
				type='button'
				className={`bg-gray-50 rounded-2xl p-6 border border-gray-600 shadow-sm transition cursor-pointer ${styles.card}`}
				onClick={() => {
					setModalSrc(design.image);
					setModalOpen(true);
				}}
			>
				<img
					src={design.image}
					alt=""
					height={360}
					className={styles.item}
				/>
				<h4 className="font-semibold mt-3 text-left">{design.title}</h4>
				<p className="text-sm text-gray-600 mt-1 whitespace-pre-line text-left">{design.desc}</p>
			</button>
		))}
		<ImageModal src={modalSrc} open={modalOpen} onClose={() => setModalOpen(false)} />
	</div>
	<h3 className="text-1xl font-semibold mb-4">Photo</h3>
	<div className={`bg-gray-50 rounded-2xl p-6 border border-gray-600 shadow-sm ${styles.images}`}>
		{photos.map((photo, i) => (
			<button
				key={i}
				type='button'
				className={styles.button}
				aria-label="Open image modal"
				onClick={() => {
					setModalSrc(photo.image);
					setModalOpen(true);
				}}
			>
				<img
					src={photo.image}
					alt=""
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