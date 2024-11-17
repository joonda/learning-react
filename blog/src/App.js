import { useState } from 'react';
import './App.css';

function App() {
  let post = "Macbook Air-15";

  // Destructuring 
  let [title, change_title] = useState(["ipad-pro", "우동 맛집", "Python Specialist"]);
  let [like, change_like] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modal_title, change_modal_title] = useState(0);
  let [input_value, change_value] = useState('');

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

      {
        title.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setModal(modal === true ? false : true);
                change_modal_title(i);
              }
              }>
                {title[i]}
              </h4>
              <p>9월 29일 발행 <span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                change_like(copy)
              }}>👍</span>{like[i]} </p>
              <button onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                change_title(copy);
                
                let copy2 = [...like];
                copy2.splice(i, 1);
                change_like(copy2);
              }}>글 삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        change_value(e.target.value);  // 비동기 처리 (useState 변경 함수는 늦게처리됨)
      }} />

      <button onClick={() => {
        if (input_value.trim() === '') {
          alert("글을 작성해주세요.");
          return;
        }
        
        let copy = [...title];
        copy.unshift(input_value);
        change_title(copy);

        let copy2 = [...like];
        copy2.unshift(0);
        change_like(copy2);
      }}>
        글 발행
      </button>

      {
        modal === true ? <Modal change_title={change_title} title={title} modal_title={modal_title} /> : null
      }

    </div>
  );
}
// 컴포넌트 만드는 문법 2
// let Modal = () => {
//   return (
//     <div></div>
//   )
// }

function Modal(
  props
) {
  return (
    <div className='modal'>
      <h4>{props.title[props.modal_title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title];
        copy[0] = "Macbook Air - 15";
        props.change_title(copy);
      }}>글 수정</button>
    </div>
  )
}

export default App;
