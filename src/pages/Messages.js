import React from "react";
import { Send, User } from "react-feather";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Messages = () => {
  return (
    <>
      <div className="ttt overflow max-h-screen overflow-y-auto pt-24 bg-black">
        <div className="text-black ">
          <Tabs className="message flex bg-black">
            <div className="flex basis-1/4 h-[870px] justify-center border-r-2 pr-20 text-2xl">
              <TabList className="flex flex-col gap-5 pt-5 font-medium">
                <Tab className="text-white">@vaibhavemula</Tab>
                <Tab className="text-white">@hanumant jain</Tab>
              </TabList>
            </div>
            <div className="flex flex-col basis-3/4 relative">
              <TabPanel>
                <div className=" flex gap-10 items-center text-4xl p-4">
                  <User className="text-white" />
                  <h1 className="text-white">@vaibhavemula</h1>
                </div>
                <hr className="h-1 bg-white overflow-auto" />
                <div className="">Textbox</div>

                <div class="absolute inset-x-0 bottom-4">
                  <div class="flex rounded-full bg-[#0d1829] px-4 w-full">
                    <input
                      type="text"
                      class="w-full h-16 bg-[#0d1829] text-2xl flex bg-transparent pl-2 text-[#cccccc] outline-0"
                      placeholder="Message..."
                    />
                    <button
                      type="submit"
                      class="relative p-2 bg-[#0d1829] rounded-full"
                    >
                      <Send className=" text-white font-bold" />
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" flex gap-10 items-center text-4xl p-4">
                  <User className="" />
                  <h1 className="text-white">@hanumant jain</h1>
                </div>
                <hr className="h-1 bg-black overflow-auto text-white" />
                <div className="">Textbox</div>

                <div class="absolute inset-x-0 bottom-4">
                  <div class="flex rounded-full bg-[#0d1829] px-4 w-full">
                    <input
                      type="text"
                      class="w-full h-16 bg-[#394251] text-2xl flex bg-transparent pl-2 text-[#cccccc] outline-0"
                      placeholder="Message..."
                    />
                    <button
                      type="submit"
                      class="relative p-2 bg-[#0d1829] rounded-full"
                    >
                      <Send className=" text-white font-bold" />
                    </button>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Messages;
