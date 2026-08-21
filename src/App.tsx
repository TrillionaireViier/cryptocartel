import { ArrowRight, Activity, AudioWaveform, Bot, Zap, TrendingUp, BarChart2, Check, ChevronRight, Database, Server, Layers } from 'lucide-react';

function App() {
  return (
    <>
      <style>
        {`
          :root {
            --bg-base: #050505;
            --bg-card: #0a0a0a;
            --bg-card-hover: #111111;
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-muted: #52525b;
            --border-light: rgba(255, 255, 255, 0.08);
            --border-strong: rgba(255, 255, 255, 0.15);
            --primary-color: #3b82f6;
            --primary-color-hover: #2563eb;
            --accent-color: #10b981;
            --transition-fast: 0.2s ease;
            --font-main: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: var(--bg-base);
            color: var(--text-primary);
            font-family: var(--font-main);
            line-height: 1.6;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
          }

          .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }

          .section {
            padding: 6rem 0;
            position: relative;
          }

          /* Typography */
          h1, h2, h3, h4, h5 {
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.03em;
          }

          .heading-xl {
            font-size: clamp(3rem, 6vw, 4.5rem);
            margin-bottom: 1.5rem;
          }

          .heading-lg {
            font-size: clamp(2rem, 4vw, 3rem);
            margin-bottom: 1rem;
          }
          
          .heading-md {
            font-size: clamp(1.5rem, 3vw, 2rem);
            margin-bottom: 1rem;
          }

          .text-gradient {
            background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .text-gradient-accent {
            background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .text-secondary {
            color: var(--text-secondary);
          }
          
          .text-center {
            text-align: center;
          }

          .section-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 4rem;
          }

          /* Buttons */
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            font-size: 0.95rem;
            text-decoration: none;
            cursor: pointer;
            transition: var(--transition-fast);
            border: 1px solid transparent;
          }

          .btn-primary {
            background-color: var(--text-primary);
            color: var(--bg-base);
          }

          .btn-primary:hover {
            background-color: var(--text-secondary);
            transform: translateY(-2px);
          }

          .btn-secondary {
            background-color: transparent;
            color: var(--text-primary);
            border: 1px solid var(--border-strong);
          }

          .btn-secondary:hover {
            background-color: var(--border-light);
            transform: translateY(-2px);
          }
          
          .btn-accent {
            background-color: var(--primary-color);
            color: white;
          }
          
          .btn-accent:hover {
            background-color: var(--primary-color-hover);
            transform: translateY(-2px);
          }

          /* Cards */
          .el-card {
            background: var(--bg-card);
            border: 1px solid var(--border-light);
            border-radius: 16px;
            transition: var(--transition-fast);
            position: relative;
            overflow: hidden;
          }

          .el-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          }

          /* Navbar */
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1rem 0;
            z-index: 100;
            background: rgba(5, 5, 5, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-light);
          }
          
          .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .logo {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-primary);
            text-decoration: none;
            letter-spacing: -0.02em;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
          }
          
          .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            transition: var(--transition-fast);
            font-weight: 500;
          }
          
          .nav-link:hover {
            color: var(--text-primary);
          }

          /* Hero Section */
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-top: 6rem;
            background: radial-gradient(circle at center 30%, rgba(59, 130, 246, 0.08) 0%, transparent 60%);
          }
          
          .hero-content {
            max-width: 900px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-desc {
            margin: 0 0 2.5rem;
            max-width: 700px;
            font-size: 1.15rem;
          }
          
          .badge {
            display: inline-block;
            padding: 0.35rem 0.75rem;
            background: rgba(59, 130, 246, 0.1);
            color: var(--primary-color);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 100px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          /* Grids */
          .grid-2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          
          .grid-4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }

          /* Feature Boxes */
          .feature-box {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .feature-box:hover {
            border-color: var(--border-strong);
            background: var(--bg-card-hover);
          }

          .icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border-light);
            color: var(--text-primary);
            margin-bottom: 0.5rem;
          }
          
          .icon-wrapper.accent {
            background: rgba(59, 130, 246, 0.1);
            border-color: rgba(59, 130, 246, 0.2);
            color: var(--primary-color);
          }

          /* Steps */
          .step-card {
            padding: 2.5rem 2rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .step-number {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--bg-card) 0%, #1a1a1a 100%);
            border: 1px solid var(--border-strong);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.4);
            color: var(--primary-color);
          }

          /* Pricing */
          .pricing-card {
            padding: 2.5rem 2rem;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          
          .pricing-card.popular {
            border-color: var(--primary-color);
            background: linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, var(--bg-card) 100%);
            transform: scale(1.02);
          }
          
          .pricing-header {
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--border-light);
            padding-bottom: 2rem;
          }
          
          .price {
            font-size: 2.5rem;
            font-weight: 700;
            margin: 1rem 0;
            display: flex;
            align-items: baseline;
            gap: 0.25rem;
          }
          
          .price span {
            font-size: 1rem;
            color: var(--text-secondary);
            font-weight: 500;
          }
          
          .feature-list {
            list-style: none;
            margin-bottom: 2.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .feature-list li {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-secondary);
            font-size: 0.95rem;
          }

          /* Architecture / Scaling */
          .arch-block {
            padding: 2rem;
            border-radius: 16px;
            background: var(--bg-card);
            border: 1px solid var(--border-light);
          }
          
          .arch-list {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .arch-item {
            display: flex;
            gap: 1rem;
          }
          
          .arch-item-num {
            color: var(--text-muted);
            font-family: monospace;
            font-size: 1.1rem;
            font-weight: 600;
          }

          /* FAQ */
          .faq-list {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .faq-item {
            padding: 1.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border-light);
            border-radius: 12px;
            font-weight: 500;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: var(--transition-fast);
          }
          
          .faq-item:hover {
            background: var(--bg-card-hover);
            border-color: var(--border-strong);
          }

          /* Footer */
          .footer {
            border-top: 1px solid var(--border-light);
            padding: 4rem 0 2rem;
            margin-top: 4rem;
          }
          
          .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            gap: 2rem;
            margin-bottom: 4rem;
          }
          
          .footer-col h4 {
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
          }
          
          .footer-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            transition: var(--transition-fast);
          }
          
          .footer-links a:hover {
            color: var(--text-primary);
          }
          
          .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 2rem;
            border-top: 1px solid var(--border-light);
            color: var(--text-muted);
            font-size: 0.85rem;
          }

          /* Animations */
          .animate-fade {
            animation: fadeInUp 0.8s ease backwards;
          }
          
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.2s; }
          .delay-3 { animation-delay: 0.3s; }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Responsive */
          @media (max-width: 992px) {
            .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr); }
            .pricing-card.popular { transform: none; }
            .footer-grid { grid-template-columns: 1fr 1fr; }
          }

          @media (max-width: 768px) {
            .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
            .nav-links { display: none; }
            .hero { padding-top: 8rem; }
            .footer-grid { grid-template-columns: 1fr; }
            .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo">
            <Bot size={24} className="text-primary" /> BotForgee
          </a>
          <div className="nav-links">
            <a href="#features" className="nav-link">Функции</a>
            <a href="#how-it-works" className="nav-link">Как это работает</a>
            <a href="#pricing" className="nav-link">Тарифы</a>
            <a href="#" className="nav-link">Войти</a>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Создать Бота</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <span className="badge animate-fade">Ультимативный No-Code Конфигуратор</span>
          <h1 className="heading-xl text-gradient animate-fade delay-1">
            Автоматизируй<br/>Свою Прибыль
          </h1>
          <p className="text-secondary hero-desc animate-fade delay-2">
            Создавайте сложные Grid-стратегии, настраивайте технические индикаторы и управляйте рисками с помощью трейлинг-стопов. Мгновенное подключение к Binance, Bybit и OKX.
          </p>
          
          <div className="animate-fade delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Открыть Конфигуратор <ArrowRight size={18} />
            </a>
            <a href="#pricing" className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>
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
            <div className="el-card feature-box">
              <div className="icon-wrapper accent"><Activity size={24} /></div>
              <h3>Технические Фильтры</h3>
              <p className="text-secondary">
                Подключайте индикаторы RSI, MACD и Bollinger Bands, чтобы ваш бот входил в сделку только при идеальных условиях.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper accent"><TrendingUp size={24} /></div>
              <h3>Трейлинг Стопы</h3>
              <p className="text-secondary">
                Максимизируйте прибыль во время сильных пампов с помощью Trailing Take Profit и защищайте капитал динамическим Trailing Stop Loss.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper accent"><Layers size={24} /></div>
              <h3>Умные Сетки</h3>
              <p className="text-secondary">
                Используйте логарифмический или арифметический шаг сетки в комбинации с множителями объема Мартингейла.
              </p>
            </div>
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
            <div className="el-card feature-box">
              <div className="icon-wrapper"><Zap size={20} /></div>
              <h3>ScalpBot Pro <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Скальпинг</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Высокочастотный бот для краткосрочных сделок. Открывает до 200 позиций в сутки на минутных свечах BTC/ETH.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper"><TrendingUp size={20} /></div>
              <h3>TrendRider <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Трендовый</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Торгует по направлению тренда на 4H и дневных графиках. Оптимален для спокойного рынка с чётким направлением.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper"><Layers size={20} /></div>
              <h3>GridMaster <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Сеточный</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Сеточная стратегия в боковом рынке. Зарабатывает на волатильности без прогнозирования направления.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper"><BarChart2 size={20} /></div>
              <h3>ArbitrageX <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Арбитраж</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Межбиржевой арбитраж. Использует разницу цен между биржами для безрискового заработка.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper"><AudioWaveform size={20} /></div>
              <h3>NewsTrader AI <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Новостной</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                ИИ-бот анализирует новости и твиты в реальном времени. Реагирует на события раньше рынка.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper"><Activity size={20} /></div>
              <h3>DCA Bot <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem'}}>Усреднение</span></h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Классическая стратегия усреднения (DCA). Идеален для долгосрочного накопления активов при падении.
              </p>
            </div>
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
            <div className="el-card pricing-card">
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
            </div>
            
            {/* Pro Tier */}
            <div className="el-card pricing-card popular">
              <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-color)', color: 'white', padding: '0.25rem 1rem', fontSize: '0.8rem', fontWeight: 'bold', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
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
            </div>
            
            {/* Ultra Tier */}
            <div className="el-card pricing-card">
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
            </div>
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
              <span>Что такое BotForgee?</span>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{ gridColumn: 'span 2' }}>
              <a href="#" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                <Bot size={24} className="text-primary" /> BotForgee
              </a>
              <p className="text-secondary" style={{ maxWidth: '300px', fontSize: '0.95rem' }}>
                Инновационная no-code платформа для создания и автоматизации крипто-торговых стратегий. Торгуйте умно, а не усердно.
              </p>
            </div>
            
            <div className="footer-col">
              <h4>Продукт</h4>
              <ul className="footer-links">
                <li><a href="#">Функции</a></li>
                <li><a href="#">Тарифы</a></li>
                <li><a href="#">Маркетплейс</a></li>
                <li><a href="#">Обновления</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Ресурсы</h4>
              <ul className="footer-links">
                <li><a href="#">Документация</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">Гайды</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Правовая Инфа</h4>
              <ul className="footer-links">
                <li><a href="#">Условия сервиса</a></li>
                <li><a href="#">Политика конф.</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div>© 2026 Экосистема BotForgee. Все права защищены.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }}></div>
              Статус: Все системы работают
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
