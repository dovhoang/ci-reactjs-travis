import React ,{useEffect} from 'react'
import './App.css';

function App() {
  //let src= process.env.REACT_APP_BASE_URL;
  let src= "https://picsum.photos/id/237/200/300";

  return (
    <div className="App">
      <header className="App-header">
        <p>
          picture
        </p> 
        <img src = {process.env.REACT_APP_BASE_URL}/>
      </header>
    </div>
  );
}

export default App;
