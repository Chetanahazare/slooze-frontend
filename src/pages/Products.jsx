import React, { useEffect, useState, useContext } from "react";
import { getProducts, saveProduct } from "../utils/api";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { AuthContext } from "../context/AuthContext";

const Products = ({ theme }) => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAdd = async (newProd) => {
    const saved = await saveProduct(newProd);
    setProducts([...products, saved]);
  };

  return (
    <div className={`products-page ${theme}`}>
      <h2>Products</h2>
      <ProductList products={products} />
      {user?.role === "Manager" && <ProductForm onAdd={handleAdd} />}
    </div>
  );
};

export default Products;