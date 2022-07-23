import React, { useState } from 'react'
import "./signinformcss.css"
import { useDispatch } from 'react-redux'
import { signUp } from '../../JS/Actions/musicAction'
import { signIn } from '../../JS/Actions/userAction'
import { Link, useNavigate } from 'react-router-dom'

export default function SigninForm() {

   const dispatch = useDispatch()
    const[profileData,setProfileData]=useState({ 
        email:"",
        password:"",
        })
    const handleChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value })
 
    }
    const navigate = useNavigate();


  return (
    <div className="formContainer">
        <div >
            <div className="box">
                <div >
                    
                    <form  onSubmit={()=>navigate('/')}> <label className="field field_v2">
                            <input type="email" name='email'   className="field__input" onChange={handleChange} placeholder="e.g. melnik909@ya.ru" required/>
                            <span className="field__label-wrap">
                            <span className="field__label">E-mail</span>
                            </span>
                            
                        </label>
                        <br/>    
                        <label className="field field_v2">
                            <input  name='password' type="password" className="field__input" onChange={handleChange} placeholder="egg Dddj3J0F999D" required   />
                            <span className="field__label-wrap">
                            <span className="field__label">Password</span>
                            </span>
                            
                        </label>
                        <br/>    
                        <button  className="button-63" onClick={()=>dispatch(signIn(profileData))} >Sign in</button>
                        <div className="signinbuttonsandreset">
                            
                        </div>
                        </form>
                       
                        <p className='linkToSignUp'>Or press<Link className='linkTo' to='/Signup'> here</Link>  to create a new account</p>

                </div>
            </div>
            
        </div>
    </div>
    


  )
}
