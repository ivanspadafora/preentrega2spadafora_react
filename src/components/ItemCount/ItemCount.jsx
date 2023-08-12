import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "../Item/item.css"

function ItemCount(props) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickAdd() {
    if (clickCount === props.stock) {
    } else {
      setClickCount(clickCount + 1);
    };
  };

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    };
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <button className="btn-handle p-1 mt-5 m-2" onClick={handleClickSub}>
          -
        </button>
          <h2>{clickCount}</h2>
        <button className="btn-handle p-1 mt-5 m-2" onClick={handleClickAdd}>
          +
        </button>
      </div>

      <ButtonComponent colorFondo="#4d679b"
        onClick={(event) => props.onConfirm(clickCount, event)}>

        <h5 className="btn-agregar p-1">Agregar al carrito</h5>

      </ButtonComponent>
      
    </div>
  );
};

export default ItemCount;