import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../../redux/cartSlice';
import '../../Styles/detail.css';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log('Navigating to cart..');
    navigate('/products/cart');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-container">
      <div className="top-section">
        <img src={product.thumbnail} alt={product.title} className="product-image" />

        <div className="product-basic-info">
          <div className="product-header">
            <h1>{product.title}</h1>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart 🛒</button>
          </div>

          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p className="price">${product.price}</p>
          <p className="discount">({product.discountPercentage}% off)</p>
          <p><strong>Rating:</strong> {product.rating} ⭐</p>
          <p><strong>Stock:</strong> {product.stock}</p>

          <div>
            <strong>Tags:</strong>
            <div className="tags">
              {product.tags?.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>SKU:</strong> {product.sku}</p>
        <p><strong>Weight:</strong> {product.weight}g</p>
        <p><strong>Dimensions:</strong> {product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} cm</p>
        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
        <p><strong>Shipping:</strong> {product.shippingInformation}</p>
        <p><strong>Availability:</strong> {product.availabilityStatus}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
