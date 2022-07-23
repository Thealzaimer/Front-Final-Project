import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteFlight, getFlights } from "../JS/actions/flightsActions";


export default function FlightList(){

    const dispatch = useDispatch();
          useEffect(() => {
          dispatch(getFlights(dispatch));

    }, [dispatch]);
    const flights =useSelector((state) => state.flightReducer.flights);
    console.log(flights);
    return(
        <div>
            {
                flights.map((flight,key) =>{
                    return (
                        <div key={key}>
                            {flight.title}
                            {flight.airline}
                            <button
                            onClick={()=>dispatch(deleteFlight(flight.id))}
                            >
                            Delete
                            </button>
                            
                    {/* <Link to={`/update/${restaurant.id}`}>
                                <button>Edit</button>
                            </Link> */}
                        </div>
                    );
                })
            }
        </div>
    )}