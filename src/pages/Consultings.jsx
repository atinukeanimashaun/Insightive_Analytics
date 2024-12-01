import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Contact from '../layouts/Contact'
import Services from '../components/Services'

const Consultings = () => {
  return (
    <BackgroundLayout>
      <div className="pt-5">
        <Services />
        <Contact />
      </div>
    </BackgroundLayout>
  )
}

export default Consultings
