import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../services/firebase';
import { or } from 'firebase/firestore';

function OrderConfirm() {
    const [orderData] = useState(null)
    const { id } = useParams();

    useEffect(() =>{
        getOrder(id).then((order) => {
            setOrderData(order);
        });
    }, []);

    return <div>
        <h1>¡Gracias por tu compra!</h1>
        {
            orderData !== null ? (
            <div>
                Fecha de la compra:
                <p>Productos adquiridos: {" "}
                {orderData.items.map((item)=> {
                    return (
                    <small>
                        {item.title} : {item.count} unidades
                    </small>
                    );
                })};
                </p>
            </div>
            ) : (
                <p>Cargando</p>
            )
        }
        </div>
}

export default OrderConfirm;