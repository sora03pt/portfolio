import styles from './About.module.scss';

export default function About() {
  const profile = [
    '美術系大学卒',
    'Webデザイナーとして2年勤務',
    '現在はWeb制作 / フロントエンド開発を中心に制作',
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Storybook',
    'Playwright',
    'Accessibility',
    'UI実装',
    'Lighthouse',
  ];

  return (
    <section id="About" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>About</h2>
      </div>
      <div className={styles.layout}>
        <div>
          <h3 className={styles.subtitle}>Profile</h3>
          <div className={styles.profileIntro}>
            <p className={styles.name}>MAYU NAKAMURA</p>
          </div>
          <ul className={styles.list}>
            {profile.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subtitle}>Skills</h3>
          <div className={styles.skills}>
            {skills.map((skill) => (
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
