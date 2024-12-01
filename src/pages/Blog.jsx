import React from 'react'
import Subscribe from '../layouts/Subscribe'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Hero from '../components/Blogs/Hero'
import Insights from '../components/Blogs/Insights'

const Blog = () => {
  return (
    <BackgroundLayout>
    <div className="pt-5">
      <Hero />
      <Insights />
      <Subscribe />
    </div>
  </BackgroundLayout>
  )
}

export default Blog
