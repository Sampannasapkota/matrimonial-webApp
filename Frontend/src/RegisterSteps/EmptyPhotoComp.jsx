import React from 'react'
import { FaPlus } from 'react-icons/fa6';

const EmptyPhotoComp = () => {
  return (
    <div className='flex items-center justify-center w-24 bg-gray-300 rounded-lg h-28'>
      <FaPlus className='text-2xl font-extrabold text-white ' />
    </div>
  );
}

export default EmptyPhotoComp