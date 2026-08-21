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
    description: 'Последние релизы, новые функции и улучшения платформы BotForgee.',
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
        <p>BotForgee разработан так, чтобы минимизировать порог входа. Однако, для использования сложных Мартингейл-сеток и трейлинг-стопов мы рекомендуем изучить базовые концепции.</p>
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
        <p>Криптовалютный трейдинг сопряжен с высокими рисками. BotForgee предоставляет программное обеспечение для автоматизации ваших стратегий, но не гарантирует прибыль.</p>
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
            <p>support@botforgee.io</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Отвечаем в течение 15 минут</p>
          </div>
          <div className="el-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '1rem' }}>Партнерство</h4>
            <p>partners@botforgee.io</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Для бирж и инфлюенсеров</p>
          </div>
        </div>
      </>
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
