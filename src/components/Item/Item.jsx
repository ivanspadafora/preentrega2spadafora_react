import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./item.css";

function Item(props) {
    const {title, img, stock, precio, id} = props;

    return (
        
    <div className="item-card">
        <div className="item-card_img">
            <img src={img} alt="imagen"></img>
        </div>
        <div className="item-card_header">
          <h3>{title}</h3>
        </div>
        <div className="item-card_detail">
            <h4>$ {precio}</h4>
            <span>Stock: {stock}</span>
        </div>
        <Link to={`/product/${id}`}>
            <ButtonComponent colorFondo="#4d679b">Ver Producto</ButtonComponent>
        </Link>
    </div>
    );
};


export default Item;