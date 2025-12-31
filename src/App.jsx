import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import AlertBanner from './components/AlertBanner'
import WhatIsEWIS from './components/WhatIsEWIS'
import HowItWorks from './components/HowItWorks'
import AboutAllsatAI from './components/AboutAllsatAI'
import Footer from './components/Footer'
import { GlobalStyles } from './styles/GlobalStyles'
import ContactPage from './components/ContactPage'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
            <GlobalStyles />
              <Hero />
              <AlertBanner />
              <WhatIsEWIS />
              <HowItWorks />
              <AboutAllsatAI />
            </>
          }
        />

        {/* Contact page */}
        <Route path="/contact" element={
          <>
          <GlobalStyles />
          <ContactPage />
          </>
          } 
          />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
