import React from "react";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router";
import Filters from "./components/Filters/Filters";
import Product from "./components/Filters/Product";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filters/:type" element={<Filters />} />
        <Route path="/filters/:type/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
