import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { useGetValue } from "./contract";
export const Main = () => {
  const { isConnected } = useAccount();
  const { refetch } = useGetValue();
  function onsubmit(event) {
    event.preventDefault();
    // setValueInContract(event.target[0].value);
  }

  function getValue() {
    refetch().then(({ data }) => {
      console.log(data);
      alert(ethers.utils.formatEther(data));
    });
  }
  return (
    <div className="app">
      <div className="web3">
        <Web3Button icon="" />
        <Web3NetworkSwitch />
      </div>
      <button onClick={getValue}>Get Value</button>

      <form onSubmit={onsubmit}>
        <input name="value" type="number" placeholder="Put a number to set" />
        <button type="submit">Set Value</button>
      </form>
    </div>
  );
};
