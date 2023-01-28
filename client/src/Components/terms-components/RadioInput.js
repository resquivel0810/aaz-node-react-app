import React from 'react';
import classes from './RadioInput.module.css'

export default function RadioInput({selected, onChange = f=> f, text, value}) {

    return(
        <>
            <div
                className={classes.modernRadioContainer}
                onClick={() => {onChange(value); console.log(value , typeof(selected),Object.values(value)[0] === Object.values(selected)[0])}}
            >
                <div
                    className={`${classes.radioOuterCircle } ${Object.values(value)[0] !== Object.values(selected)[0] && classes.unselected }`}
                    // style = {{transition: 'all 1s linear'}}
                >
                <div
                    className={`${classes.radioInnerCircle} ${Object.values(value)[0] !== Object.values(selected)[0] && classes.unselectedCircle}`}
                    // style = {{transition: 'all 1s linear'}}
                />
                </div>
                <div className={classes.helperText}>{text}</div>
            </div>
        </>
        
    );
}