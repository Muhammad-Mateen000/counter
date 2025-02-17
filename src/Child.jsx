import React, { useEffect, useState } from 'react'

const Child = ({ title }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`${count}`);
    })
    return (
        <div className='flex justify-center mt-10'>
            <div className='items-center'>
                <p className='text-center py-6'>Counter : {count}</p>
                <button className='border bg-blue-500 p-2 px-4 font-semibold rounded-lg' onClick={() => {
                    setCount(count + 1)
                }}>Increment +</button>
            </div>
        </div>
    )
}

export default Child;
