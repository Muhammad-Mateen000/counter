import React, { useEffect, useState } from "react";

const Child = ({ title }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`${count}`);
    }, [count]);

    return (
        <div className="flex justify-center items-center md:mt-24  mt-10 md:px-4">
            <div className="w-[70%] bg-white shadow-lg rounded-lg p-6 text-center">
                <h1 className='text-center md:pt-7 pt-6 md:text-3xl text-2xl font-sans font-semibold'>{title}</h1>
                <p className="text-lg font-semibold md:py-8 py-7">Counter: {count}</p>
                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 mb-8 rounded-lg transition duration-300 hover:bg-blue-600"
                    onClick={() => setCount(count + 1)}
                >
                    Increment +
                </button>
            </div>
        </div>
    );
};

export default Child;
