import {Routes, Route, Switch } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import './App.css'
import NavBar from "./Nav";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Error404 from "./Error404";
import Academics from "./Academics";
import Projects from "./Projects";
import Algomations from "./Algomations";
import Illustrations from "./Illustrations";
function App() {
  return (
    <div className="App">
        <Container fluid>
            <NavBar/>
            <Routes>
                <Route path="/" element={ <Home/>} />
                <Route path="/about" element={ <AboutMe/>} />
                <Route path="/academia" element={<Academics/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/algomations" element={<Algomations/>} />
                <Route path="/illustrations" element={<Illustrations/>} />
                <Route path="*" element={<Error404/>} />

            </Routes>
        </Container>
    </div>
  );
}

export default App;
