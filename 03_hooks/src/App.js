import React,{useState} from "react";


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
        setCounter(counter+1)
        console.log('clicked',counter);
    }

    const removeValue = () =>{
        setCounter(counter-1);
        console.log('clicked',counter);
    }

    return(
        <>
            <h1>Creating Counter App</h1>
            <h2>Counter value : {counter}</h2>
            <button
            onClick={addValue}
            >Add value : {counter}</button> <br/><br/>
            <button
            onClick={removeValue}
            >Remove value :{counter}</button>
            <p>Footer : {counter}</p>
        </>
    )
}

export default App