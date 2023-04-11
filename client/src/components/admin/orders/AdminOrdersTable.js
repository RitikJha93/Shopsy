import { useDispatch, useSelector } from "react-redux"
import { deliverOrder, getAllOrders } from "../../../redux/actions/orderActions"
import { useEffect, useState } from "react"
import Message from "../../Message"
import Loader from "../../Loader"
import { Select, Spin, Table, Tag } from "antd"
import { Link } from "react-router-dom"

const AdminOrdersTable = () => {

    const orderList = useSelector((state) => state.orderList)
    const { loading, error, orders } = orderList
    const orderDeliver = useSelector((state) => state.orderDeliver)
    const { loading: deliverLoading, error: deliverError, success: deliverSuccess } = orderDeliver

    const [deliveredStatus, setDeliveredStatus] = useState('Not Delivered')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch, deliverSuccess])

    const handleDeliver = (value) => {
        dispatch(deliverOrder(value))
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render: (_id) => <p className='text-base'>{_id}</p>
        },
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
            render: (user) => <p className='text-base'>{user.name}</p>

        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date) => <p className='text-base'>{date?.substr(0, 10)}</p>
        },
        {
            title: 'Total',
            key: 'totalPrice',
            dataIndex: 'totalPrice',
            render: (totalPrice) => <p className='text-base font-semibold'>{totalPrice}$</p>
        },
        {
            title: 'Payment Method',
            key: 'paymentMethod',
            dataIndex: 'paymentMethod',
            render: (paymentMethod) => <p className='text-base'>{paymentMethod}</p>
        },
        {
            title: 'Status',
            key: 'isDelivered',
            dataIndex: 'isDelivered',
            render: (isDelivered) => isDelivered ? <Tag color="success">Delivered</Tag> : <Tag color="warning">Not Delivered</Tag>
        },
        {
            title: 'Delivered',
            key: '_id',
            dataIndex: '_id',
            render: (_id) => orders.map((order) => {
                if (order._id === _id) {
                    if (order.isDelivered) {
                        return <button className="bg-blue-200 text-white py-1 px-2 rounded-md cursor-not-allowed">Mark as Delivered</button>
                    } else {
                        return <button onClick={() => handleDeliver(_id)} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md">Mark as Delivered</button>
                    }
                }
            })
        },
        {
            title: 'Details',
            key: '_id',
            dataIndex: '_id',
            render: (id) => <Link to={`/order/${id}`} className='text-base'><button className="border transition-all border-blue-500 px-3 py-[6px] rounded-md hover:bg-blue-500 hover:text-white">Details</button></Link>
        },
    ];
    return (
        <div className="mt-8">
            <h1 className='text-xl font-bold mb-4'>Orders</h1>
            {
                loading ? <div className="h-[300px] flex items-center justify-center">
                    <Spin size="large" />
                </div> : error ? <Message type='error' message={error} /> : <Table columns={columns} dataSource={orders} />}

        </div>

    )
}
export default AdminOrdersTable