import { useState, useEffect } from 'react';
import Squares from './Squares';
import RoleRotator from './RoleRotator';
import StarBorder from './StarBorder';
import Magnet from './Magnet';
import GradientText from './GradientText';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s ease-out',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}>
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '1rem', fontWeight: '700', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
          <span>Hi, I'm</span>
          <GradientText
            colors={['#ffd700', '#ff6b6b', '#667eea', '#764ba2', '#ffd700']}
            animationSpeed={6}
          >
            Luca Giannotti
          </GradientText>
        </h1>
        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', marginBottom: '2rem', opacity: 0.9 }}>
          <RoleRotator />
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Magnet magnetStrength={3} padding={80}>
            <StarBorder
              as="a"
              href="#projects"
              color="#667eea"
              speed="4s"
              thickness={2}
              style={{
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
            >
              View My Work
            </StarBorder>
          </Magnet>
          <Magnet magnetStrength={3} padding={80}>
            <StarBorder
              as="a"
              href="#contact"
              color="#ffd700"
              speed="5s"
              thickness={2}
              style={{
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
            >
              Get in Touch
            </StarBorder>
          </Magnet>
        <Magnet magnetStrength={3} padding={80}>
          <StarBorder
            as="a"
            href="/resume"
            color="#00ffcc"
            speed="6s"
            thickness={2}
            style={{
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
          >
            View My Resume
          </StarBorder>
        </Magnet>
      </div>
        </div>
    </section>
  );
}
