import MyOrders from "../components/profile/MyOrders";
import MyProfile from "../components/profile/MyProfile";

const Profile = () => {
  return (
    <div className="mt-[60px] px-24 py-10">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <h2 className="font-bold text-2xl">My Profile</h2>
          <MyProfile />
        </div>
        <div className="col-span-2">
          <h2 className="font-bold text-2xl">My Orders</h2>
          <MyOrders />
        </div>
      </div>
    </div>
  );
};
export default Profile;
