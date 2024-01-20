import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
  open: { opacity: 1, w: 'auto' },
  closed: { opacity: 1, w: '100%' },
}

import g1 from '../assets/espada_do_abismo/Espadadoabismo1.png'

export function GameCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      onClick={() => setIsOpen(isOpen => !isOpen)}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className="
        flex 
        cursor-pointer 
        max-h-[200px]  
        w-full 
        md:max-w-[300px]
       bg-green-secondary-dark hover:bg-green-secondary-dark-hover"
    >
      <img src={g1} className='flex w-full h-full object-cover' />
    </motion.div>
  )
}