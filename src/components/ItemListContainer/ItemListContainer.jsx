import { useState, useEffect } from "react";
import getData, { getCategoryData } from '../../services/asyncMock';
import Item from "../Item/Item";
import { useParams } from "react-router-dom";



function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const {categoryID} = useParams();

    async function requestProducts(){
        
        let respuesta = categoryID ? await getCategoryData(categoryID) : await getData();
        let productos = categoryID ? respuesta.categoryRequested : respuesta.productos;
        setProducts(productos);
        }

    useEffect(() => {
        requestProducts();
      }, []);
    

    return (
        <div>
            <div className="center-container">
            <h2>Listado de Productos</h2>
                <div className="flex-container">
                    {products.map((item) => (
                    <Item key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
};


export default ItemListContainer;