// import logo from "./logo.svg";

import Button from "./components/Button";
import Io from "./components/Io";

function App() {
  return (
    <div className="bg-gray-700 h-screen">
      <Io />
      <Button label="add" />
      <Button label="subtract" />
      <Button label="multiply" />
      <Button label="divide" />
      <Button label="reset input" />
      <Button label="reset result" />
    </div>
  );
}

export default App;
