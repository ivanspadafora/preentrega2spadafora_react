import { useState, useEffect } from "react";
import { getCategoryData } from "../../services/firebase";
import { getData } from "../../services/firebase";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { Waveform } from "@uiball/loaders";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    
    const { categoryID } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        async function requestProducts() {
            let respuesta = categoryID
                ? await getCategoryData(categoryID)
                : await getData();
            setProducts(respuesta);
            setIsLoading(false);
        }

        requestProducts();
    }, [categoryID]);

    if (isLoading) {
        return <Waveform size={50} lineWeight={5} speed={1} color='black' />;
    } else {
        return products.length === 0 ? (
            <p>No hay productos disponibles.</p>
        ) : (
            <div className='flex-container'>
                {products.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        );
    }
}

export default ItemListContainer;