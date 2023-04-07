import { FaShoppingCart } from 'react-icons/fa'
import { FaDollarSign } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
const AdminCard = () => {
    const data = [
        {
            icon: <FaShoppingCart className='text-4xl text-white' />,
            title: 'Total Orders',
            count: 69,
            color : '#6F42C1'
        },
        {
            icon: <HiUsers className='text-4xl text-white' />,
            title: 'Customers',
            count: 120,
            color : '#FD7E14'
        },
        {
            icon: <FaDollarSign className='text-4xl text-white' />,
            title: 'Revenue',
            count: 500,
            color:'#2196F3'

        },
    ]
    return (
        <div className='mt-8'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    data.map((item, i) => {
                        return (
                            <div className='bg-white relative h-[110px] cursor-pointer group flex justify-end p-4 rounded-lg'>
                                <div style={{backgroundColor:item.color}} className={`absolute transition duration-300 group-hover:-translate-y-3 p-2 rounded-lg top-[-10px] left-5`}>
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
        </div>
    )
}
export default AdminCard