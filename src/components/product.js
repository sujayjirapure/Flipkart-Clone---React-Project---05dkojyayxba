import React,{ useState ,useEffect }from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const temp = useParams();

    const [products ,setProducts] = useState({});

    const callapi = async(proid) => {
        const response = await fetch('https://fakestoreapi.com/products/'+proid)
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        callapi(temp.id);
    },[temp.id])

    
    return(
        <div className="product-detail-container">
            <div className="product-detail-imgouter">
                <img src={products.image} className="product-details-img"/>
            </div>
            <div className="product-details">
                <h4>category / {products.category}</h4>
                <h2>{products.title}</h2>
                <br></br>
                {products.description}
                <br></br>
                <br></br>
                <h3>Price :- ${products.price}</h3>
                <br></br>
                <br></br>
                {products.rating && products.rating.count}      
                {/* depask sir to acces nested json */}
                <br></br>
                
                
            </div>
            
        </div>

    );
}


export default Product;