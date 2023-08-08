import { useContext, useState, createContext } from "react";


const cartContext = createContext({ cart: [] });


function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const prueba = "otra prueba";

  function addToCart(product, count) {
   setCart( [...cart, { ...product, count}])
  }

  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItemsCart() {
    
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return cart.reduce((total, item) => total + item.count, 0);
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id) || null;
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        prueba,
        addToCart,
        removeItem,
        getItemInCart,
        clearCart,
        getTotalItemsCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };