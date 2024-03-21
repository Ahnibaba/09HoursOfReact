import React from "react";
import { useRef } from "react";
import colorNames from "colornames"; 



const ProjectChallenge = ({ input, setInput, handleSubmit, hexValue, setHexValue, isDarkText, setIsDarkText}) => {
   
  const inputRef = useRef();

  return (
    <>
      <form className="projectDiv" onSubmit={handleSubmit}>
        

        
          <input
            autoFocus  
            ref={inputRef}
            type="text"
            placeholder="Add color name"
            required
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setHexValue(colorNames(e.target.value));
            }}
          />

          <button
             type="button"
             onClick={() => setIsDarkText(!isDarkText)}
          >
             Toggle Text Color 
          </button>
 
         
      </form>
    </>
  );
};

export default ProjectChallenge;
