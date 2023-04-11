import { useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaDollarSign } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from '../../redux/actions/userActions'
import { getAllOrders } from '../../redux/actions/orderActions'
import Loader from '../Loader'
import Message from '../Message'
import { Spin } from 'antd'
const AdminCard = () => {

    const userList = useSelector((state) => state.userList)
    const { loading, users, error } = userList

    const orderList = useSelector((state) => state.orderList)
    const { orders } = orderList

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserList())
        dispatch(getAllOrders())
    }, [dispatch])
    const data = [
        {
            icon: <FaShoppingCart className='text-4xl text-white' />,
            title: 'Total Orders',
            count: orders?.length,
            color: '#6F42C1'
        },
        {
            icon: <HiUsers className='text-4xl text-white' />,
            title: 'Customers',
            count: users?.length,
            color: '#FD7E14'
        },
        {
            icon: <FaDollarSign className='text-4xl text-white' />,
            title: 'Revenue',
            count: `${orders?.reduce((acc, order) => acc + order?.totalPrice, 0)} $`,
            color: '#2196F3'

        },
    ]
    return (
        <div className='mt-8'>
            {
                loading ?
                    <div className="h-[300px] flex items-center justify-center">
                        <Spin size="large" />
                    </div> : error ? <Message type={'error'} message={error} /> : <div className='grid grid-cols-3 gap-6'>
                        {
                            data.map((item, i) => {
                                return (
                                    <div className='bg-white relative h-[110px] shadow-md cursor-pointer group flex justify-end p-4 rounded-lg'>
                                        <div style={{ backgroundColor: item.color }} className={`absolute transition duration-300 group-hover:-translate-y-3 p-2 rounded-lg top-[-10px] left-5`}>
                                            {item.icon}
                                        </div>
                                        <div className='flex flex-col justify-end items-end'>
                                            <h2 className='font-bold text-xl'>{item.title}</h2>
                                            <p className='text-lg font-semibold'>{item.count}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}
export default AdminCard