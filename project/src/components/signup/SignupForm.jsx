import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../JS/actions/userAction'
import { Link, useNavigate } from 'react-router-dom'
import "./signupformcss.css"

export default function SignupForm() {
    const [fullName,setFullName]=useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [confirmepassword,setConfirmepassword] = useState("")
    const dispatch = useDispatch()
    
    var data={
        id:Math.random(),
        fullName:fullName,
        password:password,
        email:email,

    }
    const settingEmail =(e)=>{
        setEmail(e.target.value)
    }
    const settingpasswords = (e)=>{
        setPassword(e.target.value)
        
    } 
    const signup =()=>{
        if(password !== confirmepassword ){
            alert("Please confirme your password")
        }
        else if (password.length<4){
            alert("your password lenghth must be more than 4")
        }
        else{
            dispatch(signUp(data));
            
        }
        
        
    }
    const settingConfirmedPassword = (e)=>{
        setConfirmepassword(e.target.value)
    }
    const navigate = useNavigate();

    

  return (
    <div className="formContainer">
        <Link to='/'><button className='homeButton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg></button></Link>
                    
           
                
                    <form onSubmit={()=>navigate('/Signin')}>
                        <label className="field field_v2">
                            <input onChange={(e)=>setFullName(e.target.value)} type="text" className="field__input" placeholder="" required/>
                            <span className="field__label-wrap">
                            <span className="field__label">Full name</span>
                            </span>
                            
                        </label>
                        <br/>    
                        <label className="field field_v2">
                            <input type="email"  onChange={settingEmail} className="field__input" placeholder="" required/>
                            <span className="field__label-wrap">
                            <span className="field__label">E-mail</span>
                            </span>
                            
                        </label>
                        <br/>    
                        <label className="field field_v2">
                            <input onChange={settingpasswords}  type="password" className="field__input" placeholder="" required   />
                            <span className="field__label-wrap">
                            <span className="field__label">Password</span>
                            </span>
                            
                        </label>
                        <br/>    
                        <label className="field field_v2">
                            <input  onChange={settingConfirmedPassword} type="password" className="field__input" placeholder="" required   />
                            <span className="field__label-wrap">
                            <span className="field__label">Confirm your password</span>
                            </span>
                            
                        </label>
                        <div className="signinbuttonsandreset">
                            <button onClick={signup}  className="button-63" >Sign up</button>

                        </div>
                       <p className='linkToSignUP'>Or press  <Link  className='linkTo' to="/Signin">here </Link>if you already have an account</p>
                    </form> 
                
            
            
        
    </div>
    


  )
}
