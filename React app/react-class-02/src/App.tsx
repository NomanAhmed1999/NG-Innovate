import { useState } from "react";

const App = () => {

const [numbers, setNumbers] = useState(0);
const [name, setNmae] = useState('Noman');
const [greet, setGreet] = useState('Heelo');

  const increaseOne = () => {
    setNumbers(numbers+1)
  }

  const decreaseOne = () => {
    setNumbers(numbers-1)
  }


  const chaneGreet = () => {
    setGreet('Assalam U Alaikum');
  }



  return (
    <div>
      <h1>{greet} {name} {numbers}</h1>
      <button onClick={increaseOne}>Increment</button>
      <button onClick={decreaseOne}>Decrement</button>
      <button onClick={chaneGreet}>Change Greet</button>
    </div>
  )
}

export default App;