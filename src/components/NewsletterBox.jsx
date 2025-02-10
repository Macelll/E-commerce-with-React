import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe to hear news about the Gods</p>
            <p className='text-gray-400 mt-3'>
                Test your luck to see if the Gods accept you!
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your mortal email' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
            </form>
        </div>
    );
}

export default NewsletterBox;