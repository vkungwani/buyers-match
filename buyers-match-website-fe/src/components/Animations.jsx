import React from 'react';
import { motion } from 'framer-motion';

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20, 
      mass: 0.8 
    }
  }
};

export const StaggerContainer = ({ children, className = '', style = {}, delay = 0, stagger = 0.15, once = true, ...props }) => {
  const customVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      }
    }
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeUp = ({ children, className = '', style = {}, delay = 0, y = 40, inView = false, once = true, ...props }) => {
  const customItemVariants = {
    hidden: { opacity: 0, y },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay,
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 0.8 
      }
    }
  };

  if (inView) {
    return (
      <motion.div 
        className={className} 
        style={style}
        variants={customItemVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once, margin: "-50px" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={className} style={style} variants={customItemVariants} {...props}>
      {children}
    </motion.div>
  );
};
