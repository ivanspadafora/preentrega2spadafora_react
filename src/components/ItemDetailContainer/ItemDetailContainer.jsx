import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isAddToCart, setIsAddToCart] = useState (false);
  const { id } = useParams();

  const { addToCart, getItemInCart } = useContext(cartContext);
  // const itemInCart = getItemInCart(id);
  
  useEffect(() => {
    async function requestProduct() {
        try {
            const respuesta = await getProductData(id);
            setProduct(respuesta);
        } catch (error) {
            console.error("Error al cargar el producto:", error);
        }
    }
    requestProduct();
  },[id]);

  function handleAddToCart(clickCount){
    addToCart(product, clickCount);
    setIsAddToCart(true);

    toast.success('Producto añadido al carrito!', 
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
  }

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
                
              {product.stock > 0 ?                
              isAddToCart ? (
                <Link style={{textDecoration: "none", backgroundColor: "#4d679b",color: "white", padding: 15, fontSize: 20 }} to="/cart">Ir al carrito</Link>
              ):(
                <ItemCount onConfirm={handleAddToCart} stock={product.stock} />
              ):(
                <p>No hay stock disponible.</p>
              )}

              <br/>
              <br/>

              <Link to="/">
                <ButtonComponent>Volver al inicio</ButtonComponent>
              </Link>
          </div>
        </div>
    </>
  );
}

export default ItemDetailContainer;
