import styles from './About.module.scss';

export default function About() {
  return (
    <section id="About" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            <span className={styles.decoration}></span>
            About
          </h2>
          <p className={styles.paragraph}>
            <span>
              美術系大学卒。Webデザイナーとして2年間経験を積んだ後、フロントエンド開発へと領域を広げました。<br />
              デザインと実装の両視点から、ユーザビリティとアクセシビリティを重視したWeb制作を行っています。
            </span>
          </p>
          <h3 className={styles.subtitle}>Skills</h3>
          <div className={styles.skills}>
            {["HTML", "CSS", "JS", "TS", "React", "Next.js", "Vue.js", "Photoshop", "Canva", "a11y", "Lighthouse"].map((skill) => (
              <span key={skill} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
