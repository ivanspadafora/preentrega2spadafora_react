import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";


function CartContainer() {
    const {cart, removeItem} = useContext(cartContext);
    
    // Hacer el Conditional Rendering cuando el carrito esté vacío.

    

    async function handleCheckout(){
        const orderData = {
            items: cart,
            comprador: { name: "Ivan", email: "ivan@mail.com", phone: "123123123" },
            fecha: new Date(),
            total: 0, // lo tenemos que sacar del context
        }

        const idOrder = await createOrder(orderData);
        alert(`Gracias por tu compra! Tu N° de Orden es: ${idOrder}`)
        // No hacer alert ni por consola, con sweetalert o toastify.
        // Luego de la compra, vaciar el carrito. clearCart();
    }
    return (
        <div className="item-detail-container">
            
            {
            cart.map((item) =>(
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>${item.precio}</p>
                    <p>Cantidad: {item.count}</p>
                    <p>Precio total: ${item.precio * item.count}</p>
                    <button onClick={() =>removeItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <br />
            <div>Total de la compra: $999</div>
            <button onClick={handleCheckout}>Comprar</button>
        </div>
        )
    }

export default CartContainer;