import styles from './Works.module.scss';
import { useState } from 'react';
import ImageModal from './ImageModal';

type FilterKey = 'all' | 'design' | 'photo';

export default function Works() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState('');
    const [modalAlt, setModalAlt] = useState('');
    const [filter, setFilter] = useState<FilterKey>('all');

    const designs = [
        {
            image: '/portfolio/image/works/design/03.jpg',
            title: '夏期講習バナー',
            category: 'Education',
        },
        {
            image: '/portfolio/image/works/design/04.jpg',
            title: 'コーヒーサブスクリプションバナー',
            category: 'Food',
        },
        {
            image: '/portfolio/image/works/design/05.jpg',
            title: '水道工事会社バナー',
            category: 'Service',
        },
        {
            image: '/portfolio/image/works/design/06.jpg',
            title: '運送会社求人バナー',
            category: 'Recruit',
        },
        {
            image: '/portfolio/image/works/design/02.jpg',
            title: '英会話スクールバナー',
            category: 'Education',
        },
        {
            image: '/portfolio/image/works/design/07.jpg',
            title: 'LINE友達登録バナー',
            category: 'SNS',
        }
    ];

    const photos = [
        {
            image: '/portfolio/image/works/photo/01.jpg',
            title: 'Photo work 01',
        },
        {
            image: '/portfolio/image/works/photo/02.jpg',
            title: 'Photo work 02',
        },
        {
            image: '/portfolio/image/works/photo/03.jpg',
            title: 'Photo work 03',
        },
        {
            image: '/portfolio/image/works/photo/05.jpg',
            title: 'Photo work 04',
        },
    ];

    const filters: { key: FilterKey; label: string; count: number }[] = [
        { key: 'all', label: 'All', count: designs.length + photos.length },
        { key: 'design', label: 'Banner', count: designs.length },
        { key: 'photo', label: 'Photo', count: photos.length },
    ];

    return (
        <section id="works" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Works</h2>
                <p className={styles.description}>
                    バナー、写真の制作物を掲載しています。
                </p>
            </div>

            <div className={styles.filterGroup}>
                {filters.map((btn) => (
                    <button
                        key={btn.key}
                        type="button"
                        aria-pressed={filter === btn.key}
                        onClick={() => setFilter(btn.key)}
                        className={`${styles.filterButton} ${filter === btn.key ? styles.active : ''}`}
                    >
                        <span>{btn.label}</span>
                        <small>{btn.count}</small>
                    </button>
                ))}
            </div>

            {(filter === 'all' || filter === 'design') && (
                <div className={styles.categoryBlock}>
                    <div className={styles.categoryHeader}>
                        <h3 className={styles.sectionHeading}>Banner</h3>
                        <p>バナーの作例。</p>
                    </div>
                    <div className={styles.grid}>
                        {designs.map((design, i) => (
                            <button
                                key={i}
                                type='button'
                                className={`${styles.card} ${styles.clickable}`}
                                onClick={() => {
                                    setModalSrc(design.image);
                                    setModalAlt(design.title);
                                    setModalOpen(true);
                                }}
                            >
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className={styles.item}
                                />
                                <span className={styles.designMeta}>{design.category}</span>
                                <h4 className={`${styles.projectTitle} ${styles.leftTitle}`}>{design.title}</h4>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {(filter === 'all' || filter === 'photo') && (
                <div className={styles.categoryBlock}>
                    <div className={styles.categoryHeader}>
                        <h3 className={styles.sectionHeading}>Photo</h3>
                        <p>写真の作例。</p>
                    </div>
                    <div className={styles.photoWrap}>
                        {photos.map((photo, i) => (
                            <button
                                key={i}
                                type='button'
                                className={styles.button}
                                aria-label={`${photo.title}を拡大表示`}
                                onClick={() => {
                                    setModalSrc(photo.image);
                                    setModalAlt(photo.title);
                                    setModalOpen(true);
                                }}
                            >
                                <img
                                    src={photo.image}
                                    alt={photo.title}
                                    className={styles.item}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <ImageModal src={modalSrc} alt={modalAlt} open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
