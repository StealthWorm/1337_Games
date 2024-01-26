import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Games } from '../../components/Games'
import { Hero } from '../../components/Hero'

export function Home() {
  return (
    <main className="flex flex-col w-full h-full z-0 align-center justify-center snap-y snap-mandatory scroll-smooth">
      <section id="home" className='flex h-screen snap-start'>
        <Hero />
      </section>
      <section id="games" className='flex h-screen snap-start md:md:pt-[4.5rem] pt-[4.27rem]'>
        <Games />
      </section>
      <section id="about" className='flex h-screen snap-start md:pt-[4.5rem] pt-[4.27rem]'>
        <About />
      </section>
      <section id="contact" className='flex h-screen snap-start md:pt-[4.5rem] pt-[4.27rem]'>
        <Contact />
      </section>
    </main>
  )
}