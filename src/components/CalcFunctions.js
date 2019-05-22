import React from 'react';
import Buttons from './Buttons/Buttons';
import ButtonsZero from './Buttons/ButtonZero';
import Operands from './Buttons/Operands';
import Functions from './Buttons/Functions';

const calcFunctions = (props) => {
    return(
        <div> 
            <Functions text="C"></Functions>
            <Functions text="+/-"></Functions>
            <Functions text="%"></Functions>
            <Operands text="÷"></Operands>
            <Buttons text="7"></Buttons>
            <Buttons text="8"></Buttons>
            <Buttons text="9"></Buttons>
            <Operands text="x"></Operands>
            <Buttons text="4"></Buttons>
            <Buttons text="5"></Buttons>
            <Buttons text="6"></Buttons>
            <Operands text="-"></Operands>
            <Buttons text="1"></Buttons>
            <Buttons text="2"></Buttons>
            <Buttons text="3"></Buttons>
            <Operands text="+"></Operands>
            <ButtonsZero text="0"></ButtonsZero>
            <Buttons text="."></Buttons>
            <Operands text="="></Operands>
        </div>
    );
}


export default calcFunctions;