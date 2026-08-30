import { ArrowLeft, BookOpen, Shield, ShoppingCart, Terminal, Zap, FileText, Mail, FileCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Контент для каждой страницы
const pageContent: Record<string, any> = {
  'marketplace': {
    title: 'Маркетплейс Стратегий',
    icon: <ShoppingCart size={40} className="text-primary" />,
    description: 'Покупайте и продавайте прибыльные настройки ботов от топовых трейдеров.',
    content: (
      <>
        <h3>Экосистема стратегий</h3>
        <p>Наш маркетплейс объединяет профессиональных квант-трейдеров и новичков. Вы можете арендовать готовую сетку или трендовую стратегию за фиксированную плату или процент от прибыли.</p>
        <ul>
          <li>Проверенная статистика: PnL, просадка (drawdown) и Win Rate отображаются прозрачно.</li>
          <li>Никакой передачи API-ключей авторам стратегий.</li>
          <li>Тестовый период на 7 дней для всех премиум-настроек.</li>
        </ul>
        <div className="el-card" style={{ padding: '2rem', marginTop: '2rem', textAlign: 'center', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
          <h4 style={{ color: 'var(--primary-color)' }}>Запуск маркетплейса состоится в Q4 2026</h4>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>Следите за обновлениями, чтобы первыми получить доступ.</p>
        </div>
      </>
    )
  },
  'updates': {
    title: 'Журнал Обновлений',
    icon: <Zap size={40} className="text-primary" />,
    description: 'Последние релизы, новые функции и улучшения платформы Alvaro Capital.',
    content: (
      <>
        <div style={{ borderLeft: '2px solid var(--border-strong)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <h4 style={{ color: 'var(--text-primary)' }}>v2.4.0 — ИИ-Ассистент и новые фильтры</h4>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>21 Августа 2026</span>
          <p style={{ marginTop: '0.5rem' }}>Добавлена возможность использовать ChatGPT-4o для генерации условий входа в сделку. Также добавлены фильтры по объему (Volume Oscillator).</p>
        </div>
        <div style={{ borderLeft: '2px solid var(--border-strong)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <h4 style={{ color: 'var(--text-primary)' }}>v2.3.5 — Интеграция с OKX</h4>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>10 Августа 2026</span>
          <p style={{ marginTop: '0.5rem' }}>Мы добавили полную поддержку биржи OKX (Спот и Фьючерсы). Торгуйте с минимальными комиссиями.</p>
        </div>
      </>
    )
  },
  'docs': {
    title: 'Документация',
    icon: <BookOpen size={40} className="text-primary" />,
    description: 'Официальное руководство по использованию платформы.',
    content: (
      <>
        <h3>С чего начать?</h3>
        <p>Alvaro Capital разработан так, чтобы минимизировать порог входа. Однако, для использования сложных Мартингейл-сеток и трейлинг-стопов мы рекомендуем изучить базовые концепции.</p>
        <div className="grid-2" style={{ marginTop: '2rem' }}>
          <div className="el-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Подключение Биржи</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Как безопасно создать и привязать API ключи (только для торговли, без права на вывод).</p>
          </div>
          <div className="el-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Настройка Сетки</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Разница между арифметическим и логарифмическим шагом.</p>
          </div>
        </div>
      </>
    )
  },
  'api-reference': {
    title: 'API Reference',
    icon: <Terminal size={40} className="text-primary" />,
    description: 'Документация для разработчиков (REST & WebSocket).',
    content: (
      <>
        <p>Наш API позволяет вам программно создавать ботов, изменять настройки сеток на лету и получать вебхуки о сделках.</p>
        <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', color: '#10b981', marginTop: '1.5rem' }}>
          GET /api/v1/bots<br/>
          Authorization: Bearer YOUR_TOKEN<br/><br/>
          // Response<br/>
          {"{"}<br/>
          &nbsp;&nbsp;"status": "success",<br/>
          &nbsp;&nbsp;"data": [ ... ]<br/>
          {"}"}
        </div>
        <p style={{ marginTop: '1.5rem' }}>* API доступно только для пользователей на тарифе "Ультра".</p>
      </>
    )
  },
  'terms': {
    title: 'Условия сервиса',
    icon: <FileText size={40} className="text-primary" />,
    description: 'Пользовательское соглашение.',
    content: (
      <>
        <h3>1. Ограничение ответственности</h3>
        <p>Криптовалютный трейдинг сопряжен с высокими рисками. Alvaro Capital предоставляет программное обеспечение для автоматизации ваших стратегий, но не гарантирует прибыль.</p>
        <h3>2. Лицензия на использование</h3>
        <p>Пользователям предоставляется неисключительная лицензия на использование платформы в рамках выбранного тарифного плана.</p>
      </>
    )
  },
  'privacy': {
    title: 'Политика Конфиденциальности',
    icon: <Shield size={40} className="text-primary" />,
    description: 'Как мы храним и защищаем ваши данные.',
    content: (
      <>
        <h3>Хранение API ключей</h3>
        <p>Ваши API ключи от бирж шифруются с использованием алгоритма AES-256. Мы никогда не запрашиваем и не храним ключи с разрешением на вывод средств (Withdrawal).</p>
        <h3>Передача данных третьим лицам</h3>
        <p>Мы не продаем ваши торговые данные или персональную информацию третьим лицам. Анонимизированная статистика может использоваться для улучшения алгоритмов машинного обучения.</p>
      </>
    )
  },
  'contact': {
    title: 'Контакты',
    icon: <Mail size={40} className="text-primary" />,
    description: 'Свяжитесь с нашей командой поддержки.',
    content: (
      <>
        <div className="grid-2" style={{ marginTop: '1rem' }}>
          <div className="el-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '1rem' }}>Поддержка</h4>
            <p>support@alvarocapital.io</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Отвечаем в течение 15 минут</p>
          </div>
          <div className="el-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '1rem' }}>Партнерство</h4>
            <p>partners@alvarocapital.io</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Для бирж и инфлюенсеров</p>
          </div>
        </div>
      </>
    )
  },
  'blog': {
    title: 'Блог Alvaro Capital',
    icon: <BookOpen size={40} className="text-primary" />,
    description: 'Новости рынка, аналитика и разборы торговых стратегий.',
    content: (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>
          <div className="el-card" style={{ padding: '2rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Рынки • 21 Августа 2026</span>
            <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Как торговать в боковике с помощью Grid-ботов?</h3>
            <p style={{ margin: 0 }}>Разбираем математику сеточного трейдинга и показываем, почему флэт — лучшее время для запуска GridMaster. Узнайте, как правильно рассчитать ширину канала и шаг сетки.</p>
          </div>
          <div className="el-card" style={{ padding: '2rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Аналитика • 15 Августа 2026</span>
            <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Риск-менеджмент: Трейлинг стопы против фиксированных</h3>
            <p style={{ margin: 0 }}>Сравнительное тестирование на исторических данных ETH/USDT за 2025 год. Как динамический стоп-лосс спасает депозит на проливах.</p>
          </div>
        </div>
      </>
    )
  },
  'guides': {
    title: 'Обучающие Гайды',
    icon: <FileText size={40} className="text-primary" />,
    description: 'Пошаговые инструкции по настройке и запуску алгоритмов.',
    content: (
      <>
        <h3>Базовый уровень</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '1rem', border: '1px solid var(--border-light)', borderRadius: '8px', marginBottom: '0.5rem', background: 'var(--bg-card-hover)' }}>🔥 Как подключить Binance API за 3 минуты</li>
          <li style={{ padding: '1rem', border: '1px solid var(--border-light)', borderRadius: '8px', marginBottom: '0.5rem', background: 'var(--bg-card-hover)' }}>🚀 Запуск вашего первого DCA-бота</li>
        </ul>
        
        <h3>Продвинутый уровень</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '1rem', border: '1px solid var(--border-light)', borderRadius: '8px', marginBottom: '0.5rem', background: 'var(--bg-card-hover)' }}>🧠 Настройка RSI + MACD фильтров</li>
          <li style={{ padding: '1rem', border: '1px solid var(--border-light)', borderRadius: '8px', marginBottom: '0.5rem', background: 'var(--bg-card-hover)' }}>⚙️ Использование логарифмического мартингейла</li>
        </ul>
      </>
    )
  },
  'cookies': {
    title: 'Политика Cookies',
    icon: <Shield size={40} className="text-primary" />,
    description: 'Информация об использовании файлов cookie на нашей платформе.',
    content: (
      <>
        <h3>Строго необходимые Cookies</h3>
        <p>Эти файлы необходимы для функционирования платформы. Они включают в себя токены авторизации (JWT) и настройки темы. Их нельзя отключить, так как без них вы не сможете войти в свой аккаунт.</p>
        
        <h3>Аналитические Cookies</h3>
        <p>Мы используем анонимизированную аналитику для понимания того, как пользователи взаимодействуют с конфигуратором ботов. Это помогает нам делать интерфейс удобнее.</p>
      </>
    )
  },
  'login': {
    title: 'Вход в аккаунт',
    icon: <Shield size={40} className="text-primary" />,
    description: 'С возвращением! Войдите для управления вашими ботами.',
    content: (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
            <input type="email" placeholder="name@example.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', color: 'white', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Пароль</label>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', color: 'white', outline: 'none' }} />
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>Войти</button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Нет аккаунта? <Link to="/signup" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Создать сейчас</Link>
        </p>
      </div>
    )
  },
  'signup': {
    title: 'Регистрация',
    icon: <Zap size={40} className="text-primary" />,
    description: 'Начните автоматизировать свою прибыль уже сегодня.',
    content: (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Имя</label>
            <input type="text" placeholder="Джон Доу" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', color: 'white', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
            <input type="email" placeholder="name@example.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', color: 'white', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Пароль</label>
            <input type="password" placeholder="Минимум 8 символов" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', color: 'white', outline: 'none' }} />
          </div>
          <button className="btn btn-accent" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>Зарегистрироваться</button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Уже есть аккаунт? <Link to="/login" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Войти</Link>
        </p>
      </div>
    )
  }
};

// Дефолтный контент для остальных страниц (Блог, Гайды, Cookies)
const defaultContent = {
  title: 'Страница в разработке',
  icon: <FileCheck size={40} className="text-primary" />,
  description: 'Мы активно работаем над наполнением этого раздела.',
  content: (
    <p>Совсем скоро здесь появится подробная информация. Возвращайтесь позже!</p>
  )
};

export default function PlaceholderPage() {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  
  const pageData = pageContent[path] || {
    ...defaultContent,
    title: path.charAt(0).toUpperCase() + path.slice(1)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div style={{ minHeight: '80vh', padding: '6rem 1rem 4rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '3rem', transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
          <ArrowLeft size={18} /> Вернуться на главную
        </Link>

        <div style={{ marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {pageData.icon}
          </div>
          <div>
            <h1 className="heading-lg" style={{ marginBottom: '0.5rem' }}>{pageData.title}</h1>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>{pageData.description}</p>
          </div>
        </div>

        <div className="content-article" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          borderRadius: '24px',
          padding: '3rem',
          fontSize: '1.05rem',
          lineHeight: '1.8'
        }}>
          {pageData.content}
        </div>

      </div>
    </div>
  );
}
