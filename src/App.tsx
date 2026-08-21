import { ArrowRight, AudioWaveform, Shield, Activity } from 'lucide-react';

function App() {
  return (
    <>
      <style>
        {`
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1.2rem 0;
            z-index: 100;
            background: rgba(0, 0, 0, 0.8);
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
            font-weight: 600;
            color: var(--text-primary);
            text-decoration: none;
            letter-spacing: -0.02em;
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
            padding-top: 5rem;
            position: relative;
          }
          
          .hero-content {
            max-width: 800px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-desc {
            margin: 1.5rem 0 2.5rem;
            max-width: 600px;
          }

          /* Interface Mockup (ElevenLabs style playground) */
          .playground {
            margin-top: 4rem;
            width: 100%;
            max-width: 900px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background: var(--bg-card);
          }

          .pg-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-light);
            margin-bottom: 1rem;
          }

          .pg-title {
            font-size: 0.9rem;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .pg-input {
            width: 100%;
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-family: var(--font-main);
            font-size: 1.5rem;
            outline: none;
            resize: none;
            line-height: 1.4;
          }

          .pg-input::placeholder {
            color: var(--text-muted);
          }

          .pg-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
          }

          /* Grid Features */
          .features {
            padding-bottom: 8rem;
          }

          .grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .feature-box {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .feature-box:hover {
            border-color: var(--border-strong);
          }

          .icon-wrapper {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media (max-width: 768px) {
            .grid-3 { grid-template-columns: 1fr; }
            .heading-xl { font-size: 2.5rem; }
            .nav-links { display: none; }
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo">Alvaro Capital</a>
          <div className="nav-links">
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Resources</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">Sign in</a>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Sign up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="heading-xl text-gradient animate-fade">
            Intelligence in Capital.
          </h1>
          <p className="text-secondary hero-desc animate-fade delay-1">
            The most advanced quantitative trading models and data synthesis engines, accessible in a clean, minimalist interface. Built for modern investors.
          </p>
          
          <div className="animate-fade delay-2" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="btn btn-primary">
              Get started free <ArrowRight size={16} />
            </a>
            <a href="#" className="btn btn-secondary">
              View API Docs
            </a>
          </div>


        </div>
      </section>

      {/* Features */}
      <section className="section features">
        <div className="container">
          <div className="grid-3">
            <div className="el-card feature-box">
              <div className="icon-wrapper"><Activity size={20} /></div>
              <h3>Real-time Analytics</h3>
              <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
                Stream market data with sub-millisecond latency. Our models process millions of data points instantly.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper"><AudioWaveform size={20} /></div>
              <h3>Predictive Modeling</h3>
              <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
                Leverage generative AI to simulate market conditions and stress-test your portfolios before execution.
              </p>
            </div>
            <div className="el-card feature-box">
              <div className="icon-wrapper"><Shield size={20} /></div>
              <h3>Enterprise Security</h3>
              <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
                Bank-grade encryption and SOC2 compliance out of the box. Your algorithmic IP is always protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
