import { ArrowRight, Activity, AudioWaveform, Zap, TrendingUp, BarChart2, Check, ChevronRight, Database, Server, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

const TiltCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.15} glareColor="white" glarePosition="all" style={{ height: '100%' }}>
    <div className={`el-card ${className}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  </Tilt>
);

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.6 }}>
          <iframe 
            src="https://my.spline.design/glassshapes-2f170fdd3c834a36f6cb3fbb450e1dc9/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            style={{ pointerEvents: 'none' }}
          ></iframe>
        </div>
        <div className="container hero-content" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
          <span className="badge animate-fade" style={{ pointerEvents: 'auto', background: 'rgba(59, 130, 246, 0.2)', backdropFilter: 'blur(10px)' }}>Ультимативный No-Code Конфигуратор</span>
          <h1 className="heading-xl text-gradient animate-fade delay-1" style={{ pointerEvents: 'auto', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Автоматизируй<br/>Свою Прибыль
          </h1>
          <p className="text-secondary hero-desc animate-fade delay-2" style={{ pointerEvents: 'auto', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Создавайте сложные Grid-стратегии, настраивайте технические индикаторы и управляйте рисками с помощью трейлинг-стопов. Мгновенное подключение к Binance, Bybit и OKX.
          </p>
          
          <div className="animate-fade delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', pointerEvents: 'auto' }}>
            <Link to="/features" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Открыть Конфигуратор <ArrowRight size={18} />
            </Link>
            <a href="#pricing" className="btn btn-secondary" style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
              Смотреть Тарифы
            </a>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Профессиональные Инструменты</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
              Всё необходимое для создания прибыльных автоматизированных систем без написания единой строчки кода.
            </p>
          </div>
          
          <div className="grid-3">
            <TiltCard className="feature-box">
              <div className="icon-wrapper accent"><Activity size={24} /></div>
              <h3>Технические Фильтры</h3>
              <p className="text-secondary">
                Подключайте индикаторы RSI, MACD и Bollinger Bands, чтобы ваш бот входил в сделку только при идеальных условиях.
              </p>
            </TiltCard>
            <TiltCard className="feature-box">
              <div className="icon-wrapper accent"><TrendingUp size={24} /></div>
              <h3>Трейлинг Стопы</h3>
              <p className="text-secondary">
                Максимизируйте прибыль во время сильных пампов с помощью Trailing Take Profit и защищайте капитал динамическим Trailing Stop Loss.
              </p>
            </TiltCard>
            <TiltCard className="feature-box">
              <div className="icon-wrapper accent"><Layers size={24} /></div>
              <h3>Умные Сетки</h3>
              <p className="text-secondary">
                Используйте логарифмический или арифметический шаг сетки в комбинации с множителями объема Мартингейла.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Bots Grid Section */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Готовые Торговые Боты</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
              Выберите проверенную стратегию или создайте свою с нуля.
            </p>
          </div>
          
          <div className="grid-3">
            <TiltCard className="feature-box">
              <div className="icon-wrapper"><Zap size={20} /></div>
              <h3>ScalpBot Pro <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Скальпинг</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Высокочастотный бот для краткосрочных сделок. Открывает до 200 позиций в сутки на минутных свечах BTC/ETH.
              </p>
            </TiltCard>
            <TiltCard className="feature-box">
              <div className="icon-wrapper"><TrendingUp size={20} /></div>
              <h3>TrendRider <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Трендовый</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Торгует по направлению тренда на 4H и дневных графиках. Оптимален для спокойного рынка с чётким направлением.
              </p>
            </TiltCard>
            <TiltCard className="feature-box">
              <div className="icon-wrapper"><Layers size={20} /></div>
              <h3>GridMaster <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Сеточный</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Сеточная стратегия в боковом рынке. Зарабатывает на волатильности без прогнозирования направления.
              </p>
            </TiltCard>
            <TiltCard className="feature-box">
              <div className="icon-wrapper"><BarChart2 size={20} /></div>
              <h3>ArbitrageX <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Арбитраж</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Межбиржевой арбитраж. Использует разницу цен между биржами для безрискового заработка.
              </p>
            </TiltCard>
            <TiltCard className="feature-box">
              <div className="icon-wrapper"><AudioWaveform size={20} /></div>
              <h3>NewsTrader AI <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Новостной</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                ИИ-бот анализирует новости и твиты в реальном времени. Реагирует на события раньше рынка.
              </p>
            </TiltCard>
            <TiltCard className="feature-box">
              <div className="icon-wrapper"><Activity size={20} /></div>
              <h3>DCA Bot <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Усреднение</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Классическая стратегия усреднения (DCA). Идеален для долгосрочного накопления активов при падении.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Как Запустить Бота</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
              От идеи до реализации за три простых шага.
            </p>
          </div>
          
          <div className="grid-3">
            <div className="el-card step-card">
              <div className="step-number">1</div>
              <h3>Настройка</h3>
              <p className="text-secondary" style={{ marginTop: '1rem' }}>
                Используйте визуальный конструктор для настройки пары, структуры сетки и индикаторов.
              </p>
            </div>
            <div className="el-card step-card">
              <div className="step-number">2</div>
              <h3>Подключение</h3>
              <p className="text-secondary" style={{ marginTop: '1rem' }}>
                Подключите API ключи от вашей биржи. Мы нативно поддерживаем Binance, Bybit и OKX.
              </p>
            </div>
            <div className="el-card step-card">
              <div className="step-number">3</div>
              <h3>Запуск</h3>
              <p className="text-secondary" style={{ marginTop: '1rem' }}>
                Запустите бота. Он будет автоматически торговать 24/7 строго по вашим правилам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Создано для Масштабирования</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
              Надежная бэкенд инфраструктура в сочетании с молниеносным фронтендом.
            </p>
          </div>
          
          <div className="grid-2">
            <div className="arch-block">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Server size={24} className="text-primary" />
                <h3 className="heading-md" style={{ margin: 0 }}>Фронтенд</h3>
              </div>
              <div className="arch-list">
                <div className="arch-item">
                  <div className="arch-item-num">1</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Визуальный Конфигуратор</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Интуитивно понятный React-интерфейс, который рассчитывает параметры сетки и визуализирует риски до запуска.</p>
                  </div>
                </div>
                <div className="arch-item">
                  <div className="arch-item-num">2</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Валидация в Реальном Времени</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Мгновенная проверка на стороне клиента предотвращает ввод конфликтующих параметров и перерасход капитала.</p>
                  </div>
                </div>
                <div className="arch-item">
                  <div className="arch-item-num">3</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Управление Состоянием</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Глобальный стейт-менеджмент надежно управляет состояниями сложных стратегий при редактировании.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="arch-block">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Database size={24} className="text-primary" />
                <h3 className="heading-md" style={{ margin: 0 }}>Бэкенд</h3>
              </div>
              <div className="arch-list">
                <div className="arch-item">
                  <div className="arch-item-num">1</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Мгновенное Исполнение</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Node.js Express сервер обеспечивает передачу торговых сигналов по API бирж с миллисекундной задержкой.</p>
                  </div>
                </div>
                <div className="arch-item">
                  <div className="arch-item-num">2</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Безопасная База Данных</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Архитектура на PostgreSQL/SQLite безопасно хранит ваши настройки, токены и зашифрованные данные.</p>
                  </div>
                </div>
                <div className="arch-item">
                  <div className="arch-item-num">3</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Бесперебойная Работа 24/7</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Фоновые процессы постоянно отслеживают WebSocket-потоки для корректировки стопов и сеток, даже когда вы спите.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Тарифы</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
              Выберите подходящий план для ваших торговых амбиций.
            </p>
          </div>
          
          <div className="grid-3">
            {/* Free Tier */}
            <TiltCard className="pricing-card">
              <div className="pricing-header">
                <h3 style={{ fontSize: '1.25rem' }}>Бесплатный</h3>
                <div className="price">$0<span>/мес</span></div>
              </div>
              <ul className="feature-list">
                <li><Check size={18} className="text-primary" /> 1 Активный бот</li>
                <li><Check size={18} className="text-primary" /> Спотовая торговля</li>
                <li><Check size={18} className="text-primary" /> Базовые индикаторы</li>
              </ul>
              <button className="btn btn-secondary" style={{ width: '100%', padding: '1rem' }}>Войти / Регистрация</button>
            </TiltCard>
            
            {/* Pro Tier */}
            <TiltCard className="pricing-card popular">
              <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-color)', color: 'white', padding: '0.25rem 1rem', fontSize: '0.8rem', fontWeight: 'bold', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', zIndex: 10 }}>
                ПОПУЛЯРНЫЙ
              </div>
              <div className="pricing-header">
                <h3 style={{ fontSize: '1.25rem' }}>Про</h3>
                <div className="price">$29<span>/мес</span></div>
              </div>
              <ul className="feature-list">
                <li><Check size={18} className="text-primary" /> До 10 активных ботов</li>
                <li><Check size={18} className="text-primary" /> Спот и Фьючерсы</li>
                <li><Check size={18} className="text-primary" /> Трейлинг стопы</li>
                <li><Check size={18} className="text-primary" /> Продвинутые индикаторы</li>
              </ul>
              <button className="btn btn-accent" style={{ width: '100%', padding: '1rem' }}>Войти / Регистрация</button>
            </TiltCard>
            
            {/* Ultra Tier */}
            <TiltCard className="pricing-card">
              <div className="pricing-header">
                <h3 style={{ fontSize: '1.25rem' }}>Ультра</h3>
                <div className="price">$99<span>/мес</span></div>
              </div>
              <ul className="feature-list">
                <li><Check size={18} className="text-primary" /> Неограниченно ботов</li>
                <li><Check size={18} className="text-primary" /> API Доступ</li>
                <li><Check size={18} className="text-primary" /> Персональный менеджер</li>
                <li><Check size={18} className="text-primary" /> Копитрейдинг</li>
              </ul>
              <button className="btn btn-secondary" style={{ width: '100%', padding: '1rem' }}>Войти / Регистрация</button>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">FAQ</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
              Часто задаваемые вопросы
            </p>
          </div>
          
          <div className="faq-list">
            <div className="faq-item">
              <span>Что такое CryptoCartel?</span>
              <ChevronRight size={20} className="text-secondary" />
            </div>
            <div className="faq-item">
              <span>Нужно ли уметь программировать?</span>
              <ChevronRight size={20} className="text-secondary" />
            </div>
            <div className="faq-item">
              <span>Какие биржи поддерживаются?</span>
              <ChevronRight size={20} className="text-secondary" />
            </div>
            <div className="faq-item">
              <span>Где хранятся мои средства?</span>
              <ChevronRight size={20} className="text-secondary" />
            </div>
            <div className="faq-item">
              <span>Может ли бот вывести мои деньги?</span>
              <ChevronRight size={20} className="text-secondary" />
            </div>
            <div className="faq-item" style={{ justifyContent: 'center', background: 'transparent', border: 'none', color: 'var(--primary-color)', cursor: 'pointer', marginTop: '1rem' }}>
              Смотреть все 20+ вопросов...
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
