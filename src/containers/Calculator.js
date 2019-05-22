import React, { useState } from 'react';
import Result from '../components/Result';
import CalcFunctions from '../components/CalcFunctions';

const calculator = (props) =>{

    // const [result, setResult] = useState(0);

    return(
        <div>
            <Result></Result>
            <CalcFunctions></CalcFunctions>
        </div>
    );
}


export default calculator;