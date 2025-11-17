import { useState, useEffect } from 'react';
import DecryptedText from './DecryptedText';

const roles = [
  'B.S. Computer Science Student',
  'Backend & Data Systems',
  'ML-Focused CS Student',
  'Systems & Infrastructure '
];

export default function RoleRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [phase, setPhase] = useState<'show' | 'encrypting' | 'decrypting'>('decrypting');

  useEffect(() => {
    if (phase === 'decrypting') {
      // Decrypt current text, then show it
      const timer = setTimeout(() => {
        setPhase('show');
      }, 1000);
      return () => clearTimeout(timer);
    } else if (phase === 'show') {
      // Hold the decrypted text, then start encrypting
      const timer = setTimeout(() => {
        setPhase('encrypting');
      }, 2000);
      return () => clearTimeout(timer);
    } else if (phase === 'encrypting') {
      // Encrypt current text, then switch to next and decrypt
      const timer = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % roles.length;
        setCurrentIndex(nextIndex);
        setDisplayText(roles[nextIndex]);
        setPhase('decrypting');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase, currentIndex]);

  return (
    <DecryptedText
      key={`${currentIndex}-${phase}`}
      text={displayText}
      speed={25}
      maxIterations={phase === 'encrypting' ? 30 : 1}
      sequential={phase === 'decrypting'}
      revealDirection="start"
      animateOn="view"
    />
  );
}
