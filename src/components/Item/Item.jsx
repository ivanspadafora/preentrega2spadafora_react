import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./item.css";

function Item(props) {
    const {title, img, stock, precio, id} = props;

    return (
        <div className="item-card-i">
            <div className="item-card_img-i">
                <img src={img} alt="imagen"></img>
            </div>
            <div className="item-card_header-i">
                <h3>{title}</h3>
            </div>
            <div className="item-card_detail-i">
                <h4>$ {precio}</h4>
                <h5>Stock: {stock}</h5>
            </div>
            <Link to={`/product/${id}`}>
                <ButtonComponent colorFondo="#4d679b">Ver Producto</ButtonComponent>
            </Link>
        </div>
    );
};

export default Item;