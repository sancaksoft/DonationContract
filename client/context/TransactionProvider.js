import React, { createContext, useState } from "react";
import Web3 from "web3";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  const connectWeb3 = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      web3.eth.getChainId().then(async (ress) => {
        if (ress != 97) {
          changeNetwork(web3);
        } else {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          setAccount(accounts[0]);
        }
      });
    }
  };

  const changeNetwork = async (web3) => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: web3.utils.toHex(97) }],
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <TransactionContext.Provider value={{ account, connectWeb3 }}>
      {children}
    </TransactionContext.Provider>
  );
};
