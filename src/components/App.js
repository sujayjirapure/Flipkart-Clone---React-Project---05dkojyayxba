import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from './menubar.js';
import Notfound from './notfound.js';
import Catogory from './catogory.js';
import Product from './product.js';
import Footercomp from './footer.js';
import Cart from './cart.js';
import { createContext, useState, useEffect } from "react";

export const Appdata = createContext();


const App = () => {

  const [data, setData] = useState([]); //20 item in data array of object
  const [cart, setCart] = useState([]); // 0 item in cart array of object

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

console.log(data);
  return (
    <div id="main">
          <Appdata.Provider value={{ data, setData, cart, setCart }}> 
     <BrowserRouter>
        <Menubar/>
          <Routes>

            <Route path='/product/:id' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/' element={<Catogory />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
          <Footercomp />
      </BrowserRouter>
          </Appdata.Provider>
    </div>
  );
}


export default App;
