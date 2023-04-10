import { useDispatch, useSelector } from "react-redux"
import { getAllOrders } from "../../../redux/actions/orderActions"
import { useEffect } from "react"
import Message from "../../Message"
import Loader from "../../Loader"
import { Table, Tag } from "antd"
import { Link } from "react-router-dom"

const AdminOrdersTable = () => {

    const orderList = useSelector((state) => state.orderList)
    const { loading, error, orders } = orderList

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])

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
            render: (date) => <p className='text-base'>{date?.substr(0,10)}</p>
        },
        {
            title: 'Total',
            key: 'totalPrice',
            dataIndex: 'totalPrice',
            render: (totalPrice) => <p className='text-base font-semibold'>{totalPrice}$</p>
        },
        {
            title: 'Paid',
            key: 'paidAt',
            dataIndex: 'paidAt',
            render: (paidAt) => <p className='text-base'>{paidAt?.substr(0,10)}</p>
        },
        {
            title: 'Delivered',
            key: 'isDelivered',
            dataIndex: 'isDelivered',
            render: (isDelivered) => isDelivered ? <Tag color="success">Delivered</Tag> : <Tag color="warning">Not Delivered</Tag>
        },
        {
            title: 'Details',
            key: '_id',
            dataIndex: '_id',
            render: (id) => <Link to={`/order/${id}`} className='text-base'><button className="border border-blue-500 px-3 py-[6px] rounded-md hover:border-none hover:bg-blue-500 hover:text-white">Details</button></Link>
        },
    ];
    return (
        <div className="mt-8">
            <h1 className='text-xl font-bold mb-4'>Orders</h1>
            {
                loading ? <Loader /> : error ? <Message type='error' message={error} /> : <Table columns={columns} dataSource={orders} />}

        </div>

    )
}
export default AdminOrdersTable