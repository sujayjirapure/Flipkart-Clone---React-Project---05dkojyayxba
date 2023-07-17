import React,{ useEffect , useState ,useContext } from "react";
import { Appdata } from "./App";
import { Link ,useNavigate } from "react-router-dom";
import Bannerone from "./bannerone";
import '../styles/App.css';
import { AiOutlineStar } from "react-icons/ai";
import Footercomp from "./footer";

const Catogory = () => {

    const context = useContext(Appdata);

  //navigation function
  const tempnavi = useNavigate();
//   const veiwpro = () => {
    
//   }
  
   const veiwpro = (val) => {
     let tempnew = context.data.find((item)=> val === item.id);
     context.setProductid([tempnew]);
    tempnavi(`/product`);
   }
   

  const addtocart = (val) => {
    let tempnew = context.data.find((item)=> val === item.id);
    context.setCart([...context.cart, tempnew]);
  }
  console.log("record data is cat page --------------------",context.record);
  return (
    <div>
        <Bannerone/>
        <div className="displayone">
            
            {
                context.record.map((item,index) => (
                    <div className="displaytwo">
                        <img src={item.image} className="displayitem" />
                        <p>{item.title}</p> 
                        <br></br>
                        <div className="display-rate">
                            <div className="display-rate1">
                                $ {item.price}
                            </div>
                            <div className="display-rate2">
                                {item.rating && item.rating.rate} <AiOutlineStar/>
                            </div>
                        </div>
                            
                        <button className="btn-cat" onClick={()=>veiwpro(item.id)}>View</button>
                        
                        <button className="btn-cat" onClick={()=>addtocart(item.id)}>Add to cart</button>
                    </div>
                ))
            }
        </div>
        <Footercomp/>
    </div>
    
  )
}


export default Catogory;