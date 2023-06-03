import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { changeProfile, logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ setOpen }) => {
  const { currentUser } = useSelector((state) => state.user);
  // const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const deleteProfile = await axios.delete(
      `/api/v1/users/${currentUser._id}`
    );
    dispatch(logout());
    navigate("/login");
  };

  // const uploadImage = async (e) => {
  //   setImage([...e.target.files]);
  //   const imageUpload = await axios.put(
  //     `http://localhost:8000/api/v1/users/imageUpload/${currentUser._id}`,
  //     image
  //   );
  //   alert(imageUpload);
  // };
  // useEffect(() => {
  //   image && uploadImage();
  // }, [image]);
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-transparent flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-slate-200 rounded-lg p-8 flex flex-col gap-4 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 cursor-pointer"
        >
          X
        </button>
        <h2 className="font-bold text-xl">Edit Profile</h2>
        {/* <p>Choose a new Profile Picture</p> */}
        {/* image uploading */}
        {/* <input
          type="file"
          multiple
          accept=".jpeg, .png, .jpg"
          onChange={uploadImage}
        /> */}
        {/* <p>Delete Account</p> */}
        <button
          className="bg-red-500 text-white py-2 rounded-full"
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
