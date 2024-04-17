import React from 'react'

const AiAssistantSection = () => {
  return (
    <div className='bg-red-900 bg-opacity-5 py-20'>
        <div className='container mx-auto flex items-center justify-between h-[400px]'>
            <div className='w-1/2'>
                <h1 className='text-5xl font-primary mb-4'>Want to get guidance?</h1>
                <p className='mb-4 text-gray-500 text-lg'>Chat with our Ai assistant and get help! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus ea quo exercitationem doloremque illo voluptatem! Voluptatem nisi, atque consectetur repudiandae ab, ut nobis magnam magni dolores sed minima voluptatibus!</p>
                <button className='text-xl gradient-text border border-opacity-10 border-orange-400 px-8 py-3 rounded text-black font-bold'>Chat with Kiara</button>
            </div>
            <div className='w-1/2'>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AiAssistantSection