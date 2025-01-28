import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto'>
        <div className='w-full h-20 flex justify-center items-center py-4'>
            <p className="text-xs text-center sm:text-left">
                Created by{" "}
                <a
                    className="font-semibold hover:underline text-accent-orange"
                    href="https://github.com/larisabarabas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @Stefania-Larisa Barabas
                </a>
            </p>
        </div>


    </footer>
  )
}

export default Footer