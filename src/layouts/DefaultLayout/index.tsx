import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className=" flex-col w-full">
      <Header />
      <Outlet />
      <footer className='flex p-4 bg-green-primary/80 backdrop-blur-lg w-full tracking-wider font-jomhuria text-2xl md:text-4xl items-center justify-center'>
        {`${new Date().getFullYear()} © Copyright 1337GAMES`}
      </footer>
    </div>
  )
}