import { useState } from 'react'
import './App.css'

function App() {
  const [first, setFirst] = useState("");
  const [operation, setOperation] = useState(0)
  const [secound, setSecound] = useState("");
  const [equal, setEqual] = useState("");
  const [isSec, setIsSec] = useState(false);

  function handleEqual() {
    if(operation == 0){
      setEqual("Chose Operation");
    }
    if(operation == 1){
      setEqual(Number(first) + Number(secound));
    }
    if(operation == 2){
      setEqual(Number(first) - Number(secound));
    }
    if(operation == 3){
      setEqual(Number(first) * Number(secound));
    }
    if(operation == 4){
      setEqual(Number(first) / Number(secound));
    }
    if(operation == 5){
      setEqual(`${Math.pow(Number(first), 2)}  ${Math.pow(Number(secound), 2)}`);
    }
  }


  return (
    <>
      <div className='container'>
        <div className='calcu'>
          <input type="number" value={first} onChange={(e) => {setFirst(e.target.value)}} /> <br />
          <input type="number" value={secound} onChange={(e) => {setSecound(e.target.value)}} /> <br />
          <input type="text" value={equal} disabled={true} />
          <div className='inputs'>
            <button onClick={() => {setFirst(""); setSecound(""); setEqual(""); setIsSec(false)}}>C</button>{/*CLEAR*/}
            <button onClick={() => {setOperation(1); setIsSec(true)}}>+</button>{/*ADDITION*/}
            <button onClick={() => {setOperation(2); setIsSec(true)}}>-</button>{/*SUBTRACTION*/}
          </div>
          <div className='inputs'>
            <button onClick={() => {setOperation(3); setIsSec(true)}}>x</button>{/*MULTIPLICATION*/}
            <button onClick={() => {setOperation(4); setIsSec(true)}}>÷</button>{/*DEVIDE*/}
            <button onClick={() => {setOperation(5); setIsSec(true)}}>x²</button>{/*SQUARE*/}
          </div>
          <div className='inputs'>
            <button onClick={() => {if(isSec == false){setFirst(first + 7)}else{setSecound(secound + 7)}}}>7</button>
            <button onClick={() => {if(isSec == false){setFirst(first + 8)}else{setSecound(secound + 8)}}}>8</button>
            <button onClick={() => {if(isSec == false){setFirst(first + 9)}else{setSecound(secound + 9)}}}>9</button>
          </div>
          <div className='inputs'>
            <button onClick={() => {if(isSec == false){setFirst(first + 4)}else{setSecound(secound + 4)}}}>4</button>
            <button onClick={() => {if(isSec == false){setFirst(first + 5)}else{setSecound(secound + 5)}}}>5</button>
            <button onClick={() => {if(isSec == false){setFirst(first + 6)}else{setSecound(secound + 6)}}}>6</button>
          </div>
          <div className='inputs'>
            <button onClick={() => {if(isSec == false){setFirst(first + 3)}else{setSecound(secound + 3)}}}>3</button>
            <button onClick={() => {if(isSec == false){setFirst(first + 2)}else{setSecound(secound + 2)}}}>2</button>
            <button onClick={() => {if(isSec == false){setFirst(first + 1)}else{setSecound(secound + 1)}}}>1</button>
          </div>
          <div className='inputs'>
            <button>.</button>
            <button onClick={() => {if(isSec == false){setFirst(first + 0)}else{setSecound(secound + 0)}}}>0</button>
            <button onClick={handleEqual}>=</button>{/*EQUAL*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
