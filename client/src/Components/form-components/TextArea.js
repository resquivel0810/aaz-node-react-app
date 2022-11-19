import React from 'react';

const TextArea = (props) => {
    return(
        <div className="mb-3">
            <textarea
                type={props.type}
                className={` ${props.className}`}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            >

            </textarea>
        </div>
    );
};

export default TextArea;