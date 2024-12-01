import React from 'react'

const DownloadIcon = ({ size, width = 43, height = 43 }) => {
  const finalWidth = size || width;
  const finalHeight = size || height;

  return (
    <svg
     width={finalWidth} 
     height={finalHeight} 
     viewBox="0 0 43 43" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">
      
      <path d="M29.9334 13.2662C29.5948 12.9293 29.1307 12.7591 28.6667 12.7591C28.2026 12.7591 27.7386 12.9293 27.4 13.2662L23.2917 17.3744V5.37565C23.2917 4.90047 23.1029 4.44475 22.7669 4.10875C22.4309 3.77275 21.9752 3.58398 21.5 3.58398C21.0248 3.58398 20.5691 3.77275 20.2331 4.10875C19.8971 4.44475 19.7083 4.90047 19.7083 5.37565V17.3744L15.6 13.2662C15.434 13.0992 15.2367 12.9667 15.0193 12.8763C14.8019 12.7859 14.5688 12.7393 14.3333 12.7393C14.0979 12.7393 13.8648 12.7859 13.6474 12.8763C13.43 12.9667 13.2326 13.0992 13.0666 13.2662C12.7307 13.6021 12.542 14.0578 12.542 14.5329C12.542 15.0079 12.7307 15.4636 13.0666 15.7996L21.5 24.1882L29.937 15.796C30.2713 15.4597 30.4586 15.0045 30.458 14.5303C30.4573 14.0561 30.2686 13.6015 29.9334 13.2662ZM37.6017 28.6673C37.6094 28.476 37.5858 28.2848 37.5318 28.1012L33.9485 17.3512C33.8302 16.9942 33.6024 16.6837 33.2975 16.4637C32.9925 16.2437 32.626 16.1254 32.25 16.1257H31.8576C31.6892 16.4625 31.4814 16.785 31.2001 17.0663L28.5448 19.709H30.96L33.9467 28.6673H9.05508L12.0418 19.709H14.457L11.7999 17.0663C11.5306 16.7909 11.3085 16.4731 11.1424 16.1257H10.75C10.374 16.1254 10.0075 16.2437 9.70254 16.4637C9.39761 16.6837 9.1698 16.9942 9.0515 17.3512L5.46817 28.1012C5.41417 28.2848 5.39057 28.476 5.39829 28.6673C5.375 28.6673 5.375 37.6256 5.375 37.6256C5.375 38.1008 5.56376 38.5565 5.89977 38.8926C6.23577 39.2286 6.69149 39.4173 7.16667 39.4173H35.8333C36.3085 39.4173 36.7642 39.2286 37.1002 38.8926C37.4362 38.5565 37.625 38.1008 37.625 37.6256C37.625 37.6256 37.625 28.6673 37.6017 28.6673Z" fill="black" />
    </svg>
  )
}

export default DownloadIcon