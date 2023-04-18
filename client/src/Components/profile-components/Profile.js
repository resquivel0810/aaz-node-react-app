import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../../AppHeader';
import AppFooter from '../../AppFooter';
import Input from '../form-components/Input';
import RadioInput from '../terms-components/RadioInput';
import profileImage from '../../Images/profile_image.jpg';
import styles from "./Modal.module.css";

import Toast from "../toast/Toast"

import classes from './Profile.module.css'


// REACT COFNRM ALERT 
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import Compressor from 'compressorjs';

import { useState,useEffect, useRef } from 'react'




export default function Profile2(props) {
    const [user, setUser] = useState({
        id: 0,
        username: "",
        name: "",
        lastname: "",
        email: "",
        picture: profileImage,
    })
    const [alert, setAlert] = useState({
        type:"d-none",
        message: "",
    })
    const [jwt, setJwt] = useState("")
    const [editName, setEditName] = useState(false)
    const [editLastName, setEditLastName] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editUsername, setEditUsername] = useState(false)
    const [lastEdited ,setLastEdited] =useState('none')
    const [toastVisible, setToastVisible] = useState(false)
    const [photo, setPhoto ] = useState(profileImage);
    const [credentials, setCredentials] = useState({
        pwd: '',
        txt: ''
    })
    const [isOpenPhotoModal, setIsOpenPhotoModal] = useState(false);
    const [isOpenModalChangePass, setIsOpenModalChangePass] = useState(false);
    const [isOpenModalChangeEmail, setIsOpenModalChangeEmail] = useState(false);
    const [toastProperties, setToastProperties] = useState([])
    const [isOpenModalDeleteAccount, setIsOpenModalDeleteAccount] = useState(false);

    const [passwordShown, setPasswordShown] = useState(false);
    const [enteredPwdTouched, setEnteredPwdTouched] = useState(false);
    
    const initError = {
        exists: false,
        helperText: null,
    };
    const [pwdError, setPwdError] = useState(initError);

    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
    const [enteredUserNameTouched, setEnteredUserNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const [nameError, setNameError] = useState(initError);
    const [lastNameError, setLastNameError] = useState(initError);
    const [userNameError, setUserNameError] = useState(initError);
    const [emailError, setEmailError] = useState(initError);
    const [deleteReasonError, setDeleteReasonError] = useState(initError)

    const [searchBarDisplayed, setSearchBarDisplayed] = useState(false)
    const [selected, setSelected] = useState("");

    const [mobile, setMobile] = useState(false)


    useEffect(() => {
        window.innerWidth < 900 ? setMobile(true) : setMobile(false)
        let t = window.localStorage.getItem("jwt");
        
        if(t === null){
            props.history.push({
                pathname: "/",
            });
            return;
        } else {
            try {
                const getInfo = async () => {
                    await fetch("https://accounting.linarys.com/v1/user/" + window.localStorage.getItem("id"))
                        .then((response) => {
                            if(response.status !== "200"){
                                let err = Error;
                                err.Message = "Invalid response code: " + response.status;
                            }
                            return response.json();
                        })
                        .then((json) => {
                            setUser({
                                id: window.localStorage.getItem("id"), 
                                username: json.user.username,
                                name: json.user.name,
                                lastname: json.user.lastname,
                                email: json.user.email,
                                picture: json.user.picture,
                                account: json.user.account.toString(),
                                token: window.localStorage.getItem("jwt")
                            })
                            setCredentials({
                                pwd: '',
                                txt: json.user.email,
                            })
                            window.localStorage.setItem("userName", json.user.username);
                            window.localStorage.setItem("name", json.user.name);
                            window.localStorage.setItem("lastname", json.user.lastname);
                            window.localStorage.setItem("email", json.user.email);

                        })
                }
                getInfo()
            } catch (error) {
                console.log(error)
            }
        } 
    
        

    }, []);

    useEffect(() => {
        window.localStorage.getItem("lastname")
        if (!user.name && enteredNameTouched) {
            setNameError({
              exists: true,
              helperText: "Write your name",
            });
        } else {
            setNameError({
              exists: false,
              helperText: null,
            });
        }
        if (!user.lastname && enteredLastNameTouched) {
            setLastNameError({
              exists: true,
              helperText: "Write your last name",
            });
        } else {
            setLastNameError({
              exists: false,
              helperText: null,
            });
        }
        if (!user.username && enteredUserNameTouched) {
            setUserNameError({
              exists: true,
              helperText: "Write your user name",
            });
        } else {
            setUserNameError({
              exists: false,
              helperText: null,
            });
        }
        
        if (!user.email && enteredEmailTouched) {
            setEmailError({
              exists: true,
              helperText: "Write your email",
            });
        } 
        else if(user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === null && user.email !== '') {
            setEmailError({
                exists: true,
                helperText: "Write a valid email",
              });
        } 
        else {
            setEmailError({
              exists: false,
              helperText: null,
            });
        }


        if (!credentials.pwd && enteredPwdTouched) {
            setPwdError({
              exists: true,
              helperText: "Write your password",
            });
        } else {
            setPwdError({
              exists: false,
              helperText: null,
            });
        }

    }, [credentials, enteredPwdTouched, user, enteredNameTouched, enteredLastNameTouched, enteredUserNameTouched, enteredEmailTouched])

    const pwdBlurHandler = (e) => {
        setEnteredPwdTouched(true);
    };

    function useOutsideAlerter(ref) { 
        useEffect(() => {
            // if (lastEdited === "name") {
            //     setUser((prevState) => ({
            //         ...prevState,
            //         "name": window.localStorage.getItem("name"),
            //     }));
            //     setEditName(false);
            // }
            // if (lastEdited === "lastname") {
            //     setUser((prevState) => ({
            //         ...prevState,
            //         "lastname": window.localStorage.getItem("lastname"),
            //     }));
            //     setEditLastName(false) ;
            // }
            // if (lastEdited === "email") {
            //     setUser((prevState) => ({
            //         ...prevState,
            //         "email": window.localStorage.getItem("email"),
            //     }));
            //     setEditEmail(false); 
            // } 
         
           // Alert if clicked on outside of element
          function handleClickOutside(event) {
            
                
            if (ref.current && !ref.current.contains(event.target) ) {
                setEditName(false);
                setEditLastName(false);
                setEditEmail(false);
                setEditUsername(false);

            }
          
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }

    const wrapperRef= useRef(null);
    useOutsideAlerter(wrapperRef);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
 
    

    const handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;

        // console.log(evt.target.name)
        setLastEdited(evt.target.name)
        window.localStorage.setItem("lastEdited", evt.target.name);

        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePassChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;

        // console.log(evt.target.name)

        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        
    };


    const handleSubmit = (evt) => {
        
        // evt.preventDefault();

        const requestOptions = {
            method: 'POST', 
            body: JSON.stringify(user),
        }

        if(lastEdited === 'name' && user.name === '') {
            setEnteredNameTouched(true);
            setEditName(true)
            return
        } else if (lastEdited === 'name' && user.name !== '') {
            fetch('https://accounting.linarys.com/v1/updateuserlog/', requestOptions)
            .then(data => {
                setToastVisible(true)
                setInterval(() => {
                    setToastVisible(false)
                }, 5000)
                if (data.status === 200){
                    window.localStorage.setItem("name", JSON.parse(requestOptions.body).name);
                    setToastProperties({
                        description: `YOUR ${lastEdited.toUpperCase()}`,
                        borderColor: '#8DD037',
                        icon: 'icon-success'
                    })
                    setEditName(false)
                }else{
                    console.log(data.status)
                }
            })
        }
        if(lastEdited === 'lastname' && user.lastname === '') {
            setEnteredLastNameTouched(true)
            setEditLastName(true)
            return
        } else if (lastEdited === 'lastname' && user.lastname !== '') {
            fetch('https://accounting.linarys.com/v1/updateuserlog/', requestOptions)
            .then(data => {
                console.log(typeof(requestOptions.body))
                console.log(JSON.parse(requestOptions.body).lastname)
                setToastVisible(true)
                setInterval(() => {
                    setToastVisible(false)
                }, 5000)
                if (data.status === 200){
                    window.localStorage.setItem("lastname", JSON.parse(requestOptions.body).lastname);
                    setToastProperties({
                        description: `YOUR ${lastEdited.toUpperCase()}`,
                        borderColor: '#8DD037',
                        icon: 'icon-success'
                    })
                    setEditLastName(false)
                    
                }else{
                    console.log(data.status)
                }
            })
           
        }
        if(lastEdited === 'email') {
            if(user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === null){
                setEmailError({
                    exists: true,
                    helperText: "Write a valid email",
                  });
            } else if (user.email === '') {
                setEmailError({
                    exists: true,
                    helperText: "Write your email",
                });
            } 
            else {
                console.log('The eamil was edited')
                let newMail = {
                    id: window.localStorage.getItem("id"),
                    email: user.email,
                    token: window.localStorage.getItem("jwt")
                }
                const mailRequestOptions = {
                    method: 'POST', 
                    body: JSON.stringify(newMail),
                }
                fetch('https://accounting.linarys.com/v1/changeemail/', mailRequestOptions)
                fetch('https://accounting.linarys.com/v1/updateuserlog/', requestOptions)
                .then(data => {
                    setToastVisible(true)
                    setInterval(() => {
                        setToastVisible(false)
                    }, 5000)
                    if (data.status === 200){
                        window.localStorage.setItem("email", JSON.parse(requestOptions.body).email);
                        
                        setToastProperties({
                            description: `YOUR ${lastEdited.toUpperCase()}`,
                            borderColor: '#8DD037',
                            icon: 'icon-success'
                        })
                            
                        
                    }else{
                        console.log(data.status)
                    }
                })
                setEmailError({
                  exists: false,
                  helperText: null,
                });
            }
            

        } else if(lastEdited === 'username') {
            fetch(`https://accounting.linarys.com/v1/verifyuser/${user.username}`)
                .then(data => data.json())
                .then(data => {
                    console.log(data.ID)
                    if (data.ID === 0) {
                        fetch('https://accounting.linarys.com/v1/updateuserlog/', requestOptions)
                        .then(data => {
                            setToastVisible(true)
                            setInterval(() => {
                                setToastVisible(false)
                            }, 5000)
                            if (data.status === 200){
                                window.localStorage.setItem("userName", JSON.parse(requestOptions.body).username);
                                setToastProperties({
                                    description: `YOUR ${lastEdited.toUpperCase()}`,
                                    borderColor: '#8DD037',
                                    icon: 'icon-success'
                                })
                                setEditUsername(false);
                            }else{
                                console.log(data.status)
                            }
                        })   
                    } else {
                        setUserNameError({
                            exists: true,
                            helperText: "User name in use, choose another one",
                        });



                    }
                })

        } else {
            fetch('https://accounting.linarys.com/v1/updateuserlog/', requestOptions)
            .then(data => {
                setToastVisible(true)
                setInterval(() => {
                    setToastVisible(false)
                }, 5000)
                if (data.status === 200){
                    setToastProperties({
                        description: `YOUR ${lastEdited.toUpperCase()}`,
                        borderColor: '#8DD037',
                        icon: 'icon-success'
                    })

                }else{
                    console.log(data.status)
                }
            })
        }

        // fetch('https://accounting.linarys.com/v1/updateuserlog/', requestOptions)
        //     .then(data => {
        //         setToastVisible(true)
        //         console.log()
           
        //         setInterval(() => {
        //             setToastVisible(false)
        //         }, 5000)
                 
        //         if (data.status === 200){
        //             console.log(data)
                    
        //             setToastProperties({
        //                 description: `YOUR ${lastEdited.toUpperCase()}`,
        //                 borderColor: '#8DD037',
        //                 icon: 'icon-success'
        //             })
                           
                    
        //         }else{
        //             console.log(data.status)
        //         }
        //     }
        // )
           
    }

    const logout = () => {
        fetch('https://accounting.linarys.com/v1/removeactiveuser/',{
            method: 'GET', 
        })
        setJwt("");
        // REMOVE TOKEN 
        window.localStorage.removeItem("jwt");
    }



    const confirmDelete = () => {
        if (selected === "") {
            setDeleteReasonError({
                exists: true,
                helperText: "Must choose an option",
            })
            return 

        }
        let deleteData = {
            id: user.id,
            token: window.localStorage.getItem("jwt")
        }
        let saveReasonData = {
            id: user.id,
            reason: selected[0]
        }
        fetch("https://accounting.linarys.com/v1/savereason/",{
            method: "POST",
            body: JSON.stringify(saveReasonData)
        })
        fetch("https://accounting.linarys.com/v1/deleteaccount/", 
        {
            method: "POST",
            body: JSON.stringify(deleteData)
        })
            .then(response => response.json)
            .then(data => {
                props.history.push({
                    pathname: "/",
                })
                window.localStorage.removeItem("jwt");
            })
    }

    

    const handleImage = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST', 
            // mode:"no-cors",
            headers: {
                // Content-Type may need to be completely **omitted**
                // or you may need something
                // "Content-Type": "image/png",
                // "enctype": "multipart/form-data"
              },
            body: JSON.stringify({
                "imge": user.picture,
            })
        }

        fetch('https://accounting.linarys.com/v1/porfilepic/', requestOptions)
            .then(response => response.json())
            // .then(data => {
            //     if (data.error){
            //         setAlert({
            //             type: "alert-danger", 
            //             message: data.error.message,
            //         })
            //     }else{
            //         console.log("DONE")
            //     }
            // })
    }

   


    // const ModalPhoto = ({ setIsOpen }) => {
    //     return (
    //         <>
    //             <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
    //             <div className={styles.centered}>
    //                 <div className={styles.modal}>
    //                     <button style={{display:'flex', width:'100%', justifyContent:'flex-end', padding:'5px'}} className='none' onClick={() => setIsOpen(false)}>
    //                         <i className='icon ms-1 icon-close'></i> 
    //                     </button>

    //                     <div>
    //                     <div className={styles.modalHeader}>
    //                         <h5 className={styles.heading}>Upload picture</h5>
    //                     </div>
    //                     <div style={{display:'flex', justifyContent: 'center'}}>
    //                         <input 
    //                             id='file-input'
    //                             className={styles.fileInput}
    //                             type={"file"}
    //                             name={"picture"}
    //                             onChange={(event) => {
    //                                 console.log(event.target.files[0])
    //                                 // var data = new FormData()

    //                                 setPhoto(event.target.files[0])
                                    
    //                                 var reader = new FileReader();
    //                                 reader.readAsDataURL(event.target.files[0]);
    //                                 reader.onload = function () {
    //                                     console.log(reader.result);

    //                                     // console.log(window.atob(reader.result))
                                        
    //                                     // let compressed = new Compressor(window.atob(reader.result), {
    //                                     //     quality: 0.6,})
    //                                     // console.log(compressed)


                                        
    //                                     let name = event.target.name;
    //                                     setUser((prevState) => ({
    //                                         ...prevState,
    //                                         [name]: reader.result,
    //                                     }));
    //                                 };
    //                             }}
    //                         />
    //                         <label className={styles.fileInputLabel} for="file-input">
    //                             <i className='icon ms-1 icon-upload'></i> 
    //                             <span>SELECT A PICTURE</span>
    //                         </label>
    //                     </div>
                            
                        
    //                     <div style={{display:'flex', justifyContent: 'space-around'}} >
    //                         <button
    //                             style={{width:'unset'}}
    //                             className='snow'
    //                             onClick={() => setIsOpen(false)}
    //                         >
    //                             Cancel
    //                         </button>
    //                         <button  
    //                             style={{width:'unset'}}
    //                             onClick={handleSubmit} 
    //                             className="ochre"
    //                         >
    //                             UPLOAD
    //                         </button>
    //                     </div>
    //                     </div>
                        
                        
    //                 </div>
    //             </div>
    //         </>
    //     );
    // };

    const ModalDeleteAccount = ({ setIsOpen }) => {
        return (
            <>
            <div className={styles.darkBG} onClick={() => {setIsOpen(false); setDeleteReasonError(initError)}} />
                <div className={styles.centered}>
                    <div style={{height: '400px', width:'290px', padding:'0 10%', fontFamily:'Roboto', backgroundColor:'#F5F5F6'}} className={styles.modal}>
                        <button style={{display:'flex', width:'100%', justifyContent:'flex-end', padding:'5px'}} className='none' onClick={() => {setIsOpen(false); setDeleteReasonError(initError)}}>
                            <i className='icon ms-1 icon-close'></i> 
                        </button>

                        <div>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={styles.modalHeader}>
                                <i style={{color:'#4FB8A8', fontSize:'3rem'}} className='icon ms-1 icon-warning'></i> 
                            </div>
                            <div style={{display:'flex', justifyContent: 'center', marginTop: '10px'}}>
                                <h5 style={{fontSize:'14px', padding:'0', marginBottom:'10px', fontWeight:'600'}} className={styles.heading}>
                                    Are you sure you want to delete your account?
                                </h5>
                            </div>
                        
                        </div>
                        <div>
                            <h5 style={{fontSize:'14px', padding:'0', marginBottom:'10px', fontWeight:'600'}} className={styles.heading}>Why are you deleting your account?</h5>
                            <div style={{fontSize:'14px'}}>
                                <RadioInput 
                                    value={["I don´t use the app"]}
                                    selected={selected}
                                    text="I don´t use the app"
                                    onChange={(val) => {setSelected(val)}}
                                />
                                <RadioInput 
                                    value={["You send to many e-mails"]}
                                    selected={selected}
                                    text="You send to many e-mails"
                                    onChange={(val) => {setSelected(val)}}
                                />
                                <RadioInput 
                                    value={["I receive too many notifications"]}
                                    selected={selected}
                                    text="I receive too many notifications"
                                    onChange={(val) => {setSelected(val)}}
                                />
                                <RadioInput 
                                    value={["The app is not usefull"]}
                                    selected={selected}
                                    text="The app is not usefull"
                                    onChange={(val) => {setSelected(val)}}
                                />
                                <RadioInput 
                                    value={["Something else"]}
                                    selected={selected}
                                    text="Something else"
                                    onChange={(val) => {setSelected(val)}}
                                />

                                <div style={{height:'18px'}} className={deleteReasonError.exists ? "text-danger" : "no-danger"}>{deleteReasonError.helperText}</div>
                            </div>
                        </div>
                        <div style={{display:'flex', justifyContent: 'space-around', marginTop:'25px'}} >
                            <button  
                                style={{width:'unset'}}
                                onClick={() => confirmDelete()}
                                className="snow"
                            >
                                
                                    I´M SURE
                                
                            </button>
                            <button
                                style={{width:'unset'}}
                                className='ochre'
                                onClick={() => {setIsOpen(false); setDeleteReasonError(initError)}}
                            >
                                Cancel
                            </button>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </>
        );
    };

    const ModalChangePass = ({ setIsOpen }) => {
        return (
            <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
                <div className={styles.centered}>
                    <div className={styles.modal}>
                        <button style={{display:'flex', width:'100%', justifyContent:'flex-end', padding:'5px'}} className='none' onClick={() => setIsOpen(false)}>
                            <i className='icon ms-1 icon-close'></i> 
                        </button>

                        <div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={styles.modalHeader}>
                            <i style={{color:'#4FB8A8', fontSize:'3rem'}} className='icon ms-1 icon-alert'></i> 
                        </div>
                        <div style={{display:'flex', justifyContent: 'center', marginBottom: '25px', marginTop: '10px'}}>
                            <h5  className={styles.heading}>
                                Are you sure you want to change your password?
                            </h5>
                        </div>
                            
                        
                        <div style={{display:'flex', justifyContent: 'space-around'}} >
                            <button  
                                style={{width:'unset'}}
                                
                                className="snow"
                            >
                                <Link
                                    to={'/changePassword'}
                                    className='link'
                                    style={{textDecoration: 'none'}}
                                >
                                    I´M SURE
                                </Link>
                                
                            </button>
                            <button
                                style={{width:'unset'}}
                                className='ochre'
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                            
                        </div>
                        </div>
                        
                        
                    </div>
                </div>
            </>
        );
    };

    const handleGetCredentials = () => {
        
        // evt.preventDefault();

        const requestOptions = {
            method: 'POST', 
            body: JSON.stringify(credentials),
        }

        fetch("https://accounting.linarys.com/v1/validatepwd/", requestOptions)
            .then((response) => response.json())
            .then(data => {
                if (data.user.id === 0 && credentials.pwd !== ''){
                    setPwdError({
                        exists: true,
                        helperText: "Wrong password",
                    });    
                }
                else if(credentials.pwd === '') {
                    setPwdError({
                        exists: true,
                        helperText: "Write your password",
                      });
                }
                else{
                    console.log('Yes')
                    console.log(data.user)
                    setEditEmail(true) 
                    setEditName(false)
                    setEditLastName(false)
                    setEditUsername(false)
                    setIsOpenModalChangeEmail(false)
                }
            })
           
    }

    const ModalChangeEmail = ({ setIsOpen}) => {
        return (
            <>
            <div className={styles.darkBG} />
                <div className={styles.centered}>
                    <div style={{height:'300px'}} className={styles.modal}>
                        <button type='button' style={{display:'flex', width:'100%', justifyContent:'flex-end', padding:'5px'}} className='none' onClick={() => setIsOpenModalChangeEmail(false)}>
                            <i className='icon ms-1 icon-close'></i> 
                        </button>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={styles.modalHeader}>
                            <i style={{color:'#4FB8A8', fontSize:'3rem'}} className='icon ms-1 icon-alert'></i> 
                        </div>
                        <div style={{display:'flex', justifyContent: 'center', marginBottom: '25px', marginTop: '10px'}}>
                            <h6 style={{fontSize:'12px', paddingTop:'0', paddingBottom:'0'}} className={styles.heading}>
                                In order to change your email address, for security reasons we need you to enter your current password
                            </h6>
                        </div>
                        <div style={{position:'relative',display:'flex', justifyContent:'center'}}>
                            <Input 
                                title = {"pwd"}
                                type={passwordShown ? "text" : "password"}
                                name = {"pwd"}
                                autoFocus="autoFocus"
                                placeholder = {'Enter password'}
                                value = {credentials.pwd}
                                handleChange={handlePassChange}
                                // handleBlur={pwdBlurHandler}
                                style={{width:'200px'}}
                                className={pwdError.exists ? "is-invalid": ""}
                                errorDiv = {pwdError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {pwdError.helperText}
                            />
                            <i style={{position: 'absolute', top:'8px', right:'35px', cursor:'pointer'}} onClick={togglePasswordVisiblity}>{passwordShown ? EyeLogo() : EyeLogoClosed()}</i>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'25px'}}>
                            <button
                                style={{width:'unset'}}
                                className='ochre'
                                type='button'
                                onClick={() => setIsOpenModalChangeEmail(false)}
                            >
                                Cancel
                            </button>
                            <button
                                style={{width:'unset'}}
                                className='snow'
                                type='button'
                                onClick={handleGetCredentials}
                            >
                                confirm
                            </button>
                        </div>
                        

                        
                        
                    </div>
                </div>
            </>
        );
    };


    return(
        <>
            <AppHeader 
                currentPathName={props.location.pathname}
                searchBarDisplayed={searchBarDisplayed}
                mobile = {mobile}

            />
            <Toast
                toastList={toastProperties}
                position="top-right" 
                visible={toastVisible}
            />
            
            <div>
            
            {/* {isOpenPhotoModal && <ModalPhoto setIsOpen={setIsOpenPhotoModal} />} */}
            {isOpenModalChangePass && <ModalChangePass setIsOpen={setIsOpenModalChangePass} />}
            {isOpenModalChangeEmail && <ModalChangeEmail setIsOpen={setIsOpenModalChangeEmail} />}
            {isOpenModalDeleteAccount && <ModalDeleteAccount setIsOpen={setIsOpenModalDeleteAccount} />}
                <div >
                    <div className={classes.profileContainer}>
                        
                        <div style={{}}>
                            <input 
                                type="hidden"
                                name="id"
                                id="id"
                                value={user.id}
                                onChange={handleChange}
                            />
                            <div>
                            {/* <button style={{backgroundColor:'#B66A00', width:'35px', borderRadius:'50%',position: 'relative', top:'0', right:'-145px'}} className='none' onClick={() => setIsOpenPhotoModal(true)}>
                                <i style={{ color: 'white'}} className='icon icon-edit'></i>
                            </button> */}
                                <div >
                                    <div >
                                        <img 
                                            src={user.picture}
                                            alt="" 
                                            className="profile_image" 
                                        />
                                        {/* <svg style={{marginBottom: '25px'}} width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="80" cy="80" r="80" fill="#D2B885"/>
                                            <path d="M80.5001 76C72.4948 76 66 68.6034 66 59.5C66 50.3965 72.4948 43 80.5001 43C88.5053 43 95 50.3965 95 59.5C95 68.6034 88.5053 76 80.5001 76ZM80.5001 46.7551C74.5716 46.7551 69.7761 52.4448 69.7761 59.4621C69.7761 66.4793 74.6094 72.169 80.5001 72.169C86.3907 72.169 91.2241 66.4793 91.2241 59.4621C91.2241 52.4448 86.4285 46.7551 80.5001 46.7551Z" fill="#886200"/>
                                            <path d="M104.914 118H55.043C54.0355 118 53.183 117.262 53.1055 116.265L52.0205 100.909C51.6717 95.8523 55.8179 89.9832 61.0879 88.1007C73.2553 83.9664 86.7014 83.9664 98.8688 88.1007C104.177 89.9463 108.363 95.8154 107.975 100.909L106.89 116.228C106.812 117.188 105.96 117.963 104.953 117.963L104.914 118ZM56.8255 114.309H103.093L104.061 100.688C104.294 97.5503 101.543 93.0101 97.5127 91.6074C86.2365 87.7685 73.6816 87.7685 62.4055 91.6074C58.4143 93.0101 55.6243 97.5873 55.8568 100.688L56.8255 114.309Z" fill="#886200"/>
                                        </svg> */}
                                    </div>
                                </div>
                              
                                <div ref={wrapperRef}>
                                   
                                    <div>
                                        <div className='body_text_small'>
                                            Name
                                        </div>
                                        <div className='input-content'>
                                            
                                            {editName 
                                                ? 
                                                <>
                                                    
                                                    <Input 
                                                        title = {"name"}
                                                        type = {"text"}
                                                        name = {"name"}
                                                        id="name"
                                                        placeholder = {user.name}
                                                        value = {user.name}
                                                        handleChange={handleChange}
                                                        className={nameError.exists ? "is-invalid": ""}
                                                        errorDiv = {nameError.exists ? "text-danger" : "no-danger"}
                                                        errorMsg = {nameError.helperText}
                                                    />
                                                    {
                                                        lastEdited === 'name' 
                                                            ? 
                                                            <button 
                                                                style={{position:'relative', right:'45px'}} 
                                                                onClick={()=>{
                                                                    handleSubmit(); 
                                                                    // setEditName(false)
                                                                }} 
                                                                className="link"
                                                            >
                                                                Save    
                                                            </button>
                                                            :
                                                            <button disabled style={{position:'relative', right:'45px', color:'#A5A5A5'}} onClick={()=>{handleSubmit() && setEditName(false)}} className="link">Save</button>
                                                    }
                                                    
                                                </> 
                                                :
                                                <>
                                                    <h3>{window.localStorage.getItem("name")}</h3>
                                                    <button onClick={() => {setEditName(true); setEditLastName(false) ; setEditEmail(false); setEditUsername(false)}} className='none'>
                                                        <i className='icon ms-1 icon-edit'></i>
                                                    </button>
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className='body_text_small'>
                                            Last name
                                        </div>
                                        <div  className='input-content'>
                                            {editLastName 
                                                ? 
                                                <>
                                                    <Input 
                                                        title = {"lastname"}
                                                        type = {"text"}
                                                        name = {"lastname"}
                                                        placeholder = {user.lastname}
                                                        value = {user.lastname}
                                                        handleChange={handleChange}
                                                        className={lastNameError.exists ? "is-invalid": ""}
                                                        errorDiv = {lastNameError.exists ? "text-danger" : "no-danger"}
                                                        errorMsg = {lastNameError.helperText}
                                                    />
                                                    {
                                                        lastEdited === 'lastname' 
                                                            ? 
                                                            <button style={{position:'relative', right:'45px'}} onClick={()=>{handleSubmit()}} className="link">Save</button>
                                                            :
                                                            <button disabled style={{position:'relative', right:'45px', color:'#A5A5A5'}} onClick={()=>{handleSubmit() && setEditLastName(false)}} className="link">Save</button>
                                                    }
                                                </> 
                                                :
                                                <>
                                                    <div className='subtitle primary_dark'>{window.localStorage.getItem("lastname")}</div>
                                                    <button onClick={() => {setEditLastName(true); setEditName(false); setEditEmail(false); setEditUsername(false)}} className='none'>
                                                        <i className='icon ms-1 icon-edit'></i>
                                                    </button>
                                                </>
                                            }
                                        </div>   
                                    </div>
                                    <div>
                                        <div className='body_text_small'>
                                            Email
                                        </div>
                                        <div  className='input-content'>
                                            {editEmail 
                                                ? 
                                                <>
                                                    <Input 
                                                        title = {"email"}
                                                        type = {"email"}
                                                        name = {"email"}
                                                        placeholder = {user.email}
                                                        value = {user.email}
                                                        handleChange={handleChange}
                                                        className={emailError.exists ? "is-invalid": ""}
                                                        errorDiv = {emailError.exists ? "text-danger" : "no-danger"}
                                                        errorMsg = {emailError.helperText}
                                                    />
                                                    {
                                                        lastEdited === 'email' 
                                                            ? 
                                                            <button style={{position:'relative', right:'45px'}} onClick={()=>{handleSubmit(); setEditEmail(false)}} className="link">Save</button>
                                                            :
                                                            <button disabled style={{position:'relative', right:'45px', color:'#A5A5A5'}} onClick={()=>{handleSubmit() && setEditEmail(false)}} className="link">Save</button>
                                                    }
                                                </> 
                                                :
                                                <>
                                                    <div className='subtitle primary_dark'>{window.localStorage.getItem("email")}</div>
                                                    {/* <button onClick={() => {setEditEmail(true); setEditName(false); setEditLastName(false); setEditUsername(false)}} className='none'> */}
                                                    <button onClick={() => setIsOpenModalChangeEmail(true)} className='none'>
                                                        <i className='icon ms-1 icon-edit'></i>
                                                    </button>
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div>
                                    <div className='body_text_small'>
                                        Username
                                    </div>
                                    <div  className='input-content'>
                                    {editUsername
                                        ? 
                                        <>
                                            <Input 
                                                title = {"username"}
                                                type = {"text"}
                                                name = {"username"}
                                                placeholder = {user.username}
                                                value = {user.username}
                                                handleChange={handleChange}
                                                className={userNameError.exists ? "is-invalid": ""}
                                                errorDiv = {userNameError.exists ? "text-danger" : "no-danger"}
                                                errorMsg = {userNameError.helperText}
                                            />

                                            {
                                                lastEdited === 'username' 
                                                    ? 
                                                    <button style={{position:'relative', right:'45px'}} onClick={()=>{handleSubmit(); }} className="link">Save</button>
                                                    :
                                                    <button disabled style={{position:'relative', right:'45px', color:'#A5A5A5'}} onClick={()=>{handleSubmit()}} className="link">Save</button>
                                            }
                                        </> 
                                        :
                                        <>
                                            <div className='subtitle primary_dark'>{window.localStorage.getItem("userName")}</div>
                                            <button onClick={() => {setEditEmail(false); setEditName(false); setEditLastName(false); setEditUsername(true)}} className='none'>
                                                <i className='icon ms-1 icon-edit'></i>
                                            </button>
                                        </>
                                    }
                                    </div>
                                    <div>
                                        <div className='body_text_small'>
                                            Account
                                        </div>
                                        <div className='subtitle primary_dark'>
                                        {(() => {
                                            if (user.account === 0) {
                                            return (
                                                <div>Basic account</div>
                                            )
                                            } else if (user.account === 1) {
                                            return (
                                                <div>otherCase</div>
                                            )
                                            } else {
                                            return (
                                                <div>catch all</div>
                                            )
                                            }
                                        })()}
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                </div>
                            </div>

                        </div>
                        <div className={classes.divisionLine}></div>
                        <div className={classes.settingsContainer}>
                            <div className='subtitle_bold primary_dark'>
                                Settings
                            </div>
                            <div>
                                    
                                    <button
                          
                                        className="link"
                                        onClick={() => setIsOpenModalChangePass(true)}
                                    >
                                        Change password
                                    </button>
                                </div>
                            <div >
                                <Link className={'link'} to="/" onClick={logout}><i className='icon-link icon-logout me-1'></i> Log out</Link>
                            </div>
                            <div>
                                <button 
                       
                                    onClick={() => setIsOpenModalDeleteAccount(true)}
                                    className="link"
                                >
                                    <i className='icon-link icon-delete'></i>
                                    Delete account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
        </>
    )
}

const EyeLogo = () => {
    return(
      <svg width="24" height="24" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0125 15.75C5.94249 15.75 1.5325 12.65 0.0225 8.02997C-0.0075 7.92997 -0.0075 7.81997 0.0225 7.71997C1.5325 3.09997 5.94249 0 11.0125 0C16.0825 0 20.4925 3.09997 22.0025 7.71997C22.0325 7.81997 22.0325 7.92997 22.0025 8.02997C20.4925 12.65 16.0825 15.75 11.0125 15.75ZM1.0225 7.87C2.4425 11.99 6.43249 14.75 11.0125 14.75C15.5925 14.75 19.5825 11.99 21.0025 7.87C19.5825 3.75 15.5925 0.98999 11.0125 0.98999C6.43249 0.98999 2.4425 3.75 1.0225 7.87Z" fill="#B66A00"/>
        <path d="M11.0125 12.7999C8.30251 12.7999 6.09253 10.5899 6.09253 7.87994C6.09253 7.59994 6.31253 7.37994 6.59253 7.37994C6.87253 7.37994 7.09253 7.59994 7.09253 7.87994C7.09253 10.0399 8.85251 11.7999 11.0125 11.7999C13.1725 11.7999 14.9326 10.0399 14.9326 7.87994C14.9326 5.71994 13.1725 3.95996 11.0125 3.95996C10.7325 3.95996 10.5125 3.73996 10.5125 3.45996C10.5125 3.17996 10.7325 2.95996 11.0125 2.95996C13.7225 2.95996 15.9326 5.16994 15.9326 7.87994C15.9326 10.5899 13.7225 12.7999 11.0125 12.7999Z" fill="#B66A00"/>
      </svg>
    )
}

const EyeLogoClosed = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0125 19.75C6.94249 19.75 2.5325 16.65 1.0225 12.03C0.9925 11.93 0.9925 11.82 1.0225 11.72C2.5325 7.09997 6.94249 4 12.0125 4C17.0825 4 21.4925 7.09997 23.0025 11.72C23.0325 11.82 23.0325 11.93 23.0025 12.03C21.4925 16.65 17.0825 19.75 12.0125 19.75ZM2.0225 11.87C3.4425 15.99 7.43249 18.75 12.0125 18.75C16.5925 18.75 20.5825 15.99 22.0025 11.87C20.5825 7.75 16.5925 4.98999 12.0125 4.98999C7.43249 4.98999 3.4425 7.75 2.0225 11.87Z" fill="#B66A00"/>
            <path d="M12.0125 16.7899C9.30251 16.7899 7.09253 14.5799 7.09253 11.8699C7.09253 11.5899 7.31253 11.3699 7.59253 11.3699C7.87253 11.3699 8.09253 11.5899 8.09253 11.8699C8.09253 14.0299 9.85251 15.7899 12.0125 15.7899C12.2925 15.7899 12.5125 16.0099 12.5125 16.2899C12.5125 16.5699 12.2925 16.7899 12.0125 16.7899Z" fill="#B66A00"/>
            <path d="M16.4225 12.3799C16.1425 12.3799 15.9225 12.1599 15.9225 11.8799C15.9225 9.71994 14.1624 7.95996 12.0024 7.95996C11.7224 7.95996 11.5024 7.73996 11.5024 7.45996C11.5024 7.17996 11.7224 6.95996 12.0024 6.95996C14.7124 6.95996 16.9225 9.16994 16.9225 11.8799C16.9225 12.1599 16.7025 12.3799 16.4225 12.3799Z" fill="#B66A00"/>
            <path d="M19.1426 19.51C19.0126 19.51 18.8826 19.46 18.7926 19.36L4.53257 5.09995C4.33257 4.89995 4.33257 4.58999 4.53257 4.38999C4.73257 4.18999 5.04259 4.18999 5.24259 4.38999L19.5025 18.65C19.7025 18.85 19.7025 19.16 19.5025 19.36C19.4025 19.46 19.2726 19.51 19.1526 19.51H19.1426Z" fill="#B66A00"/>
        </svg>
    )
}