import React ,{useState} from "react"
import "./style.css"

function App() {

const [minVal ,setMinval] =useState(0);
const [maxVal ,setMaxval] =useState(0);
const [randomNum ,setgiverandomNum] =useState(5);
const giverandomnum=()=> {
setgiverandomNum(Math.floor(Math.random()*(maxVal-minVal + 1)+minVal))
}

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
        <p> RandomNumber:<span>{randomNum}</span></p></div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input
            type="number"
              value={minVal}
              onChange={e => setMinval(+e.target.value)}
            />
          </div> 
          <div>
            <p>Max:</p>
            <input
            type="number"
              value={maxVal}
              onChange={e => setMaxval(+e.target.value)}
            />
          </div>
        </div>
        <button onClick={giverandomnum} >RASTGELE SAYI BUTONU</button>
      </div>
    </div>
  );
}

export default App;
