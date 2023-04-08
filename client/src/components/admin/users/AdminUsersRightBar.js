import { useSelector } from "react-redux"
import AdminHeader from "../AdminHeader"
import AdminUsersTable from "./AdminUsersTable"

const AdminUsersRightBar = () => {
    const sideBarToggle = useSelector((state) => state.sideBarToggle)
    const { value } = sideBarToggle
    return (
        <div className={`transition-all right-0 ${value ? 'ml-[250px]' : 'ml-[90px]'} px-5 bg-[#F0EFF3] min-h-[100vh] pt-5`}>
            <AdminHeader />
            <AdminUsersTable />
        </div>
    )
}
export default AdminUsersRightBar