import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Wallet, Bot, TrendingUp, LogOut } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('cryptocartel_token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchDashboard = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/dashboard/stats', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!res.ok) {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem('cryptocartel_token');
            navigate('/login');
            return;
          }
          throw new Error('Не вдалося завантажити дані');
        }
        
        const data = await res.json();
        setStats(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('cryptocartel_token');
    localStorage.removeItem('cryptocartel_user');
    navigate('/login');
  };

  if (loading) return <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Завантаження...</div>;
  if (error) return <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ef4444' }}>{error}</div>;

  return (
    <div style={{ minHeight: '80vh', padding: '2rem 1rem' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h1 className="heading-md" style={{ margin: 0 }}>Панель Управления</h1>
          <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            <LogOut size={16} /> Выйти
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          <div className="el-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="icon-wrapper accent"><Wallet size={24} /></div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-secondary)' }}>Общий баланс</h3>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>${stats?.balance?.toFixed(2)}</div>
          </div>
          
          <div className="el-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="icon-wrapper accent"><Bot size={24} /></div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-secondary)' }}>Активные боты</h3>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{stats?.activeBots}</div>
          </div>
          
          <div className="el-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="icon-wrapper accent" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}><TrendingUp size={24} /></div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-secondary)' }}>Профит за 30 дней</h3>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#10b981' }}>+${stats?.totalProfit?.toFixed(2)}</div>
          </div>
        </div>

        {/* Bots List */}
        <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Ваши Боты</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {stats?.bots?.map((bot: any) => (
            <div key={bot.id} className="el-card" style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Activity size={20} className={bot.status === 'active' ? 'text-primary' : 'text-secondary'} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{bot.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Пара: {bot.pair}</span>
                </div>
              </div>
              
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: bot.profit > 0 ? '#10b981' : '#ef4444' }}>
                  {bot.profit > 0 ? '+' : ''}{bot.profit}%
                </div>
                <span style={{ fontSize: '0.85rem', color: bot.status === 'active' ? 'var(--primary-color)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {bot.status === 'active' ? 'В Работе' : 'Пауза'}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
