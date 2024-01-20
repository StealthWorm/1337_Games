import { Money } from '@phosphor-icons/react'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Games } from '../../components/Games'
import { Hero } from '../../components/Hero'

import { useTranslation } from 'react-i18next'

export function Home() {
  const { t } = useTranslation()

  return (
    <main className="flex flex-col w-full h-full z-0 align-center justify-center snap-y snap-mandatory scroll-smooth">
      <section id="home" className='flex h-screen snap-start float-end'>
        <Hero />
      </section>
      <section id="games" className='flex h-screen snap-start pt-[4.5rem]'>
        <Games />
      </section>
      <section id="about" className='flex h-screen snap-start pt-[4.5rem]'>
        <About />
      </section>
      <section id="contact" className='flex h-screen snap-start pt-[4.5rem]'>
        <Contact />
      </section>

      <section className='flex flex-col md:flex-row gap-6 font-jomhuria bg-green-primary-dark py-10 px-4 items-center justify-between md:justify-center border-t border-b border-warning'>
        <span className="tracking-wide text-2xl md:text-4xl text-center">
          {t('footer:app.donation.description')}
        </span>
        <button className='flex animate-pulse gap-6 justify-between items-center p-4 text-green-secondary-dark rounded-md bg-warning hover:brightness-75 transition-all duration-200'>
          <strong className='flex uppercase font-jomhuria tracking-widest text-xl md:text-4xl pt-2'>
            {t('footer:app.donation.title')}
          </strong>
          <Money size={40} weight='bold' />
        </button>
      </section>
    </main>
  )
}