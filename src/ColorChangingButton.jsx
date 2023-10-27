import React, { useState } from 'react';
import "./index.css"

const ColorChangingButton = () => {
    const [background, setbackground] = useState(0);
    const backgrounds=[ 'white', 'Black' ,'Grey', 'red'];
const backgroundChange=()=>{
    if(backgrounds.length!= background){
        setbackground((background+1) , backgrounds.length)
    }
    else{
        setbackground(1)
}
};

    return(
        <div style={{backgroundColor:backgrounds[background]}}  ><button  onClick={backgroundChange}>click me!</button> 
        </div>

    )
  
};
export default ColorChangingButton;
