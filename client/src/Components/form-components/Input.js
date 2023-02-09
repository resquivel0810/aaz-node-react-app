import React from 'react';

const Input = (props) => {
    return(
        <div style={{height:'55px'}}>
            {/* <label htmlFor="props.name" className="form-label">
                {props.title}
            </label> */}
            <input 
                type={props.type}
                className={` ${props.className}`}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                onKeyDown={props.handleKeyDown}
                onBlur={props.handleBlur}
                placeholder={props.placeholder}
                disabled={props.disabled}
                autoFocus={props.autoFocus}
                style={props.style}
                // required
                checked={props.checked}
                data-checked={props.checked}
                
            />
            <div className={props.errorDiv}>
                {props.errorMsg}
            </div>
        </div>
    );
};

export default Input;