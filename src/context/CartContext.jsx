import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Aquí guardamos la lista de productos seleccionados
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar item
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Si ya existe, no lo duplicamos (o podrías aumentar cantidad si quisieras)
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) return prevItems; 
      return [...prevItems, product];
    });
    alert(`¡${product.name} agregado a tu cotización!`); // Feedback simple por ahora
  };

  // Función para remover item
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Limpiar carrito después de enviar correo
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};