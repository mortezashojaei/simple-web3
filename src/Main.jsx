import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
export const Main = () => {
  function onsubmit(event) {
    event.preventDefault();
    alert(event.target[0].value);
  }

  function getValue() {}
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
