import React, { useState } from "react";
import ape from '../assets/boredape.jpg'
import pos from "../assets/n5.JPG";
// import { WABI, contractAddress } from "../utils/CONSTANTS";
// import { ethers } from "ethers";

// const Address = contractAddress;
// const contractABI = WABI;

const PostCard = (props) => {
  const [pressed, setPressed] = useState(false);
  function press() {
    if (pressed === false) {
      setPressed(true);
    } else setPressed(false);
  }

  const component = pressed ? (
    <span onClick={press}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 text-red-500 transition duration-100 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  ) : (
    <span onClick={press}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 text-gray-300 transition duration-100 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  );
  return (
    <>
      <div className=" flex justify-center items-center pb-8">
        <div className="max-w-2xl container bg-white rounded-xl shadow-lg">
          <div>
            <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
              {props.posts.title}
            </h1>
            <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
              {props.posts.desc}
            </p>
          </div>
          <img
            className="w-full cursor-pointer h-96"
            src={props.posts.content}
            alt=""
          />
          <div className="flex p-4 justify-between">
            <div className="flex items-center space-x-2">
              {props.posts.author ===
              "0x2D95B7c89576cbb7b28A3bB7F676DdfDa63193E8" ? (
                <>
                  <img className="w-14 rounded-full" src={ape} alt="sara" />
                  <h2 className="text-gray-800 font-bold cursor-pointer text-xl">
                    vaibhavemula
                  </h2>
                </>
              ) : (
                <>
                <img className="w-14 rounded-full" src={pos} alt="sara" />
                <h2 className="text-gray-800 font-bold cursor-pointer text-xl">
                  hanumantjain
                </h2>
              </>
              )}
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-1 items-center">
                {component}
                {/* <span>20</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
