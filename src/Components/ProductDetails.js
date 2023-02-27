import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./product.json";

const ProductDetails = () => {
  const { id } = useParams(); // Récupère l'ID du produit à partir de l'URL
  const product = productsData.find((p) => p.id === parseInt(id)); // Récupère les informations du produit à partir de la source de données
  let img = require(`../assets/images/${product.image}`);
  return (
    <div>
      <h2>{product.title}</h2>
      
      <img src={img} alt={product.title} />
      <p>{product.description}</p>
      <p>Prix: {product.price} €</p>
    </div>
  );
};

export default ProductDetails;
