import React from 'react';
import { motion } from 'framer-motion';

// A component that breaks text into characters and staggers their reveal.
// Supports passing an array of parts to handle <em> or <br /> elements inline.
// Example: textParts={[{text: "Hello "}, {br: true}, {text: "World", em: true}]}
const AnimatedText = ({ textParts = [], className = '', style = {}, el: Wrapper = 'h2', delay = 0 }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay }
    }
  };

  const charVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 12 }
    }
  };

  const MotionWrapper = motion[Wrapper] || motion.h2;

  return (
    <MotionWrapper
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {textParts.map((part, i) => {
        if (part.br) return <br key={`br-${i}`} />;
        
        if (!part.text || typeof part.text !== 'string') return null;
        
        // Split into words to prevent breaking words across lines
        const words = part.text.split(/(\s+)/);
        
        const content = words.map((word, wordIndex) => {
          if (word.trim() === '') {
            return (
              <span key={`space-${wordIndex}`} style={{ whiteSpace: 'pre' }}>
                {word}
              </span>
            );
          }

          const chars = word.split('');
          return (
            <span key={`word-${wordIndex}`} style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
              {chars.map((char, charIndex) => (
                <motion.span
                  key={`${i}-${wordIndex}-${charIndex}`}
                  variants={charVariant}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          );
        });

        return part.em ? <em key={i}>{content}</em> : <span key={i} style={{display: 'inline-block'}}>{content}</span>;
      })}
    </MotionWrapper>
  );
};

export default AnimatedText;
