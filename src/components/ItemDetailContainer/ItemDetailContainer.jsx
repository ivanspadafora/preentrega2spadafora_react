import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function requestProduct() {
    const respuesta = await getProductData(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <>
        <div className="item-card">
            <div className="item-card_img">
                <img src={product.img} alt="imagen"></img>
            </div>
            <div className="item-card_header">
                <h2>{product.title}</h2>
            </div>
            <div className="item-card_detail">
                <h4>$ {product.precio}</h4>
                <span>Stock: {product.stock}</span>
            </div>
        </div>
    </>
  );
}

export default ItemDetailContainer;
