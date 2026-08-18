import Image from "next/image";
import styles from "./page.module.css";
import CountdownBar from "../components/CountdownBar";
import LiveViewersToast from "../components/LiveViewersToast";
import SalesToast from "../components/SalesToast";
import PreviewCarousel from "../components/PreviewCarousel";

const IconPlus = () => (
  <svg className={styles.faqIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconShield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconZap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconRefresh = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

const bonusCaptions = [
  {
    title: "Bônus 1: Guia de Avaliação Somática Rápida",
    text: "Mapeie o estado autonômico do seu paciente em menos de 5 minutos."
  },
  {
    title: "Bônus 2: Manejo de Dissociação em Sessão",
    text: "Um guia prático para reconhecer, nomear e intervir com segurança."
  },
  {
    title: "Bônus 3: Regulando o Nervo Vago",
    text: "Técnicas de estimulação para usar em sessão e como tarefa de casa."
  },
  {
    title: "Bônus 4: Baralho Somático Lúdico",
    text: "A ferramenta ideal para contornar a resistência de pacientes racionais."
  }
];

const reviewImages = [
  { src: "/dp1.webp", alt: "Avaliação 1", width: 1170, height: 769 },
  { src: "/dp5.webp", alt: "Avaliação 2", width: 704, height: 578 },
  { src: "/dp3.webp", alt: "Avaliação 3", width: 1170, height: 903 },
  { src: "/dp4.webp", alt: "Avaliação 4", width: 1170, height: 1434 },
  { src: "/dp2.webp", alt: "Avaliação 5", width: 1170, height: 1525 },
];

const modulesList = [
  {
    module: "Módulo 1 · Respiração",
    title: "Respiração & Regulação",
    desc: "Protocolos respiratórios para diferentes níveis de ativação, desaceleração e consciência corporal."
  },
  {
    module: "Módulo 2 · Aterramento",
    title: "Presença & Orientação Sensorial",
    desc: "Recursos para ampliar contato com o corpo, o ambiente e o momento presente."
  },
  {
    module: "Módulo 3 · Regulação Vagal",
    title: "Nervo Vago & Sistema Nervoso Autônomo",
    desc: "Práticas de voz, vibração, respiração e estímulos sensoriais organizadas para consulta."
  },
  {
    module: "Módulo 4 · Hiperativação",
    title: "Ansiedade, Alerta & Agitação",
    desc: "Recursos para momentos de aceleração, tensão corporal e hipervigilância."
  },
  {
    module: "Módulo 5 · Shutdown",
    title: "Freeze, Colapso & Baixa Ativação",
    desc: "Práticas graduais de mobilização e reconexão para estados de baixa energia."
  },
  {
    module: "Módulo 6 · Dissociação",
    title: "Reconexão com o Presente",
    desc: "Recursos de aterramento, orientação e estabilização para situações de desconexão."
  },
  {
    module: "Módulo 7 · Movimento",
    title: "Descarga & Integração Bilateral",
    desc: "Protocolos que utilizam movimento, ritmo, tapping e alternância corporal."
  },
  {
    module: "Módulo 8 · Sessão Travada",
    title: "Recursos Rápidos para Mudar a Condução",
    desc: "Ferramentas para quando somente a fala parece não estar levando a sessão adiante."
  }
];

export default function Home() {
  return (
    <>
      <CountdownBar />
      <LiveViewersToast />
      <SalesToast />

      <main>
        {/* 1 ─ HERO */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={`${styles.badge} ${styles.badgeDark}`}>Protocolos Somáticos & Regulação do Sistema Nervoso</span>
              <h1 className={styles.heroTitle}>
                O que diferencia uma sessão comum de um atendimento que transmite método, direção e mais valor?
              </h1>
              <p className={styles.heroSub}>
                90 Protocolos Somáticos prontos para ajudar você a ir além da fala em sessão — com recursos organizados para diferentes estados do sistema nervoso, sem precisar criar tudo do zero.
              </p>
              
              <div className={styles.heroCheckList}>
                <div className={styles.heroCheckItem}>
                  <span className={styles.heroCheckIcon}>✓</span>
                  <span><strong>Mais direção clínica:</strong> tenha recursos organizados para quando a sessão trava, o paciente hiperativa, dissocia ou entra em shutdown.</span>
                </div>
                <div className={styles.heroCheckItem}>
                  <span className={styles.heroCheckIcon}>✓</span>
                  <span><strong>Mais repertório além da fala:</strong> respiração, aterramento, movimento, tapping, estimulação bilateral, voz e outros recursos somáticos.</span>
                </div>
                <div className={styles.heroCheckItem}>
                  <span className={styles.heroCheckIcon}>✓</span>
                  <span><strong>Mais percepção de método:</strong> conduza suas sessões com uma estrutura que vai além de apenas perguntar, acolher e esperar o paciente processar.</span>
                </div>
                <div className={styles.heroCheckItem}>
                  <span className={styles.heroCheckIcon}>✓</span>
                  <span><strong>Pronto para consulta:</strong> material digital organizado para acessar no celular, tablet ou computador.</span>
                </div>
              </div>
            </div>

            <div className={styles.mockup}>
              <Image 
                src="/imageHero2.webp" 
                alt="Mockup do Kit de Protocolos Somáticos NeuroSoma" 
                width={900} 
                height={1100} 
                className={styles.mockupImage} 
                priority
                quality={75} 
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 460px" 
                placeholder="blur" 
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiBoZWlnaHQ9IjExMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2FiZDZkYSIvPjwvc3ZnPg==" 
                decoding="async"
                style={{ borderRadius: '25px', width: '100%', height: 'auto' }} 
              />
            </div>
          </div>
        </section>

        {/* 2 ─ AMOSTRA */}
        <section className={`${styles.sectionSm} ${styles.light}`}>
          <div className={styles.wrap}>
            <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
              <h2 className={styles.secTitle}>Veja como é o material por dentro:</h2>
            </div>

            <PreviewCarousel imagePrefix="a" imageExtension="webp" count={7} altPrefix="Protocolo" />
          </div>
        </section>

        {/* 3 ─ PROVA SOCIAL & DEPOIMENTOS */}
        <section className={`${styles.sectionSm} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
          <div className={styles.wrap}>
            <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
              <div className={styles.starRating}>★★★★★</div>
              <span className={`${styles.badge} ${styles.badgeLight}`}>Prova Social Real</span>
              <h2 className={styles.secTitle}>Veja o que profissionais dizem sobre o NeuroSoma:</h2>
            </div>

            <div className={styles.testGrid}>
              {reviewImages.map((img, idx) => (
                <div key={idx} className={styles.testCardImg}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjFFRkU4Ii8+PC9zdmc+"
                    className={styles.reviewImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 ─ ORGANIZAÇÃO DOS PROTOCOLOS */}
        <section className={`${styles.section} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
          <div className={styles.wrap}>
            <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
              <span className={`${styles.badge} ${styles.badgeLight}`}>Acervo Completo</span>
              <h2 className={styles.secTitle}>Organização dos Protocolos</h2>
              <p className={styles.secSub}>Os 90 Protocolos organizados por objetivos e estados do sistema nervoso:</p>
              <div style={{ marginTop: "12px" }}>
                <span className={styles.materialExtra}>*90 protocolos nomeados, um a um — abra cada módulo e veja a lista completa*</span>
              </div>
            </div>

            <div className={styles.modulesGrid}>
              {modulesList.map((item, idx) => (
                <div key={idx} className={styles.moduleCard}>
                  <div className={styles.moduleHeader}>
                    <span className={styles.moduleTag}>{item.module}</span>
                  </div>
                  <h3 className={styles.moduleTitle}>{item.title}</h3>
                  <p className={styles.moduleDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 ─ APLICAÇÕES PRÁTICAS */}
        <section className={`${styles.section} ${styles.dark}`}>
          <div className={styles.wrap}>
            <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
              <span className={`${styles.badge} ${styles.badgeDark}`} style={{ color: "var(--accent-teal)", borderColor: "var(--accent-teal)" }}>
                Versatilidade Clínica
              </span>
              <h2 className={styles.secTitle} style={{ color: "#fff" }}>Aplicações Práticas</h2>
              <p className={styles.secSubDark}>Como utilizar este acervo no seu ecossistema clínico:</p>
            </div>

            <div className={styles.appGrid}>
              {/* Card 1: Atendimento Presencial */}
              <div className={styles.appCard}>
                <div className={styles.appHeader}>
                  <div className={styles.appBadge}>1</div>
                  <h3 className={styles.appTitle}>No Atendimento Presencial</h3>
                </div>
                <div className={styles.appList}>
                  <div className={styles.appItem}>
                    <strong><span className={styles.appBullet}>✦</span> Protocolos na Bancada:</strong>
                    Mantenha os protocolos impressos na sua mesa para consulta imediata durante as sessões.
                  </div>
                  <div className={styles.appItem}>
                    <strong><span className={styles.appBullet}>✦</span> Homework Terapêutico:</strong>
                    Entregue cópias impressas dos protocolos como tarefa de fixação entre uma consulta e outra.
                  </div>
                  <div className={styles.appItem}>
                    <strong><span className={styles.appBullet}>✦</span> Quadros de Consultório:</strong>
                    Imprima em alta resolução (300 DPI) para decorar sua sala com ilustrações científicas de alto nível.
                  </div>
                </div>
              </div>

              {/* Card 2: Atendimento Online */}
              <div className={styles.appCard}>
                <div className={styles.appHeader}>
                  <div className={styles.appBadge}>2</div>
                  <h3 className={styles.appTitle}>No Atendimento Online (Telepsicologia)</h3>
                </div>
                <div className={styles.appList}>
                  <div className={styles.appItem}>
                    <strong><span className={styles.appBullet}>✦</span> Compartilhamento de Tela:</strong>
                    Projete os protocolos em alta definição no Zoom/Google Meet para ilustrar a queixa do paciente.
                  </div>
                  <div className={styles.appItem}>
                    <strong><span className={styles.appBullet}>✦</span> Envio de PDF via WhatsApp:</strong>
                    Encaminhe o protocolo exato discutido na sessão em PDF após a consulta.
                  </div>
                  <div className={styles.appItem}>
                    <strong><span className={styles.appBullet}>✦</span> Apoio para Cursos e Aulas:</strong>
                    Utilize como material complementar de apoio para mentorias, grupos terapêuticos e aulas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 ─ OFERTA / BÔNUS */}
        <section className={`${styles.section} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
          <div className={styles.wrap}>
            <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
              <span className={`${styles.badge} ${styles.badgeLight}`}>Conteúdo Completo</span>
              <h2 className={styles.secTitle}>Adquira hoje e leve 4 bônus exclusivos:</h2>
            </div>

            <PreviewCarousel imagePrefix="" imageExtension="webp" altPrefix="Bônus" aspectRatio="9 / 11" captions={bonusCaptions} />
          </div>
        </section>

        {/* 7 ─ GARANTIA & CHECKOUT */}
        <section id="checkout" className={styles.checkout}>
          <div className={styles.checkoutCard}>
            <span className={styles.guaranteeSeal}>
              <IconShield />
              Garantia Incondicional — 7 dias
            </span>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 40px 0' }}>
              <Image src="/bonus.webp" alt="Bônus" width={800} height={480} quality={75} sizes="(max-width: 768px) 90vw, 600px" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDQyQzUzIi8+PC9zdmc+" loading="lazy" style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '25px' }} />
            </div>

            <div className={styles.priceBlock}>
              <p className={styles.priceOld}>De R$ 197,00 por apenas</p>
              <p className={styles.priceMain}>R$ <span>29</span></p>
              <p className={styles.priceCash}>ou 5x de R$ 6,51 no cartão</p>
            </div>

            <div className={styles.ctaWrap}>
              <a href="https://pay.kirvano.com/5b62b770-7be4-44b3-be73-09ddf401fbaf" className={`${styles.cta} ${styles.ctaFull}`}>
                <IconLock />
                CLIQUE AQUI E ACESSE AGORA
              </a>
              <p className={styles.ctaSub}>Acesso imediato. 7 dias de garantia.</p>
            </div>

            <div className={styles.trustRow}>
              <span className={styles.trustItem}><IconShield /> Compra Segura</span>
              <span className={styles.trustItem}><IconZap /> Acesso Imediato</span>
              <span className={styles.trustItem}><IconRefresh /> Atualizações Grátis</span>
            </div>
          </div>
        </section>

        {/* 8 ─ FAQ */}
        <section className={`${styles.section} ${styles.light}`}>
          <div className={styles.wrap}>
            <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
              <span className={`${styles.badge} ${styles.badgeLight}`}>FAQ</span>
              <h2 className={styles.secTitle}>Perguntas Frequentes</h2>
            </div>

            <div className={styles.faqList}>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>Preciso ter formação prévia em terapia somática? <IconPlus /></summary>
                <div className={styles.faqA}>Não. Os guias são inteiramente passo a passo e foram desenhados para profissionais de qualquer linha terapêutica (TCC, Psicanálise, Gestalt, Humanista). Tudo é explicado com clareza e pronto para aplicar.</div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>Funciona para atendimentos online? <IconPlus /></summary>
                <div className={styles.faqA}>Sim. Os protocolos foram adaptados para aplicação tanto presencial quanto remota, com indicações específicas de como guiar o paciente verbalmente durante sessões por vídeo.</div>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>Qual o formato do material? <IconPlus /></summary>
                <div className={styles.faqA}>100% digital em PDF de alta qualidade, pronto para leitura em qualquer dispositivo ou para impressão. Acesso disponibilizado imediatamente após a confirmação do pagamento.</div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>NeuroSoma © {new Date().getFullYear()} — Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}
