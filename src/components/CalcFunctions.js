import React from 'react';
import Buttons from './Buttons/Buttons';

const calcFunctions = (props) => {
    return(
        <div> 
            <Buttons text="C"></Buttons>
            <Buttons text="+/-"></Buttons>
            <Buttons text="%"></Buttons>
        </div>
    );
}


export default calcFunctions;