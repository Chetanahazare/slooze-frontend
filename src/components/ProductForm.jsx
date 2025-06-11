import React, { useState } from "react";

const ProductForm = ({ onAdd }) => {
  const [product, setProduct] = useState({ name: '', category: '', quantity: '', price: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...product });
    setProduct({ name: '', category: '', quantity: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} placeholder="Name" required />
      <input value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} placeholder="Category" required />
      <input value={product.quantity} type="number" onChange={(e) => setProduct({ ...product, quantity: e.target.value })} placeholder="Quantity" required />
      <input value={product.price} type="number" onChange={(e) => setProduct({ ...product, price: e.target.value })} placeholder="Price" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;