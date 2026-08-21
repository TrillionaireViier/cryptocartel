import { ArrowLeft, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function PlaceholderPage() {
  const location = useLocation();
  const pathName = location.pathname.split('/')[1] || 'страница';
  const displayTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem'
    }}>
      <div className="el-card" style={{ maxWidth: '600px', width: '100%', padding: '4rem 2rem', textAlign: 'center' }}>
        <Clock size={48} className="text-primary" style={{ margin: '0 auto 1.5rem', opacity: 0.8 }} />
        <h1 className="heading-lg">Страница {displayTitle}</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
          Этот раздел в данный момент находится в разработке. Мы скоро добавим сюда подробную информацию.
        </p>
        <Link to="/" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
          <ArrowLeft size={18} /> Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
