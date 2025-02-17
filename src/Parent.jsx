import React from 'react'
import Child from './Child';
const Parent = () => {
  return (
    <div className='border mx-[32%] pb-32 bg-gray-300 my-20 rounded-lg shadow-xl'>
      <h1 className='text-center pt-32 text-4xl font-sans font-semibold'>Parent Component</h1>
      <Child title="Counter"/>
    </div>
  )
}

export default Parent;
