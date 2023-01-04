import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const ContractAddress = "0x58dfd42499d8bc3335465293322e9e183d57da09";

const ContractAbi = [
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "num",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const Contract = new ethers.Contract(ContractAddress, ContractAbi, provider);

const ContractWithSigner = Contract.connect(signer);

export const getValueInContract = () => ContractWithSigner.get();

export const setValueInContract = (number) => ContractWithSigner.set(number);
