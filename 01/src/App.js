import React from 'react'


function App() {

  const username = "Abhishek"
  /*
   * {username} : evaluated expression [final-Outcomes]
   * We can not pass whole js, Ex: {if(true) username}
   */

  return (
      <h1>hello ji {username}</h1>
  );
}

export default App;
