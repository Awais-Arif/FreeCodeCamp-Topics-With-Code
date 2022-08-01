import React from "react";
import {BrowserRouter, Router, Route, Routes, Switch} from "react-router-dom";

import Home from "./Home";
import People from "./People";
import Person from "./Person";
import Navbar from "./Navbar";
import Error from "./Error";
import About from "./About";

const ReactRouterBasics = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person/:id" element={<Person />}></Route>
        <Route path="*" element={<Error />} />
        <Route path="/People" element={<People />} />
        <Route path="/About" element={<About />} />
        <Route path="/Person" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouterBasics;
