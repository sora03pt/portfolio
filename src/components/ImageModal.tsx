import React from 'react';
import styles from './ImageModal.module.scss';

interface ImageModalProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}
export default function ImageModal({ src, alt = '', open, onClose }: ImageModalProps) {
  if (!open) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} className={styles.img} />
      </div>
    </div>
  );
};

