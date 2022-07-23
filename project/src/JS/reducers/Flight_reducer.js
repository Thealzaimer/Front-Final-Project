const initialState={
    flights:[],
    flight:{}
}

export const flightReducer=(state=initialState,{type,payload})=>{
   switch(type)
   {
    case "POST_FLIGHT":
        return {...state}
        case "GET_FLIGHT":
            return {
                ...state,
                flights: payload,
            };
    default: return state
   }
}