# 노트

### useState
* 자주 변경될 html 부분은 `useState`를 활용한다.

```javascript
const [like, plusLike] = useState(0)

<div>
    <button onClick={() => plusLike(like+1)}>{like}</button>
</div>
```


### onClick
* html 요소 중 태그 안에 onClick을 심을 수 있다.
    * 이벤트 핸들러라고도 칭한다.
* 함수만 지정하여 넣을 수 있다.
```javascript
<span onClick={}></span>
```

### map
* 중복되는 요소는 map으로 반복해서 만들어 낼 수 있다.
```javascript
{title.map(function (a, i) {
        // ... 생략
    })
}
```

### useEffect
* `mount` (페이지 장착), `update` (업데이트), `unmount` (필요없을 시, 제거)
* `mount`와 `update`시, 안에있는 code가 실행된다.
    * `html` 렌더링 후에 동작
* `mount`시, []안에 실행 조건 충족 시 `useEffect`가 실행된다.
* []안에 조건이 없다면, `mount`시에만 실행된다.
* `unmount`시에 `return () => {}` 안에 있는 `cleanup` 함수가 실행된다.
```javascript
// 재렌더링마다 코드 실행
useEffect(() => { })
// mount시 1회 코드 실행
useEffect(() => { }, [])
// unmount시 1회 코드 실행
useEffect(() => { 
    const a = setTimeout(() => { setAlert(false) }, 2000);
    return () => {
        clearTimeout(a);
    }
}, [])
```

### contextAPI
* `props` 전송없이 `state`를 공유할 수 있다.
```javascript
// context 보관
const Context1 = createContext()

// 원하는 곳에 감싼다.
<Context1.Provider>
    <div></div>
</Context1.Provider>
```
```javascript
import {Context1} from '../App.js';
import {useContext} from "react";

function name() {
	let a = useContext(Context1) // 변수에 저장해서 사용!
	
	return (
		{a}
	)
}
```

### Redux Toolkit
* contextAPI를 대체하여 사용 가능
```terminal
npm install @reduxjs/toolkit react-redux
```
* `index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Provider에 store props를 전달
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
reportWebVitals();
```
* `store.js`
```javascript
import { configureStore } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: "kim"
})

export default configureStore({
    reducer: {
	    user: user.reducer
    }
})
```

### Storage
#### Local Storage
* 브라우저 초기화가 안되는 이상, 데이터의 내용이 남아있다.
* 재접속 해도 남아있다 (Session Storage와 반대 개념)
* 데이터 저장 및 출력 (문자만 저장 가능)
```javascript
localStorage.setItem("key", "value")

localStorage.getItem("key")
```
* `array` / `object` 저장 및 출력 시, `JSON` 변환 과정을 거친다.
```javascript
const obj = {name:"kim"}
localStorage.setItem("data", JSON.stringify(obj))

let getItem = localStorage.getItem('data')
JSON.parse(getItem).name
```
* 데이터 삭제
```javascript
localStorage.removeItem("key")
```