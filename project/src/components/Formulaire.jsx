import React from 'react'
import { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addFlight } from '../JS/actions/flighsActions'
import { deleteFlight } from '../JS/actions/flightsActions'

export default function AddFlight() {
    const [flight,setFlight]=useState({
        nom:"",
        address:"",
        img:"",
    })
    const handleChange=(e)=>{
        setFlight({...flight,
        [e.target.name]:e.target.value})
    }
    const dispatch = useDispatch();

    console.log(flight)
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Avenue x" name='nom' onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword"   >
      <Form.Label>airline</Form.Label>
      <Form.Control type="text" placeholder="Plan b" name="title" onChange={handleChange} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Date</Form.Label>
      <Form.Control type="text" placeholder="Plan b" name="date" onChange={handleChange} />
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