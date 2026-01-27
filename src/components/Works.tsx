import Image from 'next/image';
import styles from './Works.module.scss';
import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Works() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState('');
    const [filter, setFilter] = useState<'all' | 'web' | 'design' | 'photo'>('all');

    const projects = [
        {
            title: "アクセサリーECサイト",
            github: "https://github.com/sora03pt/accessoryShop",
            demo: "https://sora03pt.github.io/accessoryShop/",
            image: '/portfolio/image/works/01.jpg',
        },
    ];

    const designs = [
        {
            image: '/portfolio/image/works/design/03.jpg',
            title: '夏期講習バナー',
        },
        {
            image: '/portfolio/image/works/design/04.jpg',
            title: 'コーヒーサブスクリプションバナー',
        },
        {
            image: '/portfolio/image/works/design/05.jpg',
            title: '水道工事会社バナー',
        },
        {
            image: '/portfolio/image/works/design/06.jpg',
            title: '運送会社求人バナー',
        },
        {
            image: '/portfolio/image/works/design/02.jpg',
            title: '英会話スクールバナー',
        },
        {
            image: '/portfolio/image/works/design/07.jpg',
            title: 'LINE友達登録バナー',
        }
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
            <h2 className="text-2xl font-semibold mb-4">Works</h2>

            {/* フィルタボタン */}
            <div className="flex flex-wrap gap-3 mb-8">
                {[
                    { key: 'all', label: 'All' },
                    { key: 'web', label: 'Web' },
                    { key: 'design', label: 'Design' },
                    { key: 'photo', label: 'Photo' },
                ].map((btn) => (
                    <button
                        key={btn.key}
                        type="button"
                        aria-pressed={filter === (btn.key as any)}
                        onClick={() => setFilter(btn.key as any)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition ${filter === (btn.key as any)
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            {/* Web */}
            {(filter === 'all' || filter === 'web') && (
                <>
                    <h3 className="text-1xl font-semibold mb-4">Web</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {projects.map((p, i) => (
                            <div
                                key={i}
                                className={`bg-gray-50 rounded-2xl p-6 border border-gray-600 shadow-sm transition ${styles.card}`}
                            >
                                <div className="h-32 rounded-xl mb-4">
                                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
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
                </>
            )}

            {/* Design */}
            {(filter === 'all' || filter === 'design') && (
                <>
                    <h3 className="text-1xl font-semibold mb-4">Design</h3>
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
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* Photo */}
            {(filter === 'all' || filter === 'photo') && (
                <>
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
                    </div>
                </>
            )}

            {/* モーダル */}
            <ImageModal src={modalSrc} open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}