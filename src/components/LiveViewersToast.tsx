'use client';

import { useState, useEffect } from 'react';
import styles from './LiveViewersToast.module.css';

export default function LiveViewersToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewers, setViewers] = useState(() => Math.floor(Math.random() * (75 - 25 + 1)) + 25);

  useEffect(() => {
    // Aguarda 3 segundos antes de exibir o toast
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Flutua suavemente o número de pessoas online a cada 6 segundos
    const fluctuateTimer = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 a +2
        return Math.max(14, prev + change);
      });
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(fluctuateTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.toast}>
      <div className={styles.pulseIndicator}>
        <div className={styles.pulseDot}></div>
      </div>
      <div className={styles.content}>
        <span className={styles.number}>{viewers}</span> pessoas estão visualizando esta página agora.
      </div>
      <button 
        className={styles.closeBtn} 
        onClick={() => setIsVisible(false)}
        aria-label="Fechar notificação"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
