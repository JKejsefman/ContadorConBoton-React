import Header from "./components/Navbar/Navbar";
import {Container} from "react-bootstrap"
function App() {
  return (
    <div className="App">
      <Header category1={"Alquiler de Vehiculos"} category2={"Habitaciones"} category3={"Quienes Somos"}/>
      <main className="main-content">
        <Container>
        
        </Container>
      </main>
    </div>

  );
}

export default App;
