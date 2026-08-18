'use client';
import { useEffect, useState } from 'react';
import { Hourglass } from 'lucide-react';
import styles from './CountdownBar.module.css';

export default function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const STORAGE_KEY = 'neurosoma_countdown_target';
    const now = Date.now();
    const storedTarget = localStorage.getItem(STORAGE_KEY);

    let targetTime = 0;
    if (storedTarget) {
      targetTime = parseInt(storedTarget, 10);
    }

    if (!targetTime || targetTime <= now || (targetTime - now) < 600000) {
      const randomSeconds = Math.floor(Math.random() * (960 - 660 + 1)) + 660;
      targetTime = now + randomSeconds * 1000;
      localStorage.setItem(STORAGE_KEY, targetTime.toString());
    }

    const calculateRemaining = () => Math.max(0, Math.floor((targetTime - Date.now()) / 1000));

    // Atualiza o estado em microtask para evitar erro de setState síncrono no efeito
    const startTimer = setTimeout(() => {
      setTimeLeft(calculateRemaining());
    }, 0);

    const intervalId = setInterval(() => {
      const remaining = calculateRemaining();
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearTimeout(startTimer);
      clearInterval(intervalId);
    };
  }, []);

  // Previne layout shift antes da hidratação no cliente
  if (timeLeft === null) {
    return <div className={styles.banner}></div>;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={styles.banner}>
      <Hourglass size={16} className={styles.icon} />
      <span className={styles.text}>Acesso ao Kit com desconto encerra em:</span>
      <span className={styles.timer}>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
}
