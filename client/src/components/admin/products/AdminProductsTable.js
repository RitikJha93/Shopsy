import { Alert, Modal, Radio, Space, Spin, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList, getUserRequest, userDeleteRequest, userUpdateRequest } from '../../../redux/actions/userActions';
import { useEffect, useState } from 'react';
import Message from '../../Message'
import Loader from '../../Loader'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { listProducts, productDeleteRequest } from '../../../redux/actions/productActions';
const AdminProductsTable = () => {

    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteId, setDeleteId] = useState()

    const productList = useSelector((state) => state.productList)
    const { loading, products, error } = productList

    const productDelete = useSelector((state) => state.productDelete)
    const { loading: deleteLoading, success: deleteSuccess, error: deleteError } = productDelete

    const dispatch = useDispatch()
    const openDeleteConfirm = (id) => {
        setDeleteModal(true)
        setDeleteId(id)
    }

    const deleteHandle = () => {
        dispatch(productDeleteRequest(deleteId))
        setDeleteModal(false)
    }

    const openEditModal = (id) => {
        setEditModal(true)
    }

    const editUserHandle = () => {
        setEditModal(false)
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
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => <h2 className='font-bold text-base'>{price}$</h2>
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (category) => <p className='text-base'>{category}</p>

        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            render: (brand) => <p className='text-base'>{brand}</p>

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
        dispatch(listProducts())
    }, [dispatch, deleteSuccess])
    return (
        <div className='mt-8 '>
            {deleteSuccess && <Alert type='success' className='mb-4' closable message={'Product Deleted Successfully'} />}

            <h1 className='text-xl font-bold mb-4'>Products</h1>
            {
                loading ? <Loader /> : error ? <Message type='error' message={error} /> : <Table columns={columns} dataSource={products} />}
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
            </Modal>
        </div>
    )
}
export default AdminProductsTable