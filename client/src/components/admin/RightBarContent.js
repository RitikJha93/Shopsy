import { useSelector } from "react-redux"
import AdminHeader from "./AdminHeader"

const RightBarContent = () => {

  const sideBarToggle = useSelector((state) => state.sideBarToggle)
  const { value } = sideBarToggle
  return (
    <div className={`transition-all right-0 ${value ? 'ml-[250px]' : 'ml-[90px]'} px-5 bg-[#F0EFF3] pt-5`}>
      <AdminHeader />
    </div>
  )
}
export default RightBarContent