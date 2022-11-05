import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Tree from './page/Tree';
import ContactMe from './page/ContactMe';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Tree />} />
        <Route path="contact" element={<ContactMe/>} />
      </Routes> 
    </div>
  );
}

export default App;
