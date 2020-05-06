import React from "react";
const Scroll=(prop)=> {
    return (
        <div style={{ overflowY : "scroll",  height: "500px"}}>
        {prop.children}
        </div>

    )

}



export default Scroll