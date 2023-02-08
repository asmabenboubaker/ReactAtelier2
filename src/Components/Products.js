 
import Product from "./Product";
import productsData from "./product.json";
import React , { useState ,useEffect }from "react";
import {Alert, Button } from "react-bootstrap"; 


const Products = () => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleLike = () => {
        // Code pour ajouter un "J'aime" à un produit spécifique
      };
       
      useEffect(() => {
        setTimeout(() => setShowWelcomeMessage(true), 3000);
        setTimeout(() => setShowWelcomeMessage(false), 6000);
      }, []);
  const productComponents = productsData.map((product) => (
    <Product
      key={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      description={product.description}
    />
  ));
    
  return (
    
    <div style={{ display: "flex", flexWrap: "wrap" }}>
              {showWelcomeMessage && (
        <Alert variant="success" onClose={() => setShowWelcomeMessage(false)} dismissible>
          <h1>hey, welcome to our shop mystore</h1>
          <p>thank you for choosing our store, we hope you enjoy your shopping experience!</p>
        </Alert>
      )} 
      {productComponents.map((product) => (
        <div key={product.props.name} style={{ width: "33.33%", padding: "1em" }}>
          {product}
        </div>
      ))}
      
    </div>
    
  );
};

export default Products;