import React from "react"
import {Container, CardGroup, Card, Button} from "react-bootstrap"

export default function BottomNav () {
  /* ------------------------------- State hook ------------------------------- */
  const [text, setText] = React.useState("Este es nuestro valor inicial")
  const [count, setCount] = React.useState(0)
  const [products, setProducts] = React.useState([])
  /* --------------------------- Funcion manejadora --------------------------- */
  const handleRest = () => {
    if(count > 0) {
      setCount( count - 1)
    }
  }
    return (
      <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://www.whitehotel.com/files/hotel/hotel-b/hotel-white-rome-Camera-Standard.jpg" />
    <Card.Body>
      <Card.Title>Habitacion Single</Card.Title>
      <Card.Text>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <input type="button" variant="primary" value=" + " onClick={() => setCount(count + 1)} />
        {count}
        <input type="button" variant="primary"  value=" - " onClick={handleRest} />
     
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.whitehotel.com/files/hotel/hotel-b/02-rooms/camera_standard_4.jpg" />
    <Card.Body>
      <Card.Title>Habitacion Doble</Card.Title>
      <Card.Text>
       

      </Card.Text>

    </Card.Body>
    <Card.Footer>
      <input type="button" variant="primary" value=" + " onClick={() => setCount(count + 1)} />
        {count}
        <input type="button" variant="primary"  value=" - " onClick={handleRest} />
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.whitehotel.com/files/hotel/hotel-b/junior_Suite.jpg" />
    <Card.Body>
      <Card.Title>Suite Junior</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <input type="button" variant="primary" value=" + " onClick={() => setCount(count + 1)} />
        {count}
        <input type="button" variant="primary"  value=" - " onClick={handleRest} />
      </small>
    </Card.Footer>
  </Card>
</CardGroup>
    );
  
  }
  