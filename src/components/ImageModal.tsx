import { useEffect } from 'react';
import styles from './ImageModal.module.scss';

interface ImageModalProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}
export default function ImageModal({ src, alt = '', open, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={alt || '拡大画像'} onClick={e => e.stopPropagation()}>
        <button type="button" className={styles.closeButton} aria-label="閉じる" onClick={onClose}>
          ×
        </button>
        <img src={src} alt={alt} className={styles.img} />
      </div>
    </div>
  );
}
