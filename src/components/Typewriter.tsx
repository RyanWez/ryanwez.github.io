'use client';
import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  loop = false,
  cursor = true,
  cursorStyle = '|',
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 1000,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Word is complete, wait then start deleting
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Deletion complete, move to next word
          setIsDeleting(false);
          const nextIndex = (currentWordIndex + 1) % words.length;
          
          if (nextIndex === 0 && !loop) {
            // If we've completed all words and loop is false, stop
            setCurrentWordIndex(0);
            setCurrentText(words[0]);
            return;
          }
          
          setCurrentWordIndex(nextIndex);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, loop, typeSpeed, deleteSpeed, delaySpeed]);

  // Cursor blinking effect
  useEffect(() => {
    if (cursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => clearInterval(cursorInterval);
    }
  }, [cursor]);

  return (
    <span className={className}>
      {currentText}
      {cursor && (
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
          {cursorStyle}
        </span>
      )}
    </span>
  );
};

export default Typewriter;