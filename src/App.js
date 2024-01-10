import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather ☁</h1>
        <Weather city="Sacramento" />
      </header>
      <footer>
        <a
          href="https://github.com/themightyvicki1/weather-react-app"
          title="https://github.com/themightyvicki1/weather-react-app"
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
