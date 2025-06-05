import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiBox, FiShoppingCart, FiUser, FiLogOut } from 'react-icons/fi';
import { AiOutlineTag } from "react-icons/ai";
import '../../Styles/sidebar.css';

const ProductsLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'expanded' : ''}`}>
        <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {/* hamburger */}
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <nav className="nav-menu">
          <NavLink to='/products' className="nav-link" end>
            <FiBox className="icon" />
            {isOpen && <span className="link-text">Products</span>}
          </NavLink>

          <NavLink to='/products/1' className="nav-link" end>
            <AiOutlineTag className="icon" />
            {isOpen && <span className="link-text">Productdetails</span>}
          </NavLink>

          <NavLink to='/products/cart' className="nav-link" end>
            <FiShoppingCart className="icon" />
            {isOpen && <span className="link-text">Cart</span>}
          </NavLink>

          <NavLink to='/products/user' className="nav-link" end>
            <FiUser className="icon" />
            {isOpen && <span className="link-text">Profile</span>}
          </NavLink>

          <NavLink to='/logout' className="nav-link" end>
            <FiLogOut className="icon" />
            {isOpen && <span className="link-text">Logout</span>}
          </NavLink>
        </nav>
      </div>

      <main className="flex-1 p-6 bg-white overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default ProductsLayout;
