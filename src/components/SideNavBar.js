import React, { useEffect, useState } from "react";
import {
  Home,
  MessageCircle,
  Settings,
  Search,
  // Bell,
  User,
  PlusCircle,
} from "react-feather";
import { NavLink } from "react-router-dom";
import { useEthers } from "../utils/EthersContext";
import { ethers } from "ethers";
import { WABI, contractAddress } from "../utils/CONSTANTS";
import ape from "../assets/boredape.jpg";
import { useDispatch } from 'react-redux'
import { addAddress, addUsername } from "../redux/profile/profileSlice";

const Address = contractAddress;
const contractABI = WABI;

const SideNavBar = () => {
  const { account, setSigner, setAccount } = useEthers();
  const [contract, setContract] = useState(null);
  const [dataFromContract, setDataFromContract] = useState();
  const dispatch = useDispatch()

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          const web3Provider = new ethers.providers.Web3Provider(
            window.ethereum
          );
          const newSigner = web3Provider.getSigner();
          const newAccount = accounts[0];

          dispatch(addAddress(newAccount));
          
          const contractInstance = new ethers.Contract(
            Address,
            contractABI,
            newSigner
          );
          setContract(contractInstance);

          if (newAccount) {
            const data = await contractInstance.getUser();
            console.log(data[0]);
            setDataFromContract(data[0]);
            dispatch(addUsername(data[0]));
          }

          setSigner(newSigner);
          setAccount(newAccount);

          // readDataFromContract();
        }
      } catch (error) {
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

        const data = await contractInstance.registerUser("Hello");
        if(data){
          readDataFromContract()
          dispatch(addUsername(data[0]));
        }
        console.log('REGISTERING');
        console.log(data);
        console.log('REGISTERED');
        console.error(error);
      }
    } else {
      console.error("MetaMask not detected. Please install MetaMask.");
    }
  };

  const readDataFromContract = async () => {
    try {
      const data = await contract.getUser();
      console.log(data[0]);
      setDataFromContract(data[0]);
    } catch (error) {
      console.error("Error reading data from contract:", error);
    }
  };

  useEffect(() => {
    console.log("Account:", account);
  }, [account]);

  return (
    <>
      <div className="pt-24 bg-black text-white text-xl min-h-screen max-h-screen border-[#bababa5e] border-r-2">
        <div className="flex flex-col w-2/3 mx-auto text-white mt-20">
          <div className="mb-8">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/"
              className="tracking-wide text-lg md:text-xl flex items-center text-gray-300 hover:text-white font-mono"
            >
              <Home className="w-10 h-10 mr-6 md:w-6 md:h-6" />
              Home
            </NavLink>
          </div>
          <div className="mb-8">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/search"
              className="tracking-wide text-lg md:text-xl flex items-center text-gray-300 hover:text-white font-mono"
            >
              <Search className="w-10 h-10 mr-6 md:w-6 md:h-6" />
              Search
            </NavLink>
          </div>
          <div className="mb-8">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/messages"
              className="tracking-wide text-lg md:text-xl  flex items-center text-gray-300 hover:text-white font-mono"
            >
              <MessageCircle className="w-10 h-10 mr-6 md:w-6 md:h-6" />
              Messages
            </NavLink>
          </div>
          <div className="mb-8">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/create"
              className="tracking-wide text-lg md:text-xl flex items-center text-gray-300 hover:text-white font-mono"
            >
              <PlusCircle className="w-10 h-10 mr-6 md:w-6 md:h-6" />
              Create
            </NavLink>
          </div>
          {/* <div className="mb-12">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/notifications"
              className="tracking-wide text-3xl font-bold flex items-center text-gray-300 hover:text-white font-mono"
            >
              <Bell className="w-10 h-10 mr-6" />
              Notifications
            </NavLink>
          </div> */}
          <div className="mb-8">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/settings"
              className="tracking-wide text-lg md:text-xl flex items-center text-gray-300 hover:text-white font-mono"
            >
              <Settings className="w-10 h-10 mr-6 md:w-6 md:h-6" />
              Settings
            </NavLink>
          </div>

          <div className="mb-8">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/profile"
              className="tracking-wide text-lg md:text-xl flex items-center text-gray-300 hover:text-white font-mono"
            >
              <User className="w-10 h-10 mr-6 md:w-6 md:h-6" />
              Profile
            </NavLink>
          </div>

          {dataFromContract == null ? (
            <div className="mb-2">
              <button
                onClick={connectWallet}
                className="bg-[#daa520] p-4 md:p-3 font-bold  rounded-2xl text-lg md:text-xl flex items-center text-gray-300"
              >
                Connect Wallet
              </button>
            </div>
          ) : (
            <div className="mt-12">
              <div className="tracking-wide text-lg md:text-2xl flex items-center text-gray-300 hover:text-white">
                <img src={ape} alt=" " className="h-12 rounded-full mr-2" />
                <h1>{dataFromContract}</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
