import React from "react";
import { useAccount } from 'wagmi'

const Profile = () => {
  const { address } = useAccount()
  return (
    <>
      <div className="overflow min-h-screen max-h-screen overflow-y-auto pt-24">
        <div className="bg-slate-100 text-black text-2xl min-h-screen">
        <header className="flex flex-wrap items-center gap-10 px-20 py-8">

          <div> 
            <img class="w-40 h-40 object-cover rounded-full
               border-2 border-pink-600 p-1" src="https://wallpapercave.com/wp/wp5071838.jpg" alt="profile" />
          </div>

          <div class="h-40">
              <h2 class="text-6xl font-bold mb-2">
                Hanumant Jain
              </h2>
              <h2 class="text-2xl mb-2">
                Address : {address}
              </h2>
              {/* <ul class="flex space-x-8 mb-4 text-2xl">
                <li>
                  <span class="font-semibold">6 </span>
                    posts
                </li>
                <li>
                  <span class="font-semibold">50.5k </span>
                    followers
                </li>
                <li>
                  <span class="font-semibold">10 </span>
                    following
                </li>
              </ul> */}
          </div>
        </header>
        <div className="px-20">
          Description
        </div>

        <hr className="h-1 bg-black"/>
        </div>
      </div>
    </>
  );
};

export default Profile;
