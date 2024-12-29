import React from 'react';

const LoadingIcon = ({ size, width = 74, height = 64 }) => {
  // If size is passed, use it for both width and height
  const finalWidth = size || width;
  const finalHeight = size || height;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 74 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 32C11 46.3598 22.6402 58 37 58C51.3598 58 63 46.3598 63 32C63 17.6402 51.3598 6 37 6C22.6402 6 11 17.6402 11 32ZM57.8 32C57.8 37.5165 55.6086 42.8071 51.7078 46.7078C47.8071 50.6086 42.5165 52.8 37 52.8C31.4835 52.8 26.1929 50.6086 22.2922 46.7078C18.3914 42.8071 16.2 37.5165 16.2 32C16.2 26.4835 18.3914 21.1929 22.2922 17.2922C26.1929 13.3914 31.4835 11.2 37 11.2C42.5165 11.2 47.8071 13.3914 51.7078 17.2922C55.6086 21.1929 57.8 26.4835 57.8 32ZM52.6 32C52.6031 34.0491 52.2011 36.0787 51.4171 37.9719C50.6331 39.8651 49.4826 41.5847 48.0318 43.0318L37 32V16.4C41.1374 16.4 45.1053 18.0436 48.0309 20.9691C50.9564 23.8947 52.6 27.8626 52.6 32Z"
        fill="#1E298D"
      />
    </svg>
  );
};

export default LoadingIcon;
