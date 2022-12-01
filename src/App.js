import React from "react";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Home from "./components/Home";

function App(){
    return(
        <div>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
        </div>
    )
}

export default App;

