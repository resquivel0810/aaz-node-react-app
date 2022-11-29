import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../../AppHeader';
import AppFooter from '../../AppFooter';
import Input from '../form-components/Input';
import profileImage from '../../Images/profile_image.jpg';
import styles from "./Modal.module.css";

import Toast from "../toast/Toast"

// REACT COFNRM ALERT 
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

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
    const [isOpen, setIsOpen] = useState(false);
    const [toastProperties, setToastProperties] = useState([])
    

    useEffect(() => {
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
                            })
                        })
                }
                getInfo()
            } catch (error) {
                console.log(error)
            }
        }  

    }, []);

    function useOutsideAlerter(ref) {
        useEffect(() => {
         
           // Alert if clicked on outside of element
         
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) ) {
                setEditName(false); setEditLastName(false) ; setEditEmail(false); setEditUsername(false)
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
 
    

    const handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;

        console.log(evt.target.name)
        setLastEdited(evt.target.name)

        setUser((prevState) => ({
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

        fetch('https://accounting.linarys.com/v1/updateuser/', requestOptions)
            .then(data => {
                setToastVisible(true)
                console.log()
           
                setInterval(() => {
                    setToastVisible(false)
                }, 5000)
                 
                if (data.status === 200){
                    console.log(data)
                    
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

    const logout = () => {
        setJwt("");
        // REMOVE TOKEN 
        window.localStorage.removeItem("jwt");
    }

    const confirmDelete = (e) => {

        confirmAlert({
            title: 'Are you sure you want to delete your account?',
            message: 'All your information will be lost',
            buttons: [
              {
                label: 'I am sure',
                onClick: () => {
                    fetch("https://accounting.linarys.com/v1/deleteaccount/" + user.id, 
                    {
                        method: "POST",
                    })
                    .then(response => response.json)
                    .then(data => {
                        if(data.err) {
                            setAlert({
                                type: "alert-danger", 
                                message: data.error.message
                            })
                        }else{
                            props.history.push({
                                pathname: "/",
                            })
                            console.log("User deleted")
                            window.localStorage.removeItem("jwt");
                        }
                    })
                }
              },
              {
                label: 'Cancel',
                onClick: () => {}
              }
            ]
        });
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
    const Modal = ({ setIsOpen }) => {
        return (
            <>
                <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
                <div className={styles.centered}>
                    <div className={styles.modal}>
                        <button style={{display:'flex', width:'100%', justifyContent:'flex-end', padding:'5px'}} className='none' onClick={() => setIsOpen(false)}>
                            <i className='icon ms-1 icon-close'></i> 
                        </button>

                        <div>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.heading}>Upload picture</h5>
                        </div>
                        <div style={{display:'flex', justifyContent: 'center'}}>
                            <input 
                                id='file-input'
                                className={styles.fileInput}
                                type={"file"}
                                name={"picture"}
                                onChange={(event) => {
                                    console.log(event.target.files[0])
                                    // var data = new FormData()

                                    setPhoto(event.target.files[0])
                                    
                                    var reader = new FileReader();
                                    reader.readAsDataURL(event.target.files[0]);
                                    reader.onload = function () {
                                        console.log(reader.result);
                                        // let value =event.target.value;
                                        let name = event.target.name;
                                        setUser((prevState) => ({
                                            ...prevState,
                                            [name]: reader.result,
                                        }));
                                    };
                                }}
                            />
                            <label className={styles.fileInputLabel} for="file-input">
                                <i className='icon ms-1 icon-upload'></i> 
                                <span>SELECT A PICTURE</span>
                            </label>
                        </div>
                            
                        
                        <div style={{display:'flex', justifyContent: 'space-around'}} >
                            <button
                                style={{width:'unset'}}
                                className='snow'
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                            <button  
                                style={{width:'unset'}}
                                onClick={handleSubmit} 
                                className="ochre"
                            >
                                UPLOAD
                            </button>
                        </div>
                        </div>
                        
                        
                    </div>
                </div>
            </>
        );
    };

    

    return(
        <>
            {/* <div onClick={() => {setEditName(false); setEditLastName(false) ; setEditEmail(false); setEditUsername(false)}} style={{width:'100vw', height:'100vh', position: 'absolute', top:'0'}} id='experiment' /> */}
            <AppHeader />
            <Toast
                toastList={toastProperties}
                position="top-right" 
                visible={toastVisible}
            />
            
            <div  className='bg_profile'>
            
            {isOpen && <Modal setIsOpen={setIsOpen} />}
                <div className='container relative'>
                    <div className='row container-profile'>
                        
                        <div className='col-12 col-lg-6 box-sec1'>
                        
                            <input 
                                type="hidden"
                                name="id"
                                id="id"
                                value={user.id}
                                onChange={handleChange}
                            />
                            <div className='row'>
                            <button style={{backgroundColor:'#B66A00', width:'35px', borderRadius:'50%',position: 'relative', top:'0', right:'-145px'}} className='none' onClick={() => setIsOpen(true)}>
                                <i style={{ color: 'white'}} className='icon icon-edit'></i>
                            </button>
                            
                            
                            

                                <div className='col-12 col-lg-4'>
                                    
                                    <div className=''>
                                    {/* {photo && (
                                        <div>
                                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(photo)} />
                                        <br />
                                        <button onClick={()=>setPhoto(null)}>Remove</button>
                                        </div>
                                    )} */}
                                        <img 
                                            src={user.picture}
                                            alt="" 
                                            className="profile_image" 
                                        />
                                    </div>
                                </div>
                              
                                <div ref={wrapperRef} className='col-12 col-lg-8'>
                                   
                                    <div className='pb-2'>
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
                                                        placeholder = {user.name}
                                                        value = {user.name}
                                                        handleChange={handleChange}
                                                    />
                                                    {
                                                        lastEdited === 'name' 
                                                            ? 
                                                            <button style={{position:'relative', right:'45px'}} onClick={()=>{handleSubmit(); setEditName(false)}} className="link">Save</button>
                                                            :
                                                            <button disabled style={{position:'relative', right:'45px', color:'#A5A5A5'}} onClick={()=>{handleSubmit() && setEditName(false)}} className="link">Save</button>
                                                    }
                                                    
                                                </> 
                                                :
                                                <>
                                                    <h3>{user.name}</h3>
                                                    <button onClick={() => {setEditName(true); setEditLastName(false) ; setEditEmail(false); setEditUsername(false)}} className='none'>
                                                        <i className='icon ms-1 icon-edit'></i>
                                                    </button>
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className='pb-2'>
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
                                                    />
                                                    {
                                                        lastEdited === 'lastname' 
                                                            ? 
                                                            <button style={{position:'relative', right:'45px'}} onClick={()=>{handleSubmit(); setEditLastName(false)}} className="link">Save</button>
                                                            :
                                                            <button disabled style={{position:'relative', right:'45px', color:'#A5A5A5'}} onClick={()=>{handleSubmit() && setEditLastName(false)}} className="link">Save</button>
                                                    }
                                                    {/* <button style={{position:'relative', right:'45px'}} onClick={handleSubmit} className="link">Save</button> */}
                                                </> 
                                                :
                                                <>
                                                    <div className='subtitle primary_dark'>{user.lastname}</div>
                                                    <button onClick={() => {setEditLastName(true); setEditName(false); setEditEmail(false); setEditUsername(false)}} className='none'>
                                                        <i className='icon ms-1 icon-edit'></i>
                                                    </button>
                                                </>
                                            }
                                        </div>   
                                    </div>
                                    <div className='pb-2'>
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
                                                    <div className='subtitle primary_dark'>{user.email}</div>
                                                    <button onClick={() => {setEditEmail(true); setEditName(false); setEditLastName(false); setEditUsername(false)}} className='none'>
                                                        <i className='icon ms-1 icon-edit'></i>
                                                    </button>
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className='pb-2'>
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
                                            />
                                            {/* <button style={{position:'relative', right:'45px'}} onClick={handleSubmit} className="link">Save</button> */}
                                            {
                                                lastEdited === 'username' 
                                                    ? 
                                                    <button style={{position:'relative', right:'45px'}} onClick={()=>{handleSubmit(); setEditUsername(false)}} className="link">Save</button>
                                                    :
                                                    <button disabled style={{position:'relative', right:'45px', color:'#A5A5A5'}} onClick={()=>{handleSubmit() && setEditUsername(false)}} className="link">Save</button>
                                            }
                                        </> 
                                        :
                                        <>
                                            <div className='subtitle primary_dark'>{user.username}</div>
                                            <button onClick={() => {setEditEmail(false); setEditName(false); setEditLastName(false); setEditUsername(true)}} className='none'>
                                                <i className='icon ms-1 icon-edit'></i>
                                            </button>
                                        </>
                                    }
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                          
                               
                                
                                <div className='pt-4'>
                                    <Link
                                        to={'/changePassword'}
                                        className='link'
                                    >
                                        Change password
                                    </Link>
                                </div>

                            

                        </div>
                        
                        <div className='col-12 col-lg-6'>
                            <div className='subtitle_bold primary_dark pb-2'>
                                Settings
                            </div>
                            <div className='pb-1'>
                                <Link className={'link'} to="/" onClick={logout}><i className='icon-link icon-logout me-1'></i> Log out</Link>
                            </div>
                            <div>
                                <a 
                                    href="#!" 
                                    onClick={() => confirmDelete()}
                                    className="link"
                                >
                                    <i className='icon-link icon-delete me-1'></i>
                                    Delete account
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
        </>
    )


}