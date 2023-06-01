import React, { useState, useEffect } from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Components/RightSIdebar/RightSidebar";
import MainTweet from "../../Components/MainTweet/MainTweet";

import { useSelector } from "react-redux";
import Login from "../Login/Login";

const Home = () => {
  const { user } = useSelector((state) => state.user);

  const [localuser, setLocaluser] = useState(null);

  useEffect(() => {
    setLocaluser(user);
  }, [user, localuser]);

  return (
    <>
      {!localuser ? (
        <Login />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="px-6">
            <LeftSidebar />
          </div>
          <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
            <MainTweet />
          </div>
          <div className="px-6">
            <RightSidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
