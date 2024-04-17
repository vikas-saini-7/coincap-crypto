import { IconX } from '@tabler/icons-react'
import React from 'react'

const DrawerMenu = ({drawerOpen, handleDrawerClose}) => {
  return (
    <div className={`${drawerOpen ? 'top-0 right-0 w-full' : '-top-[100%] -right-[100%] w-0'} h-screen fixed bg-transparent bg-opacity-90 transition-all duration-1000 backdrop-blur-md`}>
            <div onClick={handleDrawerClose} className='container mx-auto flex items-center h-[72px] justify-end p-3 mb-8 rounded cursor-pointer'>
                <IconX size={32} />
            </div>
            <ul className='flex flex-col items-center gap-8 pt-[100px]'>
                <li className='text-3xl'>Home</li>
                <li className='text-3xl'>Coins</li>
                <li className='text-3xl'>Something</li>
            </ul>
    </div>
  )
}

export default DrawerMenu