import { useState } from 'react';
import SpotlightCard from './SpotlightCard';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TAMU Statistics',
    description: 'Grade distribution analyzer for 116,000+ course sections with FastAPI backend and Next.js frontend.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'Docker', 'Data Analysis', 'Web Scraping', 'API Development'],
    link: 'https://tamustatistics.com/',
    github: 'https://github.com/lucapgiannotti'
  },
  {
    id: 2,
    title: 'Canvas ReadSpeaker Remover',
    description: 'Chrome extension to remove the floating ReadSpeaker button on Canvas LMS pages.',
    tech: ['JavaScript', 'Chrome', 'Web Extensions', 'CSS'],
    link: 'https://chromewebstore.google.com/detail/canvas-readspeaker-remove/igccagjhbmndgdnimbnkojipkhiggplo',
  }
];

export default function Projects() {
  return (
    <section 
      id="projects"
      style={{
        padding: '5rem 2rem',
        background: '#0a0a0a',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: '#f8f9fa'
        }}>
          Featured Projects
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor="rgba(102, 126, 234, 0.3)"
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: '#f8f9fa'
              }}>
                {project.title}
              </h3>
              
              <p style={{ 
                color: '#b0b0b0', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>

              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(102, 126, 234, 0.2)',
                      color: '#8da4f5',
                      border: '1px solid rgba(102, 126, 234, 0.3)',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#667eea',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      textDecoration: 'none'
                    }}
                  >
                    View Live →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#999',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      textDecoration: 'none'
                    }}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
