import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function ItemCount(props) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickAdd() {
    if (clickCount === props.stock) {
    } else {
      setClickCount(clickCount + 1);
    }
  }

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="item-count-container">
        <button className="item-count-button p-1 mt-5 m-2" onClick={handleClickSub}>
          -
        </button>
          <h2 className="count-text">{clickCount}</h2>
        <button className="item-count-button p-1 mt-5 m-2" onClick={handleClickAdd}>
          +
        </button>
      </div>

      <br />

      <ButtonComponent colorFondo="#4d679b"
        onClick={(event) => props.onConfirm(clickCount, event)}
        className="item-count-button add-to-cart-button">

        <h5 className="p-1">Añadir al carrito</h5>

      </ButtonComponent>
      
    </div>
  );
}

export default ItemCount;