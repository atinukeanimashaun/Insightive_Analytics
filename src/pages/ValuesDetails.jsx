import React from 'react'
import BackgroundLayout from '../layouts/BackgroundLayout'
import ValueDetail from '../components/ValuesDetail/ValueDetail'
import Hero from '../components/ValuesDetail/Hero'
import { useParams } from 'react-router-dom'

const ValuesDetails = () => {
  const { id } = useParams();
  return (
    <BackgroundLayout>
    <div className="pt-5">
      <Hero id={id} />
      <ValueDetail />
    </div>
  </BackgroundLayout>
  )
}

export default ValuesDetails