import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  pauseDuration?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 100, 
  className = "",
  pauseDuration = 2000 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // When typing is complete, wait and then restart
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, pauseDuration);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, pauseDuration]);

  // Split text to highlight "útil" in red
  const renderTextWithHighlight = (text: string) => {
    const parts = text.split(/(útil)/gi);
    return parts.map((part, index) => {
      if (part.toLowerCase() === 'útil') {
        return <span key={index} className="text-red-500">{part}</span>;
      }
      return part;
    });
  };

  return (
    <span className={className}>
      {renderTextWithHighlight(displayedText)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;