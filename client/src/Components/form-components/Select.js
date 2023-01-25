import React, { useState } from 'react';
import classes from './Select.module.css'

const Select = ({onSelected=s=>s, defaultValue, selectedOption,options, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = selectedOption => () => {
        setIsOpen(false);
        onSelected(selectedOption)
    
    };
    
    return (
        <>
            <div className={classes.dropDownContainer} {...props}>
                <div className={classes.dropDownHeader} onClick={toggling}>
                    <div style={{padding: '0 15px'}}>{selectedOption || defaultValue}</div> 
                    <div style={{padding: '0 15px'}}>
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-2.40348e-07 0.645339C-2.34636e-07 0.514648 0.0318497 0.383945 0.106151 0.266323C0.275982 -0.0211985 0.615642 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04247 7.87594 8.04247 7.68488 7.87258L0.222894 1.18118C0.0849064 1.05049 -2.49488e-07 0.854418 -2.40919e-07 0.658381L-2.40348e-07 0.645339Z" fill="#B66A00"/>
                    </svg>
                    </div>
                </div>
                {isOpen && (
                    <div className={classes.dropDownListContainer}>
                        <ul className={classes.dropDownList}>
                        {options.map(option => (
                            <li style={{backgroundColor: option === selectedOption? 'rgba(182, 106, 0, .25)' : null}} className={classes.listItem} onClick={onOptionClicked(option)} key={Math.random()}>
                                <span>{option}</span>
                            </li>   
                        ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )

}

export default Select