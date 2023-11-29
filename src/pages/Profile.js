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

  // const posts = [
  //   {
  //     id: 0,
  //     name: "https://imgs.search.brave.com/JgGgbXZier8Mo3jURxKDuzdUXiZHynQ2FDFDX_K9NcY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzZXQuY29t/L3cvZnVsbC9hLzkv/Yi8xMTAxMTIuanBn",
  //   },
  //   {
  //     id: 1,
  //     name: "https://wallpapercave.com/wp/wp5071838.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "https://wallpapercave.com/wp/wp5071838.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "https://wallpapercave.com/wp/wp5071838.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "https://wallpapercave.com/wp/wp5071838.jpg",
  //   },
  // ];

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
        <div className=" text-black text-2xl min-h-screen">
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
              <h2 class="text-6xl font-bold mb-2 text-white font-mono">@{username}</h2>
              <h2 class="text-2xl mb-2 text-white font-mono">Address : {address}</h2>
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
