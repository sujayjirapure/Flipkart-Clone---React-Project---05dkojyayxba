import React ,{useContext } from 'react'
import { Link ,useNavigate } from "react-router-dom";
import '../styles/App.css';
import {Appdata} from './App'

const Menubar = () => {
  const context = useContext(Appdata);


  return (
    <div className='menu-outer'>
      <div className='logo-outer' >
      <Link to={`/`}>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" className='logo'/>
      </Link>
      </div>
      <div className='searchbar-outer'>
        <input type="text" className='searchbar' placeholder="   Search for products ,brands and more... " />
        <svg width={20} height={20} viewBox="0 0 17 18" className xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      
      <div className='logbtn-outer'>
        <button className='log-btn'>Login</button>
      </div>
      <div className='seller-outer'>
          <p className='seller'>Become a Seller</p>
      </div>
        <div className='cartlogo-outer'>
          <Link to={`/cart`}>
              <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/shopping-cart.png" className='cartlogo-img'/>
          </Link>
          <div className='cartlogo-count'>{`${context.cart.length}`}</div>
        </div>
    </div>
  )
}


export default Menubar;
