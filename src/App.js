import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes />
    </div>
  );
}

export default App;
