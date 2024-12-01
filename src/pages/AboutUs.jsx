import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import About from '../components/About/About'
import { WhatWeDo } from '../components/About/WhatWeDo'
import Story from '../components/About/Story'
import Contact from '../layouts/Contact'

export const AboutUs = () => {
  return (
    <BackgroundLayout>
      <div className="pt-5">
        <About />
        <WhatWeDo />
        <Story />
        <Contact />
      </div>
    </BackgroundLayout>
  )
}
