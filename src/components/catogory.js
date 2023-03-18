import React,{ useEffect , useState ,useContext } from "react";
import { Appdata } from "./App";
import { Link ,useNavigate } from "react-router-dom";
import Bannerone from "./bannerone";
import '../styles/App.css';

const Catogory = () => {

    const context = useContext(Appdata);

  //navigation function
  const tempnavi = useNavigate();
  const viewdfn = () => {
    tempnavi(`/product/${product.id}`);
  }

  const addtocart = (val) => {
    let tempnew = context.data.find((item)=> val === item.id);
    context.setCart([...context.cart, tempnew]);
  }

  return (
    <div>
        < Bannerone/>
        <div className="displayone">

            {
                context.data.map((item,index) => (
                    <div className="displaytwo">
                        <img src={item.image} className="displayitem" />
                        <p>{item.title}</p> 
                        <br></br>
                        <div className="display-rate">
                            <div className="display-rate1">
                                $ {item.price}
                            </div>
                            <div className="display-rate2">
                                {item.rating.rate}
                            </div>
                        </div>
                            
                        <Link to={`/product/${item.id}`}>
                            <button className="btn-cat">View details</button>
                        </Link>
                        
                        <button className="btn-cat" onClick={()=>addtocart(item.id)}>Add to cart</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}


export default Catogory;