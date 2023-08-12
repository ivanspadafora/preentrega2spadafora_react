import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import "./CartContainer.css";

function CartContainer() {
    const {cart, removeItem, calculateTotal} = useContext(cartContext);

    return (
        <div className="cart-container">
            {cart.map((item) => (
                <div key={item.id}>
                    <div className="item-card">
                        <div className="item-card_img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="cart-item-detail">
                            <h4 style={{ marginTop: 20}}>{item.title}</h4>
                            <hr/>
                            <h5 style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Precio unidad: ${item.precio}</h5>
                            <p style={{fontSize: '1.2rem' }}>Cantidad: {item.count}</p>
                            <h4>Precio total: ${item.precio * item.count}</h4>
                            <ButtonComponent colorFondo="#4d679b" onClick={() => removeItem(item.id)}>Eliminar</ButtonComponent>
                        </div>
                    </div>
                </div>
            ))}
            <div style={{alignItems:'center'}} className="cart-confirm">
                <h3>Total de la compra: ${calculateTotal()} </h3>
                <br/>
                <Link className="comprar" style={{textDecoration: 'none'}} to="/checkout">Comprar</Link>
            </div>
        </div>       
    );
}

export default CartContainer;