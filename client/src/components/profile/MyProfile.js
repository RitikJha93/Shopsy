import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserRequest,
  updateUserProfile,
} from "../../redux/actions/userActions";
import Loader from "../Loader";
import Message from "../Message";

const MyProfile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user, error } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) {
      navigate("/login");
    } else {
      if (!user?.name) {
        dispatch(getUserRequest("profile/user"));
      } else {
        setName(user?.name);
        setEmail(user?.email);
      }
      console.log(user);
    }
  }, [user, dispatch, userData]);

  const handleUpdate = () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    dispatch(updateUserProfile({ id: user._id, name, email, password }));
  };
  return (
    <div className="flex flex-col mt-6">
      {error && <Message message={error} type="error" />}
      {message && <Message message={message} type="error" />}
      {success && (
        <Message message={"Profile Updated Successfully"} type="success" />
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none border my-4 border-blue-300 text-lg rounded-lg px-4 py-2 focus:border focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border my-4 border-blue-300 text-lg rounded-lg px-4 py-2 focus:border focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none border my-4 border-blue-300 text-lg rounded-lg px-4 py-2 focus:border focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="outline-none border my-4 border-blue-300 text-lg rounded-lg px-4 py-2 focus:border focus:border-blue-500"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-600 px-4 py-2 rounded-lg mt-4 text-white font-semibold hover:bg-blue-700"
          >
            Update
          </button>
        </>
      )}
    </div>
  );
};
export default MyProfile;
