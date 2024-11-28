import './App.css';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Detail from './pages/Detail.js'
import Main from './pages/Main.js';
import Cart from './pages/Cart.js';
import data from './data/data.js';
import { createContext, useState } from 'react';
import axios from 'axios';

export let Context1 = createContext()

function App() {

  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [inventory, setInventory] = useState([10, 11, 12]);
  let [count, setCount] = useState(1);
  let [showBtn, setShowBtn] = useState(true);
  let [showLoading, setShowLodaing] = useState(false);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoseShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* useNavigate -> onclick으로 page이동 구현 */}
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <Main shoes={shoes}>
            </Main>
            {
              showBtn ?
                (
                  <>
                    {showLoading && <div>Loading...</div>}
                    <button onClick={() => {
                      if (count == 1) {
                        setShowLodaing(true);
                        axios.get('https://codingapple1.github.io/shop/data2.json')
                          .then((result) => {
                            setShoes([...shoes, ...result.data])
                            setCount(2);
                            setShowLodaing(false);
                          })
                          .catch(() => {
                            console.log("Fail to get data.");
                          })
                      }
                      if (count == 2) {
                        setShowLodaing(true);
                        axios.get('https://codingapple1.github.io/shop/data3.json')
                          .then((result) => {
                            setShoes([...shoes, ...result.data])
                            setShowBtn(false)
                            setShowLodaing(false);
                          })
                          .catch(() => {
                            console.log("Fail to get data2.");
                          })
                      }
                    }}>
                      More
                    </button>
                  </>
                ) : null
            }

          </>
        } />
        {/* URL Parameter */}
        {/* :id는 아무거나 입력을 해도 된다. */}
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ inventory, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        {/* next route */}
        {/* Outlet을 활용하여 보여준다. */}
        <Route path='/event' element={<EventPage />}>
          <Route path='one' element={<div>First service</div>} />
          <Route path='two' element={<div>Birthday Coupon!</div>} />
        </Route>

        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>

    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>Today Event!</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
