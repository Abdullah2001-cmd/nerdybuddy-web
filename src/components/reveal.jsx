import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Reveal = ({ children, side = 'left', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.15, once: true });

  const variants = {
    hidden: { opacity: 0, x: side === 'left' ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
