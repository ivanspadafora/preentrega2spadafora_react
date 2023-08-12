import React from "react";

function ButtonComponent(props){
    const {children, colorFondo} = props;

    return(
        <button onClick={props.onClick} style={{ backgroundColor: colorFondo, padding: 5}}>{children}</button>
    );
};

export default ButtonComponent;