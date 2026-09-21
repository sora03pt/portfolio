'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const updateNavPosition = () => {
      const hero = heroRef.current;
      if (hero) setIsNavFixed(hero.getBoundingClientRect().bottom <= 0);
    };

    updateNavPosition();
    window.addEventListener('scroll', updateNavPosition, { passive: true });
    window.addEventListener('resize', updateNavPosition);

    return () => {
      window.removeEventListener('scroll', updateNavPosition);
      window.removeEventListener('resize', updateNavPosition);
    };
  }, []);

  return (
    <section id="top" ref={heroRef} className={styles.heroSection}>
      <img
        src="/portfolio/image/main-visual.jpg"
        alt=""
        className={styles.mainVisual}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <nav
        className={`${styles.nav} ${isNavFixed ? styles.navFixed : ''}`}
        aria-label="Primary navigation"
      >
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
            View Works
          </button>
        </div>
      </div>
    </section>
  );
}
