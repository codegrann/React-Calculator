import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <div className="bg-black h-screen">
      <header className="bg-pink-500">
        <img src={logo} className="w-96" alt="logo" />
        <p className="text-pink font-bold">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
