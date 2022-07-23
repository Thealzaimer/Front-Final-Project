import React from 'react'
import { Button,Card} from 'react-bootstrap';

export default function FlightItem({item}) {
    
  return (
    <Card>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.nom}</Card.Title>
      <Card.Text>
       {item.address}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button> <br />
      

    </Card.Body>
  </Card>
  )
}