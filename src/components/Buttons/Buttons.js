import React from 'react';
import classes from './Buttons.module.css';

const buttons = (props) => {
    return(
        <div className = {classes.button}>
            <h1 className = {classes.text}>{props.text}</h1>
        </div>
    );
}

export default buttons;