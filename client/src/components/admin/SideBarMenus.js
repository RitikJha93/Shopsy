import { FiUsers } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'
import { FaTshirt } from 'react-icons/fa'
import { GoDashboard } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
const SideBarMenus = () => {

    const { pathname } = useLocation()
    const sideBarData = [
        {
            icon: <GoDashboard className='text-2xl' />,
            name: 'Dashboard',
            link: '/admin/dashboard'
        },
        {
            icon: <AiOutlineHome className='text-2xl' />,
            name: 'Home',
            link: '/'

        },
        {
            icon: <FiUsers className='text-2xl' />,
            name: 'Users',
            link: '/admin/users'

        },
        {
            icon: <FaTshirt className='text-2xl' />,
            name: 'Products',
            link: '/admin/products'

        },
        {
            icon: <BsCartCheck className='text-2xl' />,
            name: 'Orders',
            link: '/admin/orders'

        },
    ]
    const sideBarToggle = useSelector((state) => state.sideBarToggle)
    const { value } = sideBarToggle
    return (
        <div className='mt-6'>
            <div>
                {
                    sideBarData.map((menus, i) => {
                        return (
                            <Link key={i} to={menus.link}>
                                <div  className={`${pathname.includes(menus.name.toLowerCase()) && 'bg-blue-500 text-white'} flex ${!value && 'justify-center'} hover:bg-blue-500 hover:text-white cursor-pointer rounded-md transition duration-300 items-center px-2 py-2 my-2`}>
                                    {menus.icon}
                                    <p className={`ml-4 ${!value && 'hidden'} font-medium text-lg`}>{menus.name}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default SideBarMenus