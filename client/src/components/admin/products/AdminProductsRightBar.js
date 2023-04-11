import { useSelector } from "react-redux"
import AdminHeader from "../AdminHeader"
import AdminProductsTable from "./AdminProductsTable"

const AdminProductsRightBar = () => {
    const sideBarToggle = useSelector((state) => state.sideBarToggle)
    const { value } = sideBarToggle
    return (
        <div className={`transition-all absolute right-0 ${value ? 'rightbar' : 'rightbar_closed'} px-5 bg-[#F0EFF3] min-h-[100vh] pt-5`}>
            <AdminHeader />
            <AdminProductsTable />
        </div>
    )
}
export default AdminProductsRightBar