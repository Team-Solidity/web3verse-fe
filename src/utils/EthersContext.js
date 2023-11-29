// EthersContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux'
import { addAddress } from "../redux/profile/profileSlice";

const EthersContext = createContext();

export function EthersProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);

  const dispatch = useDispatch()

  useEffect(() => {
    const initEthers = async () => {
      if (window.ethereum) {
        try {
          const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(web3Provider);

          const newSigner = web3Provider.getSigner();
          setSigner(newSigner);

          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            dispatch(addAddress(accounts[0]));
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    initEthers();
  }, [dispatch]);

  useEffect(() => {
    const handleAccountsChanged = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
          setSigner(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, [setAccount, setSigner]);

  return (
    <EthersContext.Provider value={{ provider, signer, account, setSigner, setAccount }}>
      {children}
    </EthersContext.Provider>
  );
}

export function useEthers() {
  return useContext(EthersContext);
}
