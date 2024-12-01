import React from 'react'
import ScrollToTop from '../layouts/ScrollToTop'
import Navbar from '../layouts/Navbar'
import Value from '../components/Values/Value'

const Values = () => {
  return (
    <div className="pt-[2rem] lg:pt-[5.25rem] overflow-hidden">
      <ScrollToTop />
      <div>
        <Navbar />
        <div className="pt-5">
          <Value />
        </div>
      </div>
    </div>
  )
}

export default Values
