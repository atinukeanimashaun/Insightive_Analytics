import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Profiles from '../components/Profile/Profiles'

const Profile = () => {

  return (
    <BackgroundLayout>
      <div className="pt-5">
        <Profiles /> 
      </div>
    </BackgroundLayout>
  )
}

export default Profile