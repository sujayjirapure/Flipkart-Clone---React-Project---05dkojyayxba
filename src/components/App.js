import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from './menubar.js';
import Notfound from './notfound.js';
import Catogory from './catogory.js';
import Product from './product.js';
import Cart from './cart.js';
import Register from './register.js';
import Loginfn from './login';
import Paymentmodal from './payment';
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Appdata = createContext();


const App = () => {

  const [data, setData] = useState([]); //20 item in data array of object
  const [cart, setCart] = useState([]); // 0 item in cart array of object
  const [loginstatus, setStatus] = useState(false); //login status
  const [productid, setProductid] = useState([]); // productid
  const [serachinput , setSerachinput] = useState("");   //input sreach get back scuessfully
  const [record ,setRecord] = useState([data]);
  const [loginformdata, setFormdata] = useState(initialData);
  
  //login info
  const initialData = {
    username: '',
    password: '',
  }

//state object for formdata

  useEffect(() => {

    function fetchData() {
      axios
      .get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
      )
      .then((res) => {
        setData(res.data);
        setRecord(res.data);
        console.log(record);
      })
      .catch((err) => console.log(err));
    }

    fetchData();
  }, []);


console.log("record data is --------------------",record);
  return (
    <div id="main">
          <Appdata.Provider value={{ data, setData, cart, setCart ,loginstatus ,setStatus ,loginformdata, setFormdata ,productid, setProductid ,record,setRecord}}> 
     <BrowserRouter>
        <Menubar/>
          <Routes>

            <Route path='/product' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Loginfn/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/payment' element={<Paymentmodal/>} />

            <Route path='/' element={<Catogory />} />
            <Route path="/*" element={<Notfound />} />

            
          </Routes>
          
      </BrowserRouter>
      </Appdata.Provider>
    </div>
  );
}


export default App;
