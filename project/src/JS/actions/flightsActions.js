import axios from "axios"
import { SIGN_IN, SIGN_UP } from "../actiontypes/flightsactiontypes"
export const addFlight=(flight)=>async(dispatch)=>{
    try{
        const fli= await axios.post('http://localhost:3000/flights',flight)
        console.log(fli.data)
        dispatch({
            type:"POST_FLIGHT",
         
        })
    }catch(err)
    {
        dispatch({
            type:"Error",
            payload:err
        })
    }
}
export const getFlights = ()=> async (dispatch) => {
    try {
        // send a get request to the server to get all products
        const fli = await axios.get("http://localhost:3000/flights");

        console.log(fli.data);
        // dispatch the action to the reducer
        dispatch({
            type: "GET_FLIGHTS",
            payload: fli.data,
        });
    } catch (err) {
        dispatch({
            type:"Error",
            payload:err
        })
    }
};
 export const deleteFlight = (id) => async (dispatch) => {
        try {
            
            const fli = await axios.delete(`http://localhost:3000/flights/${id}`);
            console.log(fli);
            dispatch({
                type: "DELETE_Flight",
                payload: id,
            });
        } catch (err) {
            console.log(err);
        }
};
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