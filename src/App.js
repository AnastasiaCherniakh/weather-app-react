import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Search />
            <Weather />
          </div>
        </div>
      </div>
      <p className="code-text">
        <a
          href="https://github.com/AnastasiaCherniakh/weather-app"
          target="_blank"
          rel="noreferrer"
          className="code-link"
        >
          Open-source code
        </a>
        by Anastasia Cherniakh
      </p>
    </div>
  );
}
