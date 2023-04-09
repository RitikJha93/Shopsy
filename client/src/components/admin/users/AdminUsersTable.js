import { Alert, Modal, Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList, userDeleteRequest } from '../../../redux/actions/userActions';
import { useEffect, useState } from 'react';
import Message from '../../Message'
import Loader from '../../Loader'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { ExclamationCircleFilled } from '@ant-design/icons';


const AdminUsersTable = () => {

    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState()
    const userList = useSelector((state) => state.userList)
    const { loading, users, error } = userList
    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete, error: errorDelete } = userDelete

    const dispatch = useDispatch()
    const openDeleteConfirm = (id) => {
        setDeleteModal(true)
        setDeleteId(id)
    }

    const deleteHandle = () =>{
        dispatch(userDeleteRequest(deleteId))
        setDeleteModal(false)
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render: (_id) => <p className='text-base'>{_id}</p>
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name) => <p className='text-base'>{name}</p>

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (email) => <Link className='text-base' to={`mailto:${email}`}>{email}</Link>
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
                <RiDeleteBin6Line onClick={() => openDeleteConfirm(_id)} className='text-xl text-red-600 cursor-pointer' />
            </div>
        },
    ];


    useEffect(() => {
        dispatch(getUserList())
    }, [dispatch, successDelete])

    return (
        <div className='mt-8 '>
            {successDelete && <Alert type='success' className='mb-4' closable message={'User deleted Successfully'} />}
            {
                loading ? <Loader /> : error ? <Message type='error' message={error} /> : <Table columns={columns} dataSource={users} />}
            <Modal
                title="Are you sure you want to delete?"
                centered
                open={deleteModal}
                onOk={deleteHandle}
                onCancel={() => setDeleteModal(false)}
                okText='Delete'
                okType='danger'
                okButtonProps={{
                    backgroundColor:'blue'
                }}
            >
            </Modal>
        </div>
    )
}
export default AdminUsersTable