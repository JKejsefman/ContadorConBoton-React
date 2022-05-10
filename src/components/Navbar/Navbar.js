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
     /* ------------------------------- USE EFFECT ------------------------------- 
  React.useEffect(() => {
    alert("Clickeaste el boton")
  },[count])
  React.useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "Producto",
      },
      {
        id: 2,
        title: "Producto",
      },
    ]);
  },[])*/
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Menu Principal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
           
            <Nav>
              
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">{category1}</Nav.Link>
              <Nav.Link href="#link">{category2}</Nav.Link>
              <Nav.Link href="#link">{category3}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BottomNav />
     
    </>
  );
}

