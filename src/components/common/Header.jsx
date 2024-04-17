import { IconMenu } from '@tabler/icons-react'
import React, { useState } from 'react'
import DrawerMenu from './DrawerMenu'

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    function handleDrawerOpen(){
        setDrawerOpen(true)
    }

    function handleDrawerClose(){
        setDrawerOpen(false)
    }

    return (
        <div className='border- border-gray-900'>
            <div className='container mx-auto flex items-center justify-between h-[72px] px-2'>
                <div>
                    <h1 className='font-primary gradient-text font-bold text-2xl'>CoinCap</h1>
                </div>
                <nav>
                    <div onClick={handleDrawerOpen} className='btn'><IconMenu/></div>
                    <DrawerMenu drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose}/>
                </nav>
            </div>
        </div>
    )
}

export default Header