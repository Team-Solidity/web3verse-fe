import React from "react";
import {
  Home,
  MessageCircle,
  Settings,
  Search,
  Bell,
  User,
  PlusCircle
} from "react-feather";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SideNavBar = () => {
  return (
    <>
      <div className="pt-24 bg-black text-white text-9xl min-h-screen max-h-screen border-[#bababa5e] border-r-2">
        <div className="flex flex-col w-2/3 mx-auto text-white mt-20">
          <div className="mb-12">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" :"",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                  
                };
              }}
              to="/"
              className="tracking-wide text-3xl font-bold flex items-center text-gray-300 hover:text-white"
            >
              <Home className="w-10 h-10 mr-6" />
              Home
            </NavLink>
          </div>
          <div className="mb-12">
            <NavLink
            
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" :"",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/search"
              className="tracking-wide text-3xl font-bold flex items-center text-gray-300 hover:text-white"
            >
              <Search className="w-10 h-10 mr-6" />
              Search
            </NavLink>
          </div>
          <div className="mb-12">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" :"",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/messages"
              className="tracking-wide text-3xl font-bold flex items-center text-gray-300 hover:text-white"
            >
              <MessageCircle className="w-10 h-10 mr-6" />
              Messages
            </NavLink>
          </div>
          <div className="mb-12">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" :"",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/create"
              className="tracking-wide text-3xl font-bold flex items-center text-gray-300 hover:text-white"
            >
              <PlusCircle className="w-10 h-10 mr-6" />
              Create
            </NavLink>
          </div>
          <div className="mb-12">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" :"",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/notifications"
              className="tracking-wide text-3xl font-bold flex items-center text-gray-300 hover:text-white"
            >
              <Bell className="w-10 h-10 mr-6" />
              Notifications
            </NavLink>
          </div>
          <div className="mb-12">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" :"",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/settings"
              className="tracking-wide text-3xl font-bold flex items-center text-gray-300 hover:text-white"
            >
              <Settings className="w-10 h-10 mr-6" />
              Settings
            </NavLink>
          </div>

          <div className="mb-12">
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "none",
                  textDecorationColor: isActive ? "rgb(218,165,32)" : "",
                  textUnderlineOffset: isActive ? "10px" : "0",
                  fontWeight: isActive ? "900" :"",
                  color: isActive ? "white" : "",
                  letterSpacing: isActive ? "0.05em" : "",
                };
              }}
              to="/profile"
              className="tracking-wide text-3xl font-bold flex items-center text-gray-300 hover:text-white"
            >
              <User className="w-10 h-10 mr-6" />
              Profile
            </NavLink>
          </div>

          <div className="mb-12">
            <button className="bg-[#daa520] p-4 rounded-2xl text-3xl font-bold flex items-center text-gray-300">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
