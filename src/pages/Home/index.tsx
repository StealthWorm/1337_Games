import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Games } from '../../components/Games'
import { Hero } from '../../components/Hero'

export function Home() {
  return (
    <main className="flex flex-col w-full h-full z-0 align-center justify-center snap-y snap-mandatory scroll-smooth">
     {/* pt-[6.27rem] md:pt-[5.5rem] lg:pt-[7.5rem] */}
      <section id="home" className='flex h-screen snap-center'>
        <Hero />
      </section>
      <section id="games" className='flex h-screen snap-start pt-[4rem] md:pt-[5rem]'>
        <Games />
      </section>
      <section id="about" className='flex h-screen snap-start pt-[4rem] md:pt-[5rem]'>
        <About />
      </section>
      <section id="contact" className='flex h-screen snap-start pt-[4rem] md:pt-[5rem]'>
        <Contact />
      </section>
    </main>
  )
}