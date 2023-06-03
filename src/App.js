import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import React from "react";
import './css/styles.css'
import Splash from './Splash'

export const App = () => {

  return (
    <>
      <Routes>
      <Route path="/" element={<Splash />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </>
  );
};
