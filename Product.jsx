import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../redux/productsSlice';
import '../../Styles/product.css';

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(items);

  if (loading) return <p>Loading Products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
        <div className="products-grid">
           {items.map((product) => (
              <div className="product-card" key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                  <img src={product.thumbnail} alt={product.title} className="product-image" />
                  <div className="product-details">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-category">{product.category}</p>
                    <p className="product-price">${product.price}</p>
                    <p className="product-rating">{product.rating}</p>
                  </div>
              </div>
            ))}
         </div>

  );
};

export default Products;
