"use client"

import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  phrases: string[];
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ phrases, speed = 100 }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const currentPhrase = phrases[phraseIndex];
    let intervalId: NodeJS.Timeout | undefined;

    const type = () => {
      if (charIndex <= currentPhrase.length) {
        setText(currentPhrase.substring(0, charIndex));
        charIndex++;
        intervalId = setTimeout(type, speed);
      } else {
        setTimeout(() => {
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setText('');
        }, 1500); 
      }
    };

    type();

    return () => clearTimeout(intervalId);
  }, [phraseIndex, phrases, speed]);

  return (
    <div >
      {text}
      <span className="inline-block animate-pulse">|</span> 
    </div>
  );
};

export default TypingText;