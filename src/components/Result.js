import React from 'react';
import classes from './Result.module.css';

const result = (props) => {
    return (
        <div className = {classes.Result}>
            <h1 className ={classes.text}>{props.value}</h1>
        </div>
    )
}


export default result;