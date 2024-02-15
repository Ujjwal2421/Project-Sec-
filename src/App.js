import './App.css';
import AddSec from './MyComponent/AddSec';
import Frame from './MyComponent/Frame';
import Login from './MyComponent/Login';
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/addsec" element={<AddSec/>} />
        <Route path="/frame" element={<Frame/>} />
      </Routes>
    </div>
  );
}

export default App;
