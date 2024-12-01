import React, { useContext } from 'react'
import ScrollToTop from './ScrollToTop'
import Navbar from './Navbar'
import Footer from './Footer'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from './LoadingSpinner'

const BackgroundLayout = ({ children }) => {
  const { loading } = useContext(AuthContext);

  return (
    <div className="pt-[2rem] lg:pt-[5.25rem] overflow-hidden">
      <ScrollToTop />
      {loading ? <LoadingSpinner /> :
        <div>
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
        </div>
      }
    </div>
  )
}

export default BackgroundLayout
