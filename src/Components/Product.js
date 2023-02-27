import React , { useState ,useEffect }from "react";
import {Alert, Button } from "react-bootstrap"; 
import { Outlet } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";
const Product = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
    let img = require(`../assets/images/${props.image}`);
    const [showAlert, setShowAlert] = useState(false);

    const handleLike = () => {
        // Code pour ajouter un "J'aime" à un produit spécifique
      };
      const handleBuy = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
      };
       
    console.log("id: "+props.id);
  return (
    <div>
         
    <div >
        <img src={img} alt={props.name}  style={{ width: "200px", height: "200px", objectFit: "cover" }}/>    
        <p>id: {props.id}</p>    
        <h2>
          <Link to={`/products/${props.id}`}>title:{props.title}</Link>
        </h2>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>  
        <div style={{ display: "flex" }}> 
        {selectedProduct && <ProductDetails product={selectedProduct} />}
        <Button variant="primary" onClick={handleLike}>
        like
      </Button>
      <Button variant="primary" disabled={props.quantity === 0} onClick={handleBuy} style={{ backgroundColor: "skyblue", color: "white" }}>
        buy
      </Button>
     
      </div>
       
    </div>{showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
       you bought an item 
        </Alert>
      )}
      <Outlet/>
    </div>
    
  );
};

export default Product;