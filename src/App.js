import logo from './logo.svg';
import { Routes, Route, Link, useLocation,} from "react-router-dom";
import { useEffect } from 'react';
import './App.css';
import Tree from './page/Tree';
import ContactMe from './page/ContactMe';


function App() {
  const location = useLocation()
  console.log(location);

  useEffect(() => {
    if (location.pathname == "/"){
      document.title = `myLinks`
    }
    else{
      document.title = `Contact Me`
    }
}, [location])

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
