import React , { useState ,useEffect }from "react";
import {Alert, Button } from "react-bootstrap"; 
const Product = (props) => {
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
       
    
  return (
    <div>
         
    <div >
        <img src={img} alt={props.name}  style={{ width: "200px", height: "200px", objectFit: "cover" }}/>        
        <h2>title:{props.title}</h2>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>  
        <div style={{ display: "flex" }}> 
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
    </div>
  );
};

export default Product;