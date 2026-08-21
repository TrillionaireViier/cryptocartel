import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Помилка авторизації');
      }

      localStorage.setItem('botforgee_token', data.token);
      localStorage.setItem('botforgee_user', JSON.stringify(data.user));
      navigate('/app');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '80vh', padding: '6rem 1rem 4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="el-card" style={{ width: '100%', maxWidth: '450px', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Shield size={48} className="text-primary" style={{ margin: '0 auto 1rem' }} />
          <h1 className="heading-md">Вхід в аккаунт</h1>
          <p className="text-secondary">С возвращением! Войдите для управления вашими ботами.</p>
        </div>

        {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="name@example.com" 
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', color: 'white', outline: 'none' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Пароль</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••" 
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--bg-base)', border: '1px solid var(--border-strong)', color: 'white', outline: 'none' }} 
            />
          </div>
          <button disabled={loading} type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
            {loading ? 'Вхід...' : 'Войти'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Нет аккаунта? <Link to="/signup" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Создать сейчас</Link>
        </p>
      </div>
    </div>
  );
}
