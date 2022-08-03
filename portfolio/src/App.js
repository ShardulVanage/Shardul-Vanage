import styled from "styled-components"
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './component/Navbar';
import ParticlesBackgroung from './ParticleBackground';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <div className="Background">
     <ParticlesBackgroung></ParticlesBackgroung>

     </div>
     
    </div>
  );
}

export default App;
const Bg = styled.div`
 background-color: bl;
`;