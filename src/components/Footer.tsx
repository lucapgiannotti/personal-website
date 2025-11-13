import Magnet from './Magnet';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0a0a0a',
      color: '#b0b0b0',
      textAlign: 'center',
      padding: '3rem 2rem',
      borderTop: '1px solid rgba(102, 126, 234, 0.2)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <Magnet magnetStrength={2} padding={40}>
            <a
              href="/"
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#f8f9fa',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = '0 0 20px rgba(102, 126, 234, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              Luca Giannotti
            </a>
          </Magnet>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          justifyContent: 'center', 
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}>
          {[
            { name: 'Home', href: '/' },
            { name: 'Resume', href: '/resume' },
            { name: 'Projects', href: '/#projects' },
            { name: 'Contact', href: '/#contact' }
          ].map((link) => (
            <Magnet key={link.name} magnetStrength={3} padding={30}>
              <a
                href={link.href}
                style={{
                  color: '#b0b0b0',
                  fontWeight: '500',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8da4f5';
                  e.currentTarget.style.textShadow = '0 0 10px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b0b0b0';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {link.name}
              </a>
            </Magnet>
          ))}
        </div>

        {/* <div style={{ 
          borderTop: '1px solid rgba(102, 126, 234, 0.1)',
          paddingTop: '1.5rem',
          marginTop: '1.5rem'
        }}>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            © {currentYear} <span style={{ color: '#8da4f5', fontWeight: '600' }}>Luca Giannotti</span>
          </p>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: 0.7 }}>
            Built with <span style={{ color: '#667eea' }}>Astro</span> & <span style={{ color: '#667eea' }}>React</span>
          </p>
        </div> */}
      </div>
    </footer>
  );
}
