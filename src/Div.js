import React from "react";

const Div = ({ input, hexValue, isDarkText }) => {
  return (
    <>
      
        <div 
          className="colorDiv"
          style={{
             backgroundColor: input,
             color: isDarkText ? "#000" : "#fff"

             }}
        >
            <p>{input ?  input : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null }</p>
        </div>
      
    </>
  );
};



export default Div;
