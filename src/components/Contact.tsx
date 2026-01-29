import Image from 'next/image';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.links}>
        <a href='https://github.com/sora03pt' target='_blank' className={styles.contactItem}>
          <span className={styles.iconWrap}>
            <Image src="/portfolio/image/icon/github.svg" alt="" width={24} height={24} />
          </span>
          <p className={styles.label}>GitHub</p>
        </a>
        <button
          className={styles.contactItem}
          onClick={() => {
            window.location.href = 'mailto:sora0223pt-abcd@yahoo.co.jp';
          }}
        >
          <span className={styles.iconWrap}>
            <Image src="/portfolio/image/icon/mail.svg" alt="" width={24} height={24} />
          </span>
          <p className={styles.label}>Email</p>
        </button>
      </div>
    </section>
  );
}
