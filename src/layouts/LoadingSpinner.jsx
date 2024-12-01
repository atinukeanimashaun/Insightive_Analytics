import React from 'react'
import { InfinitySpin } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
    <InfinitySpin
      visible={true}
      width="200"
      color="#1E298D"
      ariaLabel="infinity-spin-loading"
    />{" "}
  </div>
  )
}

export default LoadingSpinner;