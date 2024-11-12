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

      <button
        onClick={() => {
          // ... -> 화살표 변경, 괄호를 벗기고 다시 씌운다
          // 즉 copy가 title과 같지 않도록 하여 state로 하여금 다르도록 인식하게 함
          let copy = [...title];
          copy[0] = 'Mac-mini';
          change_title(copy);
        }}
      >
        Edit_Post
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          change_title(copy)
        }}
      >
        Sort
      </button>

      <div className='list'>
        <h4>
          {title[0]}
          <span onClick={() => { like_plus(like + 1) }}>
            👍
          </span>
          {like}
        </h4>
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
      
      <Modal />




    </div>
  );
}
// 컴포넌트 만드는 문법 2
// let Modal = () => {
//   return (
//     <div></div>
//   )
// }

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
