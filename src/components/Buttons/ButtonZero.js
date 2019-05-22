import React from 'react';
import classes from './ButtonZero.module.css';

const buttonZero = (props) => {
    return(
        <div className = {classes.button0}>
            <h1 className={classes.text}>{props.text}</h1>
        </div>
    );
}

export default buttonZero;