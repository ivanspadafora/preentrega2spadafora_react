import { useState, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const cartContext = createContext({ cart: [] });


function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const calculateTotal = () =>{
    return cart.reduce((total,item) => total + item.precio * item.count, 0);
  };

  function addToCart(product, count) {
   setCart( [...cart, { ...product, count}])
  }

  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    toast('Producto eliminado del carrito.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
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
        addToCart,
        removeItem,
        getItemInCart,
        clearCart,
        getTotalItemsCart,
        calculateTotal
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };