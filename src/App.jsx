import Header from './components/Header'
import Hero from './components/Hero'
import AlertBanner from './components/AlertBanner'
import WhatIsEWIS from './components/WhatIsEWIS'
import HowItWorks from './components/HowItWorks'
import AboutAllsatAI from './components/AboutAllsatAI'
import Footer from './components/Footer'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <AlertBanner />
      <WhatIsEWIS />
      <HowItWorks />
      <AboutAllsatAI />
      <Footer />
    </>
  )
}

export default App
