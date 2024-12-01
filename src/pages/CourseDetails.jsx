import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Subscribe from '../layouts/Subscribe'
import DetailsCourse from '../components/CourseDetails/DetailsCourse'
import RelatedCourses from '../components/CourseDetails/RelatedCourses'
import Details from '../components/CourseDetails/Details'

const CourseDetails = () => {
  return (
    <BackgroundLayout>
    <div className="pt-5">
      <DetailsCourse />
      <Details />
      <RelatedCourses />
      <Subscribe />
    </div>
  </BackgroundLayout>
  )
}

export default CourseDetails