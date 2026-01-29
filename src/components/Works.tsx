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
        <section id="works" className={styles.section}>
            <h2 className={styles.title}>Works</h2>

            {/* フィルタボタン */}
            <div className={styles.filterGroup}>
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
                        className={`${styles.filterButton} ${filter === (btn.key as any) ? styles.active : ''}`}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            {/* Web */}
            {(filter === 'all' || filter === 'web') && (
                <>
                    <h3 className={styles.sectionHeading}>Web</h3>
                    <div className={styles.grid}>
                        {projects.map((p, i) => (
                            <div
                                key={i}
                                className={styles.card}
                            >
                                <div className={styles.mediaWrap}>
                                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={p.image}
                                            alt="Project Image"
                                            height={128}
                                            className={styles.projectImage}
                                        />
                                    </a>
                                </div>
                                <h4 className={styles.projectTitle}>{p.title}</h4>
                                <div className={styles.linkButtons}>
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.linkButton}
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.linkButton}
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
                    <h3 className={styles.sectionHeading}>Design</h3>
                    <div className={styles.grid}>
                        {designs.map((design, i) => (
                            <button
                                key={i}
                                type='button'
                                className={`${styles.card} ${styles.clickable}`}
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
                                <h4 className={`${styles.projectTitle} ${styles.leftTitle}`}>{design.title}</h4>
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* Photo */}
            {(filter === 'all' || filter === 'photo') && (
                <>
                    <h3 className={styles.sectionHeading}>Photo</h3>
                    <div className={styles.photoWrap}>
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