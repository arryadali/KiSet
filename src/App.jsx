import React from "react";
import Home from "./component/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/about";
import Navbar from "./component/navbar";
import Artikel from "./component/artikel";
import DetailArtikel from "./component/detailartikel";
import Login from "./component/login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/artikel" element={<Artikel/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/artikel/:id" element={<DetailArtikel/>} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
