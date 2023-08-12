import Image from 'next/image'
import { About } from './components/modules/About'
import { Landing } from './components/modules/Landing'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-raisin_black">
      <Landing />
      <About />
    </main>
  )
}
