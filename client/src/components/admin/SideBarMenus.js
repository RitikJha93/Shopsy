import { FiUsers } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'
import { FaTshirt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
const SideBarMenus = () => {
    const sideBarData = [
        {
            icon: <AiOutlineHome className='text-2xl' />,
            name: 'Home'
        },
        {
            icon: <FiUsers className='text-2xl' />,
            name: 'Users'
        },
        {
            icon: <FaTshirt className='text-2xl' />,
            name: 'Products'
        },
        {
            icon: <BsCartCheck className='text-2xl' />,
            name: 'Orders'
        },
    ]
    const sideBarToggle = useSelector((state) => state.sideBarToggle)
    const { value } = sideBarToggle
    return (
        <div className='mt-6'>
            <div>
                {
                    sideBarData.map((menus) => {
                        return (
                            <div className={`flex ${!value && 'justify-center'} hover:bg-blue-500 hover:text-white cursor-pointer rounded-md transition-all items-center px-2 py-2 my-2`}>
                                {menus.icon}
                                <p className={`ml-4 ${!value && 'hidden'} font-medium text-lg`}>{menus.name}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default SideBarMenus