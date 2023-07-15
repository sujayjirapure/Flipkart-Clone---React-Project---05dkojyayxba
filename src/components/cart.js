import React,{ useEffect , useState ,useContext } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { Appdata } from "./App";
import '../styles/App.css';

const Cart = () => {

  const context = useContext(Appdata);
  const [pricetot ,setpricetot] = useState([]); //price total state
  // useEffect(() => {
  //   console.log("",context.data);
  // });
  const [count ,setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  }
  const decrease = () => {
    setCount((count) => count - 1);
  }

  const navigatemodal = () => {

  }
  return (
    <>
      <div className="cart-main">
      <div className="cart-main-inner">
      {
        context.cart.map((item) => (
          <div className="cart-container">
            <div className="cart-outerchildA">
              <img src={item.image} className="cart-list-img" />
              
            </div>
            <div className="cart-outerchildB">
              <div className="cart-discription">
                <p className="description">{item.description.slice(0,150)}</p>
                <br></br>
                <h3>Price : ${item.price}</h3>
                <br></br>
                <h6>Normal amount :- {item.price}</h6>
                (After adding 5% GST) Total :-{item.price / 100 * 5 + item.price} 
              </div>
              <div className="cart-functions">
                <button className="increase-btn" onClick={increase}>+</button>
                <div className="count-display">{count}</div>
                <button className="decrease-btn" onClick={decrease}>-</button>
                
              </div>
            </div>
          </div>
        ))
      }
      </div>
      <div className="btn-modal-outer">
      <Link to={`/payment`}>
        <button className="btn-modal" onClick={navigatemodal}>Complete payment</button>
      </Link>
      </div>
      </div>
    </>

  )
}


export default Cart;