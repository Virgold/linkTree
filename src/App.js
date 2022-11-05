import logo from './logo.svg';
import { Routes, Route, Link, useLocation,} from "react-router-dom";
import { useEffect } from 'react';
import './App.css';
import Tree from './page/Tree';
import ContactMe from './page/ContactMe';


function App() {
  const location = useLocation()

  useEffect(() => {
    document.title = `Link Tree`
}, [])

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
