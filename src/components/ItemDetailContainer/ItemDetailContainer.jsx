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
        <div className="item-detail-container">
            <div className="item-card-d">
                <div className="item-card_img-d">
                    <img src={product.img} alt="imagen"></img>
                </div>
                <div className="item-card_header-d">
                    <h3>{product.title}</h3>
                </div>
                <div className="item-card_detail-d">
                    <h4>$ {product.precio}</h4>
                    <span>Stock: {product.stock}</span>
                </div>
            </div>
        </div>
    </>
  );
}

export default ItemDetailContainer;
