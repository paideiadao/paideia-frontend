import Hero from '@components/landing/Hero'
import Perks from '@components/landing/Perks'
import WhitepaperQuote from '@components/landing/WhitepaperQuote'
import Examples from '@components/landing/Examples'
import Stats from '@components/landing/Stats'
import Featured from '@components/landing/Featured'

export default function Home() {
  return (
    <>
        <Hero />
        <WhitepaperQuote />
        <Perks />
        <Examples />
        <Stats />
        <Featured />
        
    </>
  )
}
