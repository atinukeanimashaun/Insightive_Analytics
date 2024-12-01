import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Contact from '../layouts/Contact'
import AboutUs from '../components/Whoweares/About'
import OurValues from '../components/Whoweares/OurValues'

const WhoWeAres = () => {
  return (
    <BackgroundLayout>
      <div className="pt-5">
        <AboutUs />
        <OurValues />
        <Contact />
      </div>
    </BackgroundLayout>
  )
}

export default WhoWeAres
