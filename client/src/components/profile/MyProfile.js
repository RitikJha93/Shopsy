import { useState } from "react";

const MyProfile = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className="outline-none text-lg rounded-lg px-4 py-2 focus:border border-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="outline-none text-lg rounded-lg px-4 py-2 focus:border border-blue-500"
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        className="outline-none text-lg rounded-lg px-4 py-2 focus:border border-blue-500"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="outline-none text-lg rounded-lg px-4 py-2 focus:border border-blue-500"
      />
    </div>
  );
};
export default MyProfile;
