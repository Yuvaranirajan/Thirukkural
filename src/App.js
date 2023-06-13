import logo from './logo.svg';
import './App.css';
import { useEffect,useState} from 'react';
import Home from './Home';
import Thirukkural from './Thirukkural';
import Kural from './kural';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
   

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kural" element={<Kural/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <Thirukkural/> */}
      {/* <Kural/> */}
    </div>
  );
}

export default App;
