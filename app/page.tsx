import Image from 'next/image'
import { About } from './components/modules/About'
import { Landing } from './components/modules/Landing'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-raisin-black">
      <Landing />
      <About />
    </main>
  )
}
