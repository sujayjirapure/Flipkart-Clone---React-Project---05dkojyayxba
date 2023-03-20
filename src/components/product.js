import React,{ useEffect , useState ,useContext } from "react";
import { Appdata } from "./App";
import '../styles/App.css';

const Product = () => {

    const context = useContext(Appdata);
    //console.log("---------------------------------",context.productid);
    
   
    const addtocart = (val) => {
        let tempnew = context.data.find((item)=> val === item.id);
        context.setCart([...context.cart, tempnew]);
      }

    //Total solds :{item.rating && item.rating.count} 
    
    return(
        <div className="product-detail-container">
            {
            context.productid.map((item) => (
                <>
                <div className="product-detail-imgouter">
                    <img src={item.image} className="product-details-img"/>
                    
                </div>
                <div className="product-details">
                <h4>Category / {item.category}</h4>
                <br></br>
                 <h2>{item.title}</h2>
                 <br></br>
                 {item.description}
                 <br></br>
                 <br></br>
                 <h3>Price :- ${item.price}</h3>
                 <br></br>
                <div className="display-rate2">
                    {item.rating.rate}
                </div>
                <br></br>
                <br></br>
                <button className="btn-pro-cat" onClick={()=>addtocart(item.id)}>Add to cart</button>
                
                
                
                </div>

                </>
            ))
            }
            
        </div>

    );
}


export default Product;