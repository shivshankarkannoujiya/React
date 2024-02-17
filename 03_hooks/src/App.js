import React,{useState} from "react";
import './App.css'


const App = () => {

    // !function
    // const addValue = () =>{
    //     console.log('clicked',counter);
    //     counter = counter+1;
    // }
    
    // !normal var : changes not reflected on UI : sol -> use Hooks : useState
    // let counter = 5;

    // !useState
    // Responsible to change the state : [does not mean update value]
    // change to propagate kiya jata hai inside : UI/DOM

    const [counter,setCounter] = useState(5);

    const addValue = () =>{
        if(counter<20){
            setCounter(counter+1)
        }
        console.log('clicked',counter);
    }

    const removeValue = () =>{
        if(counter>0){
            setCounter(counter-1);
        }
        console.log('clicked',counter);
    }

    return(
        <>
        <div>
        <h1>Creating Counter App</h1>
            <h2>Counter value : {counter}</h2>
            <button
            onClick={addValue}
            >Add value : {counter}</button>
            <button
            onClick={removeValue}
            >Remove value :{counter}</button>
            <p>Footer : {counter}</p>
        </div>
            
        </>
    )
}

export default App