import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation("header")

  return (
    <div className="flex flex-col max-h-auto justify-center self-center align-center text-center md:mx-[calc((100vw-656px)/2)]">
      <motion.h1
        initial={{ y: -500, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        exit={{ y: -500, opacity: 0 }}
        className='flex text-5xl md:text-7xl text-green-primary-dark justify-center font-jomhuria tracking-wider'
      >
        {t('header:app.hero.title')}
      </motion.h1>
      <motion.h2
        initial={{ y: -100, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className='flex  text-2xl md:text-4xl text-green-secondary-dark justify-center font-jomhuria tracking-wider'
      >
        {t('header:app.hero.caption')}
      </motion.h2>
    </div>
  )
}