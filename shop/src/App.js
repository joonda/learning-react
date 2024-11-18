import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoseShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt='shoes1' width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col xs={12} lg={4}>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt='shoes2' width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col xs={12} lg={4}>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt='shoes3' width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
