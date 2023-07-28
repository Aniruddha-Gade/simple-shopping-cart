import React from 'react'

const Spinner = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
            <div className="custom-loader"></div>
            <p className='text-xl font-semibold '>Loading</p>
        </div>
    )
}

export default Spinner