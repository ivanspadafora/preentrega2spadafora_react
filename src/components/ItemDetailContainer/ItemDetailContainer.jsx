import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isAddToCart, setIsAddToCart] = useState(false);
  const { id } = useParams();

  const { addToCart } = useContext(cartContext);

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
  }, [id]);

  function handleAddToCart(clickCount) {
      addToCart(product, clickCount);
      setIsAddToCart(true);

      toast.success('Producto añadido al carrito!', {
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
      <div className="item-detail-container">
          <div className="item-card-d">
              <div className="item-card_img-d">
                  <img src={product.img} alt="imagen"></img>
              </div>
              <div className="item-card-content">
                  <div className="item-card_header-d">
                      <h3>{product.title}</h3>
                  </div>
                  <div className="item-card_detail-d">
                      <h4>$ {product.precio}</h4>
                      <h5>Stock: {product.stock}</h5>
                  </div>
                  {product.stock > 0 ?
                      isAddToCart ? (
                          <Link className="btn-carrito" to="/cart">Ir al carrito</Link>
                       ):(
                          <ItemCount onConfirm={handleAddToCart} stock={product.stock} />
                       ):(
                          <p>No hay stock disponible.</p>
                       )
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;

