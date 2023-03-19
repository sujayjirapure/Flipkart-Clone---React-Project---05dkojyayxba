import React,{ useEffect , useState ,useContext } from "react";
import { Appdata } from "./App";
import '../styles/App.css';

const Cart = () => {

  const context = useContext(Appdata);
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

  return (
    <>
      <div className="main">
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
    </>

    // {/* <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
    //             <Button startDecorator={<Add />}>Add more</Button>
    //             <span>Quantity</span>
                
    //             <Button
    //               variant="soft"
    //               endDecorator={<KeyboardArrowRight />}
    //               color="success"
    //             >
    //              - Remove 
    //             </Button>
    //             <div>
    //               <button onClick={decrement} className="decrement">-</button>
    //               <span>{count}</span>
    //               <button onClick={increment} className="increment">+</button>
    //             </div>
    //           </Box> */}
    ///////////////////////////////////////////////////////////////
  )
}


export default Cart;