import React from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import BottomNav from "../BottomNav/BottomNav";

export default function Header ({category1,category2,category3}) {
    /* ------------------------------- State hook ------------------------------- */
    const [text, setText] = React.useState("Este es nuestro valor inicial")
    const [count, setCount] = React.useState(0)
    const [products, setProducts] = React.useState([])
    /* --------------------------- Funcion manejadora --------------------------- */
    const handleRest = () => {
      console.log("Ejecuto funcion")
      if(count > 0) {
        setCount( count - 1)
      }
    }
  
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Menu Principal
          <img
            alt="logo"
            src="https://cdn.pixabay.com/photo/2014/04/03/10/00/shopping-cart-309592__340.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
           
            <Nav>
              
              <Nav.Link href="#home">Inicio</Nav.Link>
              <img
                  alt="Home"
                  src="https://img.icons8.com/offices/2x/home-page.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top" />{" "}
              <Nav.Link href="#link">{category1}</Nav.Link>
                <img
                  alt="Alq.Vehiculos"
                  src="https://img.icons8.com/offices/2x/convertible.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"/>{" "}
              <Nav.Link href="#link">{category2}</Nav.Link>
                  <img
                  alt="Habitaciones"
                  src="https://img.icons8.com/officel/2x/double-bed.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top" />{" "}
              <Nav.Link href="#link">{category3}</Nav.Link>
                  <img
                  alt="Nosotros"
                  src="https://img.icons8.com/offices/2x/technical-support--v1.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top" />{" "}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BottomNav />
     
    </>
  );
}

