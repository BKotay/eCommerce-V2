import React from "react";

function ProductCard({ products }) {
  return (
    <div key={products.id} className="grid">
      <img src={products.image} className="product-img" />
      <p className="name">{products.name}</p>
      <p className="price">{products.price}</p>
      <p className="desc">{products.description}</p>
    </div>
  );
}

export default ProductCard;
