import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '3rem 1.5rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>LearnPath</h3>
          <p style={{ color: '#9ca3af' }}>Your Journey to Mastery</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="#home" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Home</a></li>
            <li><a href="#features" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Features</a></li>
            <li><a href="#about" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>About</a></li>
            <li><a href="#faq" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Contact Us</h3>
          <p style={{ color: '#9ca3af' }}>Email: support@learnpath.com</p>
          <p style={{ color: '#9ca3af' }}>Phone: +1 (123) 456-7890</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
              <svg fill="currentColor" style={{ width: '1.5rem', height: '1.5rem' }} viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.62H8.053v-2.618h2.385V9.782c0-2.364 1.443-3.65 3.543-3.65 1.052 0 1.961.078 2.229.113v2.43h-1.442c-1.137 0-1.357.54-1.357 1.332v1.73H17.5l-.273 2.618h-2.174V22.001C18.343 21.128 22 16.991 22 12 22 6.477 17.523 2 12 2z"></path></svg>
            </a>
            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
              <svg fill="currentColor" style={{ width: '1.5rem', height: '1.5rem' }} viewBox="0 0 24 24"><path d="M22.46 6c-.8.36-1.64.6-2.5.7.9-.54 1.5-1.4 1.8-2.4-.8.48-1.7.8-2.6.98-.8-.88-2.1-1.44-3.5-1.44-2.64 0-4.78 2.15-4.78 4.8 0 .38.04.75.12 1.1-.34-.02-.68-.04-1.02-.04-3.6 0-6.8 1.9-8.9 4.6-1.04 1.78-1.64 3.86-1.64 6.08 0 1.6.24 3.12.7 4.5-.7-.18-1.38-.4-2.04-.66.86 2.05 2.56 3.56 4.54 4.14-1.6.1-3.26.16-4.9.16-.32 0-.64-.02-.96-.06 2.1 1.34 4.6 2.14 7.3 2.14 8.7 0 13.43-7.22 13.43-13.43 0-.2-.0-.4-.02-.6.92-.66 1.7-1.48 2.32-2.42z"></path></svg>
            </a>
            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
              <svg fill="currentColor" style={{ width: '1.5rem', height: '1.5rem' }} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.779 1.637 4.938 4.938.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.637 4.779-4.938 4.938-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.779-1.637-4.938-4.938-.058-1.265-.07-1.645-.07-4.85s.014-3.666.072-4.945c.124-2.723 1.185-3.832 3.956-3.956 1.279-.058 1.688-.072 4.945-.072zm0 2.138c-3.257 0-3.666.014-4.945.072-2.723.124-3.832 1.185-3.956 3.956-.058 1.279-.072 1.688-.072 4.945s.014 3.666.072 4.945c.124 2.723 1.185 3.832 3.956 3.956 1.279.058 1.688.072 4.945.072s3.666-.014 4.945-.072c2.723-.124 3.832-1.185 3.956-3.956.058-1.279.072-1.688.072-4.945s-.014-3.666-.072-4.945c-.124-2.723-1.185-3.832-3.956-3.956-1.279-.058-1.688-.072-4.945-.072zm0 6a3 3 0 100 6 3 3 0 000-6zm0 2.138a.862.862 0 110 1.724.862.862 0 010-1.724zM16.942 5.568a1.237 1.237 0 100 2.474 1.237 1.237 0 000-2.474z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '2rem' }}>
        &copy; 2025 LearnPath Made with ❤️ by Students for students . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 