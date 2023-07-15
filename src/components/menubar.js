import React ,{useContext ,useEffect} from 'react'
import { Link ,useNavigate } from "react-router-dom";
import '../styles/App.css';
import {Appdata} from './App'

const Menubar = () => {
  const context = useContext(Appdata);
  
 // const [input, setInput] = useState("");

  //console.log("data is inside that menubar-",context.data); 
  // const handlechnage = (value) => {
  //   context.setSerachinput(value);   //input send to app.js
  // };
  const filter = (event) => {
    context.setRecord(
      context.data.filter((f) => f.title.toLowerCase().includes(event.target.value))
    );
  };
  console.log("record data is cat page --------------------",context.record);

  const logoutfn = () => {
    context.setStatus(false);
  }

  //console.log("-------------------",context.loginformdata.username); //working ok bt only on when login 
  return (
    <div className='menu-outer'>
      <div className='logo-outer' >
      <Link to={`/`}>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" className='logo'/>
      </Link>
      </div>
      <div className='searchbar-outer'>
        <input type="text" 
        className='searchbar' 
        placeholder="   Search for products ,brands and more... "
        onChange={filter} 
        />

        <svg width={20} height={20} viewBox="0 0 17 18" className xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      
      <div className='logbtn-outer'>
        {
          context.loginstatus
          ?
          <button className='log-btn' onClick={logoutfn}>Logout</button>
          :
          <Link to={'./login'}>
            <button className='log-btn'>Login</button> 
          </Link>
        }

      </div>
      <div className='seller-outer'>
        {
          context.loginstatus 
          ?
          <p className='seller'>Hi {context.loginformdata.username}</p> 
          :
          <p className='seller'>Become a Seller</p>
        }
          
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
