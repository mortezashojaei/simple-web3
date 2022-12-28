import "./App.css";

function App() {
  function onsubmit(event) {
    event.preventDefault();
    alert(event.target[0].value);
  }

  function getValue() {}

  return (
    <div className="app">
      <select name="network" id="network">
        <option value="BSC">BSC</option>
        <option value="Etherum">Etherum</option>
        <option value="Goerli">Goerli</option>
        <option value="MoonbaseAlpha">MoonbaseAlpha</option>
      </select>
      <button onClick={getValue}>Get Value</button>

      <form onSubmit={onsubmit}>
        <input name="value" type="number" placeholder="Put a number to set" />
        <button type="submit">Set Value</button>
      </form>
    </div>
  );
}

export default App;
