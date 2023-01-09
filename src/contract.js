import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

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

export const useGetValue = () =>
  useContractRead({
    address: ContractAddress,
    abi: ContractAbi,
    functionName: "get",
  });

export const useSetValue = (value) => {
  const { config } = usePrepareContractWrite({
    address: ContractAddress,
    abi: ContractAbi,
    functionName: "set",
    args: [value],
  });
  return useContractWrite(config);
};
