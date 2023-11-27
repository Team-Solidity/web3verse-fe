import React from "react";
import LearnTab from "../components/LearnTab";
import PostsHome from "./PostsHome";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="basis-2/3">
          <PostsHome />
        </div>
        <div className="basis-1/3">
          <LearnTab />
        </div>
      </div>
    </>
  );
};

export default Home;
