import React from 'react'

const InterestComponent = (props) => {
  return (
    <div>
        <div className='border-gray-500 text-gray-700 inline py-1 px-8 text-sm font-medium border-2 rounded-full '>
            {props.name}
        </div>
    </div>
  )
}

export default InterestComponent