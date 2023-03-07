import React, {Component, Fragment, useEffect, useState} from 'react';
import WebHeader from '../../WebHeader';
import WebFooter from '../../WebFooter'
import Button from "../form-components/Button";
import textureImage from '../../Images/AAZ-DesktopBackGreen.png';
import PasswordValidation from './ui-login-components/PasswordValidation';

// export default function ResetPassword2(props) {
    
//     const [cwpdData, setCpwdData] = useState({
//         id: '',
//         pwd: ''
//     })

//     useEffect(() => {
//         fetch(`https://accounting.linarys.com/v1/getid/${props.match.params.id}`, {method: "GET"})
//         .then(response => response.json())
//         .then(data => {

//             console.log(data.ID)
//             setCpwdData((prevState) => ({
//                 ...prevState,
//                 id: data.ID
//             }))  
            
//         })
//     }, [])

//     const handleChange = (evt) => {
       
//         let value = evt.target.value;
//         let name = evt.target.name;
//         setCpwdData((prevState) => ({
//             ...prevState,
//             [name]: value,  
//         }))
//     }

//     const handleSubmit = (evt) => {

//         evt.preventDefault();

//         const requestOptions = {
//             method: "POST",
//             body: JSON.stringify(cwpdData),
//         };

        
//         fetch('https://accounting.linarys.com/v1/cpwd/', requestOptions)


 
        

//     }

//     return(
//         <>
//             <WebHeader />
//                 <div className="bg_forgotPassword">
//                     <div className="container position-relative">
//                         <div className="forgotPassword_box">
//                             <img src={textureImage} alt="" className="" />
//                             <div>
//                                 <h3 className='text-center mb-4'>Reset your password</h3>
//                                 <div className='center-grid'>
//                                     <form onSubmit={handleSubmit}>
//                                         <PasswordValidation 
//                                             title = {"Password"}
//                                             type = {"password"}
//                                             name = {"pwd"}
//                                             placeholder = {"New Password"}
//                                             value = {cwpdData.pwd}
//                                             handleChange = {handleChange}
//                                         />
//                                         <div className='py-4'>
//                                             <Button
//                                                 title={"Reset"}
//                                                 className={"ochre"}
//                                             />
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <WebFooter />
//         </>
//     )

// }

export default class ResetPassword extends Component{
    state = {
        user: {}, 
        isLoaded: false,
    }

    constructor(props){
        super(props);
        this.state = {
            user: {
                idU: "",
                pwd: "",
            },
            isLoaded: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (evt) => {
        const iduser = this.state.user.idU
        console.log("Form was submited", "ID:", iduser);
        
        evt.preventDefault();

        // CLIENT SIDE VALIDATION
        let errors = [];
        if(this.state.user.pwd === ""){
            errors.push("password");
        }

        this.setState({errors: errors});

        if(errors.length > 0) {
            return false;
        }

        const data = new FormData(evt.target);
        const payload = Object.fromEntries(data.entries());
        // this.state.user.idU = iduser.ID
        
        payload.id = ""+iduser.ID
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
        };

        this.setState({
            user: {
                idU: iduser.ID,
                pwd: this.state.user.pwd
            }
         })

        // console.log(this.state.user)
        

        // console.log(payload.id)
        // requestOptions.body = JSON.stringify(payload)
        console.log(payload)
        console.log(requestOptions)
      
        

        fetch('https://accounting.linarys.com/v1/cpwd/', requestOptions)
            .then(response => response.json())
            .then(data => {
                
                if(data.error){
                    console.log("Error");
                }else{
                    console.log(data);
                    console.log(payload)

                    // fetch('https://accounting.linarys.com/v1/closecode/' + this.props.match.params.id, {method: "GET"})
                    // window.location.href='/confirmationforgotpasswordmail'
                }
            })
            



    }

    handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;
        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value,
            }
        }))
    }

    componentDidMount(){

        // fetch(`https://accounting.linarys.com/v1/confirm/` + this.props.match.params.id, {method: "GET"})
        //     console.log(this.props.match.params.id)

       
        // fetch(`https://accounting.linarys.com/v1/getid/` + this.props.match.params.id, {method: "GET"})
        //     .then(response => response.json())
        //     .then(data => {
                
        //         if(data.erro){
        //             console.log("Error");
        //         }else{
        //             console.log(data);
        //             // user.id = data;
                    
        //             this.setState({
        //                 user: {
        //                     idU: data,
        //                 }
        //             })

        //             if (data.ID === 0){
        //                 window.location.href='/login'
        //             }
        //         }
        //     });
    }

    render(){
        let { user} = this.state;
        return(
            <Fragment>
                <WebHeader />
                <div className="bg_forgotPassword">
                    <div className="container position-relative">
                        <div className="forgotPassword_box">
                            <img src={textureImage} alt="" className="" />
                            <div>
                                <h3 className='text-center mb-4'>Reset your password</h3>
                                <div className='center-grid'>
                                    <form onSubmit={ this.handleSubmit }>
                                        <PasswordValidation 
                                            title = {"Password"}
                                            type = {"password"}
                                            name = {"pwd"}
                                            placeholder = {"New Password"}
                                            value = {user.pwd}
                                            handleChange = {this.handleChange}
                                        />
                                        <div className='py-4'>
                                            <Button
                                                title={"Reset"}
                                                className={"ochre"}
                                            />
                                        </div>
                                    </form>
                                    {/* <div>
                                        <pre>{JSON.stringify(this.state,null,3)}</pre>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <WebFooter />
            </Fragment>
        );
    }
}
