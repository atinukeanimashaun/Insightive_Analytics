import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Contact from '../layouts/Contact'
import Courses from '../components/Home/Courses'
import Consulting from '../components/WhatWeDo/Consulting'
import Insights from '../components/WhatWeDo/Insights '

const WhatWeDo = () => {
  return (
    <BackgroundLayout>
      <div className="pt-5">
        <Insights />
        <Consulting />
        <Courses />
        <Contact />
      </div>
    </BackgroundLayout>
  )
}

export default WhatWeDo
