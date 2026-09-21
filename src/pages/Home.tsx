import { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import DivisionsSection from '../components/DivisionsSection'
import CTASection from '../components/CTASection'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <StatsSection />
      <DivisionsSection />
      <CTASection />
    </>
  )
}
