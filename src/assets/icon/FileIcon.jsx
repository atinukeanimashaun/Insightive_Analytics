import React from 'react'

const FileIcon = ({ size, width = 52, height = 52 }) => {

  const finalWidth = size || width;
  const finalHeight = size || height;

  return (
    <svg 
    width={finalWidth} 
    height={finalHeight} 
    viewBox="0 0 52 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
      <path d="M31.9086 14.5752H30.3334V0H10.6384C8.67755 0 7.09155 1.586 7.09155 3.54467V48.4553C7.09155 50.414 8.67755 52 10.6362 52H41.3639C43.3226 52 44.9086 50.414 44.9086 48.4553V14.5752H31.9086ZM30.7277 37.2277H15.3617V34.2723H30.7234V37.2277H30.7277ZM36.6362 30.1362H15.3639V27.1808H36.6362V30.1362ZM36.6362 23.0447H15.3639V20.0915H36.6362V23.0447ZM31.9086 13H44.9086L31.9086 0V13Z" fill="#1E298D" />
    </svg>
  )
}

export default FileIcon
