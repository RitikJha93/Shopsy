import { Alert, Modal, Radio, Space, Spin, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList, getUserRequest, userDeleteRequest, userUpdateRequest } from '../../../redux/actions/userActions';
import { useEffect, useState } from 'react';
import Message from '../../Message'
import Loader from '../../Loader'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { ExclamationCircleFilled } from '@ant-design/icons';


const AdminUsersTable = () => {

    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteId, setDeleteId] = useState()

    const userList = useSelector((state) => state.userList)
    const { loading, users, error } = userList

    const userDetails = useSelector((state) => state.userDetails)
    const { loading: editLoading, user } = userDetails
    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete, error: errorDelete } = userDelete
    const userUpdate = useSelector((state) => state.userUpdate)
    const { success: successEdit, error: errorEdit } = userUpdate

    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [isAdmin, setIsAdmin] = useState(user.isAdmin)

    const dispatch = useDispatch()
    const openDeleteConfirm = (id) => {
        setDeleteModal(true)
        setDeleteId(id)
    }

    const deleteHandle = () => {
        dispatch(userDeleteRequest(deleteId))
        setDeleteModal(false)
    }

    const openEditModal = (id) => {
        setEditModal(true)
        dispatch(getUserRequest(id))
    }

    const editUserHandle = () => {
        dispatch(userUpdateRequest({ _id: user._id, name, email, isAdmin }))
        setEditModal(false)
    }
    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setIsAdmin(user.isAdmin)
        }
    }, [user])

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
                <FiEdit onClick={() => openEditModal(_id)} className='text-xl text-blue-500 cursor-pointer' />
                <RiDeleteBin6Line onClick={() => openDeleteConfirm(_id)} className='text-xl text-red-600 cursor-pointer' />
            </div>
        },
    ];


    useEffect(() => {
        dispatch(getUserList())
    }, [dispatch, successDelete, successEdit])

    return (
        <div className='mt-8 '>

            {successEdit && <Alert type='success' className='mb-4' closable message={'User updated Successfully'} />}
            {successDelete && <Alert type='success' className='mb-4' closable message={'User Deleted Successfully'} />}
            <h1 className='text-xl font-bold mb-4'>Users</h1>

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
                    backgroundColor: 'blue'
                }}
            >
            </Modal>
            <Modal
                title="Edit User Details"
                centered
                open={editModal}
                onOk={editUserHandle}
                onCancel={() => setEditModal(false)}
                okText='Update'
                okType='primary'
                okButtonProps={{
                    style: { backgroundColor: '#3B82F6' }
                }}
            >
                <div className='flex flex-col items-center justify-center'>
                    {
                        editLoading ? <Spin size="large" /> : <div className='flex flex-col justify-center items-start'>
                            <input
                                type="name"
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="outline-none my-4 text-lg border border-blue-500 rounded-lg px-4 py-2 focus:border focus:border-blue-600"
                            />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="outline-none text-lg border border-blue-500 rounded-lg px-4 py-2 focus:border focus:border-blue-600"
                            />
                            <div className='flex items-center mt-4'>
                                <input type="checkbox" name="isAdmin" onChange={(e) => setIsAdmin(e.target.checked)} checked={isAdmin} />
                                <p className='ml-1'>isAdmin</p>
                            </div>
                        </div>
                    }
                </div>
            </Modal>
        </div>
    )
}
export default AdminUsersTable