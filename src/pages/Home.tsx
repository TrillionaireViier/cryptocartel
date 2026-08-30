import { Button } from '../../design system 3/components/core/Button';
import { Badge } from '../../design system 3/components/core/Badge';
import { Card } from '../../design system 3/components/core/Card';
import { GradientOrbCard } from '../../design system 3/components/brand/GradientOrbCard';
import Hero3DCanvas from '../components/Hero3DCanvas';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12xl)', paddingBottom: 'var(--space-12xl)' }}>
      
      {/* 
        BLOCK 1: Hero Section
        Off-white canvas, warm near-black ink.
        Pastel orbs drifting in the background.
      */}
      <section style={{ 
        position: 'relative', 
        paddingTop: '80px', 
        paddingBottom: '60px',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Soft pastel orbs for atmosphere */}
        <div style={{ 
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', 
          width: '800px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(167, 243, 208, 0.4) 0%, rgba(255,255,255,0) 70%)', 
          zIndex: 0, pointerEvents: 'none'
        }} />
        <div style={{ 
          position: 'absolute', top: '20%', left: '30%', 
          width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(199, 210, 254, 0.4) 0%, rgba(255,255,255,0) 70%)', 
          zIndex: 0, pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <Badge style={{ marginBottom: '24px' }}>AI TRADING ECOSYSTEM</Badge>
          
          <h1 style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            fontWeight: 300, 
            letterSpacing: '-0.02em', 
            color: 'var(--color-ink)',
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            Торгуйте как 1% лучших трейдеров с помощью искусственного интеллекта Alvara
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            color: 'var(--color-ink-muted)', 
            lineHeight: 1.6, 
            maxWidth: '650px', 
            margin: '0 auto 28px' 
          }}>
            Экосистема умного трейдинга в Telegram: AI-аналитика 26 стратегий, автоматическое копирование сделок на биржи в 1 клик и фарминг токенов $ALVARA.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => window.location.href='#'}>Запустить Alvara Trade в Telegram</Button>
            <Button variant="outline" onClick={() => window.location.href='#features'}>Узнать больше</Button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-ink-muted)' }}>
              <span style={{ color: 'var(--color-ink)' }}>✓</span> Без передачи средств — ключи API защищены стандартом AES-256
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-ink-muted)' }}>
              <span style={{ color: 'var(--color-ink)' }}>✓</span> Поддержка Binance, Bybit, MEXC
            </div>
          </div>

          {/* 3D Alvara Capital Coin Showcase */}
          <div
            style={{
              width: '100%',
              height: 'clamp(300px, 45vh, 440px)',
              margin: '0 auto',
              borderRadius: 'var(--radius-xxl)',
              background: 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '20px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--color-ink-muted)',
                letterSpacing: '0.08em',
                pointerEvents: 'none',
                zIndex: 2,
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              3D Alvara Capital Coin • Interactive Token
            </div>
            <Hero3DCanvas />
          </div>
        </div>
      </section>

      {/* 
        BLOCK 2: Proof Block (Statistics) 
      */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 24px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '24px',
          borderTop: '1px solid var(--color-border-subtle)',
          borderBottom: '1px solid var(--color-border-subtle)',
          padding: '48px 0'
        }}>
          {[
            { value: '79.7%', label: 'Средний винрейт алгоритмов ИИ' },
            { value: '26+', label: 'Торговых стратегий в едином сигнале (Smart Money, ICT, Indicator Confluence)' },
            { value: '< 1 сек', label: 'Скорость исполнения сделки на вашей бирже через API' },
            { value: '$0', label: 'Бесплатный старт и фарминг токенов для новых пользователей' }
          ].map((stat, idx) => (
            <div key={idx} style={{ padding: '0 16px' }}>
              <div style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '2.5rem', 
                fontWeight: 300, 
                color: 'var(--color-ink)', 
                marginBottom: '12px' 
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.875rem', 
                color: 'var(--color-ink-muted)', 
                lineHeight: 1.5 
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        BLOCK 3: Features Grid 
      */}
      <section id="features" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-ink)', marginBottom: '16px' }}>
            Ключевые продукты экосистемы
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          
          <GradientOrbCard 
            title="Мгновенная аналитика любого токена" 
            eyebrow="AI-Генератор Сигналов"
            orb="lavender"
            body="ИИ анализирует Order Blocks, Fair Value Gap (FVG), осцилляторы RSI/MACD/ADX и выдает точную точку входа, 3 цели Take Profit и Stop Loss с расчетом риска."
          />

          <GradientOrbCard 
            title="Торговля прямо из Telegram" 
            eyebrow="Копитрейдинг в 1 клик"
            orb="peach"
            body="Привяжите API-ключи Binance, Bybit или MEXC. Нажмите кнопку «Копировать сделку» — бот сам выставит ордера на вашей бирже с учетом вашего депозита."
          />

          <GradientOrbCard 
            title="Видеть то, что видят Киты" 
            eyebrow="Ончейн и Макро-Аналитика"
            orb="sky"
            body="Отслеживайте действия крупного капитала, MVRV Z-Score, NUPL, открытый интерес (OI) и экономический календарь в понятном формате без сложной терминологии."
          />

          <GradientOrbCard 
            title="Учитесь и зарабатывайте" 
            eyebrow="F2E & Staking (Фарминг $ALVARA)"
            orb="mint"
            body="Проходите ежедневный AI Quiz, участвуйте в прогнозах рынка и держите USDT в стейкинге, чтобы ежедневно получать AirDrop токена $ALVARA."
          />

        </div>
      </section>

      {/* 
        BLOCK 4: How it works 
      */}
      <section id="how-it-works" style={{ backgroundColor: 'var(--color-canvas-soft)', padding: '96px 24px', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-ink)', marginBottom: '16px' }}>
              Как это работает
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: 'var(--color-ink-muted)' }}>3 простых шага к умному трейдингу</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              {
                step: 'Шаг 1',
                title: 'Запустите бота в Telegram',
                desc: 'Откройте Alvara Trade WebApp прямо в мессенджере без долгих регистраций и верификаций.'
              },
              {
                step: 'Шаг 2',
                title: 'Выберите монету и получите AI-сигнал',
                desc: 'Алгоритм проверит 26 рыночных факторов и выдаст готовый сетап с оценкой вероятности успеха.'
              },
              {
                step: 'Шаг 3',
                title: 'Скопируйте сделку или включите Авто-трейдинг',
                desc: 'Ордера мгновенно уйдут на вашу биржу. Управляйте рисками и следите за ростом депозита.'
              }
            ].map((s, idx) => (
              <Card key={idx} style={{ padding: '32px' }}>
                <Badge style={{ marginBottom: '24px' }}>{s.step}</Badge>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--color-ink)', marginBottom: '16px' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 
        BLOCK 5: Security 
      */}
      <section style={{ maxWidth: '800px', margin: '0 auto', width: '100%', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Badge style={{ marginBottom: '24px' }}>SECURITY FIRST</Badge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-ink)', marginBottom: '16px' }}>
            Безопасность уровня банковских систем
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Card style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-ink-muted)' }}>1</div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '8px' }}>Ваше имущество остается у вас</h4>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>Мы никогда не принимаем депозиты пользователей на свои счета. Все средства хранятся на ваших биржах.</p>
            </div>
          </Card>

          <Card style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-ink-muted)' }}>2</div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '8px' }}>Шифрование AES-256</h4>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>Ваши API-ключи хранятся в изолированном зашифрованном хранилище.</p>
            </div>
          </Card>

          <Card style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-ink-muted)' }}>3</div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '8px' }}>Запрет на вывод средств</h4>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>При создании API-ключа вы отключаете право на вывод (Withdrawal). Бот может только открывать и закрывать сделки.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* 
        BLOCK 6: FAQ 
      */}
      <section id="faq" style={{ maxWidth: '800px', margin: '0 auto', width: '100%', padding: '0 24px', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '96px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-ink)', marginBottom: '48px', textAlign: 'center' }}>
          Ответы на частые вопросы
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              q: 'Нужно ли мне платить за использование Alvara Trade?',
              a: 'Базовый функционал, сигналы и участие в фарминге $ALVARA абсолютно бесплатны. PRO-возможности открываются за удержание токенов экосистемы.'
            },
            {
              q: 'Какая минимальная сумма нужна для старта?',
              a: 'Вы можете начать с любого депозита, разрешенного вашей биржей (обычно от $10 на Binance/Bybit).'
            },
            {
              q: 'Чем Alvara отличается от обычных каналов с сигналами?',
              a: 'Мы не даем субъективных прогнозов. Наш ИИ анализирует математическую конвергенцию 26 индикаторов и паттернов в реальном времени, а также позволяет исполнить сделку на бирже за 1 клик.'
            }
          ].map((faq, idx) => (
            <Card key={idx} style={{ padding: '24px' }}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '12px' }}>
                {faq.q}
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>
                {faq.a}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 
        BLOCK 7: Footer CTA 
        Using a dark band for the final CTA to match the brand's pre-footer style.
      */}
      <section style={{ 
        backgroundColor: 'var(--color-ink)', 
        color: '#ffffff', 
        padding: '96px 24px', 
        textAlign: 'center',
        margin: '96px 24px 0',
        borderRadius: 'var(--radius-xl)'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, marginBottom: '24px' }}>
            Начните торговать на основе данных, а не эмоций
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', lineHeight: 1.6 }}>
            Присоединяйтесь к экосистеме Alvara прямо сейчас и получите 100 поинтов $ALVARA при первом входе.
          </p>
          <Button variant="onDark" onClick={() => window.location.href='#'}>
            Открыть Alvara Trade в Telegram
          </Button>
        </div>
      </section>

    </div>
  );
}
