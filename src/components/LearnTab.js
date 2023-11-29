import React from "react";

const LearnTab = () => {
  return (
    <>
      <div className="ttt overflow overflow-y-auto border-l-2 border-[#bababa5e] pt-24 bg-black text-white text-6xl text-center min-h-screen max-h-screen pb-24 font-mono">
      Learn
      <div className=" overflow flex justify-center items-center v-screen overflow-y-auto">
          <div className=" flex flex-col border p-4 mt-6 w-5/6 float-left bg-white rounded-xl text-black">
             <div className=" float-left ml-3 text-3xl font-sans font-semibold">What is block chain?</div>
             <div className="  text-xl mt-1"><p></p>A blockchain is a distributed database or ledger shared among a computer network's nodes. 
              They are best known for their crucial role in <a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank" className=" text-yellow-500 font-mono" rel="noreferrer" >read more...</a> </div>
         </div>
      </div>

      <div className=" overflow flex justify-center items-center v-screen overflow-y-auto">
          <div className=" flex flex-col border p-4 mt-16 w-5/6 float-left bg-white rounded-xl text-black">
             <div className=" float-left ml-3 text-3xl font-sans font-semibold">About NFTs</div>
             <div className="  text-xl mt-1"><p></p>NFTs are one-of-a-kind digital assets held on a blockchain. 
                They reflect ownership of a certain asset, which might range from artwork to music to tweets. Unique and irreplicable,
                NFTs are valued in <a href="https://www.lcx.com/web3-and-nfts/" target="_blank" className=" text-yellow-500 font-mono" rel="noreferrer" >read more...</a> </div>
         </div>
      </div>

      <div className=" overflow flex justify-center items-center v-screen overflow-y-auto">
          <div className=" flex flex-col border p-4 mt-16 w-5/6 float-left bg-white rounded-xl text-black">
             <div className=" float-left ml-3 text-3xl font-sans font-semibold">Social Media DApp</div>
             <div className="  text-xl mt-1"><p></p>A decentralized application (DApp) is a type of distributed, open source software application 
                that runs on a peer-to-peer (P2P) blockchain network rather than on a 
                single computer <a href="https://cointelegraph.com/explained/what-are-decentralized-social-networkshttps://www.lcx.com/web3-and-nfts/" target="_blank" rel="noreferrer" className=" text-yellow-500 font-mono" >read more...</a> </div>
         </div>
      </div>

      </div>

      
      
    </>
  );
};

export default LearnTab;