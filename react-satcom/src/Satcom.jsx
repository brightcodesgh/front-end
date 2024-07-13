import { useState } from "react";

const orgName = "Satcom";
// const welcomeMessage = "Welcome to Satcom";
// const motto = "Sate of Satellite Demonstration";


function Satcom(){
    const [counter, setCounter] = useState(0);

    const addValue = () =>{
        //batching
        setCounter((count) => count +1);
        setCounter((count) => count +1);
        setCounter((count) => count +1);
        setCounter((count) => count +1);
    };


    const removeValue =() =>{
        counter <= 0? setCounter(counter): setCounter(counter-1)
    }

    const resetCount = () =>{
        setCounter(0)
    }
   
    return(
        <>
          <h1>{orgName}</h1>
          <button onClick={addValue}>Add Value </button>
          <button onClick={removeValue}>Remove Value </button>
          <button onClick={resetCount}>Reset </button>
          <footer>Message: {counter}</footer>
          
          
        </>
    );

}

export default Satcom