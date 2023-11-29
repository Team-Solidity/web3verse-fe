import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { WABI, contractAddress } from "../utils/CONSTANTS";
import { ethers } from "ethers";

const Address = contractAddress;
const contractABI = WABI;

const PostsHome = () => {
  const [pos, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const newSigner = web3Provider.getSigner();
      // const newAccount = account;
      const contractInstance = new ethers.Contract(
        Address,
        contractABI,
        newSigner
      );
      const data = await contractInstance.getAllPost();
      console.log(data);
    
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="ttt overflow min-h-screen max-h-screen overflow-y-auto pt-36 bg-black ">
        <div className="">
          {pos != null ? (
            pos.map((postt,i) => (
              <PostCard key={i} posts={postt} />
            ))
          ) : (
            <h1>Loading.......</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default PostsHome;
