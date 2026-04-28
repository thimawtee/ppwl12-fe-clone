import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`bg-white rounded-xl border border-notion-border p-6 transition-shadow duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
