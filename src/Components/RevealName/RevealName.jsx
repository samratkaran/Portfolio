// TextReveal.js
import React from 'react';
import { motion } from 'framer-motion';
import "./RevealName.css"


const RevealName = ({ children }) => {

  return (
    
    <motion.div className='main-text'
    
      initial ={{y: 1000, opacity:0.2 }}
      animate = {{y: 0 , opacity: 1}}

      transition={{ duration: 1.5, ease: 'easeInOut' }}
      
    >
      {children}
    </motion.div>
    
  );
};

export default RevealName;

