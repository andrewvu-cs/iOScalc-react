import React from 'react';
import Result from '../components/Result';
import CalcFunctions from '../components/CalcFunctions';

const calculator = (props) =>{
    return(
        <div>
            <Result></Result>
            <CalcFunctions></CalcFunctions>
        </div>
    );
}


export default calculator;