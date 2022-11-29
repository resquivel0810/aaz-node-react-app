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
                placeholder={props.placeholder}
                disabled={props.disabled}
                required
            />
            <div className={props.errorDiv}>
                {props.errorMsg}
            </div>
        </div>
    );
};

export default Input;