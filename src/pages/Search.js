import React, { useState } from "react";
import { Search } from "react-feather";
import ape from "../assets/boredape.jpg";
import pos from "../assets/n5.JPG";

const SearchPage = () => {
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const doSearch = () => {
    setSearchClicked(true);
    if (username.trim() !== "") {
      const users = getUserDetails(username);
      setSearchResults(users);
    } else {
      setSearchResults([]);
    }
  };

  const getUserDetails = (username) => {
    const userDatabase = [
      {
        username: "vaibhavemula",
        hashAddress: "0x2D95B7c89576cbb7b28A3bB7F676DdfDa63193E8",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        dp: ape,
      },
      {
        username: "hanumantjain",
        hashAddress: "0x7181b7F506DC706Ea5517885e9A2B00485834952",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dp: pos,
      },
    ];
    return userDatabase.filter((user) => user.username.includes(username));
  };
  return (
    <>
      <div className="overflow bg-black min-h-screen max-h-screen overflow-y-auto pt-36">
        <div className=" flex justify-center items-center v-screen">
          <div class="flex rounded-full bg-white px-6 mt-4">
            <input
              type="text"
              class=" h-10 bg-[#0d1829] text-xl flex bg-transparent pl-2 pr-44 text-black outline-0"
              onChange={(e) => setUsername(e.target.value)}
              
              placeholder="Search"
            />
            <button
              type="submit"
              onClick={doSearch}
              
              class="relative p-2 bg-white rounded-full"
            >
              <Search className=" text-slate-500 font-bold" />
            </button>
          </div>
        </div>

        {searchClicked &&
          searchResults.map((user, index) => (
            <div
              key={index}
              className=" overflow flex justify-center items-center v-screen overflow-y-auto"
            >
              <div className=" border p-4 mt-14 w-4/6 bg-white rounded-3xl">
                <div className=" flex mt-3 ">
                  <div class=" mr-4">
                    <img
                      src={user.dp}
                      alt=" "
                      class="w-16 h-16 ml-8 object-cover rounded-full"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <div className=" flex">
                      <div class=" mt-1 ml-8">
                        <p class="font-bold text-lg font-mono">
                          {user.username}
                        </p>
                      </div>
                      <div className=" font-bold text-[#fbbf24] mt-1.5 ml-24 ">
                        Follow
                      </div>
                    </div>

                    <div>
                      <p className=" mt-1 ml-8 font-mono">
                        {" "}
                        Address: {user.hashAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {searchClicked && searchResults.length === 0 && (
          <div class="text-center mt-8 ">
            <p class="text-xl text-white">No user found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
