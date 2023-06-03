import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPlaceholder = ({ setUserData, userData }) => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await axios.get(`/api/v1/users/find/${id}`);
        setUserData(userProfile.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return <div>{userData?.username}</div>;
};

export default UserPlaceholder;
