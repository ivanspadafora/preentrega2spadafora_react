import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Checkout.css";

const MySwal = withReactContent(Swal)

function Checkout(){
    const [comprador, setComprador] = useState({
        firstname: "",
        lastname: "",
        age: "",
    });

    const { cart, calculateTotal, clearCart } = useContext(cartContext);
    const navigate = useNavigate();

    async function handleCheckout(evt){
        evt.preventDefault();
        const totalCompra = calculateTotal();

        const orderData = {
            items: cart,
            comprador: comprador,
            fecha: new Date(),
            total: totalCompra,
        }

        const idOrder = await createOrder(orderData);
        MySwal.fire({
            icon: 'success',
            title: 'Gracias por tu compra!',
            text: `Tu N° de Orden es: ${idOrder}`,
            showConfirmButton: false,
            timer: 5000,
            position: 'center',
        })

        clearCart();
        navigate("/");

        if (cart.length === 0) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "No hay productos en el carrito.",
            });
        };
    }


    function onInputChange(evt) {
        const value = evt.target.value;
        const field = evt.target.name;
        const newState = { ...comprador };
        newState[field] = value;
        setComprador(newState);
    }

    function resetForm(e) {
        e.preventDefault();
        setComprador({
        firstname: "",
        lastname: "",
        age: "",
        });
    }

  return (
    <form className="checkout-form" style={{textAlign: "center"}}>
      <h2>Completa tus datos para finalizar la compra.</h2>

        <div className="form" style={{ marginTop: 50, marginBottom: 8 }}>
            <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
            Nombre
            </label>
            <input
            className="input"
            value={comprador.firstname}
            name="firstname"
            type="text"
            onChange={onInputChange}
            />
        </div>

        <div className="form" style={{ marginBottom: 8 }}>
            <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
            Apellido
            </label>
            <input
            className="input"
            value={comprador.lastname}
            name="lastname"
            type="text"
            onChange={onInputChange}
            />
        </div>

        <div className="form" style={{ marginBottom: 8 }}>
            <label style={{ width: "100px", marginRight: 4 }}>
                Edad
            </label>
            <input
            className="input"
            value={comprador.age}
            name="age"
            type="number"
            onChange={onInputChange}
            />
        </div>

        <div className="btn-form">
            <button
                className="btn-confirm"
                disabled={!(comprador.firstname !== "" && comprador.lastname !== "" && comprador.age !== "")}
                onClick={handleCheckout}>
                Confirmar Compra
            </button>
            <button className="btn-cancel" onClick={resetForm}>Cancelar</button>
        </div>

    </form>
  );
};

export default Checkout;