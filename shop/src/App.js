import './App.css';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import { Navbar, Container, Nav, ToastBody } from 'react-bootstrap';
import Main from './pages/Main.js';



import data from './data/data.js';
import { createContext, lazy, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { useQuery } from 'react-query';

// import Detail from './pages/detail.js'
// import Cart from './pages/Cart.js';
const Detail = lazy(()=> import('./pages/Detail.js'))
const Cart = lazy(()=> import('./pages/Cart.js'))


export let Context1 = createContext()

function App() {

  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [inventory, setInventory] = useState([10, 11, 12]);
  let [count, setCount] = useState(1);
  let [showBtn, setShowBtn] = useState(true);
  let [showLoading, setShowLodaing] = useState(false);
  let [toggleShow, setToggleShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]))
    }
  }, [])

  let recentProductList = JSON.parse(localStorage.getItem('watched'));

  let result = useQuery('request', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data;
    })
  })

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className='logo' onClick={() => { navigate('/') }}>ShoseShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* useNavigate -> onclick으로 page이동 구현 */}
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('./Cart') }}>Cart</Nav.Link>
          </Nav>
          <Nav>
            <Button variant='secondary' onClick={() => setToggleShow(!toggleShow)}>Recent</Button>
            <Toast
              onClose={() => setToggleShow(false)}
              show={toggleShow}
              className='recentProduct'
            >
              <ToastBody>
                {recentProductList.map((p, index) => (
                  <div key={index}>
                    {shoes[p] ? (
                      <>
                        <img src={`https://codingapple1.github.io/shop/shoes${p + 1}.jpg`} alt={`shoes${p + 1}`} width="50%" />
                        <p>{shoes[p].title}</p>
                      </>
                    ) : ""
                  }
                  </div>
                ))}
              </ToastBody>
            </Toast>
            <Nav.Link>{result.isLoading ? '로딩중' : result.data.name }</Nav.Link>
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
