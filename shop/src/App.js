import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Detail from './detail.js';
import Main from './main.js';

function App() {



  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoseShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <Main />
        } />
        <Route path='/detail' element={
          <Detail />
        } />
      </Routes>

      <Link to='/'>홈</Link>
      <Link to='detail'>상세페이지</Link>
    </div>
  );
}
export default App;
