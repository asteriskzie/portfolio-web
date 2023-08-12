import Image from 'next/image'
import { Awards } from './components/modules/Awards'
import { Landing } from './components/modules/Landing'
import { Projects } from './components/modules/Projects'
import { Contact } from './components/modules/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-raisin_black-400 font-mono">
      <Landing />
      {/* <Awards /> */}
      <Projects />
      <Contact />
    </main>
  )
}
