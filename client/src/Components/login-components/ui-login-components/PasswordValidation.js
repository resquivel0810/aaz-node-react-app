import React, {useState} from 'react';
import PasswordChecklist from "react-password-checklist";

const PasswordValidation = (props) => {
    const [password, setPassword] = useState("")
	const [passwordAgain, setPasswordAgain] = useState("")

    return(
        <div>
            <div className='py-2 input-group'>
                <input 
                    value={password} 
                    placeholder={props.placeholder} 
                    type={props.type} 
                    onChange={e => setPassword(e.target.value)} 
                    onInput={props.handleChange}
                    name={props.name}
                    required
                >
                </input>

            </div>
            <div className='py-2'>
                <input placeholder='Confirm new password' type="password" onChange={e => setPasswordAgain(e.target.value)}></input>
            </div>
            <div className='center-grid'>
                <PasswordChecklist 
                    rules={["minLength","specialChar","number","capital","match"]}
                    minLength={8}
                    value={password}
                    valueAgain={passwordAgain}
                    onChange={(isValid) => {}}
                    iconSize={14}
                    validColor={"#B66A00"}
                    invalidColor={"#F33757"}
                />
            </div>
        </div>
    );
};

export default PasswordValidation;