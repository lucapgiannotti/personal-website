import { useState } from 'react';
import Magnet from './Magnet';
import ShinyText from './ShinyText';
import SpotlightCard from './SpotlightCard';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/lucapgiannotti', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/lucapgiannotti', icon: '💼' },
  { name: 'Email', url: 'mailto:hello@lucagiannotti.com', icon: '✉️' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Not Sent (Server Issue). Please contact me directly at hello@lucagiannotti.com');
  };

  return (
    <section 
      id="contact"
      style={{
        padding: '5rem 2rem',
        maxWidth: '100%',
        margin: '0',
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: '#f8f9fa'
        }}>
          <ShinyText text="Get In Touch" speed={3} />
        </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'start'
      }}>
        {/* Contact Info */}
        <div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#f8f9fa' }}>
            Let's Connect
          </h3>
          <p style={{ color: '#b0b0b0', marginBottom: '2rem', lineHeight: '1.8' }}>
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {socials.map((social) => (
              <Magnet key={social.name} magnetStrength={3} padding={50}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'rgba(102, 126, 234, 0.15)',
                    color: '#8da4f5',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '50px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.3)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{social.icon}</span>
                  {social.name}
                </a>
              </Magnet>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <SpotlightCard spotlightColor="rgba(102, 126, 234, 0.25)">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#f8f9fa' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  color: '#f8f9fa',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(102, 126, 234, 0.6)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#f8f9fa' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  color: '#f8f9fa',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(102, 126, 234, 0.6)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            </div>

            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#f8f9fa' }}>
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  color: '#f8f9fa',
                  resize: 'vertical',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(102, 126, 234, 0.6)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            </div>

            <Magnet magnetStrength={4} padding={30}>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
                  border: '1px solid rgba(102, 126, 234, 0.4)',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 1) 0%, rgba(118, 75, 162, 1) 100%)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>
            </Magnet>
          </form>
        </SpotlightCard>
      </div>
      </div>
    </section>
  );
}
