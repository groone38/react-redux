import React, { useEffect } from "react";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router";
import Filters from "./components/Filters/Filters";
import Product from "./components/Filters/Product";
import { useAppDispatch } from "./redux/store";
import { setLocalStorage } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("asd");
    if (
      localStorage.getItem("product") &&
      localStorage.getItem("totalPrice") &&
      localStorage.getItem("totalAmount")
    ) {
      dispatch(setLocalStorage());
    }
  }, []);
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
