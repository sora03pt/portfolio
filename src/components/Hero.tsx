import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section id="top" className={styles.heroSection}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a href="#top" className={styles.brand}>
          WebCraft Lab
        </a>
        <div className={styles.navLinks}>
          <a href="#About">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className={styles.content}>
        <h1 className={styles.title}>WebCraft Lab</h1>
        <p className={styles.role}>Frontend Engineer</p>
        <p className={styles.subtitle}>
          React / Next.js / TypeScriptを中心に、Webフロントエンドの実装をしています。
        </p>
        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={() => {
              const works = document.getElementById('works');
              if (works) works.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Works
          </button>
        </div>
      </div>
    </section>
  );
}
