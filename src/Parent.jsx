import React from 'react'
import Child from './Child';
const Parent = () => {
    return (
        <div className='border md:mx-[25%] md:pb-24 pb-10 bg-gray-400 md:my-20 rounded-lg shadow-xl'>
            <Child title="Parent Component" />
        </div>
    )
}

export default Parent;
