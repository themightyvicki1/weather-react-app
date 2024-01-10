import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather React App</h1>
        <Weather />
      </header>
      <footer>
        <a
          href="https://github.com/themightyvicki1/weather-react"
          title="https://github.com/themightyvicki1/weather-react"
        >
          {" "}
          Open Source Coded by
        </a>{" "}
        Victoria Greer
      </footer>
    </div>
  );
}

export default App;
