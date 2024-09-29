import { useState } from 'react';
import './App.css';

function App() {

  let post = "Macbook Air-15";

  // Destructuring 
  let [title, change_title] = useState(["ipad-pro", "우동 맛집", "Python Specialist"]);
  let [like, like_plus] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "#E0F2F7", fontSize: "18px" }}>React-blog</h4>
      </div>
      <h4>{post}</h4>
      <div className='list'>
        <h4>{title[0]} <span onClick={() => { like_plus(like + 1) }}>👍</span> {like} </h4>
        <p>9월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>9월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>9월 29일 발행</p>
      </div>

      <div className='btn'>
        <button onClick={() => {
          let copy = [...title];
          copy[0] = "ipad-pro 12.9 inches";
          change_title(copy);
        }}>Post Change</button>
        <button style={{ marginLeft: "15px" }} onClick={() => {
          let copy = [...title];
          change_title(copy.sort())
        }}>Sort</button>
      </div>

      <Modal></Modal>

    </div>
  );
}

// component
// 반복적인 html 축약
// 큰 페이지들
// 자주 변경될 것 같은 것들
function Modal() {
  return (
    <div className='modal'>
      <h4>Title</h4>
      <p>Date</p>
      <p>Contents</p>
    </div>
  )
}

export default App;
