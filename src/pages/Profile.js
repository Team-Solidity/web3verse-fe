import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ape from '../assets/boredape.jpg'

import { WABI, contractAddress } from "../utils/CONSTANTS";
import { ethers } from "ethers";

const Address = contractAddress;
const contractABI = WABI;

const Profile = () => {
  const address = useSelector((state) => state.profile.address);
  const username = useSelector((state) => state.profile.username);
  const [pos, setPosts] = useState(null);

  useEffect(()=>{

    const fetchPosts = async () =>{
      const web3Provider = new ethers.providers.Web3Provider(
        window.ethereum
      );
      const newSigner = web3Provider.getSigner();
      // const newAccount = account;
      const contractInstance = new ethers.Contract(
        Address,
        contractABI,
        newSigner
      );
      const data = await contractInstance.getAllPost();
      console.log(data)
      setPosts(data)
    }
    fetchPosts()
  },[])

  return (
    <>
      <div className="ttt overflow min-h-screen max-h-screen overflow-y-auto pt-24 bg-black">
        <div className=" text-black text-xl min-h-screen">
          <header className="flex flex-wrap items-center gap-10 px-20 py-8">
            <div>
              <img
                class="w-40 h-40 object-cover rounded-full
              border-2 border-[#daa520] p-1"
                src={ape}
                alt="profile"
              />
            </div>

            <div class="h-40">
              <h2 class="text-3xl font-bold mb-2 text-white font-mono">@{username}</h2>
              <h2 class="text-xl mb-2 text-white font-mono">Address : {address}</h2>
            </div>
          </header>
          <hr className="h-1 bg-black" />
          <div>
            <h1 className="h-15 bg-slate-400 text-center text-4xl p-2 font-mono font-bold">
              Posts
            </h1>
            <hr className="h-1 bg-black" />
          </div>
          <div className="p-1">
          {pos!=null ? (<div class="grid grid-cols-3 gap-1">
              <Posts posts={pos} />
            </div>):(
              <h1>Upload a post</h1>
            )}
            
          </div>
        </div>
      </div>
    </>
  );

  function Posts(props) {
    const aa = props.posts.slice(1,props.posts.length)
    return (
      <>
        {aa.map((pp,i) => (
          <div key={i}>
          {i&&<img src={pp.content} alt="post" />}
            
          </div>
        ))}
      </>
    );
  }
};

export default Profile;
