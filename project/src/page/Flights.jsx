import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FlightList from '../components/Flight_List'
import { getFlights } from '../JS/actions/flightsActions';

export default function Flights() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFlights);
    }, [dispatch]);
    const flights = useSelector((state) => state.flightReducer.flights);
   console.log(flights)
  return (
    <div>
        <FlightList data={flights}/>
    </div>
  )
}