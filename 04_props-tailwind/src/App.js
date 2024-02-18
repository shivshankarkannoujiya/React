import React from "react";
import Card from "./components/Card";


const App = () => {

    // let myObj = {
    //     name:"Steve",
    //     age:23,
    // }

    // let newArr = [1,2,3,4];

    return(
        <>
            <h1 className='bg-green-400 text-black p-4 mb-5'>Tailwind Test</h1>
            <Card username="Chaiaurcode" btnText = "Click Me"/>
            <Card username="steve" btnText="Visit Me"/>
            

        </>
    )
}
export default App