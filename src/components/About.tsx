import { useState } from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS/Tailwind', level: 85 },
  { name: 'Python', level: 70 },
];

export default function About() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section 
      id="about"
      style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <h2 style={{ 
        fontSize: 'clamp(2rem, 5vw, 3rem)', 
        textAlign: 'center', 
        marginBottom: '3rem',
        color: '#333'
      }}>
        About Me
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'start'
      }}>
        <div>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            I'm a passionate developer who loves creating beautiful and functional web experiences. 
            With a strong foundation in modern web technologies, I specialize in building responsive, 
            user-friendly applications.
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: '#555'
          }}>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>
            Skills & Expertise
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {skills.map((skill) => (
              <div 
                key={skill.name}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: activeSkill === skill.name ? '#667eea' : '#333',
                  transition: 'color 0.3s ease'
                }}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: '#e0e0e0',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: activeSkill === skill.name ? `${skill.level}%` : '0%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    transition: 'width 0.8s ease',
                    borderRadius: '10px'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
