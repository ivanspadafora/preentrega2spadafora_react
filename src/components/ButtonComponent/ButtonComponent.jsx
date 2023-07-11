import React from "react";

function ButtonComponent(props){
    const {children, colorFondo} = props;

    return(
        <button style={{ backgroundColor: colorFondo}}>{children}</button>
    )
    }

    export default ButtonComponent;