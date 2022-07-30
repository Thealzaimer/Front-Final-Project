import React from 'react'
import { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addFlight } from '../JS/actions/flightsActions'
import { deleteFlight } from '../JS/actions/flightsActions'
import "./formulaire.css"

export default function AddFlight() {
    const [flight,setFlight]=useState({
        nom:"",
        airline:"",
        date:"",
    })
    const handleChange=(e)=>{
        setFlight({...flight,
        [e.target.name]:e.target.value})
    }
    const dispatch = useDispatch();

    console.log(flight)
  return (
    <Form>
    <Form.Group className="mb-2" controlId="formBasicEmail">
      <Form.Label>Flight</Form.Label>
      <Form.Control type="text" placeholder="" name='nom' onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-2" controlId="formBasicPassword"   >
      <Form.Label>Airline</Form.Label>
      <Form.Control type="text" placeholder="" name="airline" onChange={handleChange} />
    </Form.Group>
    <Form.Group className="mb-2" controlId="formBasicPassword">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="" name="date" onChange={handleChange} />
    </Form.Group>
   
    <Button variant="primary" type="submit" onClick={()=>dispatch(addFlight({
        ...flight,
        id:Math.random()
    }))}>
      Add Flight
    </Button>
    <Button variant="primary" type="submit" onClick={()=>dispatch(deleteFlight({
        ...flight,
        id:Math.random()
    }))}>
      Delete Flight
    </Button>
  </Form>
  )
}