import { Variants } from 'framer-motion'
  
  const Variantes: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.7
      }
    }
  }

  export default Variantes;