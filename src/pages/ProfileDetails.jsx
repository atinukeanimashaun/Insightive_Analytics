import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import RelatedPosts from '../layouts/RelatedPosts'
import Subscribe from '../layouts/Subscribe'
import ProfileDetail from '../components/ProfileDetail'
import { useParams } from 'react-router-dom'
import { blogs } from '../constants'

const ProfileDetails = () => {
  const { id } = useParams();
  console.log('Retrieved ID:', id);

  const selectedItem = blogs.find((item) => item._id === id); 

  if (!selectedItem) {
    console.log('Item not found for ID:', id);
    return <p>Item not found.</p>;
  }

  return (
    <BackgroundLayout>
    <div className="pt-5">
      <ProfileDetail items={selectedItem} />
      <RelatedPosts />
      <Subscribe />
    </div>
  </BackgroundLayout>
  )
}

export default ProfileDetails;
