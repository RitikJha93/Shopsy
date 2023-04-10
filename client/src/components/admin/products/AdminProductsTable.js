import { Alert, Button, Modal, Radio, Space, Spin, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList, getUserRequest, userDeleteRequest, userUpdateRequest } from '../../../redux/actions/userActions';
import { useEffect, useState } from 'react';
import Message from '../../Message'
import Loader from '../../Loader'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiFillFileAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { listProductDetails, listProducts, productCreateRequest, productDeleteRequest } from '../../../redux/actions/productActions';
import InputField from './InputField';
const AdminProductsTable = () => {

    const productDetails = useSelector((state) => state.productDetails)
    const { product } = productDetails
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [createModal, setCreateModal] = useState(false)
    const [deleteId, setDeleteId] = useState()
    const [file, setFile] = useState(null);
    const [img, setImg] = useState()
    const [editImageUrl, setEditImageUrl] = useState()
    const [createProductFields, setCreateProductFields] = useState({
        name: '', price: null, brand: '', category: '', countInStock: null, numReviews: null, description: ''
    })
    const [editProductFields, setEditProductFields] = useState({
        name: product?.name, price: product?.price, brand: product?.brand, category: product?.category, countInStock: product?.countInStock, numReviews: product?.numReviews, description: product?.description
    })
    const convertbase64 = async (file) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            setImg(fileReader.result)
        };
        fileReader.onerror = (error) => {
            console.log(error);
        };
    };
    const handleUpload = async (e) => {
        setFile(e.target.files[0]);
        const file = e.target.files[0];
        await convertbase64(file);
    };

    const productList = useSelector((state) => state.productList)
    const { loading, products, error } = productList

    const productDelete = useSelector((state) => state.productDelete)
    const { loading: deleteLoading, success: deleteSuccess, error: deleteError } = productDelete

    const productCreate = useSelector((state) => state.productCreate)
    const { loading: createLoading, success: createSuccess, error: createError } = productCreate

    const dispatch = useDispatch()
    const openDeleteConfirm = (id) => {
        setDeleteModal(true)
        setDeleteId(id)
    }

    const deleteProductHandle = () => {
        dispatch(productDeleteRequest(deleteId))
        setDeleteModal(false)
    }

    const openEditModal = (id) => {
        setEditModal(true)
        dispatch(listProductDetails(id))
    }

    const editProductHandle = () => {
        setEditModal(false)
    }

    const openCreateModal = () => {
        setCreateModal(true)
    }

    const createProductHandle = () => {
        dispatch(productCreateRequest({ name: createProductFields.name, price: createProductFields.price, brand: createProductFields.brand, image: img, category: createProductFields.category, countInStock: createProductFields.countInStock, numReviews: createProductFields.numReviews, description: createProductFields.description }))
        setCreateModal(false)
        setCreateProductFields({
            name: '', price: null, brand: '', category: '', countInStock: null, numReviews: null, description: ''
        })
        setImg()
    }

    const handleChange = (e) => {
        setCreateProductFields({ ...createProductFields, [e.target.name]: e.target.value })
        console.log(createProductFields);
    }

    const handleEditChange = (e) => {
        setEditProductFields({ ...editProductFields, [e.target.name]: e.target.value })
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render: (_id) => <Link to={`/product/${_id}`}>{_id}</Link>
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (img) => <img className='w-[70px] h-[45px] object-cover rounded-md' src={img} />
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
        if (product) {
            setEditProductFields({
                name: product.name, price: product.price, brand: product.brand, category: product.category, countInStock: product.countInStock, numReviews: product.numReviews, description: product.description
            })
            setEditImageUrl(product.image)
        }
    }, [product])

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch, deleteSuccess, createSuccess])
    return (
        <div className='mt-8 '>
            {deleteSuccess && <Alert type='success' className='mb-4' closable message={'Product Deleted Successfully'} />}
            {createSuccess && <Alert type='success' className='mb-4' closable message={'Product Added Successfully'} />}
            {createError &&  <Alert type='error' className='mb-4' closable message={createError} />}
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-xl font-bold '>Products</h1>
                <button onClick={openCreateModal} className='bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600'><AiOutlinePlus className='inline-flex mr-2' />Create Product</button>
            </div>
            {
                (loading || createLoading) ?
                    <div className="h-[300px] flex items-center justify-center">
                        <Spin size="large" />
                    </div> : error ? <Message type='error' message={error} /> : <Table columns={columns} dataSource={products} />}
            <Modal
                title="Add Product"
                centered
                width={600}
                open={createModal}
                onOk={createProductHandle}
                onCancel={() => setCreateModal(false)}
                okText='Add'
                okButtonProps={{
                    style: { backgroundColor: '#3B82F6' }
                }}
            >
                <div className='flex justify-between flex-wrap'>
                    {
                        Object.keys(createProductFields).map((product) => {
                            return (
                                <InputField
                                    placeholder={product}
                                    name={product}
                                    onChange={handleChange}
                                    type={'text'}
                                />
                            )
                        })
                    }
                    <div className="flex items-center justify-around w-full mt-2">
                        <div
                            id="dropzone"
                            className="border border-dashed  lg:mt-0 mt-3 sm:w-[300] w-[300px] h-[200px] relative flex justify-center items-center"
                        >
                            {file ? (
                                <div className="relative w-full">
                                    <img
                                        className="sm:w-[400px] w-[300px] h-[200px] object-contain"
                                        src={URL.createObjectURL(file)}
                                        alt=""
                                    />
                                    <AiFillCloseCircle
                                        onClick={() => setFile(null)}
                                        className="absolute top-2 right-2 text-2xl text-gray-700"
                                    />
                                </div>
                            ) : (
                                <span className="">Select picture to see the preview</span>
                            )}
                        </div>
                        <input type="file" id="fileInput" onChange={handleUpload} hidden />
                        <button className="bg-blue-500 mt-3 w-[150px] ] flex items-center text-white rounded-lg py-2 px-4 ">
                            <label htmlFor="fileInput" className="w-[150px] cursor-pointer">
                                <AiFillFileAdd className="w-[25px] mr-2 inline-flex h-[25px] text-center object-cover ml-2 cursor-pointer" />
                                <span>Add Pic</span>
                            </label>
                        </button>
                    </div>
                </div>

            </Modal>
            <Modal
                title="Are you sure you want to delete?"
                centered
                open={deleteModal}
                onOk={deleteProductHandle}
                onCancel={() => setDeleteModal(false)}
                okText='Delete'
                okType='danger'
            >
            </Modal>
            <Modal
                title="Edit Product Details"
                centered
                open={editModal}
                onOk={editProductHandle}
                onCancel={() => setEditModal(false)}
                okText='Update'
                okButtonProps={{
                    style: { backgroundColor: '#3B82F6' }
                }}
            >
                <div className='w-full'>
                    {
                        Object.keys(editProductFields).map((product, i) => {
                            return (
                                <InputField
                                    key={i}
                                    placeholder={product}
                                    name={product}
                                    onChange={handleEditChange}
                                    value={editProductFields[product]}
                                    edit
                                />
                            )
                        })
                    }
                </div>
            </Modal>
        </div>
    )
}
export default AdminProductsTable