'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ShoppingBag } from 'lucide-react';
import styles from './SalesToast.module.css';

interface BuyerNotification {
  name: string;
  role: string;
  location: string;
}

const BUYERS: BuyerNotification[] = [
  { name: 'Dra. Luciana Garcia', role: 'Psicóloga', location: 'São Paulo - SP' },
  { name: 'Mariana Macedo', role: 'Terapeuta Somática', location: 'Rio de Janeiro - RJ' },
  { name: 'Fernanda Oliveira', role: 'Psicóloga Clínica', location: 'Belo Horizonte - MG' },
  { name: 'Dr. Gabriel Santos', role: 'Psiquiatra', location: 'Curitiba - PR' },
  { name: 'Dra. Camila Ribeiro', role: 'Psicóloga', location: 'Porto Alegre - RS' },
  { name: 'Juliana Costa', role: 'Terapeuta Integrativa', location: 'Campinas - SP' },
  { name: 'Renata Pereira', role: 'Psicóloga', location: 'Salvador - BA' },
  { name: 'Dr. Fernando Vasconcelos', role: 'Psiquiatra', location: 'Brasília - DF' },
  { name: 'Dra. Ana Paula Freitas', role: 'Psicóloga', location: 'Florianópolis - SC' },
  { name: 'Beatriz Ramos', role: 'Terapeuta Corporal', location: 'Goiânia - GO' },
  { name: 'Carla Martins', role: 'Psicóloga', location: 'Recife - PE' },
  { name: 'Rodrigo Almeida', role: 'Psicólogo', location: 'Fortaleza - CE' },
  { name: 'Dra. Patricia Alencar', role: 'Psicóloga', location: 'Ribeirão Preto - SP' },
  { name: 'Dr. Thiago Nogueira', role: 'Psiquiatra', location: 'Vitória - ES' },
  { name: 'Dra. Vanessa Silveira', role: 'Psicóloga', location: 'Niterói - RJ' },
  { name: 'Carolina Barros', role: 'Terapeuta', location: 'Manaus - AM' },
  { name: 'Dra. Letícia Cardoso', role: 'Psicóloga', location: 'Maringá - PR' },
  { name: 'Bruno Fonseca', role: 'Psicólogo Clínico', location: 'Santos - SP' }
];

export default function SalesToast() {
  const [activeNotification, setActiveNotification] = useState<{
    buyer: BuyerNotification;
    timeText: string;
  } | null>(null);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<() => void>(() => {});

  const getFormattedTime = useCallback(() => {
    const now = new Date();
    if (Math.random() > 0.4) {
      const minutesAgo = Math.floor(Math.random() * 8) + 1;
      return `há ${minutesAgo} min`;
    } else {
      const hours = now.getHours().toString().padStart(2, '0');
      const mins = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${mins}`;
    }
  }, []);

  const triggerNextNotification = useCallback(() => {
    if (isDismissed) return;

    const randomBuyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];
    const timeText = getFormattedTime();

    setIsAnimatingOut(false);
    setActiveNotification({ buyer: randomBuyer, timeText });

    hideTimerRef.current = setTimeout(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setActiveNotification(null);
        setIsAnimatingOut(false);

        const nextInterval = Math.floor(Math.random() * 10000) + 12000;
        timerRef.current = setTimeout(() => {
          triggerRef.current();
        }, nextInterval);
      }, 400);
    }, 6000);
  }, [isDismissed, getFormattedTime]);

  useEffect(() => {
    triggerRef.current = triggerNextNotification;
  }, [triggerNextNotification]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      triggerRef.current();
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!activeNotification || isDismissed) return null;

  const { buyer, timeText } = activeNotification;

  return (
    <div className={styles.toastContainer}>
      <div className={`${styles.toast} ${isAnimatingOut ? styles.slideOut : styles.slideIn}`}>
        <div className={styles.iconWrapper}>
          <ShoppingBag size={20} />
        </div>

        <div className={styles.content}>
          <div className={styles.headerRow}>
            <span className={styles.buyerName}>
              {buyer.name}
            </span>
            <span className={styles.time}>{timeText}</span>
          </div>

          <p className={styles.actionText}>
            garantiu o acesso ao <strong>Kit de Protocolos</strong>
          </p>

          <span className={styles.locationText}>
            📍 {buyer.location}
          </span>
        </div>

        <button
          className={styles.closeBtn}
          onClick={() => {
            setIsDismissed(true);
            setActiveNotification(null);
          }}
          aria-label="Fechar notificação"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
