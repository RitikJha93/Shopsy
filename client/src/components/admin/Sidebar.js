import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

import logo from '../../assets/shopsyLogo.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBarMenus from './SideBarMenus'
const Sidebar = () => {

    const sideBarToggle = useSelector((state) => state.sideBarToggle)
    const { value } = sideBarToggle


    const dispatch = useDispatch()
    return (
        <div className={`col-span-1  h-[100vh] transition-all ${value ? 'w-[250px]' : 'w-[90px]'} fixed text-black shadow-lg px-5 py-10`}>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src={logo} alt="" />
                    <h1 className={`ml-4 ${!value && 'hidden'} font-semibold text-lg`}>Shopsy</h1>
                </div>
                {
                    value && <IoIosArrowBack onClick={() => dispatch({ type: 'SIDEBAR_CLOSE' })} className='text-xl cursor-pointer' />

                }
                {
                    !value && <IoIosArrowForward onClick={() => dispatch({ type: 'SIDEBAR_OPEN' })} className='text-xl cursor-pointer' />
                }
            </div>
            <SideBarMenus />
        </div>
    )
}
export default Sidebar