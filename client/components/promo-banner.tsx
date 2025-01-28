import React from 'react'

const PromoBanner = () => {
  return (
    <div className='w-full overflow-hidden px-4 py-2  bg-accent-orange text-white font-light'>
        <div className='animate-scrollText flex gap-6 justify-center'>
            <p>New collection available soon.</p>
            <p>Get FREE Shipping on orders above $200.</p>
        </div>
    </div>
  )
}

export default PromoBanner