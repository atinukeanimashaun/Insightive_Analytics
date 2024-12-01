import React from 'react'
import Subscribe from '../layouts/Subscribe'
import BackgroundLayout from '../layouts/BackgroundLayout'
import WhatWeDo from '../components/Courses/WhatWeDo'
import Review from '../components/Courses/Review'
import Course from '../components/Courses/Course'

const Courses = () => {
  return (
    <BackgroundLayout>
    <div className="pt-5">
      <Course />
      <Review />
      <WhatWeDo />
      <Subscribe />
    </div>
  </BackgroundLayout>
  )
}

export default Courses
