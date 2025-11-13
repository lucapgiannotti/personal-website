import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Resume', href: '/resume' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 2px 10px rgba(102, 126, 234, 0.2)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(102, 126, 234, 0.2)' : 'none',
        transition: 'all 0.3s ease',
        padding: '1rem 2rem'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a
          href="#"
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'white',
            textShadow: isScrolled ? '0 0 10px rgba(102, 126, 234, 0.5)' : '0 2px 4px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          Luca Giannotti
        </a>

        {/* Desktop Navigation */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {navLinks.map((link) => (
            <li key={link.name} style={{ display: isMobile ? 'none' : 'block' }}>
              <a
                href={link.href}
                style={{
                  color: 'white',
                  fontWeight: '600',
                  textShadow: isScrolled ? '0 0 8px rgba(102, 126, 234, 0.3)' : '0 2px 4px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.textShadow = '0 0 12px rgba(102, 126, 234, 0.8)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.textShadow = isScrolled ? '0 0 8px rgba(102, 126, 234, 0.3)' : '0 2px 4px rgba(0,0,0,0.3)';
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: isMobile ? 'block' : 'none',
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          display: isMobile ? 'block' : 'none',
          background: 'rgba(17, 17, 17, 0.98)',
          border: '1px solid rgba(102, 126, 234, 0.3)',
          borderRadius: '8px',
          marginTop: '1rem',
          padding: '1rem',
          boxShadow: '0 4px 6px rgba(102, 126, 234, 0.2)'
        }}>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: '#f8f9fa',
                    fontWeight: '600',
                    display: 'block',
                    padding: '0.5rem'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
