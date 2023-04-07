import { FaExpandArrowsAlt } from 'react-icons/fa'
import { Avatar } from 'antd';
import { useSelector } from "react-redux";
const AdminHeader = () => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userData } = userLogin
    return (
        <div className='rounded-md h-[60px] relative px-6 py-4 bg-white'>
            <div className='flex items-center  h-full justify-between'>
                <FaExpandArrowsAlt />
                <div className='flex hover:bg-slate-100 transition-all px-2 py-1 rounded-sm cursor-pointer items-center'>
                    <p className='mr-2'>{userData?.name}</p>
                    <Avatar style={{
                        backgroundColor: '#fde3cf',
                        color: '#f56a00',
                    }}>{userData?.name.substr(0, 1)}</Avatar>
                </div>
            </div>
        </div>
    )
}
export default AdminHeader