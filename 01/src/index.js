import React from 'react';
import ReactDOM from 'react-dom/client';
import { JSX as _jsx } from 'react/jsx-runtime.js';
import App from './App';



// !nhi chalega due to syntax
// const ReactElement = {

//   type : 'a',

//   props : {
//       href : 'https://www.google.com',
//       target : '_blank'
//   },

//   children : 'Click me to visit google'
// }

// !This will run 

const anotherUser = "Steve"
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target : '_blank'
  },
  'Click me to visit google',
  anotherUser
)



// const anotherElement = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* App() */}
    {/* reactElement */}
    reactElement 
  </React.StrictMode>
);

