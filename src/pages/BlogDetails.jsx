import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import Subscribe from '../layouts/Subscribe'
import Details from '../components/BlogDetails/Details'
import DetailsProfile from '../components/BlogDetails/DetailsProfile'
import { useParams } from 'react-router-dom'
import { blogs } from '../constants'
import RelatedPosts from '../layouts/RelatedPosts'

const BlogDetails = () => {
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
      <Details items={selectedItem} />
      <DetailsProfile items={selectedItem} />
      <RelatedPosts />
      <Subscribe />
    </div>
  </BackgroundLayout>
  )
}

export default BlogDetails
