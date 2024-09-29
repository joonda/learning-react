// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let post = "Macbook Air-15";

  // Destructuring 
  let [title, b] = useState(["ipad-pro", "우동 맛집", "Python Specialist"])


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:"#E0F2F7", fontSize:"18px"}}>React-blog</h4>
      </div>
      <h4>{ post }</h4>
      <div className='list'>
        <h4>{ title[0] }</h4>
        <p>9월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>9월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>9월 29일 발행</p>
      </div>
    </div>
  );
}

export default App;
