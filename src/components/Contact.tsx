import Magnet from './Magnet';
import ShinyText from './ShinyText';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface TechCategory {
  title: string;
  items: string[];
}

const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/lucapgiannotti', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/lucapgiannotti', icon: '💼' },
  { name: 'Email', url: 'mailto:hello@lucagiannotti.com', icon: '✉️' },
];

const techCategories: TechCategory[] = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'Java', 'C++'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Astro', 'FastAPI', 'Node.js'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'Git', 'Nginx', 'PostgreSQL'],
  },
  {
    title: 'Interests',
    items: ['ML Research', 'Distributed Systems', 'Web Performance'],
  },
];

export default function Contact() {

  return (
    <section 
      id="contact"
      style={{
        padding: '5rem 0',
        maxWidth: '100%',
        margin: '0',
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem' }}>
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
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '4rem',
        alignItems: 'start',
        maxWidth: '100%'
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

        {/* Tech Stack
        <div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#f8f9fa' }}>
            Tech Stack
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            {techCategories.map((category) => (
              <div key={category.title}>
                <h4 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600',
                  color: '#8da4f5',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.05em'
                }}>
                  {category.title}
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {category.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(102, 126, 234, 0.15)',
                        border: '1px solid rgba(102, 126, 234, 0.3)',
                        borderRadius: '6px',
                        color: '#f8f9fa',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.25)';
                        e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div> 
        </div> */}
      </div>
      </div>
    </section>
  );
}
