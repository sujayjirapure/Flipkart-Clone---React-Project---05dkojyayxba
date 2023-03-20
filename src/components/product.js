import React,{ useEffect , useState ,useContext } from "react";
import { Appdata } from "./App";
import '../styles/App.css';

const Product = () => {

    const context = useContext(Appdata);
    //console.log("---------------------------------",context.productid);
    
    // <div className="product-detail-imgouter">
    //             <img src={products.image} className="product-details-img"/>
    //         </div>
    //         <div className="product-details">
    //             <h4>category / {products.category}</h4>
    //             <h2>{products.title}</h2>
    //             <br></br>
    //             {products.description}
    //             <br></br>
    //             <br></br>
    //             <h3>Price :- ${products.price}</h3>
    //             <br></br>
    //             <br></br>
    //             {products.rating && products.rating.count}      
    //             {/* depask sir to acces nested json */}
    //             <br></br>
                
                
    //         </div>

    
    return(
        <div className="product-detail-container">
            {
            context.productid.map((item) => (
                <>
                <div className="product-detail-imgouter">
                    <img src={item.image} className="product-details-img"/>
                    
                </div>
                <div className="product-details">
                <h4>category / {item.category}</h4>
                <br></br>
                 <h2>{item.title}</h2>
                 <br></br>
                 {item.description}
                 <br></br>
                 <br></br>
                 <h3>Price :- ${item.price}</h3>
                 <br></br>
                Total solds :-{item.rating && item.rating.count}
                </div>
                </>
            ))
            }
            
        </div>

    );
}


export default Product;