import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Email from './components/Email'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#E5E5E5] container sm:px-6 sm:py-2 mx-auto px-12 py-4">
      <HeroSection />
      <Skills />
      <Projects />
      <Email />
      <Footer />
    </main>
  )
}
