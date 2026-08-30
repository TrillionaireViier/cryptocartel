import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

// Since we are using Design System 3 (JSX components), we can import them.
// Note: If they are JSX, Vite will handle them fine even from TSX files.
import { Button } from '../design system 3/components/core/Button';

function MainLayout() {
  return (
    <div style={{ backgroundColor: 'var(--color-canvas)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation - Minimal Editorial Style */}
      <nav style={{ 
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'rgba(245, 245, 245, 0.8)', 
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border-subtle)',
        zIndex: 50,
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.25rem', 
              color: 'var(--color-ink)', 
              fontWeight: 300,
              letterSpacing: '-0.02em'
            }}>
              Alvara Trade
            </span>
          </Link>
          
          <div className="desktop-nav-links">
            <a href="#features" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>Возможности</a>
            <a href="#how-it-works" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>Как это работает</a>
            <a href="#faq" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>FAQ</a>
            <Button variant="primary" onClick={() => window.location.href='#'}>Открыть в Telegram</Button>
          </div>

        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: 'var(--color-canvas-soft)', 
        padding: '64px 0 32px', 
        borderTop: '1px solid var(--color-border-subtle)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="responsive-footer-grid">
            <div>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.5rem', 
                color: 'var(--color-ink)', 
                fontWeight: 300,
                marginBottom: '16px'
              }}>Alvara Trade</h3>
              <p style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)', lineHeight: '1.6', maxWidth: '300px' }}>
                Экосистема умного трейдинга на базе ИИ. Торгуйте на основе данных, а не эмоций.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '16px', color: 'var(--color-ink)' }}>Продукт</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#features" style={{ color: 'var(--color-ink-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Функции</a></li>
                <li><a href="#how-it-works" style={{ color: 'var(--color-ink-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Как начать</a></li>
                <li><a href="#faq" style={{ color: 'var(--color-ink-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '16px', color: 'var(--color-ink)' }}>Правовая инфа</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#" style={{ color: 'var(--color-ink-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Условия</a></li>
                <li><a href="#" style={{ color: 'var(--color-ink-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Конфиденциальность</a></li>
              </ul>
            </div>
          </div>
          
          <div style={{ 
            paddingTop: '24px', 
            borderTop: '1px solid var(--color-border-subtle)', 
            display: 'flex', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            color: 'var(--color-ink-muted)',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-body)'
          }}>
            <div>© 2026 Alvara Trade. Все права защищены.</div>
            <div>Статус: Все системы работают</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
