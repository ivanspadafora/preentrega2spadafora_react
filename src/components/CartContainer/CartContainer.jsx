import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartContainer() {
    const {cart, removeItem} = useContext(cartContext);
    
    // Hacer el Conditional Rendering cuando el carrito esté vacío.
    return (
        <div>
            <h1>Cart</h1>
            {
            cart.map((item) =>(
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>${item.precio}</p>
                    <p>Cantidad: {item.count}</p>
                    <p>Precio total: ${item.count * item.precio}</p>
                    <button onClick={() =>removeItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <br />
            <div>Total de la compra: $999</div>
            <button>Comprar</button>
        </div>
        )
    }

export default CartContainer;