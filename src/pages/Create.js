import React, { useState } from "react";
import axios from "axios";

import { WABI, contractAddress } from "../utils/CONSTANTS";
import { useEthers } from "../utils/EthersContext";
import { ethers } from "ethers";

const Address = contractAddress;
const contractABI = WABI;

const Create = () => {
  const { account } = useEthers();
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImage2, setSelectedImage2] = useState();
  const [title, setTitle] = useState(" ");
  const [description, setdescription] = useState(" ");
  const [toggled, setToggle] = useState(false)

  const [file, setFile] = useState(null);
  const [ipfsHash, setIpfsHash] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // console.log(e.target.files[0].name)
    setSelectedImage(e.target.files[0].name);
    setSelectedImage2(URL.createObjectURL(e.target.files[0]));
  };

  const toggle = () =>{
    setToggle(true);
  }

  const handleFileUpload = async () => {
    console.log("hello");
    if (!file) {
      console.error("Please select a file.");
      return;
    }
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("file", file);

      // Make a POST request to NFT.Storage
      const response = await axios.post(
        "https://api.nft.storage/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQwRjgwMTc3MjVkQ0RhMGFlNTE5NTExNUQ1Y0I2MEM1NjExODA3N0EiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1ODU4OTQ1NjU4OSwibmFtZSI6InRlc3QifQ.E_MRJinxJlA5GyguzyyYfRVjcl2Sb_RO9kiUM71JzJQ",
          },
        }
      );

      // Get the IPFS hash from the response
      setIpfsHash(response.data.value.cid);
      console.log(response.data);
      console.log(ipfsHash)

      if(!toggled){
        const linktoimg = `https://${response.data.value.cid}.ipfs.nftstorage.link/${selectedImage}`
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
        console.log(account)
        const data = await contractInstance.createPost(linktoimg, description, title, 0);
        console.log(data);
      }

      setSelectedImage("");
      setTitle("");
      setdescription("");
      setToggle(false)
      alert("Posted");
    } catch (error) {
      console.error("Error uploading to NFT.Storage:", error);
    }
  };

  // function handleChange(e) {
  //   setSelectedImage(URL.createObjectURL(e.target.files[0]));
  // }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setdescription(e.target.value);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSelectedImage("");
  //   setTitle("");
  //   setdescription("");
  //   alert("Posted");
  // };
  return (
    <>
      <div className="overflow min-h-screen max-h-screen overflow-y-auto pt-24 bg-black ttt">
        <div className=" text-white min-h-screen w-1/2 mx-auto py-24">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value={toggled} className="sr-only peer" onClick={toggle} />
            <div className="w-14 h-8 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
            <span className="ms-3 text-xl font-medium font-mono text-white ">
              Are You posting this as an NFT?
            </span>
          </label>
          <h1 className="m-2 text-2xl font-mono mb-2 mt-5">Title -</h1>
          <div className="flex rounded-full bg-[#f8f3c1] px-4">
            <input
              type="text"
              className="w-full h-16 text-2xl flex bg-transparent pl-2 text-[#000] outline-0"
              placeholder="Title..."
              onChange={handleTitle}
              value={title}
            />
          </div>
          <h1 className=" ml-2 text-2xl font-mono mb-2 mt-5">Description -</h1>
          <div className="flex rounded-full bg-[#f8f3c1] px-4">
            <input
              type="text"
              value={description}
              className="w-full h-16 text-2xl flex bg-transparent pl-2 text-[#000] outline-0"
              placeholder="Description..."
              onChange={handleDescription}
            />
          </div>
          <div className=" mb-2 mt-5">
            <div className="flex gap-5">
              <h1 className=" ml-2 text-2xl font-mono mb-4">Upload image -</h1>
            </div>

            {selectedImage ? (
              <div className="flex items-center justify-center">
                <img width={450} height={450} src={selectedImage2} alt="" />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-#f8f3c1 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:#f8f3c1 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    name="myImage"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            )}
          </div>
          <div className="ml-5 mt-10 flex items-center justify-center">
            <button
              onClick={handleFileUpload}
              className="bg-[#daa520] px-32 p-4 rounded-2xl text-2xl font-bold flex items-center text-gray-200"
              type="submit"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
