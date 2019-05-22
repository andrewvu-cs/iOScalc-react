import React from 'react';
import classes from './Operands.module.css';

const operands = (props) => {
    return(
        <div className={classes.operands}>
            <h1 className={classes.text}>{props.text}</h1>
        </div>
    );
}

export default operands;