import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { ethers } from "ethers";
import { getValueInContract, setValueInContract } from "./contract";
export const Main = () => {
  function onsubmit(event) {
    event.preventDefault();
    setValueInContract(event.target[0].value);
  }

  function getValue() {
    getValueInContract().then((result) => {
      console.log(result);
      alert(ethers.utils.formatEther(result));
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
