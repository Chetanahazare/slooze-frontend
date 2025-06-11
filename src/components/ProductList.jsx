import React from "react";

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map(p => (
        <li key={p.id}>{p.name} - {p.category} - Qty: {p.quantity} - Rs.{p.price}</li>
      ))}
    </ul>
  );
};

export default ProductList;