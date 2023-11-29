import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { WABI } from "../utils/TempABI";

const contractAddress = "0x6367315713Ea16CB41568CaBF3f1370745EEc00d";
const contractABI = WABI;

const Notifications = () => {
  const [contract, setContract] = useState(null);
  const [dataFromContract, setDataFromContract] = useState("");
  // const [inputData, setInputData] = useState("");

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    setContract(contractInstance);
  }, []);

  const readDataFromContract = async () => {
    try {
      const data = await contract.getUser();
      console.log(data[0])
      setDataFromContract(data[0]);
    } catch (error) {
      console.error("Error reading data from contract:", error);
    }
  };

  // const writeDataToContract = async () => {
  //   try {
  //     // Write data to the smart contract
  //     const tx = await contract.setData(inputData); // Replace with your contract method
  //     await tx.wait();
  //     console.log("Transaction successful");
  //   } catch (error) {
  //     console.error("Error writing data to contract:", error);
  //   }
  // };

  return (
    <>
      <div>
        <div className="overflow min-h-screen max-h-screen overflow-y-auto pt-24">
          <div className="bg-slate-100 text-black text-2xl min-h-screen">
            <h1>dwbckwbjc</h1>
            <div>
            <button onClick={readDataFromContract} className="text-black ">Read Data</button>
            <p>Data from Contract: {dataFromContract}</p>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Notifications;

// import React from "react";

// const Notifications = () => {
//   return (
//     <>
//       <div className="overflow min-h-screen max-h-screen overflow-y-auto pt-24">
//         <div className="bg-slate-100 text-black text-9xl min-h-screen">
//           Notifs
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notifications;
