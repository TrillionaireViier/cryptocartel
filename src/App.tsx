import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Bot } from 'lucide-react';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
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
          <Link to="/" className="logo">
            <Bot size={24} className="text-primary" /> BotForgee
          </Link>
          <div className="nav-links">
            <a href="/#features" className="nav-link">Функции</a>
            <a href="/#how-it-works" className="nav-link">Как это работает</a>
            <a href="/#pricing" className="nav-link">Тарифы</a>
            <Link to="/login" className="nav-link">Войти</Link>
            <Link to="/signup" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Создать Бота</Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div style={{ paddingTop: '6rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PlaceholderPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{ gridColumn: 'span 2' }}>
              <Link to="/" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                <Bot size={24} className="text-primary" /> BotForgee
              </Link>
              <p className="text-secondary" style={{ maxWidth: '300px', fontSize: '0.95rem' }}>
                Инновационная no-code платформа для создания и автоматизации крипто-торговых стратегий. Торгуйте умно, а не усердно.
              </p>
            </div>
            
            <div className="footer-col">
              <h4>Продукт</h4>
              <ul className="footer-links">
                <li><a href="/#features">Функции</a></li>
                <li><a href="/#pricing">Тарифы</a></li>
                <li><Link to="/marketplace">Маркетплейс</Link></li>
                <li><Link to="/updates">Обновления</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Ресурсы</h4>
              <ul className="footer-links">
                <li><Link to="/docs">Документация</Link></li>
                <li><Link to="/api-reference">API Reference</Link></li>
                <li><Link to="/blog">Блог</Link></li>
                <li><Link to="/guides">Гайды</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Правовая Инфа</h4>
              <ul className="footer-links">
                <li><Link to="/terms">Условия сервиса</Link></li>
                <li><Link to="/privacy">Политика конф.</Link></li>
                <li><Link to="/cookies">Cookies</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
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
    </BrowserRouter>
  );
}

export default App;
