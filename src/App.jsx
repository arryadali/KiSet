import React from "react";
import Home from "./component/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/about";
import Navbar from "./component/navbar";
import Artikel from "./component/artikel";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/artikel" element={<Artikel/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
