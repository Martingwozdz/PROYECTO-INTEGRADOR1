import React from "react";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";

function App(){
    return(
        <div>
         <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
        </div>
    )
}

export default App;

