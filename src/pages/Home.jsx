import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Hero from '../components/Home/Hero'
import WhoAreWe from '../components/Home/WhoAreWe'
import Insights from '../components/Home/Insights'
import Consulting from '../components/Home/Consulting'
import Courses from '../components/Home/Courses'
import DiscussionForums from '../components/Home/DiscussionForums'
import Subscribe from '../layouts/Subscribe'

const Home = () => {
  return (
    <BackgroundLayout>
      <div className="pt-5">
        <Hero />
        <WhoAreWe />
        <Insights />
        <Consulting />
        <Courses />
        <DiscussionForums />
        <Subscribe />
      </div>
    </BackgroundLayout>
  )
}

export default Home
