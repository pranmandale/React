import { useState } from 'react'

import './App.css'

function App() {
  // let counter = 10;
  // here two things are declared 
  // first one is the variable which we want to change
  // second one is method in which inside this method we can make changes
  const [counter,setCounter] = useState(0)


 const Addvalue = () => {
  // counter = counter +  1;
  // console.log(counter);
  setCounter(counter + 1);
 }
 const Removevalue = () => {
    setCounter(counter - 1);
 }


  return (
    <>
    <h1>first project</h1>
     <h2>counter value : {counter}</h2>
     <button
     onClick={Addvalue}
     >add value</button>{" "}
     <button
     onClick={Removevalue}
     >Remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
