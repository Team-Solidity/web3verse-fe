import React from "react";import {
  Send,
  User
} from "react-feather";

const Messages = () => {

  const accounts = [{
    name:'Hanumant', message:"Hi",
    time:'2.12', id:'0',
  },
  {
    name:'Mosagandu', message:"Yo",
    time:'5.32', id:'1',
  }];

  return (
    <>
      <div className="overflow min-h-screen max-h-screen overflow-y-auto pt-24">
        <div className="bg-slate-100 text-black min-h-screen">
          <div className='message flex h-screen'>
              <div className='flex basis-1/4 justify-center border-r-2 pr-20 text-2xl'>
        <div className="">
          {/* div for message-list */}
          <Account accounts = {accounts} />
        </div>
          </div>

            <div className='flex flex-col basis-3/4 relative'>
            <div className=' flex gap-10 items-center text-4xl p-4'>
              <User className='' />
              <h1 className="">Mosagandu</h1>
            </div>
            <hr className="h-1 bg-black overflow-auto"/>
            <div className=''>
              Textbox
            </div>

            <div class='absolute inset-x-0 bottom-4'>
      
        <div class="flex rounded-full bg-[#0d1829] px-4 w-full">
        <input
          type="text"
          class="w-full h-16 bg-[#0d1829] text-2xl flex bg-transparent pl-2 text-[#cccccc] outline-0"
          placeholder="Message..."
        />
        <button type="submit" class="relative p-2 bg-[#0d1829] rounded-full">
          <Send className=" text-white font-bold"/>
        </button>
      </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );

  function Account(props){
    const accounts = props.accounts
    return (
      <>
          {accounts.map((accounts) =>
            (
              <div key={accounts.id}>
              <div className='flex gap-4 items-center py-4'>
            <User className='' />
            <div>
              <h1 className=''>{accounts.name}</h1>
            <div className='flex text-sm gap-3'>
              <h3 className=''>{accounts.message}</h3>
              <h6>{accounts.time}</h6>
            </div>
          </div>
        </div>
      </div>

            )
        )}
          </>
    )
  }
};

export default Messages;
