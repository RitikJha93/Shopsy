import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../../redux/actions/userActions';
import { useEffect } from 'react';
import Message from '../../Message'
import Loader from '../../Loader'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'


const AdminUsersTable = () => {

    const userList = useSelector((state) => state.userList)
    const { loading, users, error } = userList

    const dispatch = useDispatch()
    const deleteHandler = (id)=>{
        console.log(id);
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Admin',
            key: 'isAdmin',
            dataIndex: 'isAdmin',
            render: (isAdmin) => isAdmin ? <Tag color="success">Admin</Tag> : <Tag color="warning">Not Admin</Tag>
        },
        {
            title: 'Options',
            key: '_id',
            dataIndex: '_id',
            render: (_id) => <div className='flex items-center justify-around'>
                <FiEdit className='text-xl text-blue-500 cursor-pointer' />
                <RiDeleteBin6Line onClick={() => deleteHandler(_id)} className='text-xl text-red-600 cursor-pointer' />
            </div>
        },
    ];


    useEffect(() => {
        dispatch(getUserList())
    }, [dispatch])


    return (
        <div className='mt-8'>
            {
                loading ? <Loader /> : error ? <Message /> : <Table columns={columns} dataSource={users} />}
        </div>
    )
}
export default AdminUsersTable