import React, { useState } from "react";
import TimelineTweet from "../TimelineTweet/TimelineTweet";
import axios from "axios";
import { useSelector } from "react-redux";

const MainTweet = () => {
  const [tweetText, setTweetText] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post(`api/v1/tweets`, {
        userId: currentUser._id,
        description: tweetText,
      });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {currentUser && (
        <p className="font-bold pl-2 my-2">{currentUser.username}</p>
      )}
      <form className="border-b-2 pb-6">
        <textarea
          onChange={(e) => setTweetText(e.target.value)}
          type="text"
          placeholder="What's happening...."
          maxLength={280}
          className="bg-slate-200 rounded-lg w-full p-2"
        ></textarea>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full ml-auto"
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </form>
      <TimelineTweet />
    </div>
  );
};

export default MainTweet;
