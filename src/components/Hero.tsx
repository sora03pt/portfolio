import styles from './Hero.module.scss';

export default function Hero() {
    return (
    <section className={`min-h-screen flex items-center justify-center text-center py-20 relative ${styles.hero}`}>
      {/* 下層の通常コンテンツ */}
    <div className="z-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">WebCraft Lab</h1>
      <p className="mt-2 text-lg text-gray-600">Exploring Design &amp; Code</p>
      <button
      className={`mt-6 px-6 py-2 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition cursor-pointer ${styles.shimmer}`}
      onClick={() => {
          const works = document.getElementById('works');
          if (works) works.scrollIntoView({ behavior: 'smooth' });
  }}
      >
      View Works
      </button>
      <button
        type="button"
        aria-label="Scroll to about"
        className={styles.arrowButton}
        onClick={() => {
            const About = document.getElementById('About');
            if (About) About.scrollIntoView({ behavior: 'smooth' });
        }}
        >
        <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 16.5l-6-6 1.4-1.4L12 13.7l4.6-4.6L18 10.5z" />
        </svg>
        </button>
    </div>

      {/* 黒いオーバーレイ（中央に白いタイトル） */}
      <div className={styles.overlay} role="presentation" aria-hidden="true">
        <div className={styles.overlayInner}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">welcome</h1>
        </div>
      </div>
    </section>
    );
}
