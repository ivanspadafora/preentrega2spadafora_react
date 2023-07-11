import { useState, useEffect } from "react";
import getData from "../../services/asyncMock";
import Item from "../Item/Item";

function ItemListContainer() {
    // 1. Obtener de forma asíncrona los datos del ecommerce
    // 2. Guardamos la respuesta en un Estado -->useState
    // 3. Usamos el key para el map.
    // 4. Hacer un llamado a getData en un effect.

    const [productos, setProductos] = useState([]);

    async function requestProductos(){
        const respuesta = await getData();
        setProductos(respuesta)
    }

    useEffect(() => {
        requestProductos();
    }, []);
    

    return (
        <div>
            <h1>Listado de Productos</h1>
            <div className="productosContainer">
                {productos.map((item) => (
                    <Item key={item.id} {...item}/>
                ))}
            </div>
        </div>
    )
};

export default ItemListContainer;