import { useState } from "react";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { ethers } from "ethers";
import { useGetValue, useSetValue } from "./contract";

export const Main = () => {
  const [value, setValue] = useState();

  const { refetch } = useGetValue();
  const { write } = useSetValue(value);

  function onsubmit(event) {
    event.preventDefault();
    write();
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
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="value"
          type="number"
          placeholder="Put a number to set"
        />
        <button disabled={!write} type="submit">
          Set Value
        </button>
      </form>
    </div>
  );
};
