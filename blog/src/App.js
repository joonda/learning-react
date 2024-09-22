import './App.css';

function App() {

  let post = 'Hello World';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:"red", fontSize : '16px'}}>BLOG</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
