import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Hero from '../components/DiscussionForums/Hero'
import Forums from '../components/DiscussionForums/Forums'

const DiscussionForums = () => {
  return (
    <BackgroundLayout>
      <div className="pt-5">
        <Hero />
        <Forums />
      </div>
    </BackgroundLayout>
  )
}

export default DiscussionForums
