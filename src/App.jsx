import { useState } from 'react'
import './App.css'

function App() {
  const [first, setFirst] = useState("");
  const [secound, setSecound] = useState("");
  const [sign, setSign] = useState("");
  const [equal, setEqual] = useState("");

  function handleEqual() {
    switch (sign) {
      case "":
        setEqual("Chose Operation");
        setSign("(no operation selected)");
        break;
      case "+":
        setEqual(`= ${Number(first) + Number(secound)}`);
        break;
      case "-":
        setEqual(`= ${Number(first) - Number(secound)}`);
        break;
      case "*":
        setEqual(`= ${Number(first) * Number(secound)}`);
      case "/":
        if (Number(secound) == 0) {
          setEqual("Can't devide by 0")
        } else {
          setEqual(`= ${Number(first) / Number(secound)}`);
        }
        break;
      case "^":
        setEqual(`= ${Math.pow(Number(first), 2)}  ${Math.pow(Number(secound), 2)}`);
        break;
      default:
        setEqual("Chose Operation");
        setSign("(no operation selected)");
        break;
    }
  }

  function handleNumberInput(value) {
    if (sign == "") {
      setFirst(first + value)
    }
    else {
      setSecound(secound + value)
    }
  }

  function clearData() {
    setFirst("");
    setSecound("");
    setEqual("");
    setSign("")
  }

  return (
    <>
      <div className='container'>
        <div className='calcu'>
          <h2 className='header'>React Calculator</h2>
          {/*<input type="number" value={first} onChange={(e) => {setFirst(e.target.value)}} /> <br />
          <input type="number" value={secound} onChange={(e) => {setSecound(e.target.value)}} /> <br />
          <input type="text" value={equal} disabled={true} />*/}
          <p className='display'>
            {first} {sign} {secound} {equal}
          </p>
          <div className='inputs'>
            <button onClick={clearData}>C</button>{/*CLEAR*/}
            <button onClick={() => { setSign("+") }}>+</button>{/*ADDITION*/}
            <button onClick={() => { setSign("-") }}>-</button>{/*SUBTRACTION*/}
          </div>
          <div className='inputs'>
            <button onClick={() => { setSign("x") }}>x</button>{/*MULTIPLICATION*/}
            <button onClick={() => { setSign("/") }}>÷</button>{/*DEVIDE*/}
            <button onClick={() => { setSign("^") }}>x²</button>{/*SQUARE*/}
          </div>
          <div className='inputs'>
            <button onClick={() => handleNumberInput(7)}>7</button>
            <button onClick={() => handleNumberInput(8)}>8</button>
            <button onClick={() => handleNumberInput(9)}>9</button>
          </div>
          <div className='inputs'>
            <button onClick={() => handleNumberInput(4)}>4</button>
            <button onClick={() => handleNumberInput(5)}>5</button>
            <button onClick={() => handleNumberInput(6)}>6</button>
          </div>
          <div className='inputs'>
            <button onClick={() => handleNumberInput(3)}>3</button>
            <button onClick={() => handleNumberInput(2)}>2</button>
            <button onClick={() => handleNumberInput(1)}>1</button>
          </div>
          <div className='inputs'>
            <button onClick={() => handleNumberInput(".")}>.</button>
            <button onClick={() => handleNumberInput(0)}>0</button>
            <button onClick={handleEqual} className='equal' >=</button>{/*EQUAL*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
