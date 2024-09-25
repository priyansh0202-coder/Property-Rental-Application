import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyList from './Components/PropertyList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Navbar from './Components/Navbar';


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart((prevCart) => [...prevCart, property]);
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter((property) => property.id !== propertyId));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={<PropertyList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
