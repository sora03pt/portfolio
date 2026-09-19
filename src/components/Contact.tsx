import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Links</h2>
      <div className={styles.links}>
        <a href='https://github.com/sora03pt' target='_blank' rel="noopener noreferrer" className={styles.contactItem}>
          <span className={styles.iconWrap}>
            <img src="/portfolio/image/icon/github.svg" alt="" width={24} height={24} />
          </span>
          <span>
            <strong>GitHub</strong>
            <small>sora03pt</small>
          </span>
        </a>
        <a
          href="mailto:sora0223pt-abcd@yahoo.co.jp"
          className={styles.contactItem}
        >
          <span className={styles.iconWrap}>
            <img src="/portfolio/image/icon/mail.svg" alt="" width={24} height={24} />
          </span>
          <span>
            <strong>Email</strong>
            <small>sora0223pt-abcd@yahoo.co.jp</small>
          </span>
        </a>
      </div>
    </section>
  );
}
