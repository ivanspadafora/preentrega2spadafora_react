import ButtonComponent from "../ButtonComponent/ButtonComponent";
//  import "./item.css";

function Item(props) {
    const {title, img, stock, precio} = props;

    return (
        
    <div className="item-card">
        <div className="item-card_header">
            <h2>{title}</h2>
        </div>
        <div className="item-card_img">
            <img src={img} alt="Producto" />
        </div>
        <div className="item-card_detail">
            <small>{stock}</small>
            <p>{precio}</p>
        </div>
        <ButtonComponent colorFondo="blue">Ver Producto</ButtonComponent>
    </div>
    );
};

export default Item;