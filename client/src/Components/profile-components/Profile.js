import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../../AppHeader';
import AppFooter from '../../AppFooter';
import Input from '../form-components/Input';
import profileImage from '../../Images/profile_image.jpg';
// REACT COFNRM ALERT 
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { useState,useEffect } from 'react'

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
    const [photo, setPhoto ] = useState(profileImage);

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

    const handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;

        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // const data = new FormData(evt.target);
        // const payload = Object.fromEntries(data.entries());
        // console.log(payload);

        const requestOptions = {
            method: 'POST', 
            body: JSON.stringify(user),
        }

        fetch('https://accounting.linarys.com/v1/updateuser/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.error){
                    setAlert({
                        type: "alert-danger", 
                        message: data.error.message,
                    })
                }else{
                    console.log("DONE")
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

    return(
        <>
            <AppHeader />
            <div className='bg_profile'>
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
                            <button  onClick={handleSubmit} className="link">Save Image</button>
                            <input 
                                // onChange={handleChange}
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
                                <div className='col-12 col-lg-8'>
                                    {/* <h3 className='primary_dark'>{user.name} {user.lastname}</h3> */}
                                    <div className='pb-2'>
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
                                                    <button style={{position:'relative', right:'45px'}} onClick={handleSubmit} className="link">Save</button>
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
                                        <div className='input-content'>
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
                                                    <button style={{position:'relative', right:'45px'}} onClick={handleSubmit} className="link">Save</button>
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
                                        <div className='input-content'>
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
                                                    <button style={{position:'relative', right:'45px'}} onClick={handleSubmit} className="link">Save</button>
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
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className='pt-4'>
                                    <div className='body_text_small'>
                                        Username
                                    </div>
                                    <div className='input-content'>
                                    <Input 
                                        title = {"username"}
                                        type = {"text"}
                                        name = {"username"}
                                        placeholder = {user.username}
                                        value = {user.username}
                                        handleChange={handleChange}
                                    />
                                    {editUsername
                                        ?
                                        <>
                                        <button style={{position:'relative', right:'45px'}} onClick={handleSubmit} className="link">Save</button>
                                        </>
                                        :
                                        <>
                                        <button style={{position:'relative', right:'45px', top:'5px'}} onClick={() => {setEditUsername(true); setEditName(false); setEditLastName(false); setEditEmail(false)}} className='none'>
                                            <i className='icon ms-1 icon-edit'></i>
                                        </button>
                                        </>
                                    }
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

                                {/* <p onClick={this.makeInput} >a certain value</p> */}
                            </div>

                            {/* <div className='pt-3'>
                                <button className="btn ochre">Save changes</button>
                            </div> */}
                            

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