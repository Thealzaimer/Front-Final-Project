import axios from "axios";
import { SIGN_IN ,SIGN_UP } from "../actiontypes/flightsactiontypes";

export const signUp = (profiledata) => async (dispatch) => {
    
    try {
        const profiles = await axios.post("http://localhost:3000/profile",profiledata);
        dispatch({
            type:SIGN_UP,
            payload:profiles.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
    
}
export const signIn = (profiledata) => async (dispatch) => {
    
    try{
        const users = await axios.get(`http://localhost:3000/profile`);
        console.log(users.data)
        if(users.status===200){
        const user=users&&users.data.filter((profile)=>profile.email===profiledata.email&&profile.password===profiledata.password)
           console.log( dispatch({
            type:SIGN_IN,
            payload:user
        }))
        localStorage.setItem("userData", JSON.stringify(user[0]))
        // if(localStorage.getItem("user-id")){
        //     
        dispatch({
            type:SIGN_IN,
            payload:user
        })
        
    }

        
        
      
        
    }catch(error){
        console.log(error)
    }
}