import React from 'react';

const Input = (props) => {
    return(
        <div>
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
                placeholder={props.placeholder}
                disabled={props.disabled}
                autoFocus={props.autoFocus}
                style={props.style}
                required
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