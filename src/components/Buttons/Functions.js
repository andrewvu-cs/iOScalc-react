import React from 'react';
import classes from './Functions.module.css';

const functions = (props) => {
    return(
        <div className = {classes.button}>
            <h1 className={classes.text}>{props.text}</h1>
        </div>
    );
}

export default functions;